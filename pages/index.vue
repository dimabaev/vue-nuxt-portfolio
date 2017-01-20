<template>
  <section class="container">
    <div class="position">
      <div class="wraper">
        <img src="../assets/img/my_foto.jpg" alt="Nuxt.js Logo" class="logo" />
      </div>
    </div>
    <h1 class="title">
      Баев Дмитрий Андреевич
    </h1>
    <p class="text_p">Frontend-developer and web-design</p>

    <div class="block__button">
      <nuxt-link class="button" to="/about">
        Обо мне
      </nuxt-link>
      <nuxt-link class="button" to="/portfolio">
        портфолио
      </nuxt-link>
    </div>
  </section>
</template>
<script>

export default {
  
}

</script>
<style scoped>
  .button {
    margin-right: 20px;
  }

  .position {
    display: flex;
    justify-content: center;
  }

  .wraper {
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }

  .title {
    color: #ffad15;
    margin-top: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .text_p {
    margin-bottom: 50px;
    color: #fff;
    font-size: 20px;
  }
</style>
