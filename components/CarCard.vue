<template>
    <div class="flex flex-col md:p-6 p-4 bg-white rounded-md md:max-w-96 max-w-80 w-full">
        <div class="flex justify-between mb-16">
            <div class="flex flex-col">
                <h4 class="text-xl font-bold leading-8 tracking-tighter self-start">{{ car.name }}</h4>
                <span>{{ car.type }}</span>
            </div>
            <button @click="favouriteStore.toggleFromFavourites(car.id)" class="self-start">
                <img v-if="favouriteStore.isFavourite(car.id)" src="~/assets/icons/red-heart.svg" alt="">
                <img v-else src="~/assets/icons/hollow-heart.svg" alt="">
            </button>
        </div>
        <div class="mb-9">
            <img :src="car.img" alt="">
            <div class="bg-white blur-md opacity-25 w-full h-14 -mt-10"></div>
        </div>
        <div class="flex text-[#90A3BF] justify-between mb-6">
            <p class="flex gap-x-1.5">
                <img src="~/assets/icons/fuel.svg" alt="" />
                <span class="self-center">{{ car.gasolineLiter }}L</span>
            </p>
            <p class="flex gap-x-1.5">
                <img src="~/assets/icons/transmission.svg" alt="" />
                <span class="self-center">{{ car.kindOfTransition }}</span>
            </p>
            <p class="flex gap-x-1.5">
                <img src="~/assets/icons/people.svg" alt="" />
                <span class="self-center">{{ car.people}} People</span>
            </p>
        </div>
        <div class="flex justify-between w-full gap-x-3">
            <p class="text-[#90A3BF] font-medium"><span class="text-black font-bold text-xl">${{ car.pricePerDay.toFixed(2) }}/</span> day</p>
            <NuxtLink :to="`/car/${car.id}`" class="bg-blue-500 text-white px-5 py-3 rounded-md font-semibold"><span class="md:inline-block hidden">Rent Now</span><span class="md:hidden inline-block">Rental Now</span></NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{car: any}>()

const favouriteStore = useFavouriteStore()
</script>

<style scoped></style>