<template>
    <div class="w-72 h-[30rem] shadow-xl px-4 py-6 rounded-xl">
        <NuxtLink :to="`/item/${data.id}`">
            <img :src="data.image" alt="" class="w-[100%] h-[60%]">
        </NuxtLink>
        <div class="flex flex-col justify-between h-[43%]">
            <div class="flex justify-between px-4 mt-4 overflow-hidden text-ellipsis">
                {{ data.title }}
            </div>
            <div class="flex flex-col gap-1">
                <div class="text-left mt-4 font-bold">Price: {{ data.price }}$</div>
                <button class="mt-auto bg-green-600 text-white w-full rounded-lg py-1 hover:bg-green-700 transition"
                    @click="useShopStore().addToCart(data)">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    data: Object
})
</script>

<style></style>