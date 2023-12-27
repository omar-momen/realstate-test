<template>
  <div class="countersSection">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h3 class="h_3 mb-2">{{ $t("pages.home.counters.title") }}</h3>
          <p class="para">{{ $t("pages.home.counters.para") }}</p>

          <div class="counters mt-16 d-flex align-center">
            <div
              class="count_wrap mx-5"
              v-for="(item, index) in counts"
              :key="item.id"
            >
              <h3 class="h_3 mb-2">
                <count-up
                  :end-val="item.end"
                  :duration="5"
                  :options="{ enableScrollSpy: true }"
                >
                  <template #prefix>
                    <span>%</span>
                  </template>
                </count-up>
              </h3>
              <p class="para">
                {{ $t(`pages.home.counters.para${index + 1}`) }}
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <swiper
            dir="rtl"
            :modules="modules"
            :slides-per-view="1"
            :pagination="{
              el: '.dots',
              type: 'bullets',
              clickable: true,
            }"
            :navigation="{
              nextEl: '.carousel_controls__btn.counters_next',
              prevEl: '.carousel_controls__btn.counters_prev',
            }"
          >
            <swiper-slide v-for="slide in 3">
              <div class="custom_card">
                <header>
                  <h4 class="h_4 mb-5">Great Work</h4>
                </header>

                <main>
                  <p class="para mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga repellendus, consequuntur esse id eveniet modi sit
                    officia labore libero sunt unde repellat corrupti quam? Quo
                    repellat vitae excepturi rem non, culpa esse earum dolor,
                    amet in nemo
                  </p>

                  <!-- <v-rating
                    active-color="primary"
                    color="#FFC107"
                    readonly
                    :model-value="3"
                    :length="5"
                    :size="17"
                  ></v-rating> -->
                </main>

                <footer class="card_footer">
                  <v-card
                    flat
                    title="Avatars"
                    subtitle="prepend-avatar and append-avatar"
                    prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                  >
                  </v-card>
                </footer>
              </div>
            </swiper-slide>

            <div class="carousel_controls">
              <button class="carousel_controls__btn counters_prev">
                <Icon
                  size="30"
                  name="material-symbols-light:arrow-right-alt-rounded"
                />
              </button>
              <ul class="dots"></ul>
              <button class="carousel_controls__btn counters_next">
                <Icon
                  size="30"
                  name="material-symbols-light:arrow-left-alt-rounded"
                />
              </button>
            </div>
          </swiper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";
const counts = [
  {
    id: 1,
    end: 80,
  },
  {
    id: 2,
    end: 99,
  },
  {
    id: 3,
    end: 50,
  },
];

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const modules = [Navigation, Pagination];

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<style lang="scss">
.countersSection {
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

  footer.card_footer {
    padding-top: 10px;
    border-top: 1px solid var(--border);
    margin-top: 20px;
  }
}
</style>
