<template>
  <footer>
    <div class="content">
      <span>{{$t('footer.lechoppe')}}</span>
      <span>{{$t('footer.gastronomique')}}</span>
      <fa icon="copyright"/>
      <span>{{$t('footer.year')}}</span>
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
