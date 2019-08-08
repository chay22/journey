<template>
  <div id="page-index" class="page">
    <transition name="fade-2" appear>
      <div class="greets">
        <span class="hello">HELLO<span class="exclamation">!</span></span>

        <div class="my-name">
          <span class="is">My name is</span>
          <span class="name">
            <span>CAHYADI</span>
            <span>NUGRAHA</span>
          </span>
        </div>

        <div class="nickname">
          <span class="preferred">But, I'd like to be called as</span>
          <span class="name">CHAY</span>
        </div>

        <div class="description">
          <span
            >Here is my little web development journey I'm willing to
            share.</span
          >
        </div>

        <div class="scroll-down">Scroll down</div>
        <div class="overlay" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  head() {
    const SEO = this.$seo.set({
      title: 'Chay - A little journey of mine',
      description: 'A little journey about web development of Chay',
      url: '/'
    })

    return {
      title: SEO.title(),
      meta: SEO.meta()
    }
  },
  transition(to, from) {
    if (!from) {
      return 'slide-down'
    }

    return 'slide-up'
  },
  data() {
    return {
      mamangLoaderStyle: {
        display: 'none'
      }
    }
  },
  mounted() {
    this.$store.dispatch('pages/ready')
  },
  beforeDestroy() {
    const $el = this.$el
    $el.querySelector('.overlay').style.display = 'block'
    $el.querySelector('.overlay').style.bottom = '-100%'
    $el.querySelector('.greets').style.transform = 'scale(1.5)'

    $el.querySelector('.overlay').velocity({
      bottom: '0.2%'
    })
    this.$store.dispatch('pages/notReady')
  }
}
</script>

<style scoped>
.page {
  color: #fff;
  display: flex;
  flex-direction: column;
}
.page:after {
  content: '';
  bottom: -8rem;
  height: 30%;
  z-index: -1;
  transform: rotate(-10deg) scale(1.25);
}
.greets {
  text-align: center;
  font-weight: 300;
}
.greets:hover .exclamation {
  animation: fontweight 0.8s infinite alternate ease-in-out;
}
.overlay,
.page:after {
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(-45deg, #213586, #2a45af, #2d46ab, #2641ab);
}
.overlay {
  height: 100%;
  bottom: -100%;
}
.greets {
  width: 27rem;
}
.hello {
  font-size: 8.8rem;
  font-weight: 625;
}
.my-name {
  font-size: 2.1rem;
}
.my-name > .is {
  letter-spacing: -1px;
  font-weight: 100;
}
.my-name > .name {
  font-weight: 500;
}
.nickname {
  display: flex;
  align-items: center;
}
.nickname > .preferred {
  font-size: 1.75rem;
  font-weight: 200;
}
.nickname > .name {
  font-size: 3.25rem;
  font-weight: 800;
  padding-left: 0.25em;
}
.description {
  font-size: 1.2rem;
  padding: 0.5rem;
  background-color: #fff;
  color: #3759e2;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
}
.hello::selection {
  color: #8e44ad;
}
.my-name > .is::selection {
  background-color: #f1c40f;
}
.name::selection {
  background-color: #e74c3c;
}
.nickname > .preferred::selection {
  background-color: #8e44ad;
  color: white;
}
.description::selection {
  background-color: #ff4444;
  text-shadow: 1px 1px 0 #27ae60;
}
.scroll-down {
  font-size: 0.8rem;
}
</style>
