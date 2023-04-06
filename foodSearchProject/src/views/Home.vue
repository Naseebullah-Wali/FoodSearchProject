<template>
   
    <h1>TEST HOME</h1>

</template>

<script setup>
        import { onMounted, ref } from 'vue';
        import axiosClient from '../axiosClient'
        const result = ref([]);
        onMounted(async ()=>{
        const response = await axiosClient.get('/list.php?i=list');
        console.log(response.data)
        result.value= response.data;
        })
</script>