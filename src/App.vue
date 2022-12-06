<template>
  <div id="app">
    <HeaderComp :vocimenu="headerMenu"/>
    <MainComp/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data(){
    return{
      headerMenu: [
        {
          voce: 'home',
          href: '/home'
        },
        {
          voce: 'about',
          href: '/about'
        },
        {
          voce: 'service',
          href: '/service'
        },
        {
          voce: 'showcase',
          href: '/showcase'
        },
        {
          voce: 'blog',
          href: '/blog'
        },
        {
          voce: 'contact',
          href: '/contact'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>
