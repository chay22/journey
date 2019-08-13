<template>
  <div id="page-jan-2019" class="page">
    <h1 class="title-date">Jun 2019</h1>
    <transition name="fade-2" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div class="item">
            <span class="underline">ERP</span>. My unrespected-milestones
            self-project. Still learning.
          </div>
          <div class="item">
            <span class="underline">Kindergarten registration</span>. A college
            student task. I know, I shouldn't write this, but. Built with
            CodeIgniter 3.1.10.
          </div>
          <div
            class="item"
            @mouseenter="sewagiTitle = 'Sewagi'"
            @mouseleave="sewagiTitle = 'Bug fixing'"
          >
            <span class="underline">{{ sewagiTitle }}</span
            >. Apartment & home rental. I had mostly fixed pages styling issues.
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
      title: 'Chay - Jun 2019',
      description: 'Chay journey on June 2019',
      slug: 'jun-2019'
    })

    return {
      title: SEO.title(),
      meta: SEO.meta()
    }
  },
  data() {
    return {
      sewagiTitle: 'Bug fixing'
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
  bottom: 50%;
  height: 20%;
  z-index: -1;
  transform: rotate(-10deg) scale(1.1);
}
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-color: #3759e2;
  content: '';
  bottom: 56%;
  height: 20%;
  z-index: -1;
  transform: rotate(13deg) scale(1.1);
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
