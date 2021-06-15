import axios from 'axios'

export default {
  fetch (context, token) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.api_url + '/shop/item', {
        headers: {
          authorization: token
        }
      })
        .then((response) => {
          context.commit('setItem', response.data)
          resolve(response)
        }).catch((e) => {
        // eslint-disable-next-line no-console
          console.error(e)
          reject(e)
        })
    })
  },

  add (context, data) {
    return new Promise((resolve, reject) => {
      axios.post(process.env.api_url + '/shop/item', data.agent, {
        headers: {
          authorization: data.token
        }
      }).then((response) => {
        context.commit('addItem', response.data)
        resolve(response)
      }).catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
        reject(e)
      })
    })
  }
}
