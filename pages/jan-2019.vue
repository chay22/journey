<template>
  <div id="page-jan-2019" class="page">
    <h1>Jan 2019</h1>
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
.page {
  flex-direction: column;
  padding: 2rem 4em;
}
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
h1 {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.content {
  margin-bottom: 2rem;
}
.so- {
  width: 5rem;
  height: 5rem;
  border: 0.3em solid #162c84;
  box-shadow: 0px 1px 5px 0px rgba(60, 60, 60, 0.5);
}
.st0 {
  fill: #bcbbbb;
}
.st1 {
  fill: #f48023;
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
