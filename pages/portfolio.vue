<template>
    <section class="container">
      <div class="portfolio">
        <ul class="portfolio__list">
          <li class="portfolio__item">
              <div class="portfolio__wraper">
                <img class="portfolio__wraper--img" src="../assets/img/porfolio/landing.jpg" alt="">
                <div class="portfolio__item--overlay">
                    <a class="portfolio__item--overlayName" href="https://www.behance.net/gallery/43687733/fitnes-klub(v-dorabotke)">
                        Фитнес клуб
                    </a>                  
                </div>             
              </div>
          </li>
          <li class="portfolio__item">
              <div class="portfolio__wraper">

                  <img class="portfolio__wraper--img" src="../assets/img/porfolio/landing.jpg" alt="">
                  <div class="portfolio__item--overlay">
                    <a class="portfolio__item--overlayName" href="https://www.behance.net/gallery/43687733/fitnes-klub(v-dorabotke)">
                        Фитнес клуб
                    </a>                  
                </div>
              </div>             
          </li>
          <li class="portfolio__item">
              <div class="portfolio__wraper">
                  <img class="portfolio__wraper--img" src="../assets/img/porfolio/landing.jpg" alt="">
                  <div class="portfolio__item--overlay">
                    <a class="portfolio__item--overlayName" href="https://www.behance.net/gallery/43687733/fitnes-klub(v-dorabotke)">
                        Фитнес клуб
                    </a>                  
                  </div>
              </div>             
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

}

</script>

<style>
    .title__portfolio {
        color: var(--baseColor );
    }
    .portfolio {
        dislay: flex;
        width: 1100px;
        margin-bottom: 30px;
    }
    .portfolio__list {
        display: flex;
        padding: 0;
        flex-flow: row wrap;
        justify-content: space-between;

        .portfolio__item {
            display: flex;
            position: relative;
            justify-content: center;
            text-align: center;
            width: 300px;
            height: 200px;
            border-radius: 3px;

            .portfolio__wraper {
                margin-top: 10px;
                display: flex;
                position: absolute;
                width: 280px;
                height: 180px;
                z-index: 1;
                overflow: hidden;
                transition: opacity 0.3s;
                border-radius: 3px;
                transition: box-shadow 0.3s;

                &:hover {
                    box-shadow: 0px 10px 20px rgba(0,0,0, .5)
                }

                .portfolio__wraper--img {
                    background-size: contain;
                    background-position: left;
                    height: 200px;
                    cursor: pointer;
                }
            }

            .portfolio__item--overlay {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    background: rgb(31, 30, 29, .9);
                    position: absolute;
                    z-index: 2;
                    opacity: 0;  
                    cursor: pointer;

                    .portfolio__item--overlayName {
                        font-size: 20px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        border-top: 1px solid var(--baseColor);
                        border-bottom: 1px solid var(--baseColor);
                        color: var(--baseColor);
                    }

                    &:hover {
                        animation: overlaY 500ms ease-in-out forwards;   
                    }             
            }

            .portfolio__link {
                display: flex;
                width: 150px;
                height: 60px;
                justify-content: center;
                align-items: center;
                position: absolute;
                z-index: 2;
            }
        }
    }

    @keyframes overlaY {
        0% { 
            opacity: 0; 
            transform: translateY(50px);     
        }
        100% {
            opacity: 1; 
            transform: translateY(0px);     
        }
    }
</style>
