<template>
  <div class="descreptiosnInputs">
    <h5 class="h_5 mb-2">{{ $t("labels.descreptions") }}</h5>

    <div class="wrapper">
      <v-row v-if="descreptions.length > 0">
        <v-col cols="12" md="6" sm="4" v-for="(input, index) in inputs">
          <template v-if="input.type == 'text' || input.type == 'number'">
            <base-input
              :type="input.type"
              v-model="inputs[index].value"
              :label="input.label"
              :placeholder="input.label"
              required
              up_mode
            />
          </template>
          <template v-if="input.type == 'select'">
            <select-input
              v-model="inputs[index].value"
              :getUrl="`member/lookups/${input.getUrl}`"
              :label="input.label"
              :placeholder="input.label"
              required
              up_mode
            />
          </template>
        </v-col>
      </v-row>
      <span class="empty" v-else>{{ $t("empty.title2") }}</span>
    </div>
  </div>
</template>

<script setup>
import { useLookupsStore } from "@/stores/lookups";

const props = defineProps({
  property_type_id: {
    type: Number,
    required: true,
  },
});

const descreptions = ref([]);
const _property_type_id = computed(() => {
  return props.property_type_id;
});

const detectType = (text) => {
  if (text.includes("Float") || text.includes("number")) return "number";
  if (text.includes("text") || text.includes("string")) return "text";
  if (text.includes("Select")) return "select";
  else return "text";
};

const inputs = ref([]);

watch(
  _property_type_id,
  async () => {
    descreptions.value =
      (await useLookupsStore().getDescreptions(props.property_type_id)) || [];

    inputs.value = descreptions.value.map((descreption) => {
      return {
        label: descreption.name,
        type: detectType(descreption.input_type),
        value: null,
        getUrl: descreption.input_type.includes("Select")
          ? descreption.input_type.split(":")[1]
          : null,
      };
    });
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.descreptiosnInputs {
  .wrapper {
    padding: 15px;
    border-radius: 10px;
    border: 1px solid var(--border);
  }
}
</style>
