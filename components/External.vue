<template>
  <div class="external" :class="{ open: isOpened }">
    <div class="external-title">{{ title }}</div>
    <div class="external-action">
      <a
        href="https://github.com/chay22"
        target="_blank"
        class="external-item external-1"
        @mouseenter="title = 'Signed up here just to get trial offers'"
        @mouseleave="title = ''"
      >
        <svg
          id="si-logos-github-icon"
          viewBox="0 0 256 250"
          preserveAspectRatio="xMidYMid"
          width="100%"
          height="100%"
        >
          <path
            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403z"
            fill="#161614"
          ></path>
        </svg>
      </a>
      <a
        :href="email"
        class="external-item external-2"
        rel="nofollow"
        @mouseenter="onMouseEnter2"
        @mouseleave="onMouseLeave2"
      >
        <svg
          id="si-logos-google-gmail"
          viewBox="0 0 256 194"
          preserveAspectRatio="xMidYMid"
          width="100%"
          height="100%"
        >
          <path
            d="M238.834 193.595H16.154C7.52 193.595.25 186.551.25 177.689V16.815C.249 8.18 7.292.909 16.154.909h222.68c8.634 0 15.906 7.044 15.906 15.906v160.874c0 8.862-7.044 15.906-15.906 15.906z"
            fill="#E3E3E3"
          ></path>
          <path
            d="M32.06 193.595l95.207-76.575.682-4.09-98.161-70.666-.228 147.923 2.5 3.408z"
            opacity=".1"
            fill="#231F20"
          ></path>
          <path
            d="M16.154 193.595c-8.862 0-15.905-7.044-15.905-15.906V16.587c0-8.861 7.043-10.452 15.905-10.452 8.862 0 15.906 1.818 15.906 10.452v177.008H16.154z"
            fill="#D54B3D"
          ></path>
          <path
            d="M16.154 8.407c11.361 0 13.634 3.409 13.634 8.18v174.736H16.154c-7.498 0-13.633-6.135-13.633-13.634V16.587c0-4.999 2.272-8.18 13.633-8.18zm0-2.272C7.292 6.135.25 7.953.25 16.587V177.69c0 8.862 7.043 15.906 15.905 15.906H32.06V16.587c0-8.861-7.044-10.452-15.906-10.452z"
            fill="#D72B27"
          ></path>
          <path
            d="M238.834 193.595h-15.906V16.133c0-8.862 7.044-9.998 15.906-9.998 8.862 0 15.906 1.136 15.906 9.998v161.784c0 8.634-7.044 15.678-15.906 15.678z"
            fill="#D54B3D"
          ></path>
          <path
            d="M238.834 8.407c10.225 0 13.633 2.045 13.633 7.726v161.784c0 7.498-6.135 13.633-13.633 13.633H225.2V16.133c0-5.908 3.409-7.726 13.634-7.726zm0-2.272c-8.862 0-15.906 1.136-15.906 9.998v177.69h15.906c8.862 0 15.906-7.045 15.906-15.906V16.133c0-8.862-7.044-9.998-15.906-9.998z"
            fill="#D72B27"
          ></path>
          <path
            d="M170.667 193.595L1.58 23.195l8.894 3.617 117.702 84.755L254.74 18.76v159.157c0 8.634-7.044 15.678-15.906 15.678h-68.167z"
            fill="url(#amqa)"
          ></path>
          <path
            d="M127.267 117.02L7.065 29.766C.021 24.54-2.024 14.542 3.202 7.498 8.43.454 18.654-1.136 25.925 4.09l101.57 73.848L229.744 3.18c7.044-5.226 17.042-3.635 22.268 3.636 5.226 7.044 3.636 17.042-3.636 22.268l-121.11 87.935z"
            fill="#D54B3D"
          ></path>
          <path
            d="M238.834 2.272c4.317 0 8.407 2.045 11.134 5.68 4.317 6.136 2.954 14.543-2.954 19.088l-119.747 87.254L8.429 27.949C2.294 23.404.703 14.769 5.02 8.862c2.5-3.409 6.817-5.68 11.361-5.68 2.954 0 5.908.908 8.18 2.726l101.343 73.62 1.363.91 1.363-.91L230.654 4.772c2.5-1.59 5.226-2.5 8.18-2.5zm0-2.272c-3.181 0-6.59.909-9.316 2.954L127.267 77.71 25.697 3.863C22.972 1.818 19.564.909 16.155.909c-4.999 0-9.998 2.272-13.179 6.59-4.999 7.043-2.954 17.041 4.09 22.267l120.202 87.482L248.15 29.085c7.044-5.226 8.635-14.997 3.636-22.268C248.605 2.272 243.833 0 238.834 0z"
            fill="#D72B27"
          ></path>
        </svg>
      </a>
      <a
        href="https://twitter.com/chyir"
        target="_blank"
        class="external-item external-3"
        rel="nofollow"
        @mouseenter="title = 'Block me on Twitter, @chyir'"
        @mouseleave="title = ''"
      >
        <svg
          id="si-logos-twitter"
          viewBox="0 0 256 209"
          preserveAspectRatio="xMidYMid"
          width="100%"
          height="100%"
        >
          <path
            d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
            fill="#55acee"
          ></path>
        </svg>
      </a>
      <button
        type="button"
        class="fab"
        :class="{ rainbow: !$store.state.ctas.isExternalClicked }"
        @click.prevent="toggle"
      >
        <div
          class="fab-cover"
          @mouseenter="onFabMouseEnter"
          @mouseleave="onFabMouseLeave"
        />

        <div class="external-plus"></div>

        <div
          v-show="showTooltip"
          class="external-tooltip"
          :class="{ hidden: forceHideTooltip }"
        >
          Do not click here!
        </div>
      </button>
    </div>
  </div>
