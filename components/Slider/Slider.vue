<template>
  <div class="slider">
    <transition-group name="slide-fade" tag="ul" class="slider-content">
      <li class="slide"
           :class="activeIndex === index ? 'is-active' : ''"
           v-for="(item, index) in items"
           :key="`slide-${index}`"
           :style="{backgroundImage: `url(${item.imgSrc})`, zIndex: nextActiveIndex === index ? 1 : 0 }"
           v-show="activeIndex === index"
      >
        <div class="text">
          {{item.text}}
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        activeIndex: 0,
        nextActiveIndex: 1,
        interval: null,
      }
    },
    props: {
      items: {
        type: Array,
        default: () => []
      },
      timing: {
        type: Number,
        default: 3000
      }
    },
    methods: {
      nextSlide: function () {
        const itemsLength = this.items.length;
        if (this.nextActiveIndex < itemsLength) {
          this.activeIndex = this.nextActiveIndex;
          this.nextActiveIndex += 1;
        } else {
          this.nextActiveIndex = 0;
          this.activeIndex = this.nextActiveIndex;
        }
      }
    },
    mounted() {
      console.log('mounted this', this);
      this.interval = setInterval(() => {
        this.nextSlide();
      }, this.timing);
    },
    beforeDestroy() {
      clearInterval(this.interval);
    }
  }
</script>

<style lang="scss" scoped>
  @import 'Slider';
</style>
