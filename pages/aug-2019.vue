<template>
  <div id="page-jan-2019" class="page">
    <h1 class="title-date">Aug 2019</h1>
    <transition name="slide-left" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div class="item">
            <span class="underline">Simple POS</span>. A very simple Point of
            Sale system. Built with Laravel 5.8.
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
      title: 'Chay - Aug 2019',
      description: 'Chay journey on Aug 2019',
      slug: 'aug-2019'
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
      }, 300)
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
  bottom: 20%;
  height: 76%;
  z-index: -1;
  transform: rotate(-5deg) scale(1.1);
}
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-color: #3759e2;
  bottom: -29%;
  height: 100%;
  z-index: -1;
  transform: rotate(53deg) scale(1.51);
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
