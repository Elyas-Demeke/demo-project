<template>
    <div class="flex flex-col md:px-14 px-6 bg-blue-50 pt-8">
        <div v-if="popularCars.length > 1" class="flex gap-x-8 mb-8">
            <div class="flex flex-col w-full">
                <div class="flex flex-col rounded-xl bg-blue-400 p-6 text-white hero">
                    <h2 class="md:text-4xl text-base md:leading-10 mb-4 font-semibold">The Best Platform <br class="max-md:hidden"/> for Car Rental</h2>
                    <p class="leading-6 mb-5">Ease of doing a car rental safely and <br/> reliably. Of course at a low price.</p>
                    <button class="rounded-md px-5 py-3 bg-blue-500 w-fit leading-6 max-md:mb-6">Rental Car</button>
                    <img class="mx-auto" :src="popularCars[0].img" height="116" width="406" alt="">
                </div>
            </div>
            <div class="md:flex hidden flex-col w-full">
                <div class="flex flex-col rounded-xl bg-blue-500 p-6 text-white hero-2">
                    <h2 class="text-4xl leading-10 mb-4 font-semibold">Easy way to rent a <br/> car at a low price</h2>
                    <p class="leading-6 mb-5">Providing cheap car rental services <br/> and safe and comfortable facilities.</p>
                    <button class="rounded-md px-5 py-3 bg-blue-400 w-fit leading-6">Rental Car</button>
                    <img class="mx-auto" :src="popularCars[1].img" height="116" width="406" alt="">
                </div>
            </div>
        </div>
        <div class="flex justify-between py-4 mb-5 text-[#90A3BF]">
            <h3>Popular Car</h3>
            <NuxtLink class="text-blue-500" to="">View All</NuxtLink>
        </div>
        <div class="max-md:overflow-x-scroll">
            <div class="flex md:flex-wrap gap-8 mb-8 w-full max-md:w-max">
                <CarCard v-for="car in popularCars" :car="car" />
            </div>
        </div>
        <div class="flex justify-between py-4 mb-5 text-[#90A3BF]">
            <h3>Recomendation Car</h3>
        </div>
        <div class="flex flex-wrap gap-8 mb-8">
            <CarCard class="max-w-none" v-for="car in recommendedCars" :car="car" />
        </div>
    </div>
</template>

<script setup>

const popularCars = ref([])
const recommendedCars = ref([])


onBeforeMount(async() => {
    popularCars.value = await $fetch('/api/cars/popular')
    const res = await $fetch('/api/cars')
    recommendedCars.value = res.data
})

</script>

<style lang="scss" scoped>
.hero{
    background-image: url('~/assets/images/Circles.png');
    background-repeat: no-repeat;
    background-position: 550% 23%;
    background-size: cover;
}
.hero-2{
    background-image: url('~/assets/images/arrow.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>