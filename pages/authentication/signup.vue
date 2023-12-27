<template>
  <div class="signup">
    <v-form ref="form" class="auth">
      <header class="header">
        <h3 class="h_4 mb-1 text-center">{{ $t("auth.register.title") }}</h3>
      </header>

      <main>
        <v-stepper
          alt-labels
          v-model="step"
          color="primary"
          :mobile="
            useHelpers().isSmallScreen() || useHelpers().screen() == 'md'
          "
        >
          <v-stepper-header color="primary">
            <v-stepper-item
              color="primary"
              :title="$t('auth.register.steps.step2.title')"
              value="1"
              :complete="+step > 1"
            >
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              :title="$t('auth.register.steps.step1.title')"
              color="primary"
              value="2"
              :complete="+step > 2"
            >
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              :title="$t('auth.register.steps.step3.title')"
              color="primary"
              value="3"
              :complete="+step > 3"
            >
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              :title="$t('auth.register.steps.step4.title')"
              color="primary"
              value="4"
              :complete="+step > 4"
            >
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              :title="$t('auth.register.steps.step5.title')"
              color="primary"
              value="5"
            >
            </v-stepper-item>
          </v-stepper-header>

          <v-stepper-window>
            <v-stepper-window-item :key="`${1}-content`" value="1">
              <RegisterStepOne @nextStep="step = '2'" />
            </v-stepper-window-item>

            <v-stepper-window-item :key="`${2}-content`" value="2">
              <RegisterStepTow @nextStep="step = '3'" />
            </v-stepper-window-item>

            <v-stepper-window-item :key="`${3}-content`" value="3">
              <RegisterStepThree @nextStep="step = '4'" />
            </v-stepper-window-item>

            <v-stepper-window-item :key="`${4}-content`" value="4">
              <RegisterStepFour @nextStep="step = '5'" />
            </v-stepper-window-item>

            <v-stepper-window-item :key="`${5}-content`" value="5">
              <RegisterStepFive />
            </v-stepper-window-item>
          </v-stepper-window>
        </v-stepper>
      </main>
    </v-form>
  </div>
</template>

<script setup>
useHead({
  title: useNuxtApp().$i18n.t("pages.register.title"),
});
definePageMeta({
  layout: "auth",
});

const step = ref("1");
</script>

<style lang="scss" scoped>
.signup {
  width: 50vw;

  @media (max-width: 992px) {
    width: unset;
  }
}
</style>
