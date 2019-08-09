<template>
  <div id="page-done" class="page">
    <transition name="slide-left" appear>
      <div class="fun-conclusion">
        <div class="now-you-know">
          NOW, YOU KNOW
        </div>
        <div class="my-grammar">
          My <span class="grammar">grammar</span> sucks
        </div>
        <div class="but">but anyway,</div>
      </div>
    </transition>
    <transition name="slide-right" appear>
      <div class="conclusion">
        <p>
          The list (of projects) was carefully picked based on amount of fees I
          received, knowledge I acquired and — most importantly — stuffs I
          remember. There are some more — according to programming — things
          (which I might later put them on the list) I've done. Such as WiFi
          reconnector, Arduino-involved stuffs, WhatsApp broadcaster & auto
          reply, chat bot (including WhatsApp), etc.
        </p>
        <p>
          I'll try to list them all while fixing my English at my leisure.
        </p>
      </div>
    </transition>
    <div class="thanks-to">
      <transition name="slide-bottom" appear>
        <h2>Thanks to:</h2>
      </transition>
      <transition name="fade-2" appear>
        <div class="thanks-list">
          <div class="thanks">
            GitHub
          </div>
          <div class="thanks">
            Vue.js
          </div>
          <div class="thanks">
            Nuxt.js
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
      </transition>
    </div>
    <transition name="fade-2" appear>
      <div class="build-time">
        <div class="created-at">
          <span class="label-time">Created at</span>
          <span class="value-time">8 Aug 2019</span>
        </div>
        <div class="updated-at">
          <span class="label-time">Updated at</span>
          <span class="value-time">9 Aug 2019</span>
        </div>
      </div>
    </transition>
    <mamang-loader class="mamang" style="display: none;" />
  </div>
</template>

<script>
import MamangLoader from '~/components/MamangLoader'

export default {
  components: {
    MamangLoader
  },
  head() {
    const SEO = this.$seo.set({
      title: 'Chay - Thank you!',
      description: 'Thank you for reading my journey!',
      slug: 'done'
    })

    return {
      title: SEO.title(),
      meta: SEO.meta()
    }
  },
  transition(to, from) {
    if (!from) {
      return 'slide-up'
    }

    return 'slide-down'
  },
  mounted() {
    document.body.style.overflow = 'hidden'
    this.$nextTick(() => {
      setTimeout(() => {
        window.scrollTo(0, 2)
        this.$store.dispatch('pages/setLastScrollTop')
        this.$store.dispatch('pages/ready')
        window.scrollTo(0, 2)
        setTimeout(() => {
          this.$el.querySelector('.mamang').style.display = ''
        }, 500)
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
  justify-content: initial;
  align-items: initial;
  padding-top: 6rem;
}
.page:before {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(-90deg, #213586, #1c3492, #2d46ab, #2641ab);
  content: '';
  bottom: 0;
  height: 30%;
  z-index: -1;
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
  font-size: 1rem;
  font-weight: 350;
}
.build-time {
  position: absolute;
  font-size: 0.7rem;
  bottom: 1em;
  right: 1em;
  color: #0e1a4c;
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

.mamang {
  z-index: -1;
  position: fixed;
  bottom: -50%;
  animation: dance 2.5s 10s infinite alternate ease-in-out;
}
@keyframes dance {
  from,
  49% {
    transform-origin: -450% 100%;
  }
  50%,
  75%,
  to {
    transform-origin: 550% 100%;
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(10deg);
  }
}
</style>
