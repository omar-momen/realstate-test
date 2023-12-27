<template>
  <header class="header">
    <div class="content">
      <div class="text">
        <h5 class="h_5">{{ $t("header.title_1") }}</h5>
        <h1 class="h_1">{{ $t("header.title_2") }}</h1>
        <p class="mb-4">
          {{ $t("header.para") }}
        </p>
      </div>
      <HomeFilter />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header.header {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.133),
      rgba(0, 0, 0, 0.163)
    ),
    url("/images/bg/hero.jpg");
  padding: 20px;

  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.377),
        rgba(0, 0, 0, 0.335)
      ),
      url("/images/bg/hero.jpg");
    background-size: cover;
  }

  .content {
    position: relative;
    width: 95%;
    text-align: center;
    margin-top: 100px;

    @media (min-width: 1200px) {
      width: 900px;
    }
    & > .text {
      color: #fff;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-weight: 400;
        font-size: 15px;
      }
    }
  }
}
</style>
