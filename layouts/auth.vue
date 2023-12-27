<template>
  <div class="auth_layout">
    <div class="_container custom_card px-10 pb-10 pt-5">
      <logo class="mb-7" :big="false" />

      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.auth_layout {

  background: linear-gradient(
      0deg,
      rgba(51, 50, 51, 0.3),
      rgba(46, 45, 45, 0.3)
    ),
    url("https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 40px;

  ._container {
    min-width: 600px;
    background: var(--main_bg_opacity);

    @media (max-width: 610px) {
      max-width: 97vw;
      min-width: 97vw;
      padding-inline: 10px !important;
    }

    .logo {
      img {
        margin: 15px auto;
      }
    }
  }
}
</style>
