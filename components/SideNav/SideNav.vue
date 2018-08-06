<template>
  <aside class="side-nav menu" :class="sideNavClass">
    <div class="content">
      <nav>
        <ul>
          <li>
            <nuxt-link :to="localePath('index')" class="home" exact>
              <span>{{ $t('links.home') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('about')"  class="about" exact>
              <span>{{ $t('links.about') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('contact')" class="contact" exact>
              <span>{{ $t('links.contact') }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <ul class="lang-switcher">
        <li><nuxt-link :to="switchLocalePath('fr')"><img src="~/assets/img/fr.png" :alt="$t('links.french')"></nuxt-link></li>
        <li><nuxt-link :to="switchLocalePath('en')"><img src="~/assets/img/uk.png" :alt="$t('links.english')"></nuxt-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
  // import Header from '~/components/Header.vue';

  export default {
    components: {
      // Header,
    },
    data() {
      return {
        msg: 'Hey Side Nav'
      }
    },
    computed: {
      sideNavClass: function() {
        return this.isActive ? 'is-active' : '';
      }
    },
    props: {
      isActive: {
        type: Boolean,
        default: false,
        required: true,
      }
    },
    mounted() {
      console.log('mounted this', this);
    }
  }
</script>

<style lang="scss" scoped>
  @import './SideNav';
</style>
