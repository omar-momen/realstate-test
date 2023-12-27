<template>
  <div class="stepThree">
    <v-form ref="form" class="auth" @submit.prevent="signup">
      <main class="inputs">
        <v-row dense>
          <!-- Names -->
          <v-col cols="12" md="6">
            <base-input
              type="text"
              v-model="data.first_name_ar"
              :label="$t('labels.first_name')"
              required
              :rules="[useInputRules().only_ar_letters]"
            ></base-input>
          </v-col>
          <v-col cols="12" md="6">
            <base-input
              type="text"
              v-model="data.second_name_ar"
              :label="$t('labels.second_name')"
              required
              :rules="[useInputRules().only_ar_letters]"
            ></base-input>
          </v-col>
          <v-col cols="12" md="6">
            <base-input
              type="text"
              v-model="data.third_name_ar"
              :label="$t('labels.third_name')"
              required
              :rules="[useInputRules().only_ar_letters]"
            ></base-input>
          </v-col>
          <v-col cols="12" md="6">
            <base-input
              type="text"
              v-model="data.last_name_ar"
              :label="$t('labels.family_name')"
              required
              :rules="[useInputRules().only_ar_letters]"
            ></base-input>
          </v-col>

          <!-- Email -->
          <v-col cols="12">
            <base-input
              type="email"
              v-model="data.email"
              :label="$t('labels.email')"
              :rules="[useInputRules().email]"
            ></base-input
          ></v-col>

          <!-- <v-col cols="12" md="6">
            <DatePicker v-model="data.date" />
          </v-col>
          <v-col cols="12" md="6">
            <RadioInput
              required
              v-model="data.gender"
              :items="genders"
              :label="$t('labels.gender')"
            />
          </v-col> -->

          <!-- Address -->
          <v-col cols="12" md="4">
            <select-input
              v-model="data.region"
              getUrl="member/lookups/regions"
              :label="$t('labels.region')"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <select-input
              v-model="data.city"
              :getUrl="`member/lookups/cities?region_id=${data.region?.id}`"
              :_sync="data.region"
              :label="$t('labels.city')"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <select-input
              v-model="data.district"
              :getUrl="`member/lookups/regions?city_id=${data.city?.id}`"
              :_sync="data.city"
              :label="$t('labels.district')"
            />
          </v-col>

          <!-- Passwords -->
          <v-col cols="12">
            <ConfirmPassword v-model="data.passwords" />
          </v-col>
        </v-row>
      </main>

      <footer class="footer">
        <base-button
          :loading="loading"
          type="submit"
          class="lg w-100 animate_primary_filled"
          >{{ $t("form.signup") }}</base-button
        >
        <p>
          {{ $t("auth.register.footer") }}
          <button class="colored">
            <router-link to="/authentication/login">{{
              $t("form.login")
            }}</router-link>
          </button>
        </p>
      </footer>
    </v-form>
  </div>
</template>

<script setup>
// const genders = [
//   {
//     id: 1,
//     name: "ذكر",
//     value: "male",
//   },
//   {
//     id: 2,
//     name: "انثي",
//     value: "female",
//   },
// ];

const data = ref({
  first_name_ar: null,
  second_name_ar: null,
  third_name_ar: null,
  last_name_ar: null,

  region: null,
  city: null,
  district: null,

  email: null,
  passwords: null,

  // gender: null,
  // date: null,
});

const form = ref(null);
const loading = ref(false);
const signup = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  if (await useAuthStore().signup(data.value)) {
    navigateTo("/authentication/login");
  }
  loading.value = false;
};
</script>

<style lang="scss" scoped></style>
