<template>
  <div class="layout">
    <left-sidebar />
    <nuxt />
    <external />
    <div class="device-no-support">
      Could you please move to your wider desktop device so I can show you my
      stuff properly? I need more time to develop this. Sorry.
    </div>
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
        if (document.body.classList.contains('unready')) {
          return
        }
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
      300
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
  font-family: 'Public Sans VF';
  src: url('~static/fonts/PublicSans-Roman-VF.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Public Sans VF';
  src: url('~static/fonts/PublicSans-Italic-VF.woff2')
    format('woff2-variations');
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-Thin') url('~static/fonts/PublicSans-Thin.woff2')
    format('woff2') url('~static/fonts/PublicSans-Thin.woff') format('woff')
    url('~static/fonts/PublicSans-Thin.ttf') format('truetype');
  font-style: normal;
  font-weight: 100;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-ThinItalic')
    url('~static/fonts/PublicSans-ThinItalic.woff2') format('woff2')
    url('~static/fonts/PublicSans-ThinItalic.woff') format('woff')
    url('~static/fonts/PublicSans-ThinItalic.ttf') format('truetype');
  font-style: italic;
  font-weight: 100;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-ExtraLight')
    url('~static/fonts/PublicSans-ExtraLight.woff2') format('woff2')
    url('~static/fonts/PublicSans-ExtraLight.woff') format('woff')
    url('~static/fonts/PublicSans-ExtraLight.ttf') format('truetype');
  font-style: normal;
  font-weight: 200;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-ExtraLightItalic')
    url('~static/fonts/PublicSans-ExtraLightItalic.woff2') format('woff2')
    url('~static/fonts/PublicSans-ExtraLightItalic.woff') format('woff')
    url('~static/fonts/PublicSans-ExtraLightItalic.ttf') format('truetype');
  font-style: italic;
  font-weight: 200;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-Light') url('~static/fonts/PublicSans-Light.woff2')
    format('woff2') url('~static/fonts/PublicSans-Light.woff') format('woff')
    url('~static/fonts/PublicSans-Light.ttf') format('truetype');
  font-style: normal;
  font-weight: 300;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-LightItalic')
    url('~static/fonts/PublicSans-LightItalic.woff2') format('woff2')
    url('~static/fonts/PublicSans-LightItalic.woff') format('woff')
    url('~static/fonts/PublicSans-LightItalic.ttf') format('truetype');
  font-style: italic;
  font-weight: 300;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-Regular') url('~static/fonts/PublicSans-Regular.woff2')
    format('woff2') url('~static/fonts/PublicSans-Regular.woff') format('woff')
    url('~static/fonts/PublicSans-Regular.ttf') format('truetype');
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-Italic') url('~static/fonts/PublicSans-Italic.woff2')
    format('woff2') url('~static/fonts/PublicSans-Italic.woff') format('woff')
    url('~static/fonts/PublicSans-Italic.ttf') format('truetype');
  font-style: italic;
  font-weight: 400;
}

@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-Medium') url('~static/fonts/PublicSans-Medium.woff2')
    format('woff2') url('~static/fonts/PublicSans-Medium.woff') format('woff')
    url('~static/fonts/PublicSans-Medium.ttf') format('truetype');
  font-style: normal;
  font-weight: 500;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-MediumItalic')
    url('~static/fonts/PublicSans-MediumItalic.woff2') format('woff2')
    url('~static/fonts/PublicSans-MediumItalic.woff') format('woff')
    url('~static/fonts/PublicSans-MediumItalic.ttf') format('truetype');
  font-style: italic;
  font-weight: 500;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-SemiBold')
    url('~static/fonts/PublicSans-SemiBold.woff2') format('woff2')
    url('~static/fonts/PublicSans-SemiBold.woff') format('woff')
    url('~static/fonts/PublicSans-SemiBold.ttf') format('truetype');
  font-style: normal;
  font-weight: 600;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-SemiBoldItalic')
    url('~static/fonts/PublicSans-SemiBoldItalic.woff2') format('woff2')
    url('~static/fonts/PublicSans-SemiBoldItalic.woff') format('woff')
    url('~static/fonts/PublicSans-SemiBoldItalic.ttf') format('truetype');
  font-style: italic;
  font-weight: 600;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-Bold') url('~static/fonts/PublicSans-Bold.woff2')
    format('woff2') url('~static/fonts/PublicSans-Bold.woff') format('woff')
    url('~static/fonts/PublicSans-Bold.ttf') format('truetype');
  font-style: normal;
  font-weight: 700;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-BoldItalic')
    url('~static/fonts/PublicSans-BoldItalic.woff2') format('woff2')
    url('~static/fonts/PublicSans-BoldItalic.woff') format('woff')
    url('~static/fonts/PublicSans-BoldItalic.ttf') format('truetype');
  font-style: italic;
  font-weight: 700;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-ExtraBold')
    url('~static/fonts/PublicSans-ExtraBold.woff2') format('woff2')
    url('~static/fonts/PublicSans-ExtraBold.woff') format('woff')
    url('~static/fonts/PublicSans-ExtraBold.ttf') format('truetype');
  font-style: normal;
  font-weight: 800;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-ExtraBoldItalic')
    url('~static/fonts/PublicSans-ExtraBoldItalic.woff2') format('woff2')
    url('~static/fonts/PublicSans-ExtraBoldItalic.woff') format('woff')
    url('~static/fonts/PublicSans-ExtraBoldItalic.ttf') format('truetype');
  font-style: italic;
  font-weight: 800;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-Black') url('~static/fonts/PublicSans-Black.woff2')
    format('woff2') url('~static/fonts/PublicSans-Black.woff') format('woff')
    url('~static/fonts/PublicSans-Black.ttf') format('truetype');
  font-style: normal;
  font-weight: 900;
}
@font-face {
  font-family: 'Public Sans';
  src: local('PublicSans-BlackItalic')
    url('~static/fonts/PublicSans-BlackItalic.woff2') format('woff2')
    url('~static/fonts/PublicSans-BlackItalic.woff') format('woff')
    url('~static/fonts/PublicSans-BlackItalic.ttf') format('truetype');
  font-style: italic;
  font-weight: 900;
}

