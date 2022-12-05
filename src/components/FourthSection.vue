<template>
    <section>
        <div class="img-container">
            <div class="img-1">
                <div class="img-absolute">
                    <div class="text-container">
                        <h1>We <span>Love</span> What <br>We Do</h1>
                        <div class="line">
                            <div></div>
                            <div></div>
                        </div>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean. Separated they live in bookmarksgrove.
                        </p>
                        <ul>
                            <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>far far away, behind the word mountains</li>
                            <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>large language ocean</li>
                            <li><font-awesome-icon icon="fa-solid fa-check" class="icon"/>far from the countries Vokalia and Consonantia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FourthSection'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');

section{
    background: $bg-soft-grey;
}
.img-container{
    @include center;
    padding: $vertical-center-pd;

        .img-1{
            width: 55%;
            height: 500px;
            background-image: url('../assets/images/person-with-long-curly-hair-PZ99QM2-2x.jpg'), $secondary-image-gradient;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 20px;
            background-blend-mode: soft-light;
            position: relative;

            .img-absolute {
                    width: 100%;
                    height: 500px;
                    position: absolute;
                    background: white;
                    border-radius: 10px;
                    bottom: -50px;
                    right: -80%;
                    box-shadow: 15px 15px 20px rgba(155, 154, 154, 0.4);
            
                    .text-container {
                        padding: 80px;
            
                        h1 {
                            font-family: 'Varela Round', sans-serif;
                            font-size: 2.5rem;
                        }
            
                        span {
                            color: $primary-brand-color;
                        }

                        p{
                            font-size: 0.9rem;
                            margin-bottom: 30px;
                            color: $grey-text;
                        }
                        .icon{
                            color: $primary-brand-color;
                            margin-right: 5px;
                            font-size: 0.7rem;
                        }

                        li{
                            list-style: none;
                            font-size: 0.9rem;
                            color: $grey-text;
                            line-height: 30px
                        }
            
                        .line {
                            @include flex('flex');
                            margin: 20px 0;
            
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
        }
    }
</style>