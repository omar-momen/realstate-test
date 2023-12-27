import { useLangStore } from "~/stores/lang";

export const userService = () => {
  const langStore = useLangStore();
  const nuxtApp = useNuxtApp();

  return {
    async login(loginData) {
      const { data, error } = await useMyFetch("member/auth/login", {
        method: "POST",
        body: loginData,
      });

      if (error.value) {
        nuxtApp.$iziToast.error({
          message:
            error?.value?.data?.message ||
            error?.value?.statusMessage ||
            useNuxtApp().$18n.t("validation.error"),
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Welcome to Samh RealState"
            : "مرحبا بك في سمح العقارية",
        position: "topLeft",
      });
      return data.value.data;
    },
    async logout() {
      const { data, error } = await useMyFetch("/logout", {
        method: "POST",
      });

      if (error.value) {
        nuxtApp.$iziToast.error({
          message:
            error?.value?.data?.message ||
            error?.value?.statusMessage ||
            useNuxtApp().$18n.t("validation.error"),
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "You have been logged out successfully"
            : "تم تسجيل الخروج بنجاح",
        position: "topLeft",
      });
      return data;
    },

    async verifyWithNafaz(ssn_id) {
      const { data, error } = await useMyFetch("member/auth/send-nafath", {
        method: "POST",
        body: { ssn_id },
      });

      if (error.value) {
        nuxtApp.$iziToast.error({
          message:
            error?.value?.data?.message ||
            error?.value?.statusMessage ||
            useNuxtApp().$18n.t("validation.error"),
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Verification code sent successfully"
            : "تم ارسال كود التحقق بنجاح",
        position: "topLeft",
      });

      return data;
    },

    async checkNavazNum(ssn_id) {
      const { data, error } = await useMyFetch("member/auth/status-nafath", {
        method: "GET",
        params: { ssn_id: ssn_id },
      });

      if (error.value) {
        nuxtApp.$iziToast.error({
          message:
            error?.value?.data?.message ||
            error?.value?.statusMessage ||
            useNuxtApp().$18n.t("validation.error"),
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "number verified successfully"
            : "تم التأكيد من الرقم بنجاح",
        position: "topLeft",
      });
      return data;
    },

    async verifyPhoneNumber(phone_number, forgetPass, resend) {
      const { data, error } = await useMyFetch(
        forgetPass
          ? `member/auth/forget-password${resend ? "?resend=true" : ""}`
          : `member/auth/send-sms-code${resend ? "?resend=true" : ""}`,
        {
          method: "POST",
          body: { phone_number },
        }
      );

      if (error.value) {
        nuxtApp.$iziToast.error({
          message:
            error?.value?.data?.message ||
            error?.value?.statusMessage ||
            useNuxtApp().$18n.t("validation.error"),
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Verification code sent successfully"
            : "تم ارسال كود التحقق بنجاح",
        position: "topLeft",
      });
      return data;
    },

    async confirmPhoneNumber(phone_number, otp_code, forgetPass) {
      const { data, error } = await useMyFetch(
        forgetPass
          ? `member/auth/verify-forget-password`
          : `member/auth/verify-sms-code`,
        {
          method: "POST",
          body: { phone_number, otp_code },
        }
      );

      if (error.value) {
        nuxtApp.$iziToast.error({
          message:
            error?.value?.data?.message ||
            error?.value?.statusMessage ||
            useNuxtApp().$18n.t("validation.error"),
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "code verified successfully"
            : "تم التأكيد من الكود بنجاح",
        position: "topLeft",
      });
      return data;
    },

    async resetPassowrd(phone_number, otp_code, new_password) {
      const { data, error } = await useMyFetch(`member/auth/reset-password`, {
        method: "POST",
        body: { phone_number, otp_code, new_password },
      });

      if (error.value) {
        nuxtApp.$iziToast.error({
          message:
            error?.value?.data?.message ||
            error?.value?.statusMessage ||
            useNuxtApp().$18n.t("validation.error"),
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "password reset successfully"
            : "تمت إعادة تعيين كلمة المرور بنجاح",
        position: "topLeft",
      });
      return data;
    },

    async signup(signupData) {
      const { data, error } = await useMyFetch("member/auth/register", {
        method: "POST",
        body: {
          first_name_ar: signupData.first_name_ar,
          second_name_ar: signupData.second_name_ar,
          third_name_ar: signupData.third_name_ar,
          last_name_ar: signupData.last_name_ar,
          ssn_id: signupData.ssn_id,
          phone_number: signupData.phone_number,
          email: signupData.email,
          password: signupData.passwords.password,

          gender: 1,
          first_name_en: signupData.first_name_ar,
          second_name_en: signupData.second_name_ar,
          third_name_en: signupData.third_name_ar,
          family_name_en: signupData.family_name_ar,
          date_of_birth_g: "1990-01-01",
          date_of_birth_h: "1410-01-01",
        },
      });

      if (error.value) {
        nuxtApp.$iziToast.error({
          message:
            error?.value?.data?.message ||
            error?.value?.statusMessage ||
            useNuxtApp().$18n.t("validation.error"),
          position: "topRight",
        });
        return;
      }

      nuxtApp.$iziToast.success({
        message:
          langStore.current_lang == "en"
            ? "Account created successfully, please login"
            : "تم انشاء الحساب بنجاح برجاء تسجيل الدخول",
        position: "topLeft",
      });
      return data;
    },
  };
};
