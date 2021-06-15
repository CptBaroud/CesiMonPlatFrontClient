export default {
  setItem (state, data) {
    state.item = data
  },

  addItem (state, data) {
    state.item.push(data.data)
  },

  editItem (state, data) {
    const index = state.item.findIndex((item) => {
      return item._id === data._id
    })
    state.item.splice(index, 1)
    state.item.push(data)
  },

  removeItem (state, data) {
    const index = state.item.findIndex((item) => {
      return item._id === data._id
    })
    state.item.splice(index, 1)
  }
}
