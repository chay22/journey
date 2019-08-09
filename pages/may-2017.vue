<template>
  <div id="page-may-2017" class="page">
    <h1 class="title-date">May 2017</h1>
    <transition name="slide-right" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div
            class="item"
            @mouseenter="gwoodsTitle = 'gwoods.co.id'"
            @mouseleave="gwoodsTitle = 'Wordpress plugin'"
          >
            <span class="underline">{{ gwoodsTitle }}</span
            >. A user referral system plugin.
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
      title: 'Chay - May 2017',
      description: 'Chay journey on May 2017',
      slug: 'may-2017'
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
      gwoodsTitle: 'Wordpress plugin'
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'

    this.$nextTick(() => {
      setTimeout(() => {
        window.scrollTo(0, 2)
        this.$store.dispatch('pages/setLastScrollTop')
        this.$store.dispatch('pages/ready')
        window.scrollTo(0, 2)
        window.scrollTo(0, 2)
      }, 300)
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
  background-image: linear-gradient(-29deg, #213586, #1c3492, #213484, #2641ab);
  content: '';
  top: 41%;
  height: 18%;
  z-index: -1;
  opacity: 0;
  transform: rotate(1deg) scale(1.2);
  animation: bgslide 0.1s 0.2s forwards linear;
}
@keyframes bgslide {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
