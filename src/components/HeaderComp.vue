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
    <div class="nav-bar">
      <div>
        <img src="../assets/images/cropped-Group-39-2x.png" alt="">
      </div>
      <div class="menu">
        <span v-for="(elem, index) in vocimenu" :key="index">
          <a :href="elem.href">{{elem.voce.toUpperCase()}}</a>
        </span>
      </div>
      <div>
        <button>PURCHASE</button>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  props:{
    vocimenu: Array
  }
}
</script>

<style scoped lang="scss">
@import '../style/style.scss';

/* TOP BAR GRIGIA */
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
/* NAV BAR */
.nav-bar{
  @include flex($justify: Between_Center);
  @include center;
  padding: 20px;

  img{
    width: 100%;
  }

  .menu{
    span{
      padding-right: 10px;
      font-size: 0.8rem;

      &:first-child{
          font-weight: bold;
        }

      a{
        text-decoration: none;
        color: #3D3D3D;
      }
    }
  }

  button{
    margin-right: 30px;
    @include button;

    &:hover{
      @include button_black;
    }
  }

  .fa-magnifying-glass{
    color: $primary-brand-color;
  }
}
</style>
