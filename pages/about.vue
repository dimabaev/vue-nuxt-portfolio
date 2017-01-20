<template>
  <section class="container">
    <div class="wrapper__text">
      <h1 class="title">
        Здравствуйте. Я фронтенд-разработчик и веб-дизайнер.
      </h1>
    </div>
    <ul class="list__skils">
      <li v-for="skil in skils" class="list__skils--item">
        {{ skil.item }}
      </li>
    </ul>
    <ul class="list__socials">
      <li v-for="social in socials" class="list__socials--item">
        <a class="list__socials--link" v-bind:href="social.href">{{ social.item}}</a>
      </li>
    </ul>
    
    <div class="block__button">
      <nuxt-link class="button" to="/">
        вернуться
      </nuxt-link>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        name: 'abount',
        skils: [
          { item: 'HTML'},
          { item: 'CSS'},
          { item: 'Javascript'},
          { item: 'Node.js'},
          { item: 'Vue.js'}
        ],
        socials: [
          { item: 'Vk',       href: 'https://vk.com/vel1993'},
          { item: 'Linkedin', href: 'https://www.linkedin.com/in/baevdima'},
          { item: 'Behance',  href: 'https://www.behance.net/peinreniga9d15'},
        ]
      }
    }
  }
</script>
<style scoped>
  .wrapper__text {
    display: flex;
    justify-content: center;
    width: 700px;
    text-align: center;
    margin-bottom: 20px;
  }

  .title {
    color: #ffad15;
    margin-top: 50px;
  }

  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
  }

  .button {
    margin-top: 50px;
  }

  .list__skils {
    display: flex;
    width: 600px;
    justify-content: space-between;
    color: #fff;
    padding: 15px;
    border: 2px solid var(--baseColor);
    border-radius: 20px;
  }

  .list__skils--item {
    display: flex;
    font-size: 20px;
  }

  .list__socials {
    display: flex;
    width: 500px;
    justify-content: space-between;

    .list__socials--item {

      .list__socials--link {
        width: 100px;
        display: flex;
        height: 100px;
        border: 2px solid;
        border-radius: 50%;
        color: #fff;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: .3s;

        &:hover {
          border: 2px solid var(--baseColor);
          color: var(--baseColor);
          transform: scale(1.2);
          transition:  .3s;
        }
      }
    }
  }

  .footer__a {
    margin-right: 20px;
  }

  .footer__img {
    width: 25px;
  }
</style>
