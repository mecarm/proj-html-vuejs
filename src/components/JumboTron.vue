<template>
  <section>
    <div class="jumbo-description">
        <h5>17 YEARS OF EXPIRIENCE</h5>
        <h1>Focus on Your <span>Business</span> </h1>
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

section{
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

        span{
            color: #00D9A6;
        }
    }

    h5 {
        letter-spacing: 8px;
        color: #00D9A6;
        padding-left: 5px;
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