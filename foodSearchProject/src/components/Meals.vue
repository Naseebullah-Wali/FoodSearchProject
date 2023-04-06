<template>
        <section> 
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
                <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
            </div>
            <!-- <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
                    There are no meals
            </div> -->
        </section> 
  </template>
  
  <script setup>
  import MealItem from './MealItem.vue';
  components:{
    MealItem
  }
  const { meals } = defineProps({
    meals: {
      required: true,
      type: Array,
    }
  })
  </script>