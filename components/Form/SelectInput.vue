<template>
  <div class="custom_input select">
    <label v-if="label && up_mode">{{ label }}</label>

    <v-autocomplete
      @update:modelValue="updateValue"
      :model-value="modelValue"
      :loading="loading"
      :deletable-chips="true"
      :items="isStatic ? staticItems : items"
      :disabled="disabled"
      :rules="allRules"
      :return-object="true"
      :label="_label"
      variant="solo"
      item-title="name"
      item-value="id"
      v-bind:="$attrs"
    >
      <template v-slot:append-inner>
        <div :title="$t('validation.required')">
          <Icon v-if="required" size="7" color="#db0000" name="mdi:asterisk" />
        </div>
        <slot name="appendInner"></slot>
      </template>
    </v-autocomplete>
  </div>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  disabled: {
    required: false,
    default: false,
    type: Boolean,
  },

  staticItems: {
    required: false,
    type: Array,
    default: () => [],
  },
  getUrl: {
    required: false,
    type: String,
  },
  modelValue: {
    required: true,
  },
  _sync: {
    required: false,
    type: Object,
    default: () => {},
  },
  rules: {
    require: false,
    type: Array,
    default: () => [],
  },
  required: {
    require: false,
    type: Boolean,
    default: false,
  },
  label: {
    required: false,
    default: "",
    type: String,
  },
  placeholder: {
    required: false,
    default: "",
    type: String,
  },
  up_mode: {
    required: false,
    default: false,
    type: Boolean,
  },
});

const _label = computed(() => {
  if (props.up_mode) return props.placeholder || props.label;
  return props.label || props.placeholder;
});

onMounted(async () => {
  await nextTick();
  await getSelectItems();
});

const loading = ref(false);

const isStatic = computed(() => {
  return props.staticItems.length > 0;
});

const items = ref([]);

const staticItems = computed(() => {
  return props.staticItems;
});

const _sync = computed(() => {
  return props._sync;
});
watch(_sync, () => {
  getSelectItems();
  emits("update:modelValue", null);
  items.value = [];
});

const disabled = computed(() => {
  return props.disabled || loading.value || props._sync === null;
});

const dumy_data = ref([
  {
    id: 1,
    name: "Option 1",
  },
  {
    id: 2,
    name: "Option 2",
  },
  {
    id: 3,
    name: "Option 3",
  },
  {
    id: 4,
    name: "Option 4",
  },
  {
    id: 5,
    name: "Option 5",
  },
]);
const getSelectItems = async () => {
  if (isStatic.value || disabled.value) {
    return;
  }

  loading.value = true;
  const { data } = await useMyFetch(props.getUrl, {
    method: "GET",
  });
  items.value = data.value ? data.value.data : dumy_data.value;
  loading.value = false;
};

const allRules = computed(() => {
  if (!props.required) {
    return [];
  }
  let default_rules = [
    (val) => {
      if (props.multiple) {
        return val.length > 0 || "This field is required";
      } else {
        return !!val || "This field is required";
      }
    },
  ];

  return [...props.rules, ...default_rules];
});

const updateValue = (e) => {
  emits("update:modelValue", e);
};
</script>
