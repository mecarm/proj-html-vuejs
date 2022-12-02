<template>
  <section>
    <div>
        <H1>FOCUS ON YOUR BUSINESS</H1>
    </div>
    <div class="image-jumbotron-1">
        <div class="image-jumbotron-2">

        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'JumboTron'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';

section{
    @include flex($justify: 'flex');
}
.image-jumbotron-1{
    position: relative;
    height: 80vh;
    width: 70%;
}
.image-jumbotron-2{
    position: absolute;
    right: -35%;
    background-image: url("../assets/images/Group-35-2x.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;        
    width: 100%;
    height: 100%
}



</style>