<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
.container
{ 
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: #ffad15;
  letter-spacing: 1px;
  border: 2px solid #ffad15;
  text-decoration: none;
  border-radius: 50px;
  text-transform: uppercase;
  padding: 15px 45px;
  transition: 0.3s;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #ffad15;
  box-shadow: 0px 5px 25px rgb(255, 173, 21, .3);
  transition: 0.3s;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
