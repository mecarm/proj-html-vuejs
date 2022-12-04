<template>
    <section>
        <div class="container">
            <div>
                <h1>We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And Stylish!</h1>
                <div class="line">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <font-awesome-icon icon="fa-solid fa-gauge-high" class="icon" />
                    <h2>Speed Optimization</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated</p>
                </div>
                <div class="card">
                    <font-awesome-icon icon="fa-solid fa-gauge-high" class="icon" />
                    <h2>Speed Optimization</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated</p>
                </div>
                <div class="card">
                    <font-awesome-icon icon="fa-solid fa-gauge-high" class="icon" />
                    <h2>Speed Optimization</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated</p>
                </div>
                <div class="card">
                    <font-awesome-icon icon="fa-solid fa-gauge-high" class="icon" />
                    <h2>Speed Optimization</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated</p>
                </div>
            </div>
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
    background: #F9F9F9;
}
.container{
    @include center;
    @include flex($justify: Between_Center);
    padding: 150px 0;
}
    .card-container{
        @include flex($justify: Between_Center);
        flex-wrap: wrap;
        .card{
            padding: 40px;
            margin: 20px;
            border: 1px solid white;
            border-radius: 15px;
            width: calc((100% / 2) - 40px);
            background: white;
            box-shadow: 0px 15px 20px rgba(155, 154, 154, 0.4);

            .icon{
                font-size: 3.5rem;
                color: $primary-brand-color;
            }

            h2{
                margin: 20px 0;
            }
        }
    }


h1{
    font-family: 'Varela Round', sans-serif;
    font-size: 2.5rem;

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