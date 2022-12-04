<template>
    <section>
        <div class="img-container">
            <div class="img-1"></div>
            <div class="img-absolute">
                <img src="" alt="">
            </div>
        </div>
        <div class="text-container">
            <h1>learn more <br> about our <br><span>missions</span></h1>
            <div class="line">
                <div></div>
                <div></div>
            </div>
            <button>VIEW ALL</button>
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
    background: #F5F5F5;
    @include flex($justify: Between_Center);

    .img-container{
        flex-basis: 70%;

        .img-1{
            width: 60%;
            height: 500px;
            background-image: url('../assets/images/busy-architect-PYVKWM4-1024x872.jpg'), $primary-image-gradient;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 0px 20px 20px 0;
            background-blend-mode: overlay;
        }
    }
    .text-container {
        flex-basis: 30%;

        h1{
            font-family: 'Varela Round', sans-serif;
            font-size: 3rem;
            font-weight: 400;
        }

        span{
        color: $primary-brand-color;
        }
    
        button {
            @include button;
    
            &:hover {
                @include button_black;
            }
        }
    }
}

</style>