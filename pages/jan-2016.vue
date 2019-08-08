<template>
  <div id="page-jan-2016" class="page">
    <h1>Jan 2016</h1>
    <transition name="fade-2" appear>
      <div class="content">
        <p>
          Exceeded amount of curiousity had whispered me to get me taught by my
          self about how to (accidentally) build a website. Thrown errors by
          buggy Wordpress (plugin) lead me to documentations which should
          procedurally read pieces to pieces. I created a Stack Overflow
          account. Purposedly to learn by answering, with non-sense solutions. A
          month right before I started to create a fully working site from
          scratch.
        </p>
        <p>
          Well, actually, I had copied bunch of snippets from other works. But,
          that time, I knew (slightly) what I pasted.
        </p>
      </div>
    </transition>
    <transition name="fade-3" appear>
      <a
        href="https://stackoverflow.com/users/5816907/chay22"
        target="_blank"
        class="so-"
        @mouseenter="showSoTooltip = true"
        @mouseleave="showSoTooltip = false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
          <path class="st0" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z" />
          <path
            class="st1"
            d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"
          />
        </svg>
        <div v-if="showSoTooltip" class="tooltip">
          <span class="tooltip-text">StackOverflow</span>
          <span class="tooltip-goto">⟶</span>
        </div>
      </a>
    </transition>
    <transition name="slide-left" appear>
      <div
        class="projects scrollable"
        style="overflow: hidden;"
        @mouseenter="onProjectMouseEnter"
        @mouseleave="onProjectMouseLeave"
      >
        <h2 class="title">Projects</h2>
        <div class="list">
          <div class="item">
            <span class="underline">Twitter Tool</span>
            which provided bulk activities such as follow, unfollow, retweet,
            favorite (now "like") and of course tweet. Built natively with PHP
            and MySQL.
          </div>
          <div class="item">
            <span class="underline">Automated Instagram Activity</span>
            (abandoned) which did similar job with above. But, automated. Bunch
            of <code>if/else</code> and <code>mt_rand()</code> got me forcefully
            deleted the source code for giving me an
            <em>unorganic behavior</em> for one account. Built natively with PHP
            and MySQL.
          </div>
          <div class="item">
            <span class="underline">Personal Website</span>
            of mine. Filled with unimportant blog content. But, hey! I learned
            SCSS, here! Built with Laravel and its bundling technologies.
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
      showSoTooltip: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        window.scrollTo(0, 2)
        this.$store.dispatch('pages/setLastScrollTop')
        this.$store.dispatch('pages/ready')
        this.$el.querySelector('.scrollable').style.overflow = ''
      }, 100)
    })
  },
  beforeDestroy() {
    document.body.style.overflow = ''
    this.$store.dispatch('pages/notReady')
  },
  methods: {
    onProjectMouseEnter() {
      document.body.style.overflow = 'hidden'
    },
    onProjectMouseLeave() {
      document.body.style.overflow = ''
    }
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
  background-image: linear-gradient(-90deg, #213586, #1c3492, #2d46ab, #2641ab);
  content: '';
  bottom: 37%;
  height: 30%;
  z-index: -1;
  transform: rotate(10deg) scale(1.1);
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
h1 {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.content {
  margin-bottom: 2rem;
}
.so- {
  text-align: right;
  width: 5rem;
  height: 5rem;
  border: 0.3em solid #0e1d58;
  box-shadow: var(--rect-box-shadow);
  margin-left: auto;
  position: relative;
}
.st0 {
  fill: #bcbbbb;
}
.st1 {
  fill: #f48023;
}
.tooltip {
  background-color: transparent;
  color: #fff;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  width: 8.5em;
  margin-right: auto;
  text-align: left;
  position: absolute;
  left: -2.75em;
  bottom: -3em;
  box-shadow: 3px 4px 1px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  transform: scale(0, 1);
  animation: tooltip 0.125s cubic-bezier(0, 0.5, 0.5, 1) forwards;
  transform-origin: 100% !important;
}
.tooltip:before {
  content: '';
  background-color: #1d1d1d;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0.3em;
  left: 0;
  z-index: -1;
  transform: rotate(-5deg);
}
.tooltip-text {
  position: relative;
  top: 0.2em;
}
.tooltip-goto {
  transform: rotate(-40deg);
  display: block;
  position: absolute;
  top: -0.125em;
  right: -0em;
}
@keyframes tooltip {
  0% {
    transform: scale(0, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes tooltip-text {
  from {
    margin-left: 15px;
  }
  to {
    margin-left: 0;
  }
}
</style>
