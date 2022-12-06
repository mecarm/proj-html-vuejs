<template>
  <section>
    <div class="container">
        <h1>Latest News & Our <span>Blog</span></h1>
        <div class="line">
          <div></div>
          <div></div>
        </div>
        <div class="cards-container">
          <div class="vertical-text">
                17 years of expirience helping people for best solutions
          </div>
          <div class="card card-1">
            <div class="plate">
              <span>May 24, 2018 .by Alex</span>
              <h3><font-awesome-icon icon="fa-solid fa-circle" class="icon"/>Marketing Ideas</h3>
            </div>
          </div>
          <div class="card card-2">
            <div class="plate">
              <span>May 24, 2018 .by Alex</span>
              <h3><font-awesome-icon icon="fa-solid fa-circle" class="icon"/>Rest During Working Hours</h3>
            </div>
          </div>
          <div class="card card-3">
            <div class="plate">
              <span>May 24, 2018 .by Alex</span>
              <h3><font-awesome-icon icon="fa-solid fa-circle" class="icon"/>Develop Your Startup Idea</h3>
            </div>
          </div>
        </div>
        <div class="button-center">
            <button>VIEW ALL POST</button>
        </div>
    </div>
    <div class="card-absolute">
      <div class="card-cta card-email">
        <span>Are You Ready?</span>
        <h1>Start a New Project</h1>
        <div class="input-group">
          <input type="email" placeholder="Enter Your Email Address">
          <button>SUBMIT</button>
        </div>
      </div>
      <div class="card-cta card-start">
        <span>What Are You Waiting For</span>
        <h1>Let's Talk About Work</h1>
        <div class="button-center-2">
            <button>START NOW</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
    name: 'NewsBlogSection'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');
section{
  padding: $vertical-center-pd;
  position: relative;
}
.container {
  @include center;
  text-align: center;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    font-family: 'Varela Round', sans-serif;
  }

  span {
    color: $primary-brand-color;
  }
    .line {
      @include flex('flex');
      justify-content: center;
      margin: 30px 0;
  
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
.cards-container{
  @include flex($justify: Both_Center);
  .vertical-text {
        @include vertical-text;
        margin-left: -50px;
        margin-right: 20px;
    }
  .card{
    width: calc(100% / 3);
    aspect-ratio: 16/12;
    background-size: cover;
    border-radius: 5px;
    position: relative;
    @include flex($justify: flex);
    justify-content: center;
    margin: 10px;
    
    span{
      margin-left: 10px;
      font-size: 0.7rem;
      color: $grey-text;
    }
    .icon{
      font-size: 0.4rem;
      vertical-align: middle;
      color: $primary-brand-color;
      margin-right: 5px;

    }
    .plate{
      text-align: start;
      width: 80%;
      padding: 30px 0px 10px 10px;
      background: white;
      border-radius: 10px ;
      position: absolute;
      bottom: -30px;
      box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
      font-family: 'Varela Round', sans-serif;

      h3{
        font-weight: 500;
      }
    } 
  }
  .card-1{
    background-image: url('../assets/images/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg');
  } 
  .card-2{
    background-image: url('../assets/images/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg');
  } 
  .card-3{
    background-image: url('../assets/images/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg');
  } 
}
.button-center{
    @include flex($justify: Both_Center);
    margin: 80px 0 120px 0;

    button {
    @include button_black;

    &:hover {
        @include button;
    }
}
}
.card-absolute{
  @include center;
  @include flex($justify: Both_Center);
  position: absolute;
  bottom: -10%;
  left: 10%;
  .card-cta{
    text-align: center;
    width: calc(100% / 2);
    padding: 40px;
    border-radius: 10px;
    margin: 10px;

    span{
      color: $lightGrey-text;
      font-weight: bold;
    }
    h1{
      padding: 10px 0;
      font-size: 2rem;
      color: white;
      margin-bottom: 30px;
    }
  }
  .card-email{
    background: $secondary-brand-gradient;
  }
  .card-start{
    background: $primary-brand-gradient-reverse;
  }
  .input-group{
    @include flex($justify: Between_Center);
    padding: 10px;
    width: 70%;
    margin: 10px auto;
    background: #444444;
    border-radius: 30px;
    text-align: start;
    
    input, button{
      border: none;
      background: none;
      color: $lightGrey-text;
      font-weight: bold;
      padding: 10px;
    }
    input{
      flex-basis: 60%;
    }
    button:hover{
      color: $primary-brand-color;
      cursor: pointer;
    }
    
  }
}
.button-center-2{
      @include flex($justify: Both_Center);
      margin: 20px 0;

    button {
    @include button_black;

    &:hover {
        @include button;
    }
}
}
</style>