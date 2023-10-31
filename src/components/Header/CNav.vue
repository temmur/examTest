<template>
    <div class="ml-10 " id="nav" >
        <ul class="flex items-center text-lg font-bold text-black">
          <router-link to="/" class="mx-2">Home</router-link>
           <router-link to="/about" class="mx-2">About us</router-link>
            <router-link to="/location" class="mx-2">Location</router-link>
            <router-link to="/for-men">For men</router-link>
            <!-- <router-link>Shoes</router-link> -->
        </ul>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="css">
    #nav .navActiveClass{
        color: red;
    }
</style>