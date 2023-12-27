<template>
  <section class="navs">
    <nav
      class="theNav"
      :class="{
        stikyNav: stikyNav,
        inView: inView,
        dash_nav: props.dash_nav,
      }"
    >
      <v-container class="wrapper d-flex align-center py-3">
        <div class="d-flex align-center me-auto">
          <Logo
            class="me-md-4"
            :stiky="stikyNav"
            :header_nav_mobile="useHelpers().isSmallScreen()"
          />
          <div class="d-flex align-center">
            <Links :navLinks="navLinks" class="d-none d-md-flex me-2" />
            <SearchMenu />
          </div>
        </div>

        <div class="d-flex align-center me-4 ga-4">
          <div class="v-step-0" v-if="!props.dash_nav">
            <div v-if="useHelpers().isSmallScreen()">
              <v-tooltip
                theme="light"
                text="Add Property"
                location="bottom"
                aria-label="Add Property Icon"
              >
                <template v-slot:activator="{ props }">
                  <nuxt-link v-bind="props" to="/dash/properties/add">
                    <v-btn
                      class="d-flex justify-center align-center pa-5"
                      color="primary"
                      aria-label="add-property"
                      density="compact"
                      icon="mdi-plus-circle-multiple"
                    ></v-btn>
                  </nuxt-link>
                </template>
              </v-tooltip>
            </div>
            <div v-else>
              <base-button
                class="with_icon filled animate_primary_filled"
                aria-label="Add Property"
                link
                to="/dash/properties/add"
                >{{ $t("form.add_property") }}
                <span
                  ><Icon class="ms-1" name="mdi:arrow-top-left-thin" /> </span
              ></base-button>
            </div>
          </div>

          <NavAuth v-if="!useAuthStore().user" />

          <div v-else class="d-flex align-center ga-4 me-4">
            <UserMenu
              class="d-none d-md-block"
              image="/images/avatars/nav.svg"
            />
            <notification-menu url="/lol"></notification-menu>
          </div>
          <SwitchLanguage class="d-md-block d-none" />
        </div>

        <div class="d-flex align-center ga-4 justify-end">
          <ToggleLinksMenu
            :navLinks="navLinks"
            v-if="useHelpers().isSmallScreen()"
          />
          <NavMenu :realtons="realtons" v-if="!props.dash_nav" />
        </div>
      </v-container>
    </nav>
    <LowerNav />
  </section>
</template>

<script setup>
const props = defineProps({
  dash_nav: Boolean,
});

const navLinks = [
  {
    title: useNuxtApp().$i18n.t("navbar.support"),
    link: "/static/support",
  },
];
const realtons = [
  {
    title: "Apartments",
    url: "/realtons/apartments",
  },
  {
    title: "Bungalow",
    url: "/realtons/apartments",
  },
  {
    title: "Houses",
    url: "/realtons/apartments",
  },
  {
    title: "Loft",
    url: "/realtons/apartments",
  },
  {
    title: "Office",
    url: "/realtons/apartments",
  },
  {
    title: "Townhome",
    url: "/realtons/apartments",
  },
  {
    title: "Villa",
    url: "/realtons/apartments",
  },
];

import { useAuthStore } from "~/stores/auth";

const stikyNav = ref(false);
const inView = ref(false);

onMounted(() => {
  setTimeout(() => {
    const NAV_HEIGHT = document.querySelector("nav.theNav").clientHeight;

    window.addEventListener("scroll", () => {
      let documentScrollTop = document.documentElement.scrollTop;

      stikyNav.value = documentScrollTop > NAV_HEIGHT + 10;
      inView.value =
        documentScrollTop > NAV_HEIGHT + 10 &&
        useHelpers().scrollDirection() == "down";
    });
  }, 10);
});
</script>

<style lang="scss">
.theNav {
  background: transparent;
  transition: all 0.3s ease-in-out;
  position: fixed;
  inset: 0;
  width: 100%;
  height: fit-content;
  z-index: 999;
  background: var(--main_bg);
  box-shadow: 0 0 10px var(--shadow);

  .wrapper {
    // margin: 0 auto;
    // width: 97%;

    // @media (min-width: 1170px) {
    //   width: 1100px;
    // }

    @media (max-width: 960px) {
      // width: 90%;

      .links,
      .NavMenu {
        display: none;
      }
      .toggleMenu {
        display: block;
      }
    }
  }

  // &.header_nav:not(.stikyNav) {
  //   background: transparent;
  //   box-shadow: none;
  //   padding-block: 5px;
  //   border-bottom: 1px solid #d2d0d046;

  //   .wrapper {
  //     .search {
  //       color: #fff;
  //     }
  //     ul.links {
  //       li {
  //         a {
  //           color: #fff;
  //         }
  //       }
  //     }
  //     .navAuth {
  //       .base_button {
  //         color: #fff;
  //       }
  //     }
  //     a.base_button.animate {
  //       color: #fff;
  //       border-color: #fff;
  //     }
  //     .notification {
  //       svg.icon {
  //         color: #fff;
  //       }
  //     }
  //     .NavMenu {
  //       svg.icon {
  //         color: #fff;
  //       }
  //     }
  //     .toggleMenu {
  //       svg.icon {
  //         color: #fff;
  //       }
  //     }
  //   }
  // }

  &.dash_nav {
    box-shadow: none;
  }

  &.stikyNav {
    padding: 0;
    position: fixed;
    top: -100px;
    width: 100%;
    z-index: 999;
  }
  &.inView {
    top: 0;
  }
}
</style>
