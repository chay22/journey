export default ({ app, store }) => {
  if (app.$isSupported.webStorage()) {
    let items = {}

    if (!localStorage.getItem('ctastates')) {
      localStorage.setItem('ctastates', '{}')
    } else {
      items = JSON.parse(localStorage.getItem('ctastates'))
    }

    for (const state in store.state.ctas) {
      if (typeof items[state] !== 'undefined') {
        store.dispatch('ctas/setState', {
          key: state,
          value: items[state]
        })
      }
    }
  }
}
