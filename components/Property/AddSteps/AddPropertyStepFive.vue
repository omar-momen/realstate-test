<template>
  <div class="stepThree">
    <v-form ref="form" class="property" @submit.prevent="submit">
      <main class="inputs">
        <v-row>
          <v-col cols="12">
            <base-input
              type="url"
              v-model="data.video_url"
              :label="$t('labels.video_url')"
              placeholder="https://www.youtube.com/watch?v=6v2L2UGZJAM"
              up_mode
              required
            />
          </v-col>
          <v-col cols="12">
            <UplodeMultiple v-model="data.images" />
          </v-col>
        </v-row>
      </main>

      <footer class="footer">
        <div class="d-flex justify-space-between">
          <base-button
            :loading="loading"
            type="submit"
            class="lg animate_primary_filled filled"
            >{{ $t("form.submit") }}</base-button
          >

          <base-button
            @click.prevent="previous"
            type="button"
            class="lg animate_dark filled"
            >{{ $t("form.previous") }}</base-button
          >
        </div>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
const emit = defineEmits(["nextStep", "previousStep"]);
import { usePropertyStore } from "@/stores/property";

const { current_property_id, current_property_slug } = usePropertyStore();

const loading = ref(false);
const data = ref({
  video_url: null,
  images: [],
});

const form = ref(null);
const submit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await usePropertyStore().addStep(data, 5, current_property_id)) {
    // navigateTo(`/dash/properties/${current_property_slug}`);
    navigateTo(`/dash/properties/default_slug`);
  }
  loading.value = false;
};

const previous = () => {
  emit("previousStep");
};
</script>

<style lang="sass" scoped></style>
