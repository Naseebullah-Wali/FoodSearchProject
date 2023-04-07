<template>
    <section class="bg-gray-100 h-full">
      <header class="bg-white shadow-md h-16">
        <Head></Head>
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
<script setup>
import Head from './Header.vue'
components :{
  Head
}
</script>