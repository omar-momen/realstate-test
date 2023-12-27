<template>
  <div class="supportSection">
    <v-container>
      <div class="d-flex justify-space-around flex-wrap">
        <div>
          <h2 class="h_2">{{ $t("pages.support.title3") }}</h2>
          <p class="para">{{ $t("pages.support.para3") }}</p>
        </div>
        <base-button class="with_icon animate_dark dark xl my-5 v-step-3">
          920033232
          <Icon class="ms-2" size="20" color="#fff" name="mdi:phone" />
        </base-button>
      </div>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.supportSection {
  margin: 50px 0;
  .v-container {
    background: var(--main_bg);
    padding-block: 90px;
    border-radius: 10px;
  }
}
</style>
