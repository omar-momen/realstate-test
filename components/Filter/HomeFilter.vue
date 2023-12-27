<template>
  <div class="filter_comp">
    <v-form @submit.prevent="filter_data">
      <ul>
        <li
          :class="{ active: current_top_filter === 'buy' }"
          @click="current_top_filter = 'buy'"
        >
          <span>{{ $t("filter.header.buy") }}</span>
        </li>
        <li
          :class="{ active: current_top_filter === 'rent' }"
          @click="current_top_filter = 'rent'"
        >
          <span>{{ $t("filter.header.rent") }}</span>
        </li>
        <li
          :class="{ active: current_top_filter === 'sold' }"
          @click="current_top_filter = 'sold'"
        >
          <span>{{ $t("filter.header.sold") }}</span>
        </li>
      </ul>

      <section class="d-flex align-center">
        <BaseInput
          class="flex-grow-1"
          type="text"
          prepend-inner-icon="mdi-map-marker"
          :label="$t('filter.label')"
          hide-details
          v-model="filter.address"
        />

        <div class="d-flex justify-space-between">
          <div class="advance_filter v-step-2" @click="filterPop = true">
            <span>{{ $t("filter.advanced") }}</span>
            <span class="icon"><Icon name="lets-icons:filter-big" /></span>
          </div>

          <base-button
            type="submit"
            class="animate_primary_filled filled circle"
          >
            <span><Icon name="mdi:magnify" /></span>
          </base-button>
        </div>
      </section>
    </v-form>
  </div>

  <BaseModel
    :title="$t('header.filter.title')"
    :show="filterPop"
    @close="filterPop = false"
    class="filter_modal"
  >
    <v-form class="text-start" @submit.prevent="filter_data">
      <div class="input_wrapper px-5">
        <v-row>
          <v-col cols="12">
            <v-range-slider
              v-model="filter.price_range"
              :min="50000"
              :max="10000000"
              :step="1000"
              hide-details
              thumb-label="always"
              :label="$t('labels.price_range')"
              color="primary"
              prepend-icon="mdi-cash"
              class="my-5"
            ></v-range-slider>
          </v-col>

          <v-col cols="12" md="6">
            <SelectInput
              :label="$t('labels.type')"
              :get-url="`/property/type`"
              v-model="filter.type_id"
              :return-object="false"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="6">
            <base-input
              :label="$t('labels.property_id')"
              v-model="filter.property_id"
              type="number"
              hide-details
            />
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="12" lg="6">
                <CustomeRadios
                  :label="$t('labels.bedrooms')"
                  :items="bedrooms"
                  v-model="filter.bedrooms"
                />
              </v-col>
              <v-col cols="12" lg="6">
                <CustomeRadios
                  :label="$t('labels.bathrooms')"
                  :items="bathrooms"
                  v-model="filter.bathrooms"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col class="my-5" cols="12" md="6">
            <h5 class="h_5">{{ $t("labels.location") }}</h5>
            <SelectInput
              :get-url="`/property/locations`"
              v-model="filter.location_id"
              :return-object="false"
              hide-details
            />
          </v-col>
          <v-col class="my-5" cols="12" md="6">
            <h5 class="h_5">{{ $t("labels.square_feet") }}</h5>
            <v-row>
              <v-col cols="6">
                <base-input
                  type="number"
                  :label="$t('labels.min')"
                  v-model="filter.min"
                  hide-details
                />
              </v-col>

              <v-col cols="6">
                <base-input
                  type="number"
                  :label="$t('labels.max')"
                  v-model="filter.max"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-col>

          <!-- Amenities -->
          <h5 class="h_5">{{ $t("labels.amenities") }}</h5>
          <v-col cols="12" class="mb-10">
            <v-row>
              <v-col class="pa-0" cols="12" md="4" v-for="amenity in amenities">
                <v-checkbox
                  density="compact"
                  v-model="filter.amenities_ids"
                  :key="amenity.id"
                  :label="amenity.name"
                  :value="amenity.id"
                  color="primary"
                  hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>

      <footer class="filter_footer pt-5 pb-2 px-5 d-flex justify-space-between">
        <base-button
          class="animate_primary_filled filled with_icon"
          type="submit"
          :loading="loading"
        >
          <span>{{ $t("form.search") }} <Icon name="mdi:magnify" /></span>
        </base-button>

        <button
          type="button"
          class="text-subtitle-2 underline"
          @click="reset_filter"
        >
          {{ $t("form.reset_filter") }}
        </button>
      </footer>
    </v-form>
  </BaseModel>
