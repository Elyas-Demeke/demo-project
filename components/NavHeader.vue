<template>
    <div class="flex w-full md:px-16 px-6 py-10 max-md:justify-between">
        <Brand/>
        <div class="rounded-full border md:flex py-2.5 px-4 gap-x-4 flex-grow mr-8 hidden relative">
            <button @click="searchCar">
                <img src="~/assets/icons/search-normal.svg" alt=""/>
            </button>
            <input v-model="search" @keyup.enter="searchCar" type="text" class="outline-none leading-5 w-full" placeholder="Search something here" @focus="focusedOnSearch = true" @blur="unFocus">
            <div v-if="suggestedCars.length && focusedOnSearch" class="absolute flex flex-col translate-y-10 bg-white w-full rounded-md shadow-md p-4 gap-y-4">
                <div @click="$router.push(`/car/${car.id}`)" v-for="(car, index) in suggestedCars" :key="car.id" class="flex py-3 gap-x-3 items-center cursor-pointer" :class="{'border-b': index < suggestedCars.length -1 }">
                    <img :src="car.img" class="w-20 object-contain" alt="">
                    <p>{{ car.name }}</p>
                </div>
            </div>
        </div>
        <button class="p-2.5 border rounded-full">
            <img src="~/assets/icons/heart.svg" alt=""/>
        </button>
    </div>
    <div class="rounded-lg border flex py-2.5 px-4 gap-x-4 flex-grow mx-6 md:hidden">
        <button @click="searchCar">
            <img src="~/assets/icons/search-normal.svg" alt=""/>
        </button>
        <input v-model="search" @keyup.enter="searchCar" type="text" class="outline-none leading-5" placeholder="Search something here">
    </div>
</template>

<script setup>
import { debounce } from 'lodash';   

const search = ref('')
const suggestedCars = ref([])

const focusedOnSearch = ref(false)

onMounted(() => {
    const route = useRoute()
    search.value = route.query.q ? route.query.q: ''
})

const searchCar = () => {
    if(search.value) 
    useRouter().push(`/search?q=${search.value}`)
}

const suggestSearch = async() => {
    if(search.value.length > 1){
        const res = await $fetch(`/api/cars?q=${search.value}`)
        suggestedCars.value = res.data
    }else
    suggestedCars.value = []
}

const unFocus = () => {
    setTimeout(() => focusedOnSearch.value = false, 500)
}


watch(search, debounce(() => {
	suggestSearch()
}, 500))

</script>

<style scoped>

</style>