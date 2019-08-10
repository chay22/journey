<template>
  <div id="page-jan-2016" class="page">
    <h1 class="title-date">Jan 2016</h1>
    <div class="writing">
      <div class="content-wrapper">
        <transition name="slide-left" appear>
          <div class="content">
            <p>
              Exceeded amount of curiousity had whispered me to get me taught my
              self about how to (accidentally) build a website. Thrown errors by
              buggy Wordpress (plugin) lead me to documentations which should
              procedurally read pieces to pieces. I created a Stack Overflow
              account. Purposedly to learn by answering (with non-sense
              solutions). A month right before I started to create a fully
              working site from scratch.
            </p>
            <p>
              Well, actually, I had copied bunch of snippets from other works.
              But, that time, I knew (slightly) what I pasted.
            </p>
          </div>
        </transition>

        <transition name="slide-top" appear>
          <a
            href="https://stackoverflow.com/users/5816907/chay22"
            target="_blank"
            class="so-"
            @mouseenter="showSoTooltip = true"
            @mouseleave="showSoTooltip = false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
              <path
                class="st0"
                d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"
              />
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
      </div>
      <transition name="slide-right" appear>
        <div class="projects">
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
              (abandoned) which did similar job with above. But, automated.
              Bunch of <code>if/else</code> and <code>mt_rand()</code> got me
              forcefully deleted the source code for giving me an
              <em>unorganic behavior</em> for one account. Built natively with
              PHP and MySQL.
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
  </div>
</template>

<script>
export default {
  head() {
    const SEO = this.$seo.set({
      title: 'Chay - Jan 2016',
      description: 'Chay journey on January 2016',
      slug: 'jan-2016'
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
      showSoTooltip: false
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
      }, 200)
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
.writing {
  align-items: flex-start;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 5%;
  right: 1px;
}
@media screen and (min-width: 74.99em) {
  .content-wrapper {
    flex: 1;
  }
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
.so- {
  text-align: right;
  width: 5rem;
  height: 5rem;
  border: 0.3em solid #0e1d58;
  box-shadow: var(--rect-box-shadow);
  position: relative;
  margin: 1rem auto;
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
  bottom: -3.5em;
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
  top: 0.35em;
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

<style>
@media screen and (max-width: 50.245em) {
  #page-jan-2016 ~ .device-no-support {
    display: flex;
  }
}
</style>
