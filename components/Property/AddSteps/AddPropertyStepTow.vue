<template>
  <div class="stepTow">
    <v-form ref="form" class="property" @submit.prevent="next">
      <main class="inputs">
        <v-row>
          <!-- Address -->
          <v-col cols="12" md="4">
            <select-input
              v-model="data.region"
              getUrl="member/lookups/regions"
              :label="$t('labels.region')"
              required
              up_mode
            />
          </v-col>
          <v-col cols="12" md="4">
            <select-input
              v-model="data.city"
              :getUrl="`member/lookups/cities?region_id=${data.region?.id}`"
              :_sync="data.region"
              :label="$t('labels.city')"
              required
              up_mode
            />
          </v-col>
          <v-col cols="12" md="4">
            <select-input
              v-model="data.district"
              :getUrl="`member/lookups/districts?city_id=${data.city?.id}`"
              :_sync="data.city"
              :label="$t('labels.district')"
              required
              up_mode
            />
          </v-col>

          <v-col cols="12">
            <GoogleMap
              height=""
              @updateLocation="updateLocation"
              :location="data.location"
            />
          </v-col>
        </v-row>
      </main>

      <footer class="footer">
        <div class="d-flex justify-space-between">
          <base-button
            :loading="loading"
            type="submit"
            class="lg animate_dark_filled filled"
            >{{ $t("form.next") }}</base-button
          >

          <base-button
            @click.prevent="previous"
            type="button"
            class="lg animate_dark filled"
            >{{ $t("form.previous") }}</base-button
          >
        </div>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
const emit = defineEmits(["nextStep", "previousStep"]);

import { usePropertyStore } from "@/stores/property";
const { current_property_id } = usePropertyStore();

const loading = ref(false);
const data = ref({
  region: null,
  city: null,
  district: null,

  location: ref({ lat: "", lng: "", address: "" }),
});

const updateLocation = (new_location) => {
  data.value.location.value = new_location;
};

const form = ref(null);
const next = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await usePropertyStore().addStep(data, 2, current_property_id)) {
    emit("nextStep");
  }
  loading.value = false;
};

const previous = () => {
  emit("previousStep");
};
</script>

<style lang="sass" scoped></style>
