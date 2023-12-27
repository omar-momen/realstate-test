<template>
  <div class="stepOne">
    <v-form ref="form" class="property" @submit.prevent="next">
      <main class="inputs">
        <v-row>
          <!-- Ownership -->
          <v-col cols="12" sm="6">
            <RadioInput
              v-model="data.ownership"
              :label="$t('labels.is_owner')"
              :items="OwnerOrAgency"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <base-input
              v-if="data.ownership == 'agency'"
              type="number"
              v-model="data.agency_number"
              :label="$t('labels.agency_number')"
              required
              up_mode
            ></base-input>
          </v-col>

          <!-- License -->
          <v-col cols="12" sm="6">
            <RadioInput
              v-model="data.has_license"
              :label="$t('labels.has_license')"
              :items="yesOrNo"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <base-input
              v-if="data.has_license == 1"
              type="number"
              v-model="data.license_number"
              :label="$t('labels.license_number')"
              required
              up_mode
            ></base-input>
          </v-col>

          <v-col cols="12" md="6">
            <select-input
              v-model="data.advertisement_type"
              getUrl="member/lookups/advertisement-types"
              :label="$t('labels.advertisement_type')"
              required
              up_mode
            />
          </v-col>
        </v-row>
      </main>

      <footer class="footer">
        <base-button
          :loading="loading"
          type="submit"
          class="lg animate_dark_filled filled"
          >{{ $t("form.next") }}</base-button
        >
      </footer>
    </v-form>
  </div>
</template>

<script setup>
const emit = defineEmits(["nextStep"]);

import { usePropertyStore } from "@/stores/property";

const loading = ref(false);
const data = ref({
  has_license: "1",
  license_number: null,

  ownership: "owner",
  agency_number: null,

  advertisement_type: null,
});

const yesOrNo = [
  { id: 1, name: useNuxtApp().$i18n.t("labels.yes"), value: "1" },
  { id: 2, name: useNuxtApp().$i18n.t("labels.no"), value: "0" },
];

const OwnerOrAgency = [
  { id: 1, name: useNuxtApp().$i18n.t("labels.owner"), value: "owner" },
  { id: 2, name: useNuxtApp().$i18n.t("labels.agency"), value: "agency" },
];

const form = ref(null);
const next = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;

  if (await usePropertyStore().addStep(data, 1)) {
    emit("nextStep");
  }
  loading.value = false;
};
</script>

<style lang="sass" scoped></style>
