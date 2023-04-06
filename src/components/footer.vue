<template>
    <div class="footer">
        <AppCarusel/>
        <div class="footer__main container">
          <div class="footer-categories">
            <div class="footer-categories__block">
              <div class="footer-categories__title">For Customers</div>
              <ul class="footer-categories__list">
                <li class="footer-categories__item">About Us</li>
                <li class="footer-categories__item">Conditions</li>
                <li class="footer-categories__item">Testimonials</li>
                <li class="footer-categories__item">Articles</li>
                <li class="footer-categories__item">Contacts</li>
              </ul>
            </div>
            <div class="footer-categories__block">
              <div class="footer-categories__title">Car List</div>
              <ul class="footer-categories__list">
                <li class="footer-categories__item">SUVs</li>
                <li class="footer-categories__item">Convertibles</li>
                <li class="footer-categories__item">Sports Car</li>
                <li class="footer-categories__item">Premium</li>
                <li class="footer-categories__item">Coupe</li>
              </ul>
            </div>
            <div class="footer-categories__block">
              <div class="footer-categories__title">Service</div>
              <ul class="footer-categories__list">
                <li class="footer-categories__item">Car List</li>
                <li class="footer-categories__item">Yacht list</li>
                <li class="footer-categories__item">Chauffeur</li>
              </ul>
            </div>
          </div>
          <div class="footer-contacts">
            <div class="footer-contacts__phone">
              <div>+971 58 590 7875</div>
              <img src="../assets/social.svg" alt="">
            </div>
            <div>
              <button type="button" class="footer-contacts__callback">REQUEST A CALLBACK</button>
            </div>
            <div class="footer-contacts__adress">
              24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai
            </div>
            <div class="footer-contacts__subscribe">
              <label for="email">
                <input type="email" id="email" placeholder="Write your E-mail">
              </label>
              <button type="button" class="submit">SUBMIT</button>
            </div>
          </div>
        </div>
        <div class="footer__partners">
          <img src="../assets/partners.svg" alt="">
        </div>
        <div class="footer__copyright">
          <div class="footer__privacy">Privacy Policy</div>
          <div class="footer__year">©2023 TRINITY. All rights reserved</div>
          <div class="footer__smm-links">
            <img src="../assets/facebook.svg" alt="">
            <img src="../assets/tiktok.svg" alt="">
            <img src="../assets/youtube.svg" alt="">
            <img src="../assets/instagram.svg" alt="">
          </div>
        </div>
    </div>

</template>
<script>
import AppCarusel from './carusel.vue';

export default {
  name: 'AppFooter',
  components: {
    AppCarusel,
  },
};
</script>
<style src="../css/common.css"></style>
<style lang="scss" scoped>
@mixin to-960 {
    @media  screen and (max-width: 960px) {
        @content
    }
}
  .footer {
    background-color: #161516;
&__main {
  border-top: solid 1px #414039;
  display: flex;
  justify-content: space-between;
}

&__partners {
  border-top: solid 1px #414039;
  padding: 36px 60px;
  filter: grayscale(100%);
  & img {
    width: 100%;
  }
}

&__copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;
  border-top: solid 1px #414039;
}

&__privacy {
  color: #33B7BC;
}

&__year {
  color: #414039;
}

&__smm-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }

}
}
.footer-categories {
  display: flex;
  flex: 1 1 auto;
  border-right: solid 1px #414039;
  padding: 60px;
  @include to-960() {
    padding: 30px;
  }

&__block {
  min-width: 30%;
  margin-right: 63px;
}

&__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 90px;
  color: #FFFF;
  @include to-960() {
    font-size: 18px;
    line-height: 45px;
  }
}

&__list {}

&__item {
  font-weight: 400;
  font-size: 18px;
  line-height: 60px;
  color: #E2E2E2;
  cursor: pointer;
  position: relative;
  z-index: 1;
  width: fit-content;
    &:hover {
      color: white;
        &::before {
        content: "";
        position: absolute;
        display: inline-block;
        bottom: 15px;
        width: 100%;
        height: 5px;
        transform: skew(-12deg) ;
        background-color: rgb(144, 196, 179);
        z-index: -1;
    }
  }
}
}
.footer-contacts {
  padding: 60px 0 60px 60px;
  color: white;
  display: flex;
  flex-direction: column;
  width: 798px;
  @include to-960() {
    padding: 30px 5px 30px 30px;
  }

&__phone {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 34px;
  line-height: 90px;
  @include to-960() {
    font-size: 23px;
    line-height: 72px;
  }
  & div {
    margin-right: 30px;
    @include to-960() {
      margin-right: 25px;
  }
  }
  & img {
    width: 100px;
    height: 41px;
  }
}

&__callback {
  font-size: 15px;
  text-transform: uppercase;
  background-color: #161516;
  color: #E2E2E2;
  border: solid 2px #33B7BC;
  border-radius: 5px;
  padding: 21px 60px;
  margin-bottom: 50px;

}

&__adress {
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  max-width: 416px;
  margin-bottom: 70px;
  @include to-960() {
    font-size: 18px;
    line-height: 30px;
  }
}

&__subscribe {
  background-color: #414039;
  border: solid 1px;
  border-radius: 5px;
  max-width: 568px;
  margin-right: 10px;
  height: 90px;
  display: flex;
  padding: 5px;
  @include to-960() {
    height: 76px;
    width: 100%;
    justify-content: space-between;
  }
  & label {
    width: 100%;
  }

}
}
#email {
  background-color: transparent;
  padding: 31px 0 31px 33px;
  font-weight: 400;
  font-size: 20px;
  @include to-960() {
    font-size: 16px;
    padding: 22px 0 31px 9px;
  }
}
.submit {
  background-color: #33B7BC;
  color: white;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
  width: 131px;
  height: 80px;
  @include to-960() {
    width: 42%;
    height: 100%;
  }

}
</style>
