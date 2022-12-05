<template>
    <section>
        <div class="img-container">
            <div class="img-1">
                <div class="text-green-box">
                        <h1>280</h1>
                        <span>PROJECTS</span>
                        <div class="flex-container">
                            <div>
                                <h2>+3,500</h2>
                                <span>USERS'COMMENTS</span>
                            </div>
                            <div class="vertical-line"></div>
                            <div>
                                <h2>100%</h2>
                                <span>HAPPY CLIENTS</span>
                            </div>
                        </div>
                    </div>
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
            border-radius: 5px;
            background-blend-mode: soft-light;
            position: relative;
            .text-green-box {
                    width: 100%;
                    margin: 0 auto;
                    position: absolute;
                    top: 50%;
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                    text-align: center;
                    color: white;

                h1{
                    font-size: 6rem;
                    font-weight: 300;
                }
                span{
                    font-family: 'Varela Round', sans-serif;
                }
                .flex-container{
                    margin-top: 20px;
                    @include flex($justify: Both_Center);
                    .vertical-line{
                        width: 1px;
                        height: 50px;
                        background: rgb(235, 232, 232);
                    }
                    div{
                        margin: 0 10px;

                        h2{
                            font-size: 2rem;
                            font-weight: 500;
                            padding-bottom: 10px;
                        }
                    }
                }
            }
            .img-absolute {
                    width: 100%;
                    height: 500px;
                    position: absolute;
                    background: white;
                    border-radius: 5px;
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