<template>
  <div class="language" @click="switchLang">
    <v-tooltip
      theme="light"
      text="Switch Language"
      location="bottom"
      aria-label="Switch Lang Icon"
    >
      <template v-slot:activator="{ props }">
        <!-- <nuxt-img
          preset="default"
          width="30"
          height="30"
          v-bind="props"
          :src="langIcon"
          alt="Switch Lang Image"
        /> -->
        <div class="lang_text" v-bind="props">
          <span class="icon"
            ><Icon name="material-symbols:globe-uk-sharp"
          /></span>
          <span>{{ langText }}</span>
        </div>
      </template>
    </v-tooltip>
  </div>
</template>

<script setup>
import { useLangStore } from "~/stores/lang";
const lang_store = useLangStore();

// const langIcon = computed(() => {
//   if (useHelpers().lang() == "en") {
//     return "/icons/ar.png";
//   } else {
//     return "/icons/en.png";
//   }
// });

const langText = computed(() => {
  if (useHelpers().lang() == "en") {
    return "عربي";
  } else {
    return "English";
  }
});

const switchLang = () => {
  lang_store.switchLang();
};
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  .lang_text {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    color: var(--primary);
    border: 3px solid transparent;
    border-radius: 10px;
    justify-content: center;
    padding-block: 3px;
    padding-inline: 10px;

    .icon {
      margin-bottom: -2px;
    }

    transition: all 0.3s ease-in-out;
    &:hover {
      border-color: var(--primary);
    }
  }
}
</style>
