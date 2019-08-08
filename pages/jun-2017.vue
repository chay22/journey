<template>
  <div id="page-jun-2017" class="page">
    <h1 class="title-date">Jun 2017</h1>
    <transition name="fade-2" appear>
      <div class="no-content">
        <h2>I'm still writing this one.</h2>
      </div>
    </transition>
    <transition name="slide-left" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div
            class="item"
            @mouseenter="thetextimaTitle = 'thetextima.com'"
            @mouseleave="thetextimaTitle = 'Wordpress website'"
          >
            <span class="underline">{{ thetextimaTitle }}</span> (discontinued).
            A company profile.
          </div>
          <div
            class="item"
            @mouseenter="
              platypushPhotographyTitle = 'www.platypusphotography.com'
            "
            @mouseleave="platypushPhotographyTitle = 'Drupal maintenance'"
          >
            <span class="underline">{{ platypushPhotographyTitle }}</span
            >.
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  head() {
    const SEO = this.$seo.set({
      title: 'Chay - Jun 2017',
      description: 'Chay journey on June 2017',
      url: '/jun-2017'
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
  data() {
    return {
      thetextimaTitle: 'Wordpress website',
      platypushPhotographyTitle: 'Drupal maintenance'
    }
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
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(-30deg, #213586, #1c3492, #213484, #2641ab);
  content: '';
  bottom: 11%;
  height: 25%;
  z-index: -1;
  opacity: 0;
  transform: rotate(1deg) scale(1.2);
  animation: bgslide 0.1s 0.2s forwards linear;
}
@keyframes bgslide {
  0% {
    opacity: 0;
    margin-bottom: -1em;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    margin-bottom: 0;
  }
}
</style>
