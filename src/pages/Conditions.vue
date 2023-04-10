<template>
  <div class="header-absolute"></div>
  <div class="conditions-wrapper">
    <div class="container flex-block">
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ul>
        <router-link :to= "{name: 'home'}" class="breadcrumb__link" >
          Main
        </router-link>
        <li>
          <img src="../assets/twoarrows.svg" alt="" class="breadcrumb__arrow">
        </li>
        <li><span aria-current="page">Conditions</span></li>
      </ul>
    </nav>
    <h1 class="h1">Car rental conditions</h1>
    <p class="description">
      Requirments for customers
    </p>
    <div class="requirements-block">
      <div class="requirements-block__item">
        <div class="requirements-block__text">From <span>19</span>y.o.</div>
        <div>Age</div>
      </div>
      <div class="requirements-block__vl"></div>
      <div class="requirements-block__item">
        <div class="requirements-block__text">From <span>1</span> year</div>
        <div>Driving</div>
      </div>
    </div>
    <div class="faq-block">
      <div class="faq-block__item">
        <div class="faq-block__header">
          <div class="faq-block__name">
            Requirments for Customers
          </div>
          <img class="faq-block__show" src="../assets/plus.svg" alt="">
          <img class="faq-block__show" src="../assets/crossblue.svg" alt="">
        </div>
        <div class="faq-block__description" v-show="openFaq = true">
          For the car, a refund of the insurance deposit is required, the amount of which depends
          on the selected car, as well as the driving experience and citizenship of the customer.
        </div>
      </div>
      <div class="faq-block__item">
        <div class="faq-block__header">
          <div class="faq-block__name">
            How can I add another driver?
          </div>
          <img class="faq-block__show" src="../assets/plus.svg" alt="">
          <img class="faq-block__show" src="../assets/crossblue.svg" alt="">
        </div>
        <div class="faq-block__description">
          For the car, a refund of the insurance deposit is required, the amount of which depends
          on the selected car, as well as the driving experience and citizenship of the customer.
        </div>
      </div>
      <div class="faq-block__item">
        <div class="faq-block__header">
          <div class="faq-block__name">
            Can I order delivery or return of a car?
          </div>
          <img class="faq-block__show" src="../assets/plus.svg" alt="">
          <img class="faq-block__show" src="../assets/crossblue.svg" alt="">
        </div>
        <div class="faq-block__description">
          For the car, a refund of the insurance deposit is required, the amount of which depends
          on the selected car, as well as the driving experience and citizenship of the customer.
        </div>
      </div>
      <div class="faq-block__item">
        <div class="faq-block__header">
          <div class="faq-block__name">
            Where can I use a rented car?
          </div>
          <img class="faq-block__show" src="../assets/plus.svg" alt="">
          <img class="faq-block__show" src="../assets/crossblue.svg" alt="">
        </div>
        <div class="faq-block__description">
          For the car, a refund of the insurance deposit is required, the amount of which depends
          on the selected car, as well as the driving experience and citizenship of the customer.
        </div>
      </div>
      <div class="faq-block__item">
        <div class="faq-block__header">
          <div class="faq-block__name">
            Are there any extra charges?
          </div>
          <img class="faq-block__show" src="../assets/plus.svg" alt="">
          <img class="faq-block__show" src="../assets/crossblue.svg" alt="">
        </div>
        <div class="faq-block__description">
          For the car, a refund of the insurance deposit is required, the amount of which depends
          on the selected car, as well as the driving experience and citizenship of the customer.
        </div>
      </div>
      <div class="faq-block__item">
        <div class="faq-block__header">
          <div class="faq-block__name">
            How can I book a car?
          </div>
          <img class="faq-block__show" src="../assets/plus.svg" alt="">
          <img class="faq-block__show" src="../assets/crossblue.svg" alt="">
        </div>
        <div class="faq-block__description">
          For the car, a refund of the insurance deposit is required, the amount of which depends
          on the selected car, as well as the driving experience and citizenship of the customer.
        </div>
      </div>
      <div class="faq-block__item">
        <div class="faq-block__header">
          <div class="faq-block__name">
            What is not allowed when renting a car?
          </div>
          <img class="faq-block__show" src="../assets/plus.svg" alt="">
          <img class="faq-block__show" src="../assets/crossblue.svg" alt="">
        </div>
        <div class="faq-block__description">
          For the car, a refund of the insurance deposit is required, the amount of which depends
          on the selected car, as well as the driving experience and citizenship of the customer.
        </div>
      </div>
    </div>
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
        <textarea name="" id="" cols="30" rows="10" class="form__item">Message</textarea>
        <button type="button" class="form__button">SEND THE REQUEST</button>
        </div>
    </div>
    <div class="subscribe">
      <div class="subscribe__title">Get a discount of up to <span>60%</span></div>
      <div class="subscribe__description">
        Get the latest articles and business updates that you need to know, you’ll
        even get special recommendations weekly.
      </div>
      <div class="subscribe__email">
        <img src="../assets/circles-conditions.svg" alt="" class="subscribe__circle-left">
        <img src="../assets/circles-conditions.svg" alt="" class="subscribe__circle-right">
        <img src="../assets/circles-conditions.svg" alt="" class="subscribe__square">
        <div class="email-field">
          <img class="email-field__img" src="../assets/envelope.svg" alt="">
          <div class="email-field__text">Your email</div>
        </div>
        <button type="button" class="email-field__button">RECEIVE</button>
      </div>
    </div>
  </div>
  </div>

</template>
<script>
export default {
  name: 'ConditionsApp',
  data() {
    return {
      openFaq: false,
    };
  },
};
</script>
<style src="../css/common.css"></style>
<style src="../css/breadcrumb.css"></style>
<style lang="scss" scoped>
.conditions-wrapper {
  width: 100%;
  height: 100%;
  background-color: #161516;
}
.header-absolute {
  background-color: #161516;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -4;
}
.flex-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}

.h1 {
  color: #FFFFFF;
  font-weight: 500;
  font-size: 70px;
  margin-bottom: 70px;

}
.description {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 26px;
  margin-bottom: 40px;
}
.requirements-block {
  display: flex;
  margin-bottom: 80px;
&__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  & div:last-child {
    color: #535965;
    font-weight: 500;
    font-size: 18px;
  }
}
&__text {
  font-weight: 300;
  text-align: center;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 55px;
  & span {
    font-size: 40px;
  }

}
&__vl {
  height: 53px;
  border-left: 1px solid #2C2F3D;
  margin: 0 50px;
}
}
.faq-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;

&__item {
  display: flex;
  flex-direction: column;
  padding: 40px;
  border: 1px solid #27323D;
  border-radius: 33px;
  margin-bottom: 25px;
}

&__header {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

&__name {
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;
}

&__show {}

&__description {}
}
.contacts {

&__map {}

&__form {}
}
.form {

&__title {}

&__item {}

&__button {}
}
.subscribe {

&__title {}

&__description {}

&__email {}

&__circle-left {}

&__circle-right {}

&__square {}
}
.email-field {

&__img {}

&__text {}

&__button {}
}

</style>
