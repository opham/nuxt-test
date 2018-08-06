<template>
  <header>
    <div class="content">
      <div class="burger-menu" :class="burgerClass" @click="onBurgerClick">
        <div />
        <div />
        <div />
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link :to="localePath('about')"  class="about" exact>
              <span>{{ $t('links.about') }}</span>
            </nuxt-link>
          </li>
          <li class="logo">
            <nuxt-link :to="localePath('index')" class="home" exact>
              <img src="~assets/img/logo.jpg" alt="logo" class="logo">
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('contact')" class="contact" exact>
              <span>{{ $t('links.contact') }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="lang-switcher">
        <div class="selected">
          <img v-show="$i18n.locale === 'fr'" src="~/assets/img/fr.png" :alt="$t('links.french')">
          <img v-show="$i18n.locale === 'en'" src="~/assets/img/uk.png" :alt="$t('links.english')">
          <fa icon="angle-down" />
        </div>
        <ul class="lang-menu">
          <li><nuxt-link :to="switchLocalePath('fr')"><img src="~/assets/img/fr.png" :alt="$t('links.french')"></nuxt-link></li>
          <li><nuxt-link :to="switchLocalePath('en')"><img src="~/assets/img/uk.png" :alt="$t('links.english')"></nuxt-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  // import Header from '~/components/Header.vue';

  export default {
    components: {
      // Header,
    },
    data() {
      return {
        msg: 'Hey Header',
      }
    },
    computed: {
      burgerClass: function() {
        return this.isBurgerActive ? 'is-active' : '';
      }
    },
    methods: {
      onBurgerClick: function () {
        this.$emit('burgerClick', this.isBurgerActive);
      }
    },
    props: {
      isBurgerActive: {
        type: Boolean,
        default: false,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'Header';
</style>
xx
