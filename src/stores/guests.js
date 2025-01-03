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
    hash: 'chert'
  },
  'vladimir-merei': {
    name: 'Владимир и Мерей',
    plus1: '-',
    hash: 'vladimir-merei'
  },
  drugan: {
    name: 'Ельдар и Ардак',
    plus1: '-',
    hash: 'drugan'
  },
  'chingiz-asya': {
    name: 'Чингиз и Асия',
    plus1: '-',
    hash: 'chingiz-asya'
  },
  arai: {
    name: 'Арай',
    plus1: '-',
    hash: 'arai'
  },
  // drugan: {
  //   name: 'Ельдар и Ардак',
  //   plus1: '-',
  //   hash: 'drugan'
  // },
  // drugan: {
  //   name: 'Ельдар и Ардак',
  //   plus1: '-',
  //   hash: 'drugan'
  // },
  // drugan: {
  //   name: 'Ельдар и Ардак',
  //   plus1: '-',
  //   hash: 'drugan'
  // },
  // drugan: {
  //   name: 'Ельдар и Ардак',
  //   plus1: '-',
  //   hash: 'drugan'
  // },
  // drugan: {
  //   name: 'Ельдар и Ардак',
  //   plus1: '-',
  //   hash: 'drugan'
  // },
  // drugan: {
  //   name: 'Ельдар и Ардак',
  //   plus1: '-',
  //   hash: 'drugan'
  // },
  // drugan: {
  //   name: 'Ельдар и Ардак',
  //   plus1: '-',
  //   hash: 'drugan'
  // },
  // drugan: {
  //   name: 'Ельдар и Ардак',
  //   plus1: '-',
  //   hash: 'drugan'
  // },
  'tori-iizumi': {
    name: 'Иизуми и Тори-чан',
    plus1: '-',
    hash: 'tori-iizumi'
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
