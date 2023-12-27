<template>
  <div class="relation_section text-center" data-aos="fade-up">
    <h3 class="h_3 mb-2">{{ $t("pages.home.relaton.title") }}</h3>
    <p class="para">{{ $t("pages.home.relaton.para") }}</p>

    <v-row class="mt-10">
      <v-col cols="12" sm="6" md="4" v-for="item in 3">
        <div class="of fice_card">
          <NuxtImg
            preset="default"
            src="/images/property_action.svg"
            width="150"
            height="150"
            class="mb-8"
          />

          <h4 class="h_4">{{ $t("pages.home.relaton.cards[0].title") }}</h4>
          <p class="para gray">{{ $t("pages.home.relaton.cards[0].para") }}</p>

          <base-button class="mt-10 mx-auto xl animate_dark">
            {{ $t("pages.home.relaton.cards[0].button") }}
            <Icon class="ms-1" name="mdi:arrow-top-left-thin" />
          </base-button>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.relation_section {
  .office_card {
    background: var(--main_bg);
    padding: 80px;
    box-shadow: 0px 10px 40px var(--shadow_1);
    width: fit-content;
    margin: 50px auto;
    border-radius: 10px;

    a {
      text-decoration: underline;
    }
  }
}
</style>
