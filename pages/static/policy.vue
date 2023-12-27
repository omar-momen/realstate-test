<template>
  <div class="policyPage">
    <h1>Policy</h1>
    <p v-html="data"></p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Policy",
});

const data = ref(null);
</script>

<style lang="scss" scoped></style>
