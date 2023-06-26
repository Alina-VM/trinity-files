<template>
    <div class="contacts">
        <img src="../assets/conditions-map.jpg" alt="" class="contacts__map">
        <div class="contacts__form">
          <div class="form__title h1">Ask us anything</div>
          <label for="name">
            <input type="text" placeholder="Name" id="name" class="form__item">
          </label>
          <label for="E-mail">
            <input type="email" placeholder="E-mail" id="E-mail" class="form__item">
          </label>
          <label for="tel">
            <input type="tel" id="tel" placeholder="+7 (999) 999 - 99 - 99" class="form__item">
          </label>
          <textarea name="" id="" class="form__item">Message</textarea>
          <sendRequestButton/>
        </div>
    </div>
    <div class="subscribe">
      <img src="../assets/circles-conditions.svg" alt="" class="subscribe__circle-left">
      <img src="../assets/circles-conditions.svg" alt="" class="subscribe__circle-right">
      <img src="../assets/square-conditions.png" alt="" class="subscribe__square">
        <div class="subscribe__title">Get a discount of up to <span>60%</span></div>
        <div class="subscribe__description">
          Get the latest articles and business updates that you need to know, you’ll
          even get special recommendations weekly.
        </div>
        <div class="subscribe__email">
          <div class="email-field">
            <img class="email-field__img" src="../assets/envelope.svg" alt="">
            <input class="email-field__text" placeholder="Your email">
          </div>
          <button type="button" class="email-field__button">RECEIVE</button>
        </div>
    </div>
</template>
<script>
import sendRequestButton from './sendRequestButton.vue';

export default {
  name: 'askUs',
  components: {
    sendRequestButton,
  },
};
</script>
<style lang="scss">

.contacts {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  margin-right: 60px;
  margin-bottom: 250px;
  @include to-768 {
        padding: 0 20px;
        align-items: center;
        margin-right: 0;
        margin-bottom: 80px;
    }

  &__map {
    width: 60%;
    display: inline-block;
    border-radius: 0 10px 10px 0;
    margin-right: 60px;
    @include to-768 {
        display: none;
    }
  }

  &__form {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    //padding: 0 60px;
  }
}

.form {

  &__title {
    font-weight: 500;
    font-size: 70px;
    line-height: 90px;
    color: white;
    margin-bottom: 80px;
    @include to-960() {
        font-size: 33px;
        line-height: 52px;
        margin-bottom: 28px;

    }
    @include to-768 {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        text-align: center;
    }
  }

  &__item {
    color: #707070;
    background-image: linear-gradient(to left, #1c1c1c, #1c1c1c,
        #1b1c1b, #1b1b1b, #1b1b1b);
    width: 100%;
    border: solid 1px #2F2F2F;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 400;
    line-height: 90px;
    margin-bottom: 30px;
    padding-left: 30px;
    //padding: 36px 0 35px 30px;
    //height: 90px;
    @include to-960() {
        font-size: 14px;
        line-height: 44px;
        margin-bottom: 13px;
        padding-left: 18px;
    }
  }
}
textarea {
    height: 100%;
    max-height: 180px;
  }

.subscribe {
    position: relative;
    background-color: #1E1D1E;
    border-radius: 40px 10px 10px 10px;
    max-width: 1170px;
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 250px;
    &__title {
      font-size: 46px;
      font-family: 'Stolzl';
      font-weight: 400;
      line-height: 36px;
      text-align: center;
      margin-bottom: 25px;
      color: white;
      @include to-768 {
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 30px;

      }
    & span {
      font-weight: 700;
    }

  }

  &__description {
    font-size: 18px;
    font-family: 'Stolzl';
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    margin-bottom: 54px;
    color: #868686;
    @include to-768 {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 25px;
    }
  }

  &__email {
    display: flex;
    //flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    @include to-768 {
      flex-direction: column;
    }
  }

  &__circle-left {
    position: absolute;
    top: 122px;
    left: 34px;
    opacity: 0.4;
    @include to-768 {
      display: none;
    }
  }

  &__circle-right {
    position: absolute;
    top: 38px;
    right: -37px;
    transform: rotate(-90deg);
    width: 284px;
    opacity: 0.4;
    @include to-768 {
      display: none;
    }
  }

  &__square {
    position: absolute;
    bottom: -72px;
    right: -93px;
    @include to-768 {
      display: none;
    }
  }
  @include to-768 {
      padding: 20px;
      margin: 0 20px 80px 20px;
  }
}

.email-field {
  display: flex;
  position: relative;
  flex-grow: 1;
  max-width: 425px;
  @include to-768 {
    max-width: 100%;
    margin-bottom: 15px;
  }

  &__img {
    position: absolute;
    top: 24px;
    left: 30px;
    color: #868686;
    z-index: 5;
  }

  &__text {
    // max-width: 425px;
    padding-left: 65px;
    flex-grow: 1;
    height: 68px;
    border-radius: 10px;
    background-color: #2B282B;
    color: #868686;
    line-height: 22px;
    font-weight: 400;
    font-size: 18px;
    margin-right: 10px;
    opacity: 0.9;
    @include to-768 {
      font-size: 15px;
      margin-right: 0;
    }
  }

  &__button {
    background-color: #33B7BC;
    color: white;
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
    height: 68px;
    min-width: 180px;
    border-radius: 10px;
  }
}

.displaynone {
  display: none;
}
</style>
