<template>
  <section>
    <div class="jumbo-description">
        <h5>17 YEARS OF EXPIRIENCE</h5>
        <h1>Focus on Your <span>Business</span> </h1>
        <div class="line">
            <div></div>
            <div></div>
        </div>
        <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in bookmarksgrove.
        </p>
        <button>READ MORE</button>
        <div class="social">
            <span><a href="https://www.facebook.com/">FACEBOOK</a>-</span>
            <span><a href="https://www.instagram.com">INSTAGRAM</a>-</span>
            <span><a href="https://www.youtube.com">YOUTUBE</a>-</span>
            <span><a href="https://www.twitter.com/">TWITTER</a></span>
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
    padding-top: 80px;
    width: 60%;

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

    button{
        margin: 60px 0;
        @include button_black;

        &:hover{
            @include button
        }
    }

    .line {
        @include flex('flex');
        margin: 40px 0;

        div {
            display: inline-block;
            background: $primary-brand-gradient;
            border-radius: 10px;

            &:first-child {
                @include line($line: 'small')
            }

            &:last-child {
                @include line($line: 'big')
            }
        }
    }
    .social{


        a{
            margin: 0 5px;
            text-decoration: none;
            color: black;
            font-weight: bold;
            font-size: 0.8rem;
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