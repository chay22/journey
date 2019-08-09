<template>
  <div id="page-dec-2017" class="page">
    <h1 class="title-date">Dec 2017</h1>
    <transition name="slide-top" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div
            class="item"
            @mouseenter="sangriaResortSpa = 'SanGria Resort Spa website'"
            @mouseleave="sangriaResortSpa = 'Wordpress website'"
          >
            <span class="underline">{{ sangriaResortSpa }}</span
            >. A wordpress website with its main ability to create reservation
            through hotel management system.
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
      title: 'Chay - Dec 2017',
      description: 'Chay journey on December 2017',
      slug: 'dec-2017'
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
      sangriaResortSpa: 'Wordpress website'
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
  background-image: linear-gradient(
    -217deg,
    #213586,
    #1c3492,
    #2d46ab,
    #2641ab
  );
  content: '';
  top: 0;
  height: 47%;
  z-index: -1;
  opacity: 0;
  transform: rotate(-3deg) scale(1.2);
  animation: bgslide 0.1s 0.2s forwards linear;
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