</template>

<script>
let showTooltipTimeout
let showTooltipInterval
let hideTooltipInterval

export default {
  name: 'External',
  data() {
    return {
      isOpened: false,
      title: '',
      email: '#',
      showTooltip: false,
      forceHideTooltip: false,
      isExternalClickedOnce: false
    }
  },
  watch: {
    isOpened(n, o) {
      if (n !== o && !this.isExternalClickedOnce) {
        this.isExternalClickedOnce = true
      }
    },
    isExternalClickedOnce() {
      this.$store.dispatch('ctas/setState', {
        key: 'isExternalClicked',
        value: true,
        persist: true
      })
    },
    '$store.state.ctas.isExternalClicked'(n) {
      if (n) {
        this.destructTooltip()
      }
    }
  },
  mounted() {
    this.setupTooltip()
  },
  beforeDestroy() {
    this.destructTooltip()
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened
      document.body.classList[this.isOpened ? 'add' : 'remove']('page-blur')
    },
    setEmailAddress() {
      this.email = ''
      this.email += 'ma'
      this.email += 'il'
      this.email += '-'
      this.email += 'to'
      this.email += ':'
      this.email += 'ca'
      this.email += '-'
      this.email += 'h'
      this.email += 'yadi'
      this.email += 'nug'
      this.email += 'raha'
      this.email += '18@'
      this.email += '-'
      this.email += 'g'
      this.email += 'ma'
      this.email += '-'
      this.email += 'il.'
      this.email += '-'
      this.email += 'c'
      this.email += 'om'
      this.email = this.email.replace(/-/g, '')
    },
    onMouseEnter2() {
      this.setEmailAddress()
      this.title = 'Feel free to spam'
    },
    onMouseLeave2() {
      this.title = ''
      this.email = ''
    },
    setupTooltip() {
      if (!this.$store.state.ctas.isExternalClicked) {
        showTooltipTimeout = setTimeout(() => {
          this.showTooltip = true
        }, 5000)

        showTooltipInterval = setInterval(() => {
          this.showTooltip = true
        }, 20000)

        hideTooltipInterval = setInterval(() => {
          this.showTooltip = false
        }, 30000)
      } else {
        this.showTooltip = false
      }
    },
    destructTooltip() {
      this.showTooltip = false
      this.forceHideTooltip = true
      clearTimeout(showTooltipTimeout)
      clearInterval(showTooltipInterval)
      clearInterval(hideTooltipInterval)
      showTooltipTimeout = null
      showTooltipInterval = null
      hideTooltipInterval = null
    },
    onFabMouseEnter(e) {
      if (e.target && e.target.classList.contains('external-tooltip')) {
        return
      }

      this.forceHideTooltip = true
    },
    onFabMouseLeave(e) {
      if (e.target && e.target.classList.contains('external-tooltip')) {
        return
      }

      this.forceHideTooltip = false
    }
  }
}
</script>

