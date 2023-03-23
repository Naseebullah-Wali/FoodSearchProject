<template>
   <section class="flex flex-col p-8 justify-center">
        <div>
            <input type="text" class="rounded border-2 border-grey-200 w-full" placeholder="Search for food">
        </div>
        <div class="flex justify-center gap-3 mt-3">
            <router-link :to="{name: 'byletter' , params: {letter}}" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
   </section>

</template>

<script setup>
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>