<template>
  <div class="left-sidebar">
    <div class="line">
      <div class="progress">
        <span class="p">
          <span class="p1" />
          <span class="p2" />
        </span>
      </div>
    </div>
    <div class="list">
      <div
        v-for="page in $store.getters['pages/list']"
        :key="page.path"
        :data-path="page.path"
        class="item"
      >
        <nuxt-link :to="page.path">{{ page.label }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftSidebar',
  data() {
    return {
      publicRoot: process.env.baseRootUrl
    }
  },
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  watch: {
    $route() {
      this.getLinkOffsetTop()
    }
  },
  mounted() {
    this.getLinkOffsetTop()
  },
  methods: {
    getLinkOffsetTop() {
      const $el = this.$el.querySelector(
        `[data-path="${this.currentPath.replace(this.publicRoot, '')}"]`
      )
      const offsetTop = $el.offsetTop - 45

      this.$el.querySelector('.progress').velocity({
        height: offsetTop + 'px'
      })
    }
  }
}
</script>

<style>
.left-sidebar {
  display: flex;
  padding: 3rem 3.5rem;
}
.left-sidebar > .line {
  height: 98.5%;
  margin-top: 0.25em;
  width: 0.5em;
  background-color: #ddd;
  position: relative;
  border-radius: 0.15em;
  overflow: hidden;
}
.left-sidebar > .line > .progress {
  height: 0;
  width: 100%;
  background-color: #5f7bea;
  border-radius: 0.15em;
  position: relative;
}
.left-sidebar .progress > .p {
  width: 100%;
  height: 1.25em;
  position: absolute;
  bottom: -0.75em;
  /*background-color: #5f7bea;*/
  background-color: transparent;
  left: 0;
  overflow: hidden;
}
.left-sidebar .progress > .p > span {
  position: absolute;
  background-color: #5f7bea;
  border-radius: 50%;
}
.left-sidebar .progress > .p > .p1 {
  width: 0.85em;
  height: 0.85em;
  left: 0px;
  top: 6px;
  animation: progress-p-p1 infinite 1.25s;
}
.left-sidebar .progress > .p > .p2 {
  width: 1em;
  height: 1em;
  left: 10px;
  top: -5px;
  animation: progress-p-p2 infinite 1.5s;
}
.left-sidebar > .list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
}
.left-sidebar .item {
  margin-bottom: 0.25rem;
}
.left-sidebar a {
  color: #fff;
  font-weight: 300;
  text-decoration: none;
}

@keyframes progress-p-p1 {
  0% {
    width: 0.765em;
    height: 0.765em;
    left: -4px;
    top: 6.5px;
  }
  25% {
    width: 0.875em;
    height: 0.875em;
    left: -5px;
    top: 6px;
  }
  75% {
    width: 0.875em;
    height: 0.875em;
    left: -7px;
    top: 6px;
  }
  100% {
    width: 0.85em;
    height: 0.85em;
    left: -1px;
    top: 6px;
  }
}
@keyframes progress-p-p2 {
  0% {
    width: 1.25em;
    height: 1.25em;
    left: 2px;
    top: -5px;
  }
  25% {
    width: 1.25em;
    height: 1.25em;
    left: 0px;
    top: 0px;
  }
  75% {
    width: 1.2em;
    height: 1.2em;
    left: -3px;
    top: 0px;
  }
  100% {
    width: 1.3em;
    height: 1.3em;
    left: -6px;
    top: 0px;
  }
}
</style>
