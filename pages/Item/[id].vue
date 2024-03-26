<template>
    <div class="flex w-full h-fit justify-center">
        <div class="w-[55%] h-fit bg-white flex flex-col">
            <div class="border border-slate-900 rounded-2xl flex flex-col mt-8 py-4 px-4 relative">
                <img :src="data.image" alt="" class="w-72 h-80 self-center">
                <div class="font-bold text-4xl text-center mt-4">{{ data.title }}</div>
                <div class="text-center font-semibold top-2 left-4 absolute text-xl">{{ data.category }}</div>
                <div class="text-center font-semibold flex flex-col top-2 right-4 absolute text-xl">
                    <div>Rate: {{ data.rating.rate }}</div>
                    <div>Rates amount: {{ data.rating.count }}</div>
                </div>
                <div class="w-full flex justify-center">
                    <div class="text-center w-[65%] mt-4">{{ data.description }}</div>
                </div>
                <button class="bg-green-600 text-white w-full rounded-lg py-1 hover:bg-green-700 transition mt-4"
                    @click="useShopStore().addToCart(data)">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import {definePageMeta} from "#imports";

useHead({
  title: 'sd'
})
const route = useRoute()
let data = {}
if (useShopStore().goods.length === 0) {
    await useShopStore().getGoods()
    data = useShopStore().goods.find(el => el.id === Number(route.params.id))
}
if (data.id === undefined) {
    data = useShopStore().goods.find(el => el.id === Number(route.params.id))
}

</script>

<style></style>