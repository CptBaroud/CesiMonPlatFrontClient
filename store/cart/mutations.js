export default {
  setCart (state, data) {
    state.cart = data
  },

  addCart (state, data) {
    state.cart.push(data)
  },

  editCart (state, data) {
    const index = state.item.findIndex((item) => {
      return item._id === data._id
    })
    state.item.splice(index, 1)
    state.item.push(data)
  },

  removeCart (state, data) {
    const index = state.item.findIndex((item) => {
      return item._id === data._id
    })
    state.item.splice(index, 1)
  }
}
