export default () => ({
  order: {
    user: {},
    accepted: {
      type: Boolean,
      default: false
    },
    price: Number,
    items: [{}],
    menu: [{}]
  },
  totalPrice: 0
})
