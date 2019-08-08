<template>
  <div class="liquidy">
    <!-- children -->
  </div>
</template>

<script>
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function createElement({ size, left, top }) {
  const div = document.createElement('div')
  size = getRandomInt(size - 10, size + 10)
  left = getRandomInt(left - 10, left + 10)
  top = getRandomInt(top - 10, top + 10)

  div.style.width = `${size}px`
  div.style.height = `${size}px`
  div.style.left = `${left}px`
  div.style.top = `${top}px`
  div.style.backgroundColor = '#f3f3f3'
  div.dataset.size = size
  div.dataset.max = size * 2
  div.velocity(
    {
      left: left + getRandomInt(-50, 50),
      top: top + getRandomInt(-50, 50)
    },
    {
      loop: true,
      delay: 100,
      queue: false,
      duration: getRandomInt(300, 800),
      easing: [getRandomInt(100, 800), getRandomInt(5, 20)]
    }
  )
  // .velocity(
  //   {
  //     width: `${size + 1000}px`,
  //     height: `${size + 1000}px`
  //   },
  //   {
  //     duration: 1000,
  //     delay: 1000
  //   }
  // )

  return div
}

export default {
  mounted() {
    this.createChildren()
  },
  methods: {
    createChildren() {
      const $el = this.$el

      for (let i = 0; i < 50; i++) {
        $el.appendChild(
          createElement({
            size: i + getRandomInt(200, 300),
            left: getRandomInt(-1, 100),
            top: getRandomInt(-1, 350)
          })
        )
      }
    },
    zoom(size) {
      size = (size * 2) / 100
      this.$el.querySelectorAll('div').forEach((v) => {
        const width = parseInt(v.dataset.size, 10) + (parseInt(v.dataset.max, 10) * size) + 'px' // eslint-disable-line

        v.velocity({
          width,
          height: width
        })
      })
    }
  }
}
</script>

<style>
.liquidy > div {
  display: block;
  position: absolute;
  border-radius: 50%;
}
</style>
