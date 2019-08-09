<template>
  <article id="page-nov-2016" class="page">
    <h1 class="title-date">Nov 2016</h1>
    <div class="writing">
      <transition name="fade-2" appear>
        <div class="content">
          <p>
            Maintenance time! This time I realized that I'm probably a
            hardworker. I couldn't stop figuring stacks to trace until their
            end. Line by line. I had to memoize the messages and its type of
            errors. And had write them on my old personal note at the same time.
            I don't know. It was fun, I think.
          </p>
          <p>
            Starting from this month until 2 the others, there are 3 projects ⁠—
            I could remember ⁠— had to maintain. I think its more than just
            maintaining, since my clients were asking bunch of features that
            didn't previously exist.
          </p>
        </div>
      </transition>
      <transition name="fade-2" appear>
        <div class="projects">
          <h2 class="title">Projects</h2>
          <div class="list">
            <div
              class="item"
              @mouseenter="karenAndChloeTitle = 'www.karenandchloe.com'"
              @mouseleave="karenAndChloeTitle = 'Wordpress maintenance'"
            >
              <span class="underline">{{ karenAndChloeTitle }}</span
              >. Ecommerce. Woocommerce integration, fixed pages styling issues,
              etc.
            </div>
            <div
              class="item"
              @mouseenter="abangAbangTitle = 'abangabang.com'"
              @mouseleave="abangAbangTitle = 'Wordpress bux fixing'"
            >
              <span class="underline">{{ abangAbangTitle }}</span
              >. Marketplace. Fixed 3rd party plugin about multi marketplace
              seller/vendor, fixed pages styling issues.
            </div>
          </div>
        </div>
      </transition>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    const SEO = this.$seo.set({
      title: 'Chay - Nov 2016',
      description: 'Chay journey on November 2016',
      slug: 'nov-2016'
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
      karenAndChloeTitle: 'Wordpress maintenance',
      abangAbangTitle: 'Wordpress bug fixing'
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
.writing {
  display: flex;
}
.page:after {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  background-image: linear-gradient(
    -125deg,
    #213586,
    #1c3492,
    #2d46ab,
    #2641ab
  );
  content: '';
  top: 50%;
  height: 60%;
  z-index: -1;
  transform: rotate(5deg) scale(1.1);
}
</style>
