<template>
  <div class="popular_featuears">
    <v-container>
      <header class="header d-flex justify-space-between">
        <div>
          <h3 class="h_3 mb-2 text-white">
            {{ $t("pages.home.popular.title") }}
          </h3>
          <p class="para text-white">{{ $t("pages.home.popular.para") }}</p>
        </div>
      </header>

      <main class="main mt-16 mb-10">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
            v-for="property in properties"
            :key="property.id"
          >
            <SingleProperty :property="property" />
          </v-col>
        </v-row>
      </main>

      <footer class="footer">
        <BaseButton
          class="with_icon animate_primary_filled lg mx-auto"
          link
          to="/properties"
        >
          {{ $t("pages.home.popular.button") }}
          <span><Icon class="ms-1" name="mdi:arrow-top-left-thin" /> </span>
        </BaseButton>
      </footer>
    </v-container>
  </div>
</template>

<script setup>
const properties = [
  {
    id: 1,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 2,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 3,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 4,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
];
</script>

<style lang="scss" scoped>
.popular_featuears {
  padding-block: 100px;
  min-height: 70vh;
  background: var(--secondary_2);
}
</style>
