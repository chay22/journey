<template>
  <div id="page-jan-2019" class="page">
    <h1 class="title-date">Jan 2019</h1>
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
            @mouseenter="ulpBulunganTitle = 'Kab. Bulungan, Kalimantan Utara'"
            @mouseleave="ulpBulunganTitle = 'Government procurement system'"
          >
            <span class="underline">{{ ulpBulunganTitle }}</span
            >. Built with Laravel 5.6.
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
      title: 'Chay - Jan 2019',
      description: 'Chay journey on January 2019',
      url: '/jan-2019'
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
      ulpBulunganTitle: 'Government procurement system'
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
.page:before {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(90deg, #213586, #1c3492, #2d46ab, #2641ab);
  content: '';
  top: 0;
  height: 30%;
  z-index: -1;
  transform: rotate(4deg) scale(1.1);
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
