import { defineStore } from 'pinia'

const GUESTS = {
  'aikawa-san': {
    name: 'Dear Masayuki Aikawa',
    plus1: '-',
    hash: 'aikawa-san'
  },
  'haba-san': {
    name: 'Dear Haba Hiromitsu',
    plus1: '-',
    hash: 'haba-san'
  },
  'mama-papa': {
    name: 'Мурат и Мира',
    plus1: '-',
    hash: 'parents1'
  },
  chert: {
    name: 'Санжар',
    plus1: '-',
    hash: 'parents1'
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
    guestList: GUESTS,
    currentGuest: {}
  }),
  actions: {
    setGuest(guest) {
      this.currentGuest = guest
    }
  }
})
