<template>
  <section class="container">
    <div class="panel">
      <div class="panel-header">
        <h1>{{$t('about.title')}}</h1>
      </div>
      <div class="panel-content">
        <p>{{$t('about.introduction')}}</p>
        <ul>
          <li>
            <fa :icon="['fas', 'map-marker-alt']"/><span>{{$t('about.address')}}</span>
          </li>
          <li>
            <a :href="`tel:${$t('about.tel')}`" >
              <fa :icon="['fas', 'phone']"/><span>{{$t('about.tel')}}</span>
            </a>
          </li>
          <li>
            <a :href="`mailto:${$t('about.email')}`" >
              <fa :icon="['fas', 'envelope']"/><span>{{$t('about.email')}}</span>
            </a>
          </li>
          <li>
            <fa :icon="['fas', 'flag']"/><span>{{$t('about.opening')}}</span>
          </li>
          <li>
            <fa :icon="['fas', 'info-circle']"/><span>{{$t('about.info')}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      msg: 'Hey About'
    }
  }
}
</script>

<style lang="scss" scoped >
  .container {
    background-image: url(~/assets/img/default-cover.jpg);
    background-repeat: no-repeat;
    backgroun-padding: 0 0;
    background-size: cover;

    ul {
      margin-left: $size-5;
      li {
        margin: $size-7 0;

        a {
          color: $black;
          &:hover {
            color: $grey-dark;
          }
        }
        span {
          margin-left: $size-7
        }
      }
    }
  }
</style>

