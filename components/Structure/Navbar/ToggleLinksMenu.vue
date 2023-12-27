<template>
  <div class="toggleMenu" @click="show = !show">
    <Icon name="mdi:format-list-bulleted" />

    <side-menu title="" :show="show" @close="show = false">
      <div class="menu_header d-flex justify-center">
        <h2>{{ $t("navbar.sideMenue_mobile.title") }}</h2>
      </div>

      <Links :navLinks="navLinks" :smallScreen="true" @click="show = !show" />
    </side-menu>
  </div>
</template>

<script setup>
const props = defineProps(["navLinks"]);
const show = ref(false);
</script>

<style lang="scss">
nav.theNav {
  .toggleMenu {
    display: none;

    .menu_header {
      padding: 25px 15px;
      margin-bottom: 25px;
      background: #fef4f3;
      margin-top: -30px;

      h2 {
        margin-inline-start: -10px;
      }
    }

    svg.icon {
      font-size: 25px;
    }
  }
}
</style>