:root {
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  --rect-box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  --rect-border-radius: 0.1em;
  --color-primary: #3759e2;
  --color-secondary: #213586;
  --color-accent: #fff;
  --sidebar-width: 1px;
  --sidebar-width-expand: 16rem;
  font-size: 14px;
}

html {
  word-spacing: 1px;
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

body {
  min-height: calc(0.25em + 100%);
  font-family: 'Public Sans', var(--font-family-base);
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 300;
}

@supports (font-variation-settings: normal) {
  body {
    font-family: 'Public Sans VF', var(--font-family-base);
  }
}

html,
body.unready {
  height: 100%;
}

body {
  background-color: var(--color-primary);
  color: #fff;
}

/*html {
  overflow: scroll;
  overflow-x: hidden;
}*/
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #ff0000;
}

/*h1 {
  font: 300 200%/0.9 'Public Sans VF', sans-serif;
}*/
em {
  font-style: italic;
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
  width: var(--sidebar-width);
  background-color: #3355dd;
  height: 100%;
  position: fixed;
  z-index: 5;
  font-weight: 200;
  font-size: 95%;
}

.left-sidebar {
  display: none;
}

.page {
  position: fixed;
  width: calc(100% - var(--sidebar-width));
  margin: 0 auto;
  left: var(--sidebar-width);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  z-index: 1;
  height: 100%;
  transition: filter 0.3s ease-in, transform 0.4s ease-out;
  font-size: 125%;
  flex-direction: column;
  padding: 2rem 1.5rem;
}

@media screen and (min-width: 74.99em) {
  .left-sidebar {
    display: flex;
    width: var(--sidebar-width-expand);
  }
  .page {
    width: calc(100% - var(--sidebar-width-expand));
    left: var(--sidebar-width-expand);
  }
}

@media screen and (min-width: 34.3125em) {
  .page {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.page h1.title-date {
  font-size: 1rem;
  margin-bottom: 1rem;
}

body.page-blur .page {
  filter: blur(5px);
  transform: scale(1.1);
}

.writing {
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
}

@media screen and (min-width: 40.625em) {
  .writing {
    flex-direction: row;
  }
}

.projects {
  padding: 1rem;
  text-align: left;
}
@media screen and (min-width: 75em) {
  .projects {
    width: 27em;
  }
  .writing .projects {
    flex: none;
  }
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
  font-size: 1rem;
  color: #6f6f6f;
}
.projects .item {
  margin-bottom: 0.5rem;
}
.projects .underline {
  border-bottom: 0.15em dotted #8997ce;
}

.page .content,
.page .projects {
  font-size: 1.1rem;
  background-color: rgba(255, 255, 255, 0.81);
  background-image: linear-gradient(177deg, #fff, #e4dddd, #d5d9e8, #c1cbf5);
  padding: 1rem 1.5rem 0.5rem;
  box-shadow: var(--rect-box-shadow);
  border-radius: var(--rect-border-radius);
  color: #020304;
}

.page .content {
  bottom: 5%;
  position: relative;
  z-index: 4;
  right: -1px;
}

@media screen and (min-width: 74.99em) {
  .page .writing .content {
    flex: 1;
  }
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

.fade-1-enter-active,
.fade-1-leave-active {
  transition: opacity 1s;
}
.fade-1-enter,
.fade-1-leave-active {
  opacity: 0;
}
.fade-2-enter-active,
.fade-2-leave-active {
  transition: opacity 1.25s;
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

.slide-right-enter-active {
  transition: all 0.3s ease;
}
.slide-right-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(2em);
  opacity: 0;
}

.slide-top-enter-active {
  transition: all 0.3s ease;
}
.slide-top-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-top-enter,
.slide-top-leave-to {
  transform: translateY(2em);
  opacity: 0;
}

.slide-bottom-enter-active {
  transition: all 0.3s ease;
}
.slide-bottom-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  transform: translateY(-2em);
  opacity: 0;
}

.device-no-support {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: var(--color-primary);
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding: 1rem;
  text-align: center;
}

@media screen and (min-width: 24em) {
  .device-no-support {
    padding: 3em;
    font-size: 1.5em;
  }
}
@media screen and (min-width: 36em) {
  .device-no-support {
    padding: 5em;
  }
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
