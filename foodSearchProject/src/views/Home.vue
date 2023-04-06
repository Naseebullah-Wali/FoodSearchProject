<template>
   
    <div class="flex flex-col p-8 ">
            

        <div class="flex gap-2 justify-center mt-2">
            <router-link :to="{name: 'byLetter',params:{letter } }" v-for="letter of letters" :key="letter">
            {{ letter }}
            </router-link>
        </div>
        <!-- <pre>{{ result }}</pre> -->
    </div>

</template>

<script setup>
        import { onMounted, ref } from 'vue';
        import axiosClient from '../axiosClient'
        const letters = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split("");
        const result = ref([]);
        onMounted(async ()=>{
        const response = await axiosClient.get('/list.php?i=list');
        console.log(response.data)
        result.value= response.data;
        })
</script>