<template>
  <div class="homePage">
    <TheHeader />

    <v-container>
      <div class="homeSection">
        <RelatonSection />
      </div>

      <div class="homeSection">
        <DiscoverSection />
      </div>
    </v-container>

    <div class="homeSection">
      <PopularSeaction />
    </div>

    <div class="homeSection">
      <v-container>
        <SellingSection />
      </v-container>
    </div>

    <div class="homeSection">
      <FullSliderSection />
    </div>

    <div class="homeSection">
      <TestimonialsSection />
    </div>

    <div class="homeSection">
      <SupportSection />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: useNuxtApp().$i18n.t("pages.home.title"),
});

import { useGlobalStore } from "@/stores/global";
// onMounted(() => {
//   setTimeout(() => {
//     useGlobalStore().init_tooltip();
//   }, 500);
// });
</script>

<style scoped lang="scss">
.homeSection {
  padding-block: 100px;
}
</style>