</template>

<script setup>
const current_top_filter = ref("buy");

const filter = reactive({
  address: null,
  price_range: [2000000, 5000000],
  type_id: "",
  property_id: "",
  bedrooms: "any",
  bathrooms: "any",
  location_id: "",
  min: "",
  max: "",
  amenities_ids: [],
});

const filterPop = ref(false);
const filter_data = () => {
  navigateTo({
    path: "/properties",
    query: {
      ...filter,
      current_top_filter: current_top_filter.value,
      price_range: filter.price_range.join(","),
      amenities_ids: filter.amenities_ids.join(","),
    },
  });
};
const reset_filter = () => {
  filter.price_range = [2000000, 5000000];
  filter.type = "";
  filter.property_id = "";
  filter.bedrooms = "any";
  filter.bathrooms = "any";
  filter.location = "";
  filter.min = "";
  filter.max = "";
  filter.amenities_ids = [];
};

const bedrooms = [
  {
    name: "any",
    value: "any",
  },
  {
    name: "+2",
    value: "2",
  },
  {
    name: "+3",
    value: "3",
  },
  {
    name: "+4",
    value: "4",
  },
  {
    name: "+5",
    value: "5",
  },
];
const bathrooms = [
  {
    name: "any",
    value: "any",
  },
  {
    name: "+2",
    value: "2",
  },
  {
    name: "+3",
    value: "3",
  },
  {
    name: "+4",
    value: "4",
  },
  {
    name: "+5",
    value: "5",
  },
];
const amenities = [
  {
    id: 1,
    name: "Air Conditioning",
  },
  {
    id: 2,
    name: "Balcony",
  },
  {
    id: 3,
    name: "Cable TV",
  },
  {
    id: 4,
    name: "Dishwasher",
  },
  {
    id: 5,
    name: "Doorman",
  },
  {
    id: 6,
    name: "Elevator",
  },
  {
    id: 7,
    name: "Fireplace",
  },
  {
    id: 8,
    name: "Furnished",
  },
  {
    id: 9,
    name: "Gym",
  },
  {
    id: 10,
    name: "Laundry",
  },
  {
    id: 11,
    name: "Parking",
  },
  {
    id: 12,
    name: "Pool",
  },
  {
    id: 13,
    name: "Smoking allowed",
  },
  {
    id: 14,
    name: "Storage",
  },
  {
    id: 15,
    name: "Wheelchair accessible",
  },
];
</script>

<style lang="scss">
.filter_comp {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  ul {
    display: flex;
    background: var(--main_bg);
    border-bottom: 1px solid var(--border);
    border-radius: 15px 15px 0 0;
    width: fit-content;
    padding-inline: 10px;

    li {
      padding: 17px;
      color: #717171;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;

      &.active {
        color: #000;
      }
    }
  }

  section {
    flex-wrap: wrap;
    background: var(--main_bg);
    padding: 20px;
    border-radius: 15px 0 15px 15px;

    .advance_filter {
      display: flex;
      align-items: center;
      margin-inline: 15px;
      cursor: pointer;

      span {
        font-size: 15px;
        font-weight: 500;
        margin-inline-end: 3px;
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;

      .custom_input {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}

.filter_modal {
  footer.filter_footer {
    border-top: 1px solid var(--border);
  }
}

body.ltr {
  .filter_comp {
    section {
      border-radius: 0 15px 15px 15px !important;
    }
  }
}
</style>
