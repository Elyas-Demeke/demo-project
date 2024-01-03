<template>
    <div v-if="car" class="flex flex-col md:px-14 px-6 bg-blue-50 pt-8">
        <div class="flex max-md:flex-col mb-16 gap-x-8">
            <div class="flex-flex-col">
                <div class="mb-6">
                    <div class="flex flex-col w-full max-w-[500px]">
                        <div class="flex flex-col rounded-xl bg-blue-500 p-6 text-white hero-2">
                            <h2 class="text-4xl leading-10 mb-4 font-semibold">Sports car with the best <br class="max-md:hidden" /> design and
                                acceleration</h2>
                            <p class="leading-6 mb-5">Safety and comfort while driving a <br /> futuristic and elegant
                                sports
                                car</p>
                            <button class="rounded-md px-5 py-3 bg-blue-400 w-fit leading-6 mb-8">Rental Car</button>
                            <div class="md:w-96 md:h-72 h-56">
                                <img class="w-full" :src="car.images[imageIndex].url" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-scroll max-w-[500px] p-3">
                    <div class="flex gap-x-6 w-max h-24">
                        <img @click="imageIndex = index" class="cursor-pointer rounded-md"
                        :class="{'outline-2 outline-blue-500 outline-offset-4  outline': index === imageIndex }"
                        v-for="(img, index) in car.images" :src="img.url"  alt="">
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-y-8 bg-white rounded-xl p-6">
                <div class="flex gap-x-4">
                    <div class="flex flex-col gap-y-2">
                        <h2 class="leading-10 font-bold text-3xl">{{ car.name }}</h2>
                        <div class="flex gap-x-2">
                            <div class="flex gap-x-0.5">
                                <img src="~/assets/icons/yellow-star.svg" alt="">
                                <img src="~/assets/icons/yellow-star.svg" alt="">
                                <img src="~/assets/icons/yellow-star.svg" alt="">
                                <img src="~/assets/icons/yellow-star.svg" alt="">
                                <img src="~/assets/icons/hollow-star.svg" alt="">
                            </div>
                            <p class="text-[#596780]">440+ Reviewer</p>
                        </div>
                    </div>
                    <button @click="favouriteStore.toggleFromFavourites(car.id)" class="self-start">
                        <img v-if="favouriteStore.isFavourite(car.id)" src="~/assets/icons/red-heart.svg" alt="">
                        <img v-else src="~/assets/icons/hollow-heart.svg" alt="">
                    </button>
                </div>
                <p class="text-xl leading-10 text-[#596780]">{{ car.description }}</p>
                <div class="flex flex-wrap gap-x-11 gap-y-4 justify-between mb-28">
                    <div class="flex text-xl leading-8 gap-x-4 justify-between w-fit">
                        <p class="text-[#90A3BF]">Type Car</p>
                        <span class="font-semibold ml-5">{{ car.type }}</span>
                    </div>
                    <div class="flex text-xl leading-8 gap-x-4 justify-between w-fit">
                        <p class="text-[#90A3BF]">Capacity</p>
                        <span class="font-semibold ml-5">{{ car.people }} Person</span>
                    </div>
                    <div class="flex text-xl leading-8 gap-x-4 justify-between w-fit">
                        <p class="text-[#90A3BF]">Gasoline</p>
                        <span class="font-semibold ml-5">{{ car.gasolineLiter }}L</span>
                    </div>
                    <div class="flex text-xl leading-8 gap-x-4 justify-between w-fit">
                        <p class="text-[#90A3BF]">Steering </p>
                        <span class="font-semibold ml-5">{{ car.kindOfTransition }} Person</span>
                    </div>
                </div>
                <div class="flex justify-between w-full gap-x-3">
                    <p class="unique-blue font-medium"><span class="text-black font-bold text-xl">${{ car.pricePerDay.toFixed(2) }}/</span> day</p>
                    <NuxtLink :to="`/car/${car.id}`" class="bg-blue-500 text-white px-5 py-3 rounded-md font-semibold"><span class="md:inline-block hidden">Rent Now</span><span class="md:hidden inline-block">Rental Now</span></NuxtLink>
                </div>
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
const $route = useRoute()
const car = ref()
const imageIndex = ref(0)
const recommendedCars = ref([])
const favouriteStore = useFavouriteStore()

onBeforeMount(async () => {
    car.value = await $fetch('/api/cars/' + $route.params.id)
    car.value.images = [{url: car.value.img}, ...car.value.images]
    const res = await $fetch('/api/cars')
    recommendedCars.value = res.data
})

</script>

<style scoped>
.hero-2 {
    background-image: url('~/assets/images/arrow.png');
    background-size: contain;
}
</style>