<template>
  <div id="page-dec-2016" class="page">
    <h1>Dec 2016</h1>
    <transition name="fade-2" appear>
      <div class="content">
        <p>
          Another new experience. I had to bring what I've learned months before
          into reality. A javascript framework involved project! I had to chose
          Vue.js. Because, it's simple. Easy to understand. Especially for its
          below version 1 release. It also is being offered by Laravel. I had to
          build a mobile (android) apps. And chose hybrid to speed the creation
          process as the context.
        </p>
        <p>
          Actually, It wasn't a first glance conclusion. I've tried to build it
          natively. But, my poor laptop kept refusing the technologies I was
          going to fight. Not to mention the deadline that I had to respect. And
          learning curves which I thought too steep to dive in. Unfortunately,
          the projects were discontinued. I failed to reach the deadline I
          should care much.
        </p>
        <p>
          Another story, at the same month, I had to continue build a Wordpress
          plugin that had bunch of criteria to show or hide its available
          features. The thing is, I think that time I've jumped my
          decision-making skill to the next level. It's either continue or
          rebuild.
        </p>
      </div>
    </transition>
    <transition name="slide-left" appear>
      <div class="projects scrollable">
        <h2 class="title">Projects</h2>
        <div class="list">
          <div
            class="item"
            @mouseenter="gapensiTitle = 'Gapensi Kota Bandung'"
            @mouseleave="gapensiTitle = 'Laravel CMS & API server'"
          >
            <span class="underline">{{ gapensiTitle }}</span>
            (abandoned). A CMS built from scratch. This also serves API for 3rd
            party apps to consume. Built with Laravel 5.2.
          </div>
          <div
            class="item"
            @mouseenter="
              gapensiMobileTitle = 'Gapensi Kota Bandung (mobile apps)'
            "
            @mouseleave="gapensiMobileTitle = 'Hybrid mobile apps'"
          >
            <span class="underline">{{ gapensiMobileTitle }}</span>
            (abandoned). Kind of news serving apps. Built with Vue.js and
            Cordova.
          </div>
          <div
            class="item"
            @mouseenter="mmoArmoryTitle = 'mmo-armory.com'"
            @mouseleave="mmoArmoryTitle = 'Wordpress plugin'"
          >
            <span class="underline">{{ mmoArmoryTitle }}</span
            >. Ecommerce selling services. The plugin must properly show service
            to sell, show available packages based on criteria given, handles
            payment.
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
      gapensiTitle: 'Laravel CMS & API server',
      gapensiMobileTitle: 'Hybrid mobile apps',
      mmoArmoryTitle: 'Wordpress plugin'
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
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(-90deg, #213586, #1c3492, #2d46ab, #2641ab);
  content: '';
  top: 12%;
  height: 30%;
  z-index: -1;
  transform: rotate(-2deg) scale(1.5);
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
