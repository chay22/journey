export const state = () => ({
  list: [
    {
      path: '/',
      label: 'Hello'
    },
    {
      path: '/jan-2016',
      label: 'Jan 2016'
    },
    {
      path: '/sep-2016',
      label: 'Sep 2016'
    },
    {
      path: '/oct-2016',
      label: 'Oct 2016'
    },
    {
      path: '/nov-2016',
      label: 'Nov 2016'
    },
    {
      path: '/dec-2016',
      label: 'Dec 2016'
    },
    {
      path: '/feb-2017',
      label: 'Feb 2017'
    },
    {
      path: '/apr-2017',
      label: 'Apr 2017'
    },
    {
      path: '/may-2017',
      label: 'May 2017'
    },
    {
      path: '/jun-2017',
      label: 'Jun 2017'
    },
    {
      path: '/dec-2017',
      label: 'Dec 2017'
    },
    {
      path: '/feb-2018',
      label: 'Feb 2018'
    },
    {
      path: '/nov-2018',
      label: 'Nov 2018'
    },
    {
      path: '/jan-2019',
      label: 'Jan 2019'
    },
    {
      path: '/done',
      label: 'Done'
    }
  ],
  isPageReady: false,
  lastScrollTop: 0
})

export const mutations = {
  PAGE_READY(state) {
    state.isPageReady = true
  },
  PAGE_NOT_READY(state) {
    state.isPageReady = false
  },
  SET_LAST_SCROLL_TOP(state, offset) {
    state.lastScrollTop = offset
  }
}

export const actions = {
  next({ state, commit }) {
    if (state.isPageReady) {
      const currentPath = this.$router.currentRoute.path
      const pageIndex = state.list.findIndex((v) => v.path === currentPath)
      const next = state.list[pageIndex + 1]

      if (next) {
        commit('PAGE_NOT_READY')
        this.$router.push(next.path)
      }
    }
  },
  prev({ state, commit }) {
    if (state.isPageReady) {
      const currentPath = this.$router.currentRoute.path
      const pageIndex = state.list.findIndex((v) => v.path === currentPath)
      const prev = state.list[pageIndex - 1]

      if (prev) {
        commit('PAGE_NOT_READY')
        this.$router.push(prev.path)
      }
    }
  },
  ready({ commit, state }, scroll = true) {
    return new Promise((resolve) => {
      setTimeout(() => {
        document.body.classList.remove('unready')
        if (scroll) {
          window.scrollTo(0, 2)
        }
        document.body.style.overflow = ''
        commit('PAGE_READY')
        resolve()
      }, 200)
    })
  },
  notReady({ commit }) {
    commit('PAGE_NOT_READY')
    document.body.style.overflow = 'hidden'
    document.body.classList.add('unready')
    commit('SET_LAST_SCROLL_TOP', 0)
  },
  setLastScrollTop({ commit }, st) {
    if (typeof st === 'undefined') {
      st = window.pageYOffset || document.documentElement.scrollTop
    }

    st = st <= 0 ? 0 : st

    commit('SET_LAST_SCROLL_TOP', st)
  }
}

export const getters = {
  list: (state) => state.list,
  total: (state) => state.list.length + 1
}
