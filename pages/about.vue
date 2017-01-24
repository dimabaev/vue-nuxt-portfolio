<template>
  <section class="container">
    <div class="card__style">
      <div class="wrapper__text">
        <h1 class="title">
          Здравствуйте. Я фронтенд-разработчик и веб-дизайнер.
        </h1>
      </div>
      <div class="wrapper__p">
        <p class="wrapper__p--text">
          Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.
        </p>
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
      
    </div>
    <div class="block__button">
      <nuxt-link class="button" to="/">
        вернуться
      </nuxt-link>
    </div>
  </section>
</template>
<script>
  export default {
    components: {

    },
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

  .card__style {
    display: flex;
    flex-flow: column;
    width: 600px;
    background: color(rgb(31, 30, 29) lightness(20%));
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0px 5px 15px rgba(0,0,0,.3);
  }

  .wrapper__text {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;

    .title {
      color: #ffad15;
      font-size: 2rem;
    }
  }

  .wrapper__p {
    display: flex;
    padding: 0px 30px 10px 30px;
    text-align: justify;
    .wrapper__p--text {
      color: #fff;
    }
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
    flex: 1;
    justify-content: space-around;
    background: color(rgb(31, 30, 29) lightness(30%));
    color: #fff;
    padding: 0;
    padding: 10px 0px 10px 0px;
  }

  .list__skils--item {
    display: flex;
    font-size: 20px;
  }

  .list__socials {
    display: flex;
    flex: 1;
    padding: 0;
    margin-bottom: 40px;
    justify-content: space-around;

    .list__socials--item {

      .list__socials--link {
        width: 100px;
        display: flex;
        height: 50px;
        color: #fff;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: .3s;

        &:hover {
          color: var(--baseColor);
          transform: scale(1.4) rotate(10deg);
          transition:  .3s;
        }
      }
    }
  }

</style>
