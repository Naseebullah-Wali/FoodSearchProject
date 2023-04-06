<template>
    <section class="bg-gray-100 h-full">
      <header class="bg-white shadow-md h-16">
        <Head></Head>
      </header>

      <main>
          <router-view/>
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