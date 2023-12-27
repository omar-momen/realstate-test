<template>
  <div class="sellingSection">
    <v-row>
      <v-col cols="12" lg="5">
        <h2 class="h_2">{{ $t("pages.home.selling.title") }}</h2>
        <p class="para">{{ $t("pages.home.selling.para") }}</p>

        <ul class="my-10">
          <li class="d-flex align-center mb-5">
            <Icon
              size="30"
              class="me-2"
              name="material-symbols:check-circle-rounded"
            />
            <h4 claas="h_4">{{ $t("pages.home.selling.list[0]") }}</h4>
          </li>
          <li class="d-flex align-center mb-5">
            <Icon
              size="30"
              class="me-2"
              name="material-symbols:check-circle-rounded"
            />
            <h4 claas="h_4">{{ $t("pages.home.selling.list[1]") }}</h4>
          </li>
          <li class="d-flex align-center mb-5">
            <Icon
              size="30"
              class="me-2"
              name="material-symbols:check-circle-rounded"
            />
            <h4 claas="h_4">{{ $t("pages.home.selling.list[2]") }}</h4>
          </li>
        </ul>

        <BaseButton class="with_icon animate_dark lg" link to="/">
          {{ $t("pages.home.selling.button") }}
          <span><Icon class="ms-1" name="mdi:arrow-top-left-thin" /> </span>
        </BaseButton>
      </v-col>

      <v-col class="d-none d-lg-flex" cols="12" lg="7">
        <div class="images">
          <NuxtImg
            src="https://placehold.co/370x520/BCBCBC/FFFFFF/png"
            alt="selling"
            width="370"
            height="520"
            class="first"
          />
          <NuxtImg
            src="https://placehold.co/270x350/BCBCBC/FFFFFF/png"
            alt="selling"
            width="270"
            height="350"
          />
          <NuxtImg
            src="https://placehold.co/276x146/BCBCBC/FFFFFF/png"
            alt="selling"
            width="276"
            height="146"
            class="last"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes up_down {
  0% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(10px) translateX(-50%);
  }
  100% {
    transform: translateY(0) translateX(-50%);
  }
}
.sellingSection {
  .images {
    display: flex;
    position: relative;
    align-items: flex-end;

    img {
      z-index: 1;
      box-shadow: 0px 0px 10px var(--shadow);
      margin: 10px;
      border-radius: 15px;
    }
    .first {
      transform: translateY(-40px);
    }
    .last {
      position: absolute;
      bottom: -50px;
      left: 50%;
      z-index: 2;
      animation: up_down 2s ease-in-out infinite;
    }
  }
}
</style>
