<script setup lang="ts">
const modalIsOpen = ref(false)

const cartStore = useShopStore()

const totalPrice = computed(() => {
  if(useShopStore().cart.length !== 0) return useShopStore().cart.map(el => el.price).reduce((total, num) => total + num).toFixed(2)
  return 0
})

const openModal = (state: boolean) => {
  if(state) {
    modalIsOpen.value = true
    document.body.style.overflow = 'hidden'
    return;
  }
  modalIsOpen.value = false
    document.body.style.overflow = ''
}
</script> 

<template>
  <div>
    <div
      class="w-screen h-[6rem] border-b shadow-lg text-slate-900 flex flex-row justify-between items-center p-4 sticky top-0 z-50 bg-white"
      id="inputBorder">
      <h1 class="text-2xl font-bold cursor-pointer" @click="$router.push('/')">Bogdashop</h1>
      <div class="border border-slate-950 rounded-[16px] w-[75%] flex flex-row justify-between items-center pr-4">
        <input placeholder="Search..." class="w-full px-4 py-4 rounded-[16px] rounded-r-none outline-none" id="input" @input="useShopStore().search($event.target.value)"/>
        <IconsSearch class="cursor-pointer" />
      </div>
      <IconsCart class="cursor-pointer" @click="openModal(true)" />
    </div>
    <Transition name="opacity">
      <div v-if="modalIsOpen" class="fixed inset-0 z-50">
        <div class="inset-0 bg-black z-50 absolute opacity-20" @click="openModal(false)"/>
      </div>
    </Transition>
    <Transition name="translate">
      <div class="fixed right-0 top-0 bottom-0 w-[40rem] bg-white z-50 opacity-100 shadow-lg p-4 flex flex-col" v-if="modalIsOpen">
        <h1 class="text-center font-bold text-4xl">Cart</h1>
        <div class="flex-1 flex flex-col overflow-auto gap-6 mb-4">
          <GoodCardCart :data="el" v-for="el in cartStore.cart" :key="el.id"/>
        </div>
        <div class="w-[110%] border border-slate-900 mx-[-1rem] mb-4" />
        <div class="mb-4 font-semibold">
          Total: {{ totalPrice }}$
        </div>
        <button class="mt-auto bg-green-600 text-white w-full rounded-lg py-2 hover:bg-green-700 transition">Make an
          order</button>
        <button class="mt-4 bg-red-600 text-white w-full rounded-lg py-2 hover:bg-red-700 transition"
          @click="openModal(false)">Close</button>
      </div>
    </Transition>
    <slot />
  </div>
</template>

<style scoped lang="scss">
#inputBorder>#input:focus {
  border-color: red;
}

.opacity-enter-active,
.opacity-leave-active {
  transition: all 0.5s ease;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}

.translate-enter-active,
.translate-leave-active {
  transition: all 0.5s ease;
}

.translate-enter-from,
.translate-leave-to {
  transform: translateX(100%);
}
</style>