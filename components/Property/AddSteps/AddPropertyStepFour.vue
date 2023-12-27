<template>
  <div class="stepThree">
    <v-form ref="form" class="property" @submit.prevent="next">
      <main class="inputs">
        <v-row>
          <v-col cols="12" sm="6">
            <base-input
              type="number"
              v-model="data.selling_price"
              :label="$t('labels.selling_price')"
              required
              up_mode
            ></base-input>
          </v-col>
          <v-col cols="12" sm="6">
            <h5 class="h_5">{{ $t("labels.is_negotiable") }}</h5>
            <v-checkbox
              v-model="data.is_negotiable"
              :label="$t('labels.is_negotiable')"
              :value="0"
              :false-value="0"
              color="primary"
              density="compact"
              required
              up_mode
            ></v-checkbox>
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
  selling_price: null,
  is_negotiable: 1,
});

const form = ref(null);
const next = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await usePropertyStore().addStep(data, 4, current_property_id)) {
    emit("nextStep");
  }
  loading.value = false;
};

const previous = () => {
  emit("previousStep");
};
</script>

<style lang="sass" scoped></style>
