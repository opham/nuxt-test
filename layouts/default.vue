<template>
  <div class="layout-content">
    <app-header @burgerClick="toggleSideNav" :isBurgerActive="isSideNavActive" />
    <side-nav :isActive="isSideNavActive"/>
    <transition name="fade">
      <div class="overlay" v-show="isSideNavActive" @click="toggleSideNav"/>
    </transition>
    <main :class="activeClass">
      <div class="main-content">
        <nuxt/>
      </div>
      <app-footer />
    </main>
  </div>
</template>

<script>
  import AppHeader from '~/components/Header/Header.vue';
  import AppFooter from '~/components/Footer/Footer.vue';
  import SideNav from '~/components/SideNav/SideNav.vue';

  export default {
    components: {
      AppHeader,
      AppFooter,
      SideNav
    },
    data() {
      return {
        isSideNavActive: false
      }
    },
    computed: {
      activeClass: function() {
        return this.isSideNavActive ? 'is-active' : '';
      }
    },
    methods: {
      toggleSideNav: function() {
        this.isSideNavActive = !this.isSideNavActive;
        console.log('>>> toggleSideNav', this.isSideNavActive);
      }
    }
  }
</script>

<style lang="scss">
  @import './default';
</style>

