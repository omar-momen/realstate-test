<template>
  <div class="stepFour">
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <div class="inputs">
        <v-col cols="12">
          <base-input
            type="number"
            v-model="data.phone_number"
            :label="$t('labels.phone')"
            :hint="$t('hints.phone')"
            :rules="[useInputRules().phone]"
            required
          ></base-input>
        </v-col>
      </div>

      <footer class="authFooter">
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
const emit = defineEmits(["nextStep"]);

const loading = ref(false);
const data = ref({
  phone_number: null,
});

import { useAuthStore } from "@/stores/auth";
const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await useAuthStore().verifyPhoneNumber(data.value.phone_number)) {
    emit("nextStep");
  }
  loading.value = false;
};
</script>
