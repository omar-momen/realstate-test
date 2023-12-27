<template>
  <div class="confirm">
    <v-form ref="form" class="auth" @submit.prevent>
      <header class="header">
        <h2 class="h_2 mb-1 big text-center">
          {{ $t("auth.confirm.title") }}
        </h2>
        <p class="para sm text-center mx-auto mb-5">
          {{ $t("auth.confirm.text") + ` (${phone})` }}
        </p>
      </header>

      <main class="inputs">
        <v-otp-input
          v-focus
          v-model="data.code"
          :length="4"
          placeholder="*"
          @finish="onFinish"
          :loading="OTPLoading"
        ></v-otp-input>
      </main>

      <footer class="footer">
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled"
          >{{ $t("form.send") }}</base-button
        >
        <p class="d-flex justify-center">
          {{ $t("auth.confirm.footer") }}
          <button
            :class="{ disabled: !is_count_finished }"
            @click="reSend"
            class="colored d-flex ms-2"
          >
            <span>{{ $t("form.resend") }}</span>
            <count-down
              v-if="start_resend"
              loob
              @countFinished="countFinished"
            ></count-down>
          </button>
        </p>
      </footer>
    </v-form>

    <v-snackbar v-model="OTPsnackbar" :color="OTPsnackbarColor" :timeout="1000">
      {{ OTPMessage }}
    </v-snackbar>
  </div>
</template>

<script setup>
useHead({
  title: useNuxtApp().$i18n.t("pages.confirm.title"),
});

definePageMeta({
  layout: "auth",
  // middleware to redirect to home if the phone is null
  middleware: [
    function (to, from) {
      if (
        from.fullPath == "/authentication/confirm" ||
        !useAuthStore().verify_phone_value
      ) {
        return navigateTo("/authentication/login");
      }
    },
  ],
});

import { useAuthStore } from "@/stores/auth";
const phone = useAuthStore().verify_phone_value;

const is_count_finished = ref(true);
const start_resend = ref(false);
const countFinished = () => {
  is_count_finished.value = true;
  start_resend.value = false;
};
const reSend = async () => {
  if (await useAuthStore().verifyPhoneNumber(phone, true, true)) {
    start_resend.value = true;
    is_count_finished.value = false;
  }
};

const data = ref({
  code: "",
});

const loading = ref(false);
const OTPLoading = ref(false);

const onFinish = async () => {
  loading.value = true;
  OTPLoading.value = true;

  if (await useAuthStore().confirmPhoneNumber(data.value.code, true)) {
    navigateTo("/authentication/reset-password");
  }
  loading.value = false;
  OTPLoading.value = false;
};
</script>
