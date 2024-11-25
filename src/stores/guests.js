import { defineStore } from 'pinia'

const GUESTS = {
  'aikawa-san': {
    name: 'Masayuki Aikawa',
    plus1: '-',
    hash: 'aikawa-sensei'
  },
  'haba-san': {
    name: 'Haba Hiromitsu',
    plus1: '-',
    hash: 'aikawa-sensei'
  }
}
//     [
//   {
//     name: 'Masayuki Aikawa',
//     plus1: '-',
//     hash: 'aikawa-sensei'
//   },
//   {
//     name: 'Hiromitsu Haba',
//     plus1: '-'
//   },
//   {
//     name: 'Akihiro',
//     plus1: '-'
//   },
//   {
//     name: 'Idrissov Murat & Mira',
//     plus1: '-'
//   },
//   {
//     name: 'Енлик тате',
//     plus1: '-'
//   },
//   {
//     name: 'сестренка',
//     plus1: '-'
//   }
// ]

export const useMainStore = defineStore('main', {
  state: () => ({
    guestList: GUESTS
  })
})
