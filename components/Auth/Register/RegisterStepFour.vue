<template>
  <div class="confirm">
    <v-form ref="form" class="auth" @submit.prevent>
      <header class="header mb-0">
        <h4 class="h_4 mb-1 big text-center">
          {{ $t("auth.confirm.title") }}
        </h4>
        <p class="para sm text-center mx-auto mb-5">
          {{ $t("auth.confirm.text") + ` (${phone})` }}
        </p>
      </header>

      <main class="inputs">
        <v-otp-input
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
        <p>
          {{ $t("auth.confirm.footer") }}
          <button class="colored">{{ $t("form.resend") }}</button>
        </p>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
const emit = defineEmits(["nextStep"]);

import { useAuthStore } from "@/stores/auth";
const phone = useAuthStore().verify_phone_value;

const data = ref({
  code: "",
});

const loading = ref(false);
const OTPLoading = ref(false);

const onFinish = async () => {
  loading.value = true;
  OTPLoading.value = true;

  if (await useAuthStore().confirmPhoneNumber(data.value.code)) {
    emit("nextStep");
  }

  loading.value = false;
  OTPLoading.value = false;
};
</script>
