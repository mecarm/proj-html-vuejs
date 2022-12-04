<template>
    <section>
        <div class="text-container">
            <div class="title">
                <div class="line">
                    <div></div>
                    <div></div>
                </div>
                <h1>
                    Our recent <span>web design</span> & <br> some examples of <br> past <span>projects</span>
                </h1>
                <div class="line">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in bookmarksgrove. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
        <div class="main-container">
            <div class="img-container">
                <div class="card">
                    <img src="../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="rose nel cesto">
                </div>
                <div class="card">
                    <img src="../assets/images/sunisa-misa-531163-unsplash-1024x1024.jpg" alt="ruota panoramica">
                </div>
                <div class="card">
                    <img src="../assets/images/355H-1024x1024.jpg" alt="scarpe gialle">
                </div>
                <div class="card">
                    <img src="../assets/images/photo-1448932252197-d19750584e56-1024x1024.jpg" alt="uomo che digita al pc">
                </div>
                <div class="card">
                    <img src="../assets/images/business-competition-PB366D8-1024x1024.jpg" alt="barchette di carta colorate">
                </div>
                <div class="card">
                    <img src="../assets/images/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg" alt="divano con sfondo verde">
                </div>
                <div class="card">
                    <img src="../assets/images/aa9a4539-PQGJ7HU-1024x1024.jpg" alt="mongolfiere">
                </div>
                <div class="card">
                    <img src="../assets/images/cody-davis-253928-unsplash-1024x1024.jpg" alt="arancia con buccia blu">
                </div>
            </div>
            <div class="vertical-text">
                17 years of expirience helping people for best solutions
            </div>
        </div>
        <div class="button-center">
            <button>READ MORE</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ThirdSection',
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');

.text-container {
    padding-top: 100px;
    @include flex($justify: Between_Center);
    @include center;
    .title {
        flex-basis: 40%;

        h1{
            font-size: 2.4rem;
            font-weight: 500;
        }

        span{
            color: $primary-brand-color;
        }
    }

    p{
        flex-basis: 58%;
        font-size: 0.9rem
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
}
.main-container{
    @include flex($justify: Both_Center);
    padding: 30px 0;
    .vertical-text {
        @include vertical-text;
    }
}
.img-container{
    @include flex($justify: flex);
    @include center;

    flex-wrap: wrap;
    .card{
        width: calc(100% / 4);
        padding: 0px 2px;

        img{
            width: 100%;
            border-radius: 5px;
        }
    }
}
.button-center{
    @include flex($justify: Both_Center);

    button {
    margin: 40px 0 150px 0;
    @include button;

    &:hover {
        @include button_black;
    }
}
}

</style>