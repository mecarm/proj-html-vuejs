<template>
  <section>
    <div class="container">
        <div class="quotation-marks">
            <font-awesome-icon icon="fa-solid fa-quote-left" />
        </div>
        <p>
            When it comes to barbequing, there are two main schools of thought for the <br> tecgniques that you can use. Freshly scarmpled eggs with applewood smoked bacon <br> - are amazing!
        </p>
        <div class="center-circle">
            <div class="circle">
                <img src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="client">
            </div>
        </div>
        <h4>LISSA BURBIN</h4>
        <span>Client</span>
        
    </div>
  </section>
</template>

<script>
export default {
    name: 'ReviewSection'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');
section{
    background-image: url('../assets/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
}
.container{
    padding: 150px 0;
    background: rgba(39, 39, 39, 0.878);
    color: $lightWhite-text;
    .quotation-marks{
        font-size: 3rem;
        color: $primary-brand-color;
    }
    p{
        padding: 50px 300px;
        font-size: 1.2rem;
        font-style: italic;
        line-height: 30px;
    }
   .center-circle{
        @include flex($justify: Both_Center);
    }
    .circle{
        width: 80px;
        height: 80px;
        border: 2px solid white;
        border-radius: 50%;

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;

        }
    }
    h4{
        color: $primary-brand-color;
        padding-top: 20px;
    }
    span{
        font-size: 0.8rem;
        font-weight: bold;
        color: whitesmoke;
    }
}
</style>