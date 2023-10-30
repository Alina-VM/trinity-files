<template>
    <div class="all">
        <img class="homebg" src="../assets/header-bg.jpg" alt="">
        <div class="home-wrapper row">
            <div class="main-text">
                <div class="main-text__title">
                    Dubai
                </div>
                <div class="main-text__description">
                    LUXURY CAR RENTAL
                </div>
            </div>
            <div class="socials">
                <img src="../assets/social.svg" alt="">
            </div>
            <div class="down-switcher">
                <img src="../assets/Rectangle-switch.png" alt="">
            </div>
        </div>
    </div>
    <div class="most-popular">
        <div class="most-popular__image">
            <img src="../assets/Lamborghini.jpg" alt="">
            <div class="most-popular__text">
                <div class="most-popular__name">Rent Lamborghini <br> Huracan STO</div>
                <div class="most-popular__description">
                    <span>Rent is from aed</span>
                    <span>2 400$</span>
                    <span>per day</span>
                </div>
            </div>
        </div>
        <div class="most-popular__search-block">
            <div class="most-popular__title">Most Popular</div>
            <div class="most-popular__search">
                <div>
                    <label for="search">
                        <input class="most-popular__search--text" placeholder="Car search">
                    </label>

                </div>
                <img src="../assets/search.svg" alt="">
            </div>
            <!-- <div class="most-popular__carusel">
                <div v-for="car in availableCars" v-bind:key='car'  class="carusel-block">
                    <div class="carusel-block__name">
                    {{ car.name }}</div>
                    <div class="carusel-block__model"> {{ car.model }}</div>
                </div>
            </div> -->
            <SliderApp :slides="availableCars" />
            <button class="most-popular__button">VIEW ALL</button>
        </div>
    </div>
    <OfferBlockMain />
</template>
<script>
import { mapGetters } from 'vuex';
import SliderApp from '../components/Slider.vue';
import OfferBlockMain from '../components/OfferBlockMain.vue';

export default {
  name: 'HomeApp',
  components: {
    SliderApp,
    OfferBlockMain,
  },
  computed: {
    ...mapGetters({ availableCars: 'availableCars' }),
  },
};
</script>
<style lang="scss" scoped>

.all {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 245px);
    flex: 1 1 auto;
}
.homebg {
    position:absolute;
    top: 0px;
    z-index: -1000;
    min-height: 100vh;
    object-fit: cover;
    width: 100%;
  }
  .home-wrapper {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .main-text {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        align-items: center;
        margin-top: 110px;
        &__title {
            color:white;
            font-size: 120px;
            @include to-768 {
                font-size: 60px;
            }
        }
        &__description {
            color:white;
            font-size: 32px;
            text-transform: uppercase;
            @include to-768 {
                font-size: 17px;
            }
        }
}
.socials {
    display: flex;
    justify-content: flex-end;
    padding-right: 60px;
    margin-bottom: 60px;
    @include to-768 {
        padding-right: 25px;
        }
    & img {
        @include to-768 {
        width: 97px;
        height: 40px;
        }
    }
}
.down-switcher {
    margin: 0 auto;
}
.most-popular {
    display: flex;
    background-color: black;
    padding-top: 180px;
    padding-bottom: 210px;
    &__image {
        color: #FFF;
        font-family: Stolzl;
        line-height: 60px;
        & img {
            max-width: 1110px;
            max-height: 860px;
            width: 100%;
            height: auto;
        }
    }

    &__text {
        display: flex;
        justify-content: space-between;

    }

    &__name {
        font-size: 46px;
        font-weight: 700;
        margin-top: -180px;
        //width: 487px;
        margin-left: 60px;
        @include to-960 {
            margin-top: -133px;
            margin-left: 15px;
            font-size: 28px;
        }
    }

    &__description {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: -180px;
        margin-right: 60px;
        font-size: 16px;
        font-weight: 400;

        & span:nth-child(2) {
            font-size: 50px;
            font-weight: 700;
            line-height: 11px;
            @include to-960 {
                font-size: 30px;
            }
        }
        @include to-960 {
            margin-top: -133px;
        }
    }

    &__search-block {
        padding: 0 60px;
        display: flex;
        flex-direction: column;
        //width: 100%;
        flex-grow: 1;
    }

    &__title {
        font-family: Stolzl;
        font-size: 70px;
        font-weight: 500;
        line-height: 90px;
        color: #FFF;
        @include to-960 {
            font-size: 40px;
            line-height: 53px;
        }
    }

    &__search {
        background-color: #1C1C1C;
        border: solid 1px #434343A8;
        border-radius: 5px;
        max-width: 700px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        margin-bottom: 20px;
    }
    &__search--text[placeholder] {
        background: none;
        font-family: Stolzl;
        font-weight: 400;
        font-size: 20px;
        line-height: 90px;
        color: #707070;
        @include to-960 {
            font-size: 15px;
            line-height: 48px;
        }
    }
    &__carusel {
        flex: 1 1 auto;
        color: #FFF;
        padding: 50px 0;
    }
    &__button {
    width: 215px;
    height: 57px;
    color: #FFF;
    text-align: center;
    font-family: Stolzl;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #33B7BC;
    border-radius: 10px;
    //margin-left: 131px;
  }
  @include to-960 {
    padding-bottom: 120px;
    padding-top: 120px;
  }
  @include to-768 {
    display: none;
  }
}
.carusel-block {

&__name {
    color: #FFF;
    font-family: Stolzl;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    }

&__model {
    color: #646464;
    font-family: Stolzl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    }
}

</style>
