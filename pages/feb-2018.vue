<template>
  <div id="page-feb-2018" class="page">
    <h1 class="title-date">Feb 2018</h1>
    <transition name="slide-top" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div class="item">
            <span class="underline">Live Quiz</span>. There was a segment for an
            company birthday event party made by PT. United Tractors Pandu
            Engineering involved a live quiz where attendees are able to answer
            the questions appeared on big screen. Built with Laravel 5.5 as CMS,
            Reveal.js as main framework to show the questions and custom Vue.js
            as CMS view.
          </div>
          <div class="item">
            <span class="underline">Live Quiz</span>. A local birthday party. No
            CMS.
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
      title: 'Chay - Feb 2018',
      description: 'Chay journey on February 2018',
      slug: 'feb-2018'
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
.page:before {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(-90deg, #213586, #1c3492, #2d46ab, #2641ab);
  content: '';
  bottom: 30%;
  height: 30%;
  z-index: -1;
  transform: rotate(7deg) scale(1.1);
}
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-color: #3759e2;
  content: '';
  bottom: 45%;
  height: 60%;
  z-index: -1;
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
