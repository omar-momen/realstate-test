<template>
  <div class="stepThree">
    <v-form ref="form" class="property" @submit.prevent="next">
      <main class="inputs">
        <v-row>
          <v-col cols="12" md="6">
            <select-input
              v-model="data.property_usage"
              getUrl="member/lookups/property/usages"
              :label="$t('labels.property_usage')"
              required
              up_mode
            />
          </v-col>
          <v-col cols="12" md="6">
            <select-input
              v-model="data.property_type"
              :getUrl="`member/lookups/property/types?usage_id=${data.property_usage?.id}`"
              :_sync="data.property_usage"
              :label="$t('labels.property_type')"
              required
              up_mode
            />
          </v-col>

          <!-- Descreptions -->
          <v-col cols="12" md="12">
            <DescreptionsInputs :property_type_id="data.property_type?.id" />
          </v-col>

          <h5 class="h_5">{{ $t("labels.amenities") }}</h5>
          <v-col cols="12" class="mb-10">
            <v-row dense>
              <v-col cols="12" md="4" v-for="feature in features">
                <v-checkbox
                  density="compact"
                  v-model="data.features_ids"
                  :key="feature.id"
                  :label="feature.name"
                  :value="feature.id"
                  color="primary"
                  hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-col>

          <h5 class="h_5">{{ $t("labels.utilities") }}</h5>
          <v-col cols="12" class="mb-10">
            <v-row dense>
              <v-col cols="12" md="4" v-for="utility in utilities">
                <v-checkbox
                  density="compact"
                  v-model="data.utilities_ids"
                  :key="utility.id"
                  :label="utility.name"
                  :value="utility.id"
                  color="primary"
                  hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
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

const features = await useLookupsStore().getFeatures();
const utilities = await useLookupsStore().getUtilities();

const loading = ref(false);
const data = ref({
  property_usage: null,
  property_type: null,
  property_descriptions: [],
  features_ids: [],
  utilities_ids: [],
});

const form = ref(null);
const next = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await usePropertyStore().addStep(data, 3, current_property_id)) {
    emit("nextStep");
  }
  loading.value = false;
};

const previous = () => {
  emit("previousStep");
};
</script>

<style lang="sass" scoped></style>
