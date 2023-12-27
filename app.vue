<template>
  <v-app class="app">
    <AppLoader v-show="globaleStore.AppInitLoading" />
    <NuxtLayout :key="useHelpers().lang()">
      <div>
        <PageLoader v-if="globaleStore.pageLoading" />
        <div>
          <NuxtPage />
        </div>
        <NuxtLoadingIndicator />
      </div>
    </NuxtLayout>
  </v-app>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";
import { useThemeStore } from "@/stores/theme";

const globaleStore = useGlobalStore();
const themeStore = useThemeStore();

const htmlClass = computed(() => {
  if (themeStore.current_theme == "dark") return "dark";
  else if (themeStore.current_theme == "light") return "light";
  else return themeStore.default_theme;
});

const route = useRoute();
const dynamicPadding = computed(() => {
  return route.path.includes("authentication") ? "pt-0" : "body-padding";
});

const nuxtApp = useNuxtApp();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${nuxtApp.$i18n.t("app.title")}`
      : nuxtApp.$i18n.t("app.title");
  },
  meta: [
    {
      name: "charset",
      content: "utf-8",
    },
    {
      name: "description",
      content:
        "Discover your dream home with DreamSpaces Realty – where exceptional properties meet unparalleled service. Explore a world of unique listings, tailored to fit every lifestyle and budget",
    },
    {
      name: "author",
      content: "Samh Team",
    },
    {
      name: "keywords",
      content: "SALE, BYE, RENT, HOME",
    },
    {
      property: "og:title",
      content: "Samh Realstate",
    },
    {
      property: "og:descreption",
      content:
        "Discover your dream home with DreamSpaces Realty – where exceptional properties meet unparalleled service. Explore a world of unique listings, tailored to fit every lifestyle and budget",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content:
        "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      property: "og:url",
      content: "http://8.213.24.120:8080/",
    },

    {
      property: "twitter:title",
      content: "Samh Realstate",
    },
    {
      property: "twitter:descreption",
      content:
        "Discover your dream home with DreamSpaces Realty – where exceptional properties meet unparalleled service. Explore a world of unique listings, tailored to fit every lifestyle and budget",
    },
    {
      property: "twitter:type",
      content: "website",
    },
    {
      property: "twitter:image",
      content:
        "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      property: "twitter:url",
      content: "http://8.213.24.120:8080/",
    },
  ],
  htmlAttrs: {
    class: htmlClass,
  },
  bodyAttrs: {
    class: dynamicPadding,
  },
});

// Handling App
nuxtApp.hook("app:suspense:resolve", async () => {
  globaleStore.AppInitLoading = false;
});
</script>
