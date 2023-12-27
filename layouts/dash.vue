<template>
  <v-layout>
    <TheNavbar :dash_nav="true" />

    <v-navigation-drawer
      width="280"
      v-model="drawer"
      :rail="rail"
      @click="rail = false"
      :class="{ is_active: !rail }"
      permanent
    >
      <v-list-item prepend-avatar="/images/avatars/nav.svg" title="John Doe">
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-subheader>General</v-list-subheader>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          rounded="shaped"
          :to="item.link"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-group color="primary" value="property">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="properties.head.title"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="({ title, icon, link }, index) in properties.childs"
            :key="index"
            :title="title"
            :prepend-icon="icon"
            :value="title"
            :to="link"
            color="primary"
            rounded="shaped"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="dash_main" @click="rail = true">
        <slot />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
const drawer = ref(true);
const rail = ref(false);

const items = ref([
  { text: "Home", icon: "mdi-home", link: "/dash" },
  { text: "Messages", icon: "mdi-chat", link: "/dash/messages" },
]);

const properties = ref({
  head: {
    title: "Properties",
    icon: "mdi-home-city",
  },
  childs: [
    {
      title: "Show",
      icon: "mdi-door",
      link: "/dash/properties",
    },
    {
      title: "Add Property",
      icon: "mdi-plus-circle-outline",
      link: "/dash/properties/add",
    },
  ],
});
</script>

<style lang="scss">
.dash_main {
  max-height: 88vh;
  overflow-y: scroll;
  background: var(--main_bg);
  box-shadow: unset;

  &::-webkit-scrollbar {
    display: none;
  }
}

.v-navigation-drawer {
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 88;

  .v-list-subheader__text {
    font-size: 16px;
    font-weight: 400;
    color: var(--main_txt);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .v-list-group__items {
    --indent-padding: 0 !important;

    & > .v-list-item {
      padding-inline-start: 10px !important;
      padding-inline-end: 0 !important;
    }
  }
  &.is_active {
    .v-list-group__items {
      --indent-padding: calc(
        var(--parent-padding) + var(--list-indent-size) - 40px
      ) !important;

      .v-list-group {
        & > .v-list-item {
          padding-inline-start: calc(16px + var(--indent-padding)) !important;
          padding-inline-end: calc(16px + var(--indent-padding)) !important;
        }
      }
    }
  }
}
</style>
