<script setup lang="ts">
import { useShopStore } from '~/stores/testStore';
useShopStore().getGoods()

</script>

<template>
  <div>
    <div class="flex flex-row flex-wrap gap-16 px-16 py-4">
      <GoodCard v-for="el in useShopStore().goodsToShow" :key="el.id" :data="el"/>
    </div>
  </div>
</template>

<style scoped></style>