<template>
  <div class="forget_password">
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <header class="header">
        <h3 class="h_3 mb-3 text-center">
          {{ $t("auth.forgetPassword.title") }}
        </h3>
      </header>

      <main class="inputs">
        <v-col cols="12">
          <base-input
            type="number"
            v-model="data.phone"
            :label="$t('labels.phone')"
            :hint="$t('hints.phone')"
            :rules="[useInputRules().phone]"
            required
          ></base-input>
        </v-col>
      </main>

      <footer class="footer">
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled"
          >{{ $t("form.send") }}</base-button
        >
        <p>
          {{ $t("auth.forgetPassword.footer") }}
          <router-link class="colored" to="/authentication/login">{{
            $t("form.login")
          }}</router-link>
        </p>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
useHead({
  title: useNuxtApp().$i18n.t("pages.forget_password.title"),
});
definePageMeta({
  layout: "auth",
});

const loading = ref(false);
const data = ref({
  phone: null,
});

import { useAuthStore } from "@/stores/auth";
const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await useAuthStore().verifyPhoneNumber(data.value.phone, true)) {
    navigateTo("/authentication/confirm");
  }
  loading.value = false;
};
</script>
