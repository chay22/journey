<template>
  <div class="layout">
    <left-sidebar />
    <nuxt />
    <external />
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import LeftSidebar from '~/components/LeftSidebar'
import External from '~/components/External'

// let lastScrollTop = 0

export default {
  components: {
    LeftSidebar,
    External
  },
  data() {
    return {
      lastScrollTop: 0
    }
  },
  mounted() {
    window.addEventListener(
      'scroll',
      debounce((e) => {
        if (
          !(
            (e.target &&
              e.target.classList &&
              e.target.classList.contains('scrollable') &&
              e.target.style.overflow !== 'hidden') ||
            (e.target &&
              e.target.closest &&
              e.target.closest('.scrollable') &&
              e.target.closest('.scrollable').style.overflow !== 'hidden') ||
            document.body.style.overflow === 'hidden'
          )
        ) {
          this.detectScrollDirection()
        }
      }),
      500
    )
    window.addEventListener(
      'keydown',
      debounce((e) => {
        if (e.keyCode === 38) {
          this.onPageScrollUp()
        } else if (e.keyCode === 40) {
          this.onPageScrollDown()
        }
      }),
      300
    )
  },
  methods: {
    detectScrollDirection() {
      const st = window.pageYOffset || document.documentElement.scrollTop
      let result

      if (st > this.$store.state.pages.lastScrollTop) {
        result = 'down'
        this.onPageScrollDown()
      } else {
        result = 'up'
        this.onPageScrollUp()
      }

      this.$store.dispatch('pages/setLastScrollTop', st)

      return result
    },
    onPageScrollUp() {
      this.$store.dispatch('pages/prev')
    },
    onPageScrollDown() {
      this.$store.dispatch('pages/next')
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'League Spartan Variable';
  src: url('~static/fonts/LeagueSpartanVariable.woff2')
    format('woff2-variations');
  font-weight: 200 900;
}

:root {
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  --rect-box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  --rect-border-radius: 0.1em;
  font-size: 16px;
}

html {
  font-family: 'League Spartan Variable', var(--font-family-base);
  font-size: 1rem;
  word-spacing: 1px;
  font-weight: 400;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  min-height: calc(0.25em + 100%);
}

body {
  background-color: #3759e2;
  color: #fff;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #ff0000;
}

h1 {
  font: 300 200%/0.9 'League Spartan Variable', sans-serif;
}
em {
  font-style: italic;
  font-family: var(--font-family-base);
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
p {
  margin-bottom: 1rem;
}
code {
  background-color: #ddd;
  border-radius: 0.1em;
  color: #1d1d1d;
  font-size: 80%;
  padding: 0.15em 0.25em;
}
a,
button {
  cursor: pointer;
}
button {
  user-select: none;
}
.layout {
  min-height: 100%;
}

.layout {
  display: flex;
}

.left-sidebar {
  display: flex;
  width: 15rem;
  background-color: #3355dd;
  height: 100%;
  position: fixed;
  z-index: 5;
}

.page {
  position: fixed;
  width: calc(100% - 15rem);
  margin: 0 auto;
  left: 15rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3759e2;
  z-index: 1;
  transition: filter 0.3s ease-in, transform 0.4s ease-out;
  font-size: 125%;
  font-weight: 500;
}

.page .content {
  background-color: rgba(255, 255, 255, 0.81);
  background-image: linear-gradient(177deg, #fff, #e4dddd, #d5d9e8, #c1cbf5);
  padding: 1rem 1.5rem 0.75rem;
  box-shadow: var(--rect-box-shadow);
  border-radius: var(--rect-border-radius);
  color: #020304;
  font-weight: 350;
}

body.page-blur .page {
  filter: blur(5px);
  transform: scale(1.1);
}
@keyframes fontweight {
  from {
    font-weight: 200;
  }
  to {
    font-weight: 999;
  }
}

.slide-down-enter,
.slide-up-leave-active {
  opacity: 0;
  transform: translate(0, -2em);
}
.slide-down-leave-active,
.slide-up-enter {
  opacity: 0;
  transform: translate(0, 2em);
}

.fade-2-enter-active,
.fade-2-leave-active {
  transition: opacity 2s;
}
.fade-2-enter,
.fade-2-leave-active {
  opacity: 0;
}
.fade-3-enter-active,
.fade-3-leave-active {
  transition: opacity 3s ease-in-out;
}
.fade-3-enter,
.fade-3-leave-active {
  opacity: 0;
}

.slide-left-enter-active {
  transition: all 0.3s ease;
}
.slide-left-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-2em);
  opacity: 0;
}
.projects {
  font-size: 1rem;
  font-weight: 300;
  position: absolute;
  left: 0;
  bottom: 5%;
  width: 36em;
  padding: 1rem;
  z-index: 4;
  text-align: left;
  max-height: 10em;
}
.projects.scrollable {
  overflow: scroll;
  overflow-x: hidden;
}
.projects.scrollable:after {
  content: '';
  position: absolute;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.3)
  );
  width: 100%;
  height: 1em;
  bottom: 0;
  left: 0;
  filter: blur(10px);
}
.projects.scrollable::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.projects.scrollable::-webkit-scrollbar-thumb {
  background: #ff0000;
}
.projects > .title {
  font-weight: 400;
  margin-bottom: 0.5rem;
}
.projects .item {
  margin-bottom: 0.5rem;
}
.projects .underline {
  border-bottom: 0.15em dotted #8997ce;
}
/*--stripe: 3px;
height: .3em;
background: repeating-linear-gradient(-45deg, currentColor 0 var(--stripe), transparent 0 calc(2 * var(--stripe)));*/

/*@keyframes fw {
  from { font-weight: 1;}
  to {font-weight: 999;}
}

#variable-fonts div::after {
  content: counter(secret);
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
  line-height: 1;
  min-width: 1em;
  text-align: center;
  animation: 3s fw linear infinite alternate;
}*/
</style>
