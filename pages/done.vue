<template>
  <div id="page-done" class="page">
    <div class="fun-conclusion">
      <div class="now-you-know">
        NOW, YOU KNOW
      </div>
      <div class="my-grammar">
        My <span class="grammar">grammar</span> sucks
      </div>
      <div class="but">but anyway,</div>
    </div>
    <div class="conclusion">
      <p>
        The list (of projects) was carefully picked based on amount of fees I
        received, knowledge I acquired and — most importantly — stuffs I
        remember. There are some more — according to programming — things (which
        I might later put them on the list) I've done. Such as WiFi reconnector,
        Arduino-involved stuffs, WhatsApp broadcaster & auto reply, chat bot
        (including WhatsApp), etc.
      </p>
      <p>
        I'll try to list them all while fixing my English at my leisure.
      </p>
    </div>
    <div class="thanks-to">
      <h2>Thanks to:</h2>
      <div class="thanks-list">
        <div class="thanks">
          Vue.js
        </div>
        <div class="thanks">
          Nuxt.js
        </div>
        <div class="thanks">
          Velocity.js
        </div>
        <div class="thanks">svgp{{ 'o' }}{{ 'r' }}{{ 'n' }}</div>
        <div class="thanks">
          Lodash
        </div>
        <div class="thanks">
          Babel
        </div>
        <div class="thanks">
          ESLint
        </div>
        <div class="thanks">
          Prettier
        </div>
        <div class="thanks">
          Husky
        </div>
        <div class="thanks">
          Jest
        </div>
        <div class="thanks">
          v-fonts.com
        </div>
        <div class="thanks">
          @typeler
        </div>
        <div class="thanks">
          @LeaVerou
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-up'
    }

    return 'slide-down'
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        window.scrollTo(0, 2)
        this.$store.dispatch('pages/setLastScrollTop')
        this.$store.dispatch('pages/ready')
      }, 100)
    })
  },
  beforeDestroy() {
    this.$store.dispatch('pages/notReady')
  }
}
</script>

<style scoped>
.page {
  flex-direction: column;
  padding: 2rem 4em;
  justify-content: initial;
  align-items: initial;
}
.page:before {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(-90deg, #213586, #1c3492, #2d46ab, #2641ab);
  content: '';
  bottom: 0;
  height: 40%;
  z-index: -1;
}
h1 {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.now-you-know {
  font-size: 2.475rem;
  font-weight: 900;
}
.my-grammar {
  font-size: 2rem;
  letter-spacing: 0.175em;
  font-weight: 200;
}
.my-grammar .grammar {
  font-weight: 350;
  position: relative;
  background-color: #fff;
  color: #3759e2;
  padding-left: 0.25em;
}
.but {
  font-weight: 500;
  font-size: 1.2em;
}
.conclusion {
  width: 60%;
  margin-left: auto;
  font-weight: 300;
}
.thanks-to h2 {
  font-weight: 800;
  font-size: 2em;
  margin-bottom: 1rem;
}
.thanks-list {
  display: flex;
  flex-wrap: wrap;
}
.thanks-list > .thanks {
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 350;
}
@keyframes bgslide {
  from {
    opacity: 0;
    margin-left: -30em;
  }
  to {
    opacity: 1;
    margin-left: 0;
  }
}
</style>
