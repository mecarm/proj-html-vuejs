<template>
  <section>
    <div class="img-container">
            <div class="img-1">
                <div class="img-absolute"></div>
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

            .img-absolute{
                width: 100%;
                height: 500px;
                position: absolute;
                background: white;
                border-radius: 10px;
                bottom: -50px;
                right: -80%;
                box-shadow: 15px 15px 20px rgba(155, 154, 154, 0.4);

            }
        }
    }
</style>