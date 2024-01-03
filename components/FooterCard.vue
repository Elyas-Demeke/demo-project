<template>
    <div class="flex flex-col gap-y-6">
        <h3 class="leading-8 font-semibold tracking-tighter text-xl">{{list.title}}</h3>
        <ul class="flex flex-col gap-y-4">
            <NuxtLink to="/" class="text-base font-light" v-for="item in list.items" :key="item">{{item}}</NuxtLink>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{list: {title: String, items: Array<string>}}>()
</script>

<style scoped></style>