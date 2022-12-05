<template>
  <section>
    <div class="container">
        <h1>Latest News & Our <span>Blog</span></h1>
        <div class="line">
          <div></div>
          <div></div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'NewsBlogSection'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');
section{
  background: $bg-soft-grey;
  padding: $vertical-center-pd;
}
.container {
  @include center;
  text-align: center;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  span {
    color: $primary-brand-color;
  }
    .line {
      @include flex('flex');
      justify-content: center;
      margin: 30px 0;
  
      div {
  
        &:first-child {
          @include line($line: 'small')
        }
  
        &:last-child {
          @include line($line: 'big')
        }
      }
    }
}
</style>