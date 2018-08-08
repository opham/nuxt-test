<template>
  <section class="container">
    <div class="panel">
      <div class="panel-header">
        <h1>{{$t('contact.title')}}</h1>
      </div>
      <div class="panel-content">
        <p>
          {{$t('contact.introduction')}}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor mattis mauris, eget auctor dolor vehicula
          vel. Vivamus a malesuada turpis, sit amet dictum ex. Nullam purus arcu, ultrices a ultrices ac, accumsan in
          lectus. Phasellus non porttitor metus. Vestibulum vel commodo lectus, feugiat suscipit felis. In lobortis
          risus nunc, quis posuere nisi mollis id. Fusce sed elementum est.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style lang="scss" scoped >
  .container {
    background-image: url(~/assets/img/default-cover.jpg);
    background-repeat: no-repeat;
    backgroun-padding: 0 0;
    background-size: cover;
  }
</style>

