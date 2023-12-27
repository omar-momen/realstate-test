<template>
  <div class="login">
    <v-form ref="form" class="auth" @submit.prevent="login">
      <header class="header">
        <h3 class="h_3 big text-center mb-1">{{ $t("auth.login.title") }}</h3>
        <p class="para md text-center mx-auto mb-5">
          {{ $t("auth.login.text") }}
        </p>
      </header>

      <main class="inputs">
        <base-input
          type="number"
          v-model="data.user_identifier"
          :label="$t('labels.national_id_or_phone')"
          required
        ></base-input>

        <base-input
          type="password"
          v-model="data.password"
          :label="$t('labels.password')"
          required
        ></base-input>
      </main>

      <footer class="footer">
        <div class="d-flex align-center">
          <div class="rememberMe me-auto">
            <v-checkbox
              v-model="data.rememberMe"
              :label="$t('auth.remember_me')"
              color="primary"
              hide-details
            ></v-checkbox>
          </div>

          <div class="forgetPassword">
            <router-link to="/authentication/forget-password">
              {{ $t("auth.forget_password") }}</router-link
            >
          </div>
        </div>
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled filled"
          >{{ $t("form.login") }}</base-button
        >
        <p>
          {{ $t("auth.login.footer") }}
          <router-link class="colored" to="/authentication/signup">{{
            $t("form.signup")
          }}</router-link>
        </p>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
useHead({
  title: useNuxtApp().$i18n.t("pages.login.title"),
});
definePageMeta({
  layout: "auth",
});
import { useAuthStore } from "@/stores/auth";

const loading = ref(false);
const data = ref({
  user_identifier: null,
  password: null,
  // rememberMe: false,
});

const form = ref(null);
const login = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await useAuthStore().logIn(data.value)) {
    await navigateTo("/");
    setTimeout(() => {
      useGlobalStore().init_tooltip();
    }, 1000);
  }
  loading.value = false;
};
</script>
