<template>
  <section>
    <div class="jumbo-description">
        <h5>17 YEARS OF EXPIRIENCE</h5>
        <h1>Focus on Your <span>Business</span> </h1>
        <div class="line">
            <div></div>
            <div></div>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');

section {
    @include flex($justify: 'flex');
    background-color: #F5F5F5;

}

.jumbo-description {
    margin-left: 10%;
    padding-top: 130px;

    h1 {
        font-family: 'Varela Round', sans-serif;
        font-size: 3.8rem;
        color: black;
        padding-top: 20px;

        span {
            color: $primary-brand-color;
        }
    }

    h5 {
        letter-spacing: 8px;
        color: $primary-brand-color;
        padding-left: 5px;
    }

    .line {
        @include flex('flex');
        margin: 40px 0;

        div {
            display: inline-block;
            background: $primary-brand-gradient;
            border-radius: 10px;

            &:first-child {
                width: 10px;
                height: 5px;
            }

            &:last-child {
                margin-left: 10px;
                width: 50px;
                height: 5px;
            }
        }
    }
}

.image-jumbotron-1{
    height: 80vh;
    width: 100%;
}
.image-jumbotron-2{
    background-image: url("../assets/images/Group-35-2x.png");
    background-size: 120%;
    background-position: left;
    background-repeat: no-repeat;        
    width: 100%;
    height: 100%;
}
</style>