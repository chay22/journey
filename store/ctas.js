export const state = () => ({
  isExternalClicked: false
})

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  }
}

export const actions = {
  setState({ commit }, payload) {
    commit('SET_STATE', payload)

    if (payload.persist && this.$isSupported.webStorage()) {
      const items = JSON.parse(localStorage.getItem('ctastates'))
      localStorage.setItem(
        'ctastates',
        JSON.stringify({
          ...items,
          [payload.key]: payload.value
        })
      )
    }
  }
}
