<template>
  <div class="stepTow">
    <v-form @submit.prevent="submit" ref="form" class="auth">
      <div class="d-flex flex-column align-center">
        <v-chip color="primary" size="large" class="mb-3">{{
          useAuthStore().nafaz_verify_num
        }}</v-chip>

        <v-chip size="large">{{
          $t("auth.register.steps.step2.sub_title")
        }}</v-chip>
      </div>

      <base-button
        :loading="loading"
        type="submit"
        class="mt-16 w-50 mx-auto animate_primary_filled"
        >{{ $t("form.check") }}
        <count-down
          @countFinished="submit"
          @number_of_try_exceeded="navigateTo('/authentication/login')"
          :loob="true"
          :clearInterval="clearInterval"
        />
      </base-button>
    </v-form>
  </div>
</template>

<script setup>
const emit = defineEmits(["nextStep"]);

const clearInterval = ref(false);

import { useAuthStore } from "@/stores/auth";

const loading = ref(false);
const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await useAuthStore().checkNavazNum()) {
    clearInterval.value = true;
    emit("nextStep");
  }
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
