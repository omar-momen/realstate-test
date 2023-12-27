// import { useLangStore } from "~/stores/lang";

export const userService = () => {
  //   const langStore = useLangStore();
  //   const nuxtApp = useNuxtApp();

  return {
    async getTerms() {
      const { data, error } = await useMyFetch("member/general/terms", {});

      if (error.value) {
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      return regions;
    },
  };
};
