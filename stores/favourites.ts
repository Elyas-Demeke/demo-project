export const useFavouriteStore = defineStore('favourite', () => {
    // state
    const $favourites = ref<Array<string>>([])

    // getters
    const favourites = computed(() => $favourites.value)

    // mutations / actions
    const toggleFromFavourites = (id: string) => {
        const index = $favourites.value.findIndex(val => val === id)
        if(index >= 0)
            return $favourites.value.splice(index, 1)
        $favourites.value.push(id)
    }
    const reset = () => $favourites.value = []
    const isFavourite = (id:string) => $favourites.value.includes(id)

    return {
        favourites,
        toggleFromFavourites,
        reset,
        isFavourite,
        $favourites,
    }
},{
    persist: true
})
