<template>
  <div class="addProperty">
    <header class="header txt mb-10">
      <h2 class="h_2 mb-0">{{ $t("dash.properties.add.header.title") }}</h2>
      <p class="para">{{ $t("dash.properties.add.header.para") }}</p>
    </header>

    <v-stepper
      alt-labels
      v-model="step"
      color="primary"
      :mobile="useHelpers().isSmallScreen() || useHelpers().screen() == 'md'"
    >
      <v-stepper-header class="mb-16" color="primary">
        <v-stepper-item
          :title="$t('dash.properties.steps.step1.title')"
          color="primary"
          :value="1"
          :complete="+step > 1"
        >
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="$t('dash.properties.steps.step2.title')"
          color="primary"
          :value="2"
          :complete="+step > 2"
        >
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="$t('dash.properties.steps.step3.title')"
          color="primary"
          :value="3"
          :complete="+step > 3"
        >
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="$t('dash.properties.steps.step4.title')"
          color="primary"
          :value="4"
          :complete="+step > 4"
        >
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="$t('dash.properties.steps.step5.title')"
          color="primary"
          :value="5"
        >
        </v-stepper-item>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item :key="`${1}-content`" :value="1">
          <AddPropertyStepOne @nextStep="step++" />
        </v-stepper-window-item>

        <v-stepper-window-item :key="`${2}-content`" :value="2">
          <AddPropertyStepTow @nextStep="step++" @previousStep="step--" />
        </v-stepper-window-item>

        <v-stepper-window-item :key="`${3}-content`" :value="3">
          <AddPropertyStepThree @nextStep="step++" @previousStep="step--" />
        </v-stepper-window-item>

        <v-stepper-window-item :key="`${4}-content`" :value="4">
          <AddPropertyStepFour @nextStep="step++" @previousStep="step--" />
        </v-stepper-window-item>

        <v-stepper-window-item :key="`${5}-content`" :value="5">
          <AddPropertyStepFive @previousStep="step--" />
        </v-stepper-window-item>
      </v-stepper-window>
    </v-stepper>
  </div>
</template>

<script setup>
useHead({
  title: useNuxtApp().$i18n.t("dash.properties.add.title"),
});
definePageMeta({
  layout: "dash",
});

const step = ref(1);
</script>

<style scoped lang="scss">
.addProperty {
  .header {
    padding: 20px;
    background-color: var(--secondary_2);

    & > * {
      color: #fff !important;
    }
  }
}
</style>
