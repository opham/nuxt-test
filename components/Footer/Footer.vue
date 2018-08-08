<template>
  <footer>
    <div class="content">
      <span>{{$t('footer.lechoppe')}}</span>
      <span>{{$t('footer.gastronomique')}}</span>
      <fa icon="copyright"/>
      <span>{{$t('footer.year')}}</span>
      <ul class="social-networks">
        <li>
          <a href="https://www.facebook.com/lechoppegastronomique/" target="_blank"><fa :icon="['fab', 'facebook']"/></a>
        </li>
        <li>
          <a href="#" target="_blank"><fa :icon="['fab', 'instagram']"/></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  // import Header from '~/components/Header.vue';

  export default {
    components: {
      // Header,
    }
  }
</script>

<style lang="scss" scoped>
  @import 'Footer';
</style>
