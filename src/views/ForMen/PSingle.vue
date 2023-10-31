<template>
    <div>
        <CHeader/>
    </div>
    <div class="container grid grid-cols-2 gap-6 py-10">
      <img :src="single.images[id]" alt="" class="rounded-xl">
      <div class="text-white">
        <p class="text-4xl font-bold">{{ single.title }}</p>
        <p class="text-2xl font-bold my-3">{{ single.price }} <span class="text-red-400 italic">Euro</span></p>
        <p class="text-gray-400 text-lg my-4">{{ single.description }}</p>
        <div class="grid grid-cols-3 gap-4">
            <img :src="img" alt="" v-for="(img,idx) in imgs" :key="idx" class="rounded-xl" @click="changeImg(idx)">
        </div>
        <div class="py-4">
            <p class="text-lg">Total amount of products: {{ productStore.total}}</p>
           
                <p class="text-lg">min purchase: 3</p>
                <p class="text-lg">amount: {{ store.count }}</p>
            <CButton title="purchase" variant="primary" @click="store.increment()"/>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import CHeader from '@/components/Layout/CHeader.vue';
import CButton from '@/components/Button/CButton.vue';
import { useCounterStore } from '@/stores/counter';
import { useProductStore } from "@/stores/productStore"
import { useRoute, useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const store = useCounterStore();
const productStore = useProductStore();

const route = useRoute()
const router = useRouter()
const single = ref({})
const imgs = ref([])
const id = ref(0)
fetch(`https://api.escuelajs.co/api/v1/products/${route.params.slug}`, {
    method: "GET"
}).then((res) => res.json())
.then((res) => {
    single.value = res
    imgs.value = res.images
    console.log(res)
})
function changeImg(idx){
    id.value = idx
    console.log(id.value);
    
}
let amount = 0


store.increment()
productStore.increment()

</script>