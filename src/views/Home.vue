<template>
<div class="scroll">
  <div class="home">
    <router-link 
      v-for="(i, index) in list"
      :key="index"
      :to="'/find/'+i"
      :style="'background-image: url(/img/'+i+'-bg.jpg);'"
    >
      <img :src="'/img/'+i+'-item.png'" />
    </router-link>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      list: ['space', 'banana', 'pizza', 'egg', 'candy']
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll {
    //overflow: auto;
    height: 100%;
  }
  .home {
    padding: 20px 0 0;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      max-width: 400px;
      height: 130px;
      background-size: cover;
      background-position: center;
      border: 3px solid white;
      margin: 0 auto 20px;
    }
    img {
      width: 160px;
      height: 160px;
      object-fit: contain;
      filter: drop-shadow(2px 0 0px white) drop-shadow(-2px 0 0px white) drop-shadow(0 -2px 0px white) drop-shadow(0 2px 0px white);
    }
  }
</style>