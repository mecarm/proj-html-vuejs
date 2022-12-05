<template>
  <section>
    <div class="container">
        <div class="text-container">
            <h1>With <span>Live Chat <br>24/7</span> Support</h1>
            <div class="line">
                <div></div>
                <div></div>
            </div>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                Semantics.
            </p>
        </div>
        <div class="cards-container">
            <div class="card">
                <div class="black-line vert-line"></div>
                <div class="subscription-type">
                    <h1>DESIGNING</h1>
                    <span>All Designs</span>
                </div>
                <div class="price price-black">
                    <h1>$ 13 <span>/Design</span></h1>
                </div>
                <div class="subscription-list">
                    <ul>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Creative Design Enabled</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Vibrant Color Usage</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Eye Catching Design</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Extreme Typography</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Exceptional Design</li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <div class="vert-line green-line"></div>
                <div class="subscription-type">
                    <h1>DEVELOPMENT</h1>
                    <span>WordPress Projects</span>
                </div>
                <div class="price price-green">
                    <h1>$ 15 <span>/Project</span></h1>
                </div>
                <div class="subscription-list">
                    <ul>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Creative Design Enabled</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Vibrant Color Usage</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Eye Catching Design</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Extreme Typography</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Exceptional Design</li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <div class="black-line vert-line"></div>
                <div class="subscription-type">
                    <h1>SEO</h1>
                    <span>Web Products</span>
                </div>
                <div class="price price-black">
                    <h1>$ 10 <span>/Product</span></h1>
                </div>
                <div class="subscription-list">
                    <ul>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Creative Design Enabled</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Vibrant Color Usage</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Eye Catching Design</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Extreme Typography</li>
                        <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>Exceptional Design</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'SubscriptionSection'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');

section{
    background: $bg-soft-grey;
}
.container{
    @include center;
    @include flex($justify: Between_Center);
    padding: $vertical-center-pd;
    .text-container{
        flex-basis: 30%;

        h1 {
            font-size: 2.4rem;
            font-weight: 500;
        }
        span {
            color: $primary-brand-color;
        }
        p{
            font-size: 0.9rem;
            color: $grey-text;
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
}
.cards-container{
    flex-basis: 69%;
    @include flex($justify: Between_Center)
}
.card{
    width: calc(100% / 3);
    margin-left: 25px;
    background: white;
    text-align: center;
    border-radius: 20px;
    .vert-line{
        border-radius: 20px 20px 0 0 ;
        height: 10px;
    }
    .black-line{
        background: $secondary-brand-gradient;
    }
    .green-line{
        background: $primary-brand-gradient;
    }
    .subscription-type{
        padding: 20px 0;
        span{
            font-size: 0.7rem;
            color: $grey-text;
        }
    }
    .price-green{
        background: $primary-brand-gradient;
    }
    .price-black{
        background: $secondary-brand-gradient;
    }
    .price{
        padding: 20px 0;
        h1{
            font-size: 2.5rem;
            color: white;
            span{
                font-size: 1rem;
                vertical-align: middle;
            }
        }
    }
    .subscription-list{
        padding: 30px 0;
        li{
            list-style: none;
            color: $grey-text;
            font-size: 0.9rem;
            line-height: 40px;
            .icon{
                margin-right: 10px;
                color: black;
            }
        }
    }
}
</style>