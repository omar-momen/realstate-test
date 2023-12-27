<template>
  <div class="confirm">
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <header class="header">
        <h3 class="h_3 mb-1 big text-center">
          {{ $t("auth.resetPassword.title") }}
        </h3>
        <p class="para md text-center mx-auto mb-5">
          {{ $t("auth.resetPassword.text") }}
        </p>
      </header>

      <main class="inputs">
        <confirm-password v-model="passwords" />
      </main>

      <footer class="footer">
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled"
          >{{ $t("form.send") }}</base-button
        >
      </footer>
    </v-form>
  </div>
</template>

<script setup>
useHead({
  title: useNuxtApp().$i18n.t("pages.reset_password.title"),
});
definePageMeta({
  layout: "auth",
});

const passwords = ref({
  password: null,
  confirm_password: null,
});

const loading = ref(false);

const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await useAuthStore().resetPassowrd(passwords.value.password)) {
    navigateTo("/authentication/login");
  }
  loading.value = false;
};
</script>
