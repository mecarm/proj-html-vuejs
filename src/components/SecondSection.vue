<template>
    <section>
        <div class="img-container">
            <div class="img-1">
                <div class="img-absolute"></div>
            </div>
        </div>
        <div class="text-container">
            <h1>learn more <br> about our <br><span>missions</span></h1>
            <div class="line">
                <div></div>
                <div></div>
            </div>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in bookmarksgrove.
            </p>
            <button>READ MORE</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SecondSection'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');

section{
    padding: $vertical-center-pd;
    background: $bg-soft-grey;
    @include flex($justify: Between_Center);

    .img-container{
        flex-basis: 40%;

        .img-1{
            width: 100%;
            height: 600px;
            background-image: url('../assets/images/busy-architect-PYVKWM4-1024x872.jpg'), $primary-image-gradient;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 0px 20px 20px 0;
            background-blend-mode: soft-light;
            position: relative;

            .img-absolute{
                width: 100%;
                height: 550px;
                position: absolute;
                background-image: url('../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 10px;
                bottom: -30px;
                right: -30%;
                box-shadow: 15px 15px 20px rgba(155, 154, 154, 0.4);

            }
        }
    }
    .text-container {
        flex-basis: 40%;
        padding-right: 10%;

        h1{
            font-family: 'Varela Round', sans-serif;
            font-size: 3rem;
            font-weight: 400;
        }

        span{
        color: $primary-brand-color;
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
    
        button {
            margin: 40px 0;
            @include button;
    
            &:hover {
                @include button_black;
            }
        }
    }
}

</style>