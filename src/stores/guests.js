import { defineStore } from 'pinia'

const GUESTS = [
    {
        name: "Masayuki Aikawa",
        plus1: "-"
    },
    {
        name: "Hiromitsu Haba",
        plus1: "-"
    },
    {
        name: "Akihiro",
        plus1: "-"
    },
    {
        name: "Idrissov Murat & Mira",
        plus1: "-"
    },
    {
        name: "Енлик тате",
        plus1: "-"
    },
    {
        name: "сестренка",
        plus1: "-"
    }
]

export const useMainStore = defineStore('main', {
    state: () => ({
        guestList: GUESTS,
    }),
})
