<template>
  <div id="page-jan-2019" class="page">
    <h1 class="title-date">Apr 2019</h1>
    <transition name="slide-top" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div class="item">
            <span class="underline">Rigid pavement procurement system</span>.
            Built with Laravel 5.8.
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
      title: 'Chay - Apr 2019',
      description: 'Chay journey on April 2019',
      slug: 'apr-2019'
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
  content: '';
  bottom: 10%;
  height: 20%;
  z-index: -1;
  transform: rotate(-1deg) scale(1.1);
}
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-color: #3759e2;
  content: '';
  bottom: 26%;
  height: 20%;
  z-index: -1;
  transform: rotate(3deg) scale(1.1);
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
