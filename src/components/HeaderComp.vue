<template>
  <header>
    <div class="top-bar">
      <div class="content-top-bar">
        <div>
          <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
          <span>(001)88451234</span>
          <span>88455438</span>
        </div>
        <div>
          <span><font-awesome-icon icon="fa-brands fa-facebook-f" /></span>
          <span><font-awesome-icon icon="fa-brands fa-twitter" /></span>
          <span><font-awesome-icon icon="fa-brands fa-pinterest-p" /></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  
}
</script>

<style scoped lang="scss">
@import '../style/style.scss';

.top-bar {
  background-color: #3D3D3D;
  padding: 5px 0;
  font-size: 0.8rem;
  font-weight: bold;

  .content-top-bar {
      @include flex($justify: Between_Center);
      @include center;
      color: white;

      span{
        margin-right: 10px;
      }
    }
}
</style>
