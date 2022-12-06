<template>
  <footer>
    <div class="container">
        <div class="footer-div">
            <img src="../assets/images/cropped-Group-39-2x.png" alt="">
            <p>
                While the lovely valley teems with vapour around me, and the meridian sun stikes the upper surface of the impenetrable foliage of my trees. While the lovely valley teems with vapour around me.
            </p>
        </div>
        <div class="footer-div">
            <h3>QUICk LINKS</h3>
            <div class="line">
                <div></div>
                <div></div>
            </div>
            <ul>
                <li>Careers</li>
                <li>News</li>
                <li>Terms of use</li>
                <li>Privacy Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="footer-div">
            <h3>CONTACT</h3>
            <div class="line">
                <div></div>
                <div></div>
            </div>
            <div class="">Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</div>
            <div class="spacing">info@yourdomain.com</div>
            <div class="spacing">+99 (0) 101 0000 888</div>
        </div>
        <div class="footer-div">
            <h3>LOCATION ON MAP</h3>
            <div class="line">
                <div></div>
                <div></div>
            </div>
            <img class="img" src="../assets/images/map.png" alt="location on map">
        </div>
    </div>
    <div class="bottom-footer">
        <div class="black-bottom-footer">
            <div><font-awesome-icon icon="fa-solid fa-copyright" /> 2020 PHLOX BUSINESS THEME.</div>
            <div class="content-top-bar">
                <div>
                    <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon"/>
                    <font-awesome-icon icon="fa-brands fa-twitter" class="icon"/>
                    <font-awesome-icon icon="fa-brands fa-pinterest-p" class="icon"/>
                </div>
            </div>
        </div>
        <div class="icons">
            <div><font-awesome-icon icon="fa-solid fa-arrow-up" class="icon"/></div> 
            <div><font-awesome-icon icon="fa-regular fa-comment" class="icon"/></div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>

<style lang="scss" scoped>
@import '../style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&family=Varela+Round&display=swap');
.container{
    @include center;
    @include flex($justify: Between);
    padding: 100px 0;
    font-size: 0.9rem;
    color: $grey-text;
    .footer-div{
        flex-basis: 24%;
        .img{
            width: 100%;
        }

        h3{
            font-family: 'Varela Round', sans-serif;
        }

        li{
            list-style-type: none;
            text-align: center;
            line-height: 23px;
        }
        .spacing{
            padding-top: 25px;
        }

        p{
            padding: 0 5px
        }
    }
    .line {
      @include flex('flex');
      margin: 15px 0;
  
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
.bottom-footer{
    background: $secondary-brand-gradient;
    @include flex($justify: flex);
    padding: 40px 0;
    position: relative;

    .icons{
        color: white;
        @include flex($justify: Between_Center);
        position: absolute;
        right: 5%;
        top: 10px;

        div{
            &:first-child{
                background: $bg-soft-grey;
                color: $grey-text;
                padding:8px 10px;
                border-radius: 50%;
                margin-right: 10px;
                font-size: 0.5rem;
            }
            &:last-child{
                background: #527CEB;
                padding:8px 10px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }
    }
}
.black-bottom-footer{
    @include flex($justify: Between_Center);
    @include center;
    color: $lightGrey-text;
    font-size: 0.6rem;
    font-weight: bold;

    .icon{
        margin-right: 20px;
      }
}
</style>