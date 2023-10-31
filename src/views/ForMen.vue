<template>
    <div>
        <CHeader/>
        <div class="container">

            <div class=" grid grid-cols-4 gap-4">
              <RouterLink 
              :to="{name: 'for-men-single', params:{slug: item?.id} }"
              class="py-4"
              v-for="item in data" :key="item.id"
              >
                  <div class=" bg-white rounded-xl">
                      <img :src="item.images" alt="" class="h-[70%] w-full object-cover rounded-xl rounded-b-none">
                      <div class="py-5 px-2">
                          <p class="font-bold text-lg">{{ item.title }} </p>
                          <p class="font-bold text-xl">{{ item.price }} <span class="text-red-400">euro</span></p>
                         </div>
              </div>
              </RouterLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import CHeader from '@/components/Layout/CHeader.vue';
import {ref, reactive} from 'vue'
import { useRoute, useRouter  } from 'vue-router';
const route = useRoute()
const router = useRouter()
const data = ref([])
console.log(data)
fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(json=> {
                data.value = json
            })
</script>