<style scoped>
button:focus,
a:focus {
  outline: 0;
  text-decoration: none;
}

.external {
  width: 3em;
  height: 3em;
  position: fixed;
  z-index: 3;
  right: 3em;
  transition: width 0.1s linear, right 0.3s linear;
}

.fab {
  border: none;
  color: white;
  background-color: #2f2f2f;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  position: fixed;
  right: 2em;
  top: 2em;
  transition: all 0.5s;
}
.fab:hover {
  background-color: #1d1d1d;
}

.fab > .fab-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.fab.rainbow {
  animation: rainbow 0.5s ease-in-out infinite;
}
.fab.rainbow:hover {
  animation: rainbow-hovered 0.5s ease-in-out infinite;
}

.external-plus {
  transition: all 0.5s;
  font-size: 1.5rem;
}

.external-item {
  position: absolute;
  background: transparent;
  border: none;
  right: 2em;
  top: 1.8em;
  transition: all 0.5s;
  transform: translateX(0);
  width: 0;
  display: block;
  height: 2.5em;
}
.external-item:hover {
  tansition-delay: 0s;
  color: #ff8db3;
}

.external-tooltip {
  width: 10em;
  height: 3em;
  top: 0;
  left: -11em;
  background-color: #ddd;
  position: absolute;
  color: #1d1d1d;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--rect-box-shadow);
  border-radius: var(--rect-border-radius);
  animation: external-tooltip 5s infinite;
}
.external-tooltip:after {
  content: '';
  width: 1em;
  height: 1em;
  top: auto;
  bottom: auto;
  right: -0.5em;
  background-color: #ddd;
  position: absolute;
  transform: rotate(45deg);
}

.external-tooltip.hidden {
  display: none;
}

.external.open {
  width: calc(100% - 15rem);
  left: 15rem;
  right: 0;
}
.external.open .external-item {
  width: 2.5em;
  height: 2.5em;
}
.external.open .external-title {
  width: 100%;
  height: 3em;
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 1rem;
}
.external.open .fab {
  background-color: #1d1d1d;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.external.open .external-plus {
  transform: rotateZ(135deg);
}
.external.open .external-1 {
  transition-delay: 0.1s;
  transform: translateX(-5rem);
}
.external.open .external-2 {
  transition-delay: 0.2s;
  transform: translateX(-9rem);
}
.external.open .external-3 {
  transition-delay: 0.3s;
  transform: translateX(-13rem);
}

@keyframes external-tooltip {
  0% {
    left: -11em;
  }
  10% {
    left: -12em;
  }
  15% {
    left: -10.5em;
  }
  25% {
    left: -11em;
  }
  30% {
    left: -10.5em;
  }
  40% {
    left: -11em;
  }
}
@keyframes rainbow {
  0%,
  to {
    background-image: linear-gradient(
      115deg,
      #4fcf70,
      #fad648,
      #a767e5,
      #12bcfe
    );
  }
  25% {
    background-image: linear-gradient(
      115deg,
      #fad648,
      #a767e5,
      #12bcfe,
      #4fcf70
    );
  }
  50% {
    background-image: linear-gradient(
      115deg,
      #a767e5,
      #12bcfe,
      #4fcf70,
      #fad648
    );
  }
  75% {
    background-image: linear-gradient(
      115deg,
      #12bcfe,
      #4fcf70,
      #fad648,
      #a767e5
    );
  }
}
@keyframes rainbow-hovered {
  0%,
  to {
    background-image: linear-gradient(
      110deg,
      #4fcf70,
      #fad648,
      #a767e5,
      #12bcfe
    );
  }
  25% {
    background-image: linear-gradient(
      70deg,
      #fad648,
      #a767e5,
      #12bcfe,
      #4fcf70
    );
  }
  50% {
    background-image: linear-gradient(
      15deg,
      #a767e5,
      #12bcfe,
      #4fcf70,
      #fad648
    );
  }
  75% {
    background-image: linear-gradient(
      80deg,
      #12bcfe,
      #4fcf70,
      #fad648,
      #a767e5
    );
  }
}
</style>
