<template>
  <div class="single_property">
    <div class="image">
      <NuxtImg
        preset="default"
        provider="unsplash"
        :src="property.image"
        alt="property image"
        width="370px"
        height="240px"
      />

      <div class="price">
        <span class="bold">${{ property.price }} / </span>
        <span> {{ property.rent_duration.slice(0, 2) }}</span>
      </div>
    </div>
    <main class="text-start">
      <h5 class="h_5 mb-0">{{ property.title }}</h5>
      <p class="para sm">{{ property.location }}</p>

      <ul>
        <li>
          bed {{ property.beds_number || 3 }}
          <Icon class="ms-1" size="13" name="solar:bedside-table-2-bold" />
        </li>
        <li>
          bath {{ property.beds_number || 4 }}
          <Icon
            class="ms-1"
            size="13"
            name="fluent-emoji-high-contrast:bathtub"
          />
        </li>
        <li>
          meter {{ property.beds_number || 1200 }}
          <Icon
            class="ms-1"
            size="13"
            name="material-symbols:background-grid-small"
          />
        </li>
      </ul>
    </main>
    <footer class="footer">
      <h5>For Rent</h5>

      <ul class="actions">
        <li @click="addToFav">
          <Icon size="20" name="ph:heart" />
        </li>
        <li>
          <Icon size="20" name="material-symbols:note-stack-add-outline" />
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
const props = defineProps({
  property: {
    type: Object,
    required: true,
  },
});

const addToFav = () => {
  console.log("add to fav");
};
</script>

<style lang="scss" scoped>
.single_property {
  box-shadow: 0 0 10px var(--shadow);
  border-radius: 10px;
  // border: 1px solid var(--border);
  overflow: hidden;

  .image {
    position: relative;
    height: 240px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 7px 7px 0 0;
      object-fit: cover;
    }

    .price {
      position: absolute;
      bottom: 7px;
      right: 7px;
      padding: 5px 15px;
      background-color: var(--main_bg);
      color: var(--main_txt);
      font-size: 15px;
      font-weight: 500;
      border-radius: 0 10px 0 10px;
    }
  }

  main {
    background-color: var(--main_bg);
    padding: 15px 10px;

    ul {
      display: flex;
      margin-top: 15px;

      li {
        margin-inline-end: 15px;
        display: flex;
        align-items: center;
        color: var(--para);
        font-size: 14px;
      }
    }
  }

  footer {
    padding: 15px;
    border-top: 1px solid var(--border);
    background-color: var(--main_bg);

    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin-inline: 5px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: var(--main_bg);
        }
      }
    }
  }
}
</style>
