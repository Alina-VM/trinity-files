<template>
  <div class="header-absolute"></div>
  <div class="conditions-wrapper">
    <div class="container flex-block">
      <div class="gradient"></div>
      <nav aria-label="Breadcrumb" class="breadcrumb">
        <ul>
          <router-link :to="{ name: 'home' }" class="breadcrumb__link">
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
        <details class="faq-block__item">
          <summary class="faq-block__header">
            <div class="faq-block__name">
              Requirments for Customers
            </div>
          </summary>
          <div class="faq-block__description">
            For the car, a refund of the insurance deposit is required, the amount of which depends
            on the selected car, as well as the driving experience and citizenship of the customer.
          </div>
        </details>
        <details class="faq-block__item">
          <summary class="faq-block__header">
            <div class="faq-block__name">
              How can I add another driver?
            </div>
          </summary>
          <div class="faq-block__description">
            For the car, a refund of the insurance deposit is required, the amount of which depends
            on the selected car, as well as the driving experience and citizenship of the customer.
          </div>
        </details>
        <details class="faq-block__item">
          <summary class="faq-block__header">
            <div class="faq-block__name">
              Can I order delivery or return of a car?
            </div>
          </summary>
          <div class="faq-block__description">
            For the car, a refund of the insurance deposit is required, the amount of which depends
            on the selected car, as well as the driving experience and citizenship of the customer.
          </div>
        </details>
        <details class="faq-block__item">
          <summary class="faq-block__header">
            <div class="faq-block__name">
              Where can I use a rented car?
            </div>
          </summary>
          <div class="faq-block__description">
            For the car, a refund of the insurance deposit is required, the amount of which depends
            on the selected car, as well as the driving experience and citizenship of the customer.
          </div>
        </details>
        <details class="faq-block__item">
          <summary class="faq-block__header">
            <div class="faq-block__name">
              Are there any extra charges?
            </div>
          </summary>
          <div class="faq-block__description">
            For the car, a refund of the insurance deposit is required, the amount of which depends
            on the selected car, as well as the driving experience and citizenship of the customer.
          </div>
        </details>
        <details class="faq-block__item">
          <summary class="faq-block__header">
            <div class="faq-block__name">
              How can I book a car?
            </div>
          </summary>
          <div class="faq-block__description">
            For the car, a refund of the insurance deposit is required, the amount of which depends
            on the selected car, as well as the driving experience and citizenship of the customer.
          </div>
        </details>
        <details class="faq-block__item">
          <summary class="faq-block__header">
            <div class="faq-block__name">
              What is not allowed when renting a car?
            </div>
          </summary>
          <div class="faq-block__description">
            For the car, a refund of the insurance deposit is required, the amount of which depends
            on the selected car, as well as the driving experience and citizenship of the customer.
          </div>
        </details>
      </div>
      <askUs/>
    </div>
  </div>
  <sendRequestButton/>
</template>
<script>
import askUs from '../components/askUs.vue';

export default {
  name: 'ConditionsApp',
  components: {
    askUs,
  },
};
</script>
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
  @include to-768 {
    padding-top: 0;
  }
}

.h1 {
  color: #FFFFFF;
  font-weight: 500;
  font-size: 70px;
  margin-bottom: 70px;
  @include to-768 {
    font-size: 40px;
    margin-bottom: 0;
    text-align: center;
  }
}

.description {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 26px;
  margin-bottom: 40px;
  @include to-768 {
    font-size: 18px;
    line-height: 90px;
    margin-bottom: 0;
  }
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
  width: 100%;
  margin: 0 20px 235px 20px;
  max-width: 960px;
  @include to-768 {
    padding: 0 20px;
    margin-bottom: 80px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    padding: 40px;
    border: 1px solid #27323D;
    border-radius: 33px;
    margin-bottom: 25px;
    width: 100%;
    justify-content: space-between;
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
    @include to-768 {
      font-size: 18px;
      line-height: 22px;
    }
  }

  &__show {
    cursor: pointer;
  }

  &__description {
    font-weight: 400;
    font-size: 18px;
    color: #C6CDDA;
    margin-top: 26px;
    @include to-768 {
      font-size: 15px;
      line-height: 24px;
    }
  }
}

summary {
  display: block;
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  content: url(../assets/plus.svg);
  padding-right: 0.5em;
  cursor: pointer;
}

details[open]>summary::after {
  content: url(../assets/crossblue.svg);
  cursor: pointer;
}

.gradient {
  width: 257px;
  height: 257px;
  background-image: radial-gradient(circle, #109e9e, #29889a, #42728a, #4e5d71, #4b4b55);
  filter: blur(71px);
  opacity: 0.2;
  position: absolute;
  left: 150px;
}
</style>
