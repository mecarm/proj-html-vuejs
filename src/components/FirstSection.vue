<template>
    <section>
        <div class="container">
            <div class="text-container">
                <h1>We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And Stylish!</h1>
                <div class="line">
                    <div></div>
                    <div></div>
                </div>
                <button>VIEW ALL</button>
            </div>
            <div class="card-container">
                <div class="card">
                    <font-awesome-icon icon="fa-solid fa-gauge-high" class="icon" />
                    <h2>Speed Optimization</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated</p>
                </div>
                <div class="card">
                    <font-awesome-icon icon="fa-solid fa-cloud" class="icon"/>
                    <h2>Cloud Solutions</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated</p>
                </div>
                <div class="card">
                    <font-awesome-icon icon="fa-solid fa-tablet-screen-button" class="icon"/>
                    <h2>Website Design</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated</p>
                </div>
                <div class="card">
                    <font-awesome-icon icon="fa-solid fa-stopwatch" class="icon"/>
                    <h2>Online Marketing</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated</p>
                </div>
            </div>
            <div class="vertical-text">
                17 years of expirience helping people for best solutions
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
    padding: $vertical-center-pd;
}
    .text-container {
        padding-right: 40px;
    
        button {
            @include button;
    
            &:hover {
                @include button_black;
            }
        }
    }
    .card-container{
        @include flex($justify: Between_Center);
        flex-wrap: wrap;
        .card{
            padding: 40px;
            margin: 20px;
            border-radius: 15px;
            width: calc((100% / 2) - 40px);
            background: white;
            box-shadow: 0px 15px 20px rgba(155, 154, 154, 0.4);

            &:hover{
                background: $primary-brand-gradient-tobottom;
                color: white;
                .icon{
                    color: white;
                }
                p{
                    color: white;
                }
            }

            .icon{
                font-size: 3.5rem;
                color: $primary-brand-color;
            }

            h2{
                margin: 20px 0;
                font-weight: 500;
            }
            p{
                color: $grey-text;
            }
        }
    }
        .vertical-text {
            @include vertical-text
        }

h1{
    font-family: 'Varela Round', sans-serif;
    font-size: 2.5rem;
    color: black;

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