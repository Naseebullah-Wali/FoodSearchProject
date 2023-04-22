<template>
    <section class="bg-gray-100 h-full" >
      <header class="bg-white shadow-md h-16">
        <Head v-if="!nav"></Head>
      </header>

      <main>
        <dev class="max-w-[1200px] mx-auto">
          <router-view/>
        </dev>
          
      </main>

      <footer>


      </footer>

  </section>
</template>
<script >
import Head from './Header.vue'
export default{
  data: function (){
   return{
     nav: null
   }
  },
  components :{
  Head
  },
  methods:{
   checkRoute(){
     if(this.$route.name === "login" || this.$route.name === "register"){
       return this.nav = true
     }
     this.nav = false;
   }
  },
  watch:{
   $route(){
     this.checkRoute();
   }
  }
  
}


</script>