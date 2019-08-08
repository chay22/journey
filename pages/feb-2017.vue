<template>
  <div id="page-feb-2017" class="page">
    <h1>Feb 2017</h1>
    <transition name="fade-2" appear>
      <div class="no-content">
        <h2>I'm still writing this one.</h2>
      </div>
    </transition>
    <transition name="slide-left" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div class="item">
            <span class="underline">FirstMedia</span>
          </div>
          <div
            class="item"
            @mouseenter="karenAndChloeTitle = 'www.karenandchloe.com'"
            @mouseleave="karenAndChloeTitle = 'Wordpress maintenance'"
          >
            <span class="underline">{{ karenAndChloeTitle }}</span
            >. Re-continue maintenance and bug fixing which mostly about pages
            styling.
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
      karenAndChloeTitle: 'Wordpress maintenance'
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
  right: -2%;
  width: 35%;
  background-image: linear-gradient(328deg, #213792, #2440ad, #3d56bb, #3254dc);
  content: '';
  top: 0;
  height: 100%;
  z-index: -1;
  opacity: 0;
  animation: bgslide 0.5s 0.3s forwards linear;
}
.page:after {
  content: '';
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0%;
  right: 18%;
  background-color: #3759e2;
  transform: rotate(30deg) scale(1.2);
  z-index: -1;
  animation: bgslide 0.5s 0.3s forwards linear;
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
    margin-right: -5em;
  }
  to {
    opacity: 1;
    margin-right: 0;
  }
}
</style>
