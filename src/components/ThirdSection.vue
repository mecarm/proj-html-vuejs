<template>
    <section>
        <div class="text-container">
            <div class="title">
                <div class="line">
                    <div></div>
                    <div></div>
                </div>
                <h1>
                    Our recent <span>web design</span> & some examples of past <span>projects</span>
                </h1>
                <div class="line">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in bookmarksgrove. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ThirdSection'
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
        flex-basis: 57%;
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
</style>