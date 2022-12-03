<template>
  <section>
    <div>
        <h1>We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And Stylish!</h1>
        <div class="line">
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="card-container">
        
    </div>
  </section>
</template>

<script>
export default {
    name: 'FirstSection'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');

section{
    @include center;
    @include flex($justify: Between_Center);
    padding: 150px 0;

    .card-container{
        flex-grow: 1;
    }
}

h1{
    font-family: 'Varela Round', sans-serif;
    font-size: 2.0rem;

    span{
        color: $primary-brand-color;
    }
}
    .line {
        @include flex('flex');
        margin: 40px 0;

        div {

            &:first-child {
                @include line($line: 'small')
            }

            &:last-child {
                @include line($line: 'big')
            }
        }
    }
</style>