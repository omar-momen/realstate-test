export const lookupsService = () => {
  const nuxtApp = useNuxtApp();

  return {
    async getRegions() {
      const { data: regions, error } = await useMyFetch(
        "member/lookups/regions"
      );

      if (error.value) {
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      return regions.value.data;
    },

    async getDescreptions(type_id) {
      const { data: descreptions, error } = await useMyFetch(
        `member/lookups/property/descriptions?type_id=${type_id}`
      );

      if (error.value) {
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      return descreptions.value.data;
    },

    async getFeatures() {
      const { data: features, error } = await useMyFetch(
        `member/lookups/property/features`
      );

      if (error.value) {
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      return features.value.data;
    },

    async getUtilities() {
      const { data: utilities, error } = await useMyFetch(
        `member/lookups/property/utilities`
      );

      if (error.value) {
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      return utilities.value.data;
    },
  };
};
