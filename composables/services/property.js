import { useLangStore } from "~/stores/lang";

export const propertyService = () => {
  const langStore = useLangStore();
  const nuxtApp = useNuxtApp();

  return {
    async addPropertyStep(data, step, id) {
      const { data, error } = await useMyFetch(
        `/member/property${id ? `/${id}` : ""}${
          step == 5 ? `/submit` : `?step=${step}`
        }`,
        {
          method: "POST",
          body: data,
        }
      );

      if (error.value) {
        nuxtApp.$iziToast.error({
          message: error.value.message,
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Welcome to Samh RealState"
            : "تم حفظ البايانات بنجاح",
        position: "topLeft",
      });

      return data;
    },
  };
};
