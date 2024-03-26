<template>
  <div class="h-32 flex flex-row justify-between items-center px-4">
    <img :src="data.image" alt="" class="h-full w-24">
    <div class="w-[50%]"> 
      <div class="overflow-hidden text-ellipsis whitespace-nowrap">{{  data.title }}</div>
      <div class="text-right font-semibold">{{  data.price }}$</div>
    </div>
    <button class="mt-4 bg-red-600 text-white rounded-lg py-2 px-4 hover:bg-red-700 transition" @click="useShopStore().deleteCart(data.id)">Remove</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
    data: Object
})
</script>

<style>
@keyframes slideRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}
</style>