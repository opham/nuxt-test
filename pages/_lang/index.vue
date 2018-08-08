<template>
  <section class="container">
    <slider :items="items"/>
    <div class="panel">
      <div class="panel-header">
        <h1>{{$t('home.title')}}</h1>
      </div>
      <div class="panel-content">
        <p>{{$t('home.introduction')}}</p>
        <p>{{$t('home.text')}}</p>
        <ul class="social-networks">
          <li>
            <a href="https://www.facebook.com/lechoppegastronomique/" target="_blank"><fa :icon="['fab', 'facebook']"/></a>
          </li>
          <li>
            <a href="#" target="_blank"><fa :icon="['fab', 'instagram']"/></a>
          </li>
        </ul>
        <p>{{$t('home.text2')}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import Slider from '~/components/Slider/Slider.vue';

  import Slide1 from '~/assets/img/slide-1.jpg';
  import Slide2 from '~/assets/img/slide-2.jpg';
  import Slide3 from '~/assets/img/slide-3.jpg';

  export default {
    components: {
      Slider
    },
    data() {
      return {
        items: [
          {imgSrc: Slide1, text: 'Slide #1'},
          {imgSrc: Slide2, text: 'Slide #2'},
          {imgSrc: Slide3, text: 'Slide #3'},
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    text-align: center;

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .social-networks {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin-right: $size-5;

        &:last-child {
          margin-right: 0;
        }
        a {
          display: block;
          svg {
            width: map-get($iconSize, 'sm');
            height: map-get($iconSize, 'sm');
          }
        }
      }
    }
  }
</style>

