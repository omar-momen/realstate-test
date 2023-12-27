<template>
  <div class="discover_section">
    <header class="header d-flex justify-space-between">
      <div>
        <h3 class="h_3 mb-2">{{ $t("pages.home.discover.title") }}</h3>
        <p class="para">{{ $t("pages.home.discover.para") }}</p>
      </div>

      <BaseButton class="with_icon flat" link to="/properties">
        {{ $t("pages.home.discover.button") }}
        <span><Icon class="ms-1" name="mdi:arrow-top-left-thin" /> </span>
      </BaseButton>
    </header>

    <main class="main my-16">
      <swiper
        dir="rtl"
        :modules="modules"
        :slides-per-view="3"
        :space-between="50"
        :breakpoints="breakpoints"
        :pagination="{
          el: '.dots',
          type: 'bullets',
          clickable: true,
        }"
        :navigation="{
          nextEl: '.carousel_controls__btn.discover_next',
          prevEl: '.carousel_controls__btn.discover_prev',
        }"
      >
        <swiper-slide v-for="property in properties" :key="property.id">
          <SingleProperty :property="property" />
        </swiper-slide>

        <div class="carousel_controls">
          <button class="carousel_controls__btn discover_prev">
            <Icon
              size="30"
              name="material-symbols-light:arrow-right-alt-rounded"
            />
          </button>
          <ul class="dots"></ul>
          <button class="carousel_controls__btn discover_next">
            <Icon
              size="30"
              name="material-symbols-light:arrow-left-alt-rounded"
            />
          </button>
        </div>
      </swiper>
    </main>
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
    location: "California City, CA, USA2",
  },
  {
    id: 3,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA3",
  },
  {
    id: 1,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA4",
  },
  {
    id: 2,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA5",
  },
  {
    id: 3,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA6",
  },
  {
    id: 1,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA7",
  },
  {
    id: 2,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA8",
  },
  {
    id: 3,
    image: "/photo-1600585152915-d208bec867a1",
    rent_duration: "month",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA9",
  },
];
const breakpoints = {
  300: {
    slidesPerView: 1,
    spaceBetween: 0,
  },

  600: {
    slidesPerView: 2,
    spaceBetween: 30,
  },

  900: {
    slidesPerView: 3,
    spaceBetween: 50,
  },

  1600: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
};

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const modules = [Navigation, Pagination];

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<style lang="scss">
.discover_section {
  .carousel_controls {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul.dots {
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto !important;

      .swiper-pagination-bullet {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #777;
        margin-inline: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &-active,
        &:hover {
          background-color: #000;
        }

        &-active {
          transform: translateY(-1px);
          width: 10px;
          height: 10px;
        }
      }
    }

    .carousel_controls__btn {
    }
  }
  .carousel_controls__btn {
    transition: all 0.3s ease-in-out;

    &.prev {
      margin-inline-end: 15px;

      &:hover {
        transform: translateX(-5px);
      }
    }
    &.next {
      margin-inline-start: 15px;

      &:hover {
        transform: translateX(5px);
      }
    }
  }
}
</style>
