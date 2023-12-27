<template>
  <div class="stepOne">
    <v-form ref="form" class="auth" @submit.prevent="submit">
      <main class="inputs">
        <base-input
          v-model="ssn_id"
          type="number"
          :label="$t('labels.national_id')"
          :hint="$t('hints.national_id')"
          :rules="[useInputRules().saudi_ids]"
          required
        ></base-input>
      </main>
      <footer class="footer">
        <base-button
          class="animate_primary_filled lg block_center my-1"
          type="submit"
          color="primary"
          :loading="loading"
          >{{ $t("form.send") }}
        </base-button>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
const emit = defineEmits(["nextStep"]);

import { useAuthStore } from "@/stores/auth";

const ssn_id = ref("");

const loading = ref(false);
const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await useAuthStore().verifyWithNafaz(ssn_id)) {
    emit("nextStep");
  }
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
