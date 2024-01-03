<template>
    <div class="flex w-full md:px-16 px-6 py-10 max-md:justify-between">
        <Brand/>
        <div class="rounded-full border md:flex py-2.5 px-4 gap-x-4 flex-grow mr-8 hidden">
            <button>
                <img src="~/assets/icons/search-normal.svg" alt=""/>
            </button>
            <input type="text" class="outline-none leading-5" placeholder="Search something here">
        </div>
        <button class="p-2.5 border rounded-full">
            <img src="~/assets/icons/heart.svg" alt=""/>
        </button>
    </div>
    <div class="rounded-lg border flex py-2.5 px-4 gap-x-4 flex-grow mx-6 md:hidden">
        <button>
            <img src="~/assets/icons/search-normal.svg" alt=""/>
        </button>
        <input type="text" class="outline-none leading-5" placeholder="Search something here">
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>