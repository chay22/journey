<template>
  <div id="page-sep-2016" class="page">
    <h1>Sep 2016</h1>
    <transition name="fade-2" appear>
      <div class="content">
        <p>
          I joined a team. A team of freelancers. The time I joined, we got more
          than 10 projects waiting to be done. It's funny, though. Funny because
          we were 4. Oh, 3 actually. The freshgrad were coming on the next
          month.
        </p>
        <p>
          I had thinking about it, there is no chance for us to finish them all
          within a month. Or two. Even three. I didn't care about it that much
          at that time. As a beginner, had to handle a project all by my self
          already gave me all I wanted to do. More than enough.
        </p>
        <p>
          I started it with a web-based apps, namely Work and Progress Order
          system. It recorded customer data, what their order of products and/or
          services, built contracts to be signed digitally, had mailed list of
          email which could be massively sent.
        </p>
        <p>
          I couldn't tell how much I feel so much pleased that I could actually
          make something bigger than what I usually think of.
        </p>
      </div>
    </transition>
    <transition name="slide-left" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div class="item">
            <span class="underline">Platypus WPO</span>
            which handled work and progress order in photography type of
            business. Built with Laravel as the engine, AdminLTE as frontend
            view backbone and jQuery as its view framework.
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
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(-90deg, #213586, #1c3492, #2d46ab, #2641ab);
  content: '';
  bottom: 37%;
  height: 30%;
  z-index: -1;
  transform: rotate(-5deg) scale(1.1);
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
</style>
