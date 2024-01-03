<template>
    <div class="flex flex-col md:px-14 px-6 bg-blue-50 pt-8">
        <div class="flex justify-between py-4 mb-5 text-[#90A3BF]">
            <h3>Search results</h3>
        </div>
        <div v-if="searchedCars" class="flex flex-wrap gap-8 mb-8">
            <CarCard v-if="searchedCars.length" class="max-w-none" v-for="car in searchedCars" :car="car" />
            <p v-else>No results found</p>
        </div>
    </div>
</template>

<script setup >
const searchedCars = ref()
const route = useRoute()
const query = computed(() => route.query.q ? `?q=${route.query.q}`: '') 

onBeforeMount(async() => {
    const res = await $fetch(`/api/cars${query.value}`)
    searchedCars.value = res.data
})

watch(() => route.path, async() => {
    const res = await $fetch(`/api/cars${query.value}`)
    searchedCars.value = res.data
}, {deep: true, immediate: true})
</script>

<style scoped>

</style>