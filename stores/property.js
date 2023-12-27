export const usePropertyStore = defineStore("property", () => {
  const properties = ref(null);
  const current_property = ref({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const current_property_id = ref(null);
  const current_property_slug = ref(null);

  const addStep = async (my_form_data, step, id) => {
    const response_data = await propertyService().addPropertyStep(
      my_form_data,
      step,
      id
    );
    if (response_data) {
      current_property.value[step] = my_form_data;

      if (step == 1) {
        current_property_id.value = response_data.value.property_id;
      }
      if (step == 4) {
        current_property_slug.value = response_data.value.property_slug;
      }
    }
    return response_data;

    // current_property.value[step] = data;
    // return true;
  };

  return {
    properties,
    current_property,
    addStep,
    current_property_id,
    current_property_slug,
  };
});
