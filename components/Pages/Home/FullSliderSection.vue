<template>
  <div class="full_slider_section">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :navigation="{
        nextEl: '.carousel_controls__btn.full_slider_next',
        prevEl: '.carousel_controls__btn.full_slider_prev',
      }"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div
          class="my_slide"
          :style="{
            'background-image': `linear-gradient(90deg, rgb(0 0 0 / 20%), rgb(0 0 0 / 40%)), url(${slide.image})`,
          }"
        >
          <v-container class="content">
            <h3 class="h_3 text-white">${{ slide.price }}</h3>
            <h2 class="h_2 mb-0 text-white">{{ slide.title }}</h2>
            <p class="para text-white">{{ slide.location }}</p>
            <BaseButton
              class="with_icon animate_primary_filled mt-5"
              link
              to="/"
            >
              {{ $t("btns.view_details") }}
              <span><Icon class="ms-1" name="mdi:arrow-top-left-thin" /> </span>
            </BaseButton>
          </v-container>
        </div>
      </swiper-slide>
    </swiper>

    <div class="carousel_controls">
      <button class="carousel_controls__btn full_slider_prev">
        <Icon size="25" name="ion:chevron-right" />
      </button>
      <button class="carousel_controls__btn full_slider_next">
        <Icon size="25" name="ion:chevron-left" />
      </button>
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    id: 1,
    image: "https://placehold.co/1920x900/BCBCBC/FFFFFF/png",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 5,
    image: "https://placehold.co/1920x900/BCBCBC/FFFFFF/png",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 2,
    image: "https://placehold.co/1920x900/BCBCBC/FFFFFF/png",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 6,
    image: "https://placehold.co/1920x900/BCBCBC/FFFFFF/png",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 4,
    image: "https://placehold.co/1920x900/BCBCBC/FFFFFF/png",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 17,
    image: "https://placehold.co/1920x900/BCBCBC/FFFFFF/png",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 16,
    image: "https://placehold.co/1920x900/BCBCBC/FFFFFF/png",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
  {
    id: 11,
    image: "https://placehold.co/1920x900/BCBCBC/FFFFFF/png",
    price: 1000,
    title: "Lorem ipsum dolor sit amet",
    location: "California City, CA, USA1",
  },
];

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
const modules = [Navigation];

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<style lang="scss">
.full_slider_section {
  margin-top: 100px;
  height: 90vh;
  position: relative;

  .swiper {
    height: 100%;

    .my_slide {
      height: 100%;
      background-size: cover;
      background-position: center center;
      display: flex;
      align-items: center;
    }
  }

  .slide_image {
    width: 100%;
    height: 100%;
  }

  .carousel_controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20%;
    left: 10%;
    z-index: 9999;

    @media (max-width: 768px) {
      top: 10%;
    }

    .carousel_controls__btn {
      transition: all 0.3s ease-in-out;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1.5px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      color: #fff;

      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }
}
</style>
