export const useLookupsStore = defineStore("lookups", () => {
  const nuxtApp = useNuxtApp();

  const regions = ref([]);
  const descreptions = ref([]);

  const getRegions = async () => {
    const data = await lookupsService().getRegions();
    if (data) {
      regions.value = data;
    }
    return data;
  };

  const getDescreptions = async (type_id) => {
    const data = await lookupsService().getDescreptions(type_id);
    if (data) {
      descreptions.value = data;
    }
    return data;
  };

  const getFeatures = async () => {
    const data = await lookupsService().getFeatures();
    if (data) {
      descreptions.value = data;
    }
    return data;
  };

  const getUtilities = async () => {
    const data = await lookupsService().getUtilities();
    if (data) {
      descreptions.value = data;
    }
    return data;
  };

  return {
    getRegions,
    getDescreptions,
    descreptions,
    getFeatures,
    getUtilities,
  };
});
