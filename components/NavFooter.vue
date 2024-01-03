<template>
    <div class="flex flex-col md:pt-20 pt-4">
        <div class="flex max-md:flex-col md:px-14 px-6 w-full">
            <div class="flex flex-col gap-y-4 mr-auto">
                <h3 class="text-blue-500 font-bold text-3xl leading-10 tracking-tighter" to="/">DM</h3>
                <p class="text-base font-light">Our vision is to provide convenience <br class="md:block hidden" />and help increase your sales
                    business.</p>
            </div>
            <div class="flex gap-x-16 gap-y-12 flex-wrap max-md:mt-8">
                <FooterCard v-for="list in footerLists" :key="list.title" :list="list" />
            </div>
        </div>
        <hr class="mx-14 mt-9"/>
        <div class="flex w-full md:px-14 px-6 py-9 flex-wrap">
            <p class="font-semibold mr-auto md:block hidden">©2022 DM. All rights reserved</p>
            <div class="flex gap-x-16 max-md:w-full max-md:justify-between">
                <p class="font-semibold">Privacy & Policy</p>
                <p class="font-semibold">Terms & Condition</p>
            </div>
            <p class="font-semibold mr-auto md:hidden block max-md:mt-8">©2022 DM. All rights reserved</p>
        </div>
    </div>
</template>

<script setup lang="ts">

const footerLists = [
    {
        title: 'About',
        items: [
            'How it works',
            'Featured',
            'Partnership',
            'Bussiness Relation',
        ],
    },
    {
        title: 'Community',
        items: [
            'Events',
            'Blog',
            'Podcast',
            'Invite a friend',
        ],
    },
    {
        title: 'Socials',
        items: [
            'Discord',
            'Instagram',
            'Twitter',
            'Facebook',
        ],
    },
]

</script>

<style scoped></style>
