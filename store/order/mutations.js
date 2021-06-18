export default {
  setOrder (state, data) {
    state.order = data
  },

  addOrder (state, data) {
    state.order.push(data)
  },

  editOrder (state, data) {
    const index = state.item.findIndex((item) => {
      return item._id === data._id
    })
    state.item.splice(index, 1)
    state.item.push(data)
  },

  removeOrder (state, data) {
    const index = state.item.findIndex((item) => {
      return item._id === data._id
    })
    state.item.splice(index, 1)
  }
}
