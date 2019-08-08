<template>
  <div id="page-oct-2016" class="page">
    <h1 class="title-date">Oct 2016</h1>
    <transition name="fade-2" appear>
      <div class="content">
        <p>
          An usually-remote mate had coming to the party. We had in charge to
          keep building a hotel management system together. A thing that was I
          dreamed of. Sharing codes! The project was started on ⁠— if I'm not
          mistaken ⁠— 2015. A complex building inapropiately designed had feeded
          us with full of stinky dressing spaghetti. Thus, we had reached
          maximum level of laziness carried for next couple of months. No, not
          month. Year!
        </p>
        <p>
          People mostly learn by mistakes. That's why that time I've keep
          reading on how system should properly be designed. And have to keep
          loving this kind of work.
        </p>
        <p>
          Also, since then, one of my dream project I want to create is
          <abbr title="Enterprise resource planning">ERP</abbr>. And that's why
          I (re)try to learn this domain from last month (Jul 2019). All by my
          self.
        </p>
      </div>
    </transition>
    <transition name="slide-left" appear>
      <div class="projects">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div class="item">
            <span class="underline">Hotel Management System</span>
            (abandoned) with ability to handle purchases, sales through
            reservation, sales by outlets, stock management, HRM, everything.
            Built with Laravel 4.2.
          </div>
          <div class="item">
            <span class="underline"
              >Hotel Management System (mini version)</span
            >
            (abandoned) same as above. But with some of unneeded business
            processes been plugged out. It's not modular. Thus, plugging out
            modules really took much efforts.
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
      title: 'Chay - Oct 2016',
      description: 'Chay journey on October 2016',
      url: '/oct-2016'
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
  padding-top: 1rem;
}
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(-90deg, #213586, #1c3492, #2d46ab, #2641ab);
  content: '';
  top: 22%;
  height: 40%;
  z-index: -1;
  transform: rotate(25deg) scale(1.5);
}
</style>
