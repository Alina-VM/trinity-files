<template>
    <div class="header-wrapper">
        <div class="header row" :class="{'blur': showModal}">
            <div class="header__left-menu row" :class="{'display-none': showModal}">
                    <img src="../assets/menu.svg" alt="menu" class="menu-burger left-menu__item"
                    @click="showModal = true" @keypress="showModal = true">
                <router-link to="/carlist" class="left-menu__item">Car List</router-link>
                <div class="left-menu__item">Yach List</div>
                <div class="left-menu__item">Chauffeur</div>
            </div>
            <a href="/">
                <div class="header-logo row" :class="{'display-none': showModal}">
                    <img src="../assets/logo.svg" alt="logo" class="header-logo__img">
                    <div class="header-logo__name">TRINITY</div>
                    <div class="header-logo__description">CAR RENTAL BOUTIQUE</div>
                </div>
            </a>
            <div class="header__right-menu row" :class="{'display-none': showModal}">
                <div class="right-menu__item">+971 58 590 7875</div>
                <div class="header__right-menu row city-select right-menu__item"
                @click="showCityList =!showCityList" @keypress="showCityList =!showCityList">
                    <div class="city-select__lable">{{selectedCity}}</div>
                    <img v-if="showCityList" src="../assets/dropdown.svg" alt="" >
                    <img v-else src="../assets/arrow-white.svg" alt="">
                </div>
                <div class="city-select__list" v-if="showCityList"
                @click.stop="showCityList = false" @keypress.stop="showCityList = false">
                    <div v-for="city in cities" v-bind:key="city" class="city"
                    @click="cityBlock" @keypress="cityBlock">
                        {{ city.value }}</div>
                </div>
                <div class="header__right-menu row language-select right-menu__item"
                @click="showLangList =!showLangList" @keypress="showLangList =!showLangList">
                    <div class="language-select__lable">{{selectedLang}}</div>
                    <img v-if="showLangList" src="../assets/dropdown1.svg" alt="" >
                    <img v-else src="../assets/arrow-white1.svg" alt="">
                </div>
                <div class="language-select__list" v-if="showLangList"
                @click.stop="showLangList = false" @keypress.stop="showLangList = false">
                    <div v-for="lang in languages" v-bind:key="lang" class="city"
                    @click="langBlock" @keypress="langBlock">
                        {{ lang.value }}</div>
                </div>
            </div>
        </div>

    </div>
    <AppBurger
    :show="showModal" @close="showModal = false"
    />
</template>
<script>
import { mapGetters } from 'vuex';
import AppBurger from './burger.vue';

export default {
  name: 'AppHeader',
  components: {
    AppBurger,
  },
  data() {
    return {
      showModal: false,
      selectedCity: 'Kyiv',
      selectedLang: 'UA',
      isActiveCity: false,
      isActiveLang: false,
      showCityList: false,
      showLangList: false,
    };
  },
  computed: {
    ...mapGetters('header', { cities: 'allCities', languages: 'allLangs' }),
  },
  methods: {
    cityBlock(e) {
      this.selectedCity = e.target.textContent;
    },
    langBlock(e) {
      this.selectedLang = e.target.textContent;
    },
  },

};
</script>
<style src="../css/common.css"></style>
<style lang="scss" scoped>
    @mixin select($w) {
        cursor: pointer;
        position: relative;
        width: $w;
        overflow: hidden;
        display: flex;
        align-items: center;
        &::after {
            content: url('../assets/arrow-white.svg');
            position: absolute;
            pointer-events:none;
            cursor:pointer;
            top: 2px;
            right: 0;
            padding: 0 1em;
        }
    }
    @mixin to-960 {
        @media  screen and (max-width: 960px) {
            @content
        }
    }
    .header {
        padding: 40px 60px 60px;
        align-items: center;
        color: white;
        justify-content: space-between;
        &__left-menu {
            justify-content: space-between;
            align-items: center;
        }
        &__right-menu {
            justify-content: space-between;
            align-items: center;
        }
        @include to-960() {
            padding: 30px 25px;
        }
        @include to-768 {
            padding: 30px 25px 0;
            margin-bottom: 30px;
        }
    }
    .header-logo {
        flex-direction: column;
        align-items: center;
        &__img {
            margin-bottom: 22px;
            @include to-768 {
                width: 50px;
                height: 47px;
            }
        }

        &__name {
            font-size: 28px;
            text-transform: uppercase;
            margin-bottom: 15px;
            @include to-768 {
                display: none;
            }
        }

        &__description {
            font-size: 11px;
            text-align: center;
            @include to-768 {
                display: none;
            }
        }
    }
    .left-menu{
        &__item {
            margin-right: 58px;
            color: #D7D7D7;
            cursor: pointer;
            z-index: 1;
            width: fit-content;
            position: relative;
            @media screen and (max-width: 1250px) {
                margin-right: 30px;
            }
            &:not(:first-child) {
                @include to-768 {
                    display: none;
                }
            }
            &:hover {
                color: white;
                &::before {
                content: "";
                position: absolute;
                //left: 29%;
                top: 12px;
                width: 100%;
                height: 4px;
                transform: skew(-12deg);
                background-color: rgb(144, 196, 179);
                z-index: -1;
            }
            }
        }
    }
    .right-menu{
        &__item {
            margin-left: 58px;
            @media screen and (max-width: 1250px) {
                margin-left: 30px;
            }
        &:not(:nth-child(3)) {
            @include to-768 {
                display: none;
            }
        }
        }
    }
    .menu-burger {
        cursor: pointer;
        @include to-768 {
            width: 55px;
            height: 11px;
        }
    }
    .header.blur {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(8px);
        height: 100vh;
        width: 100%;
    }
    .display-none {
        display: none;
    }
// select {
//     appearance: none;
//     flex: 1;
//     background: #3a4f60;
//     margin-right: 10px;
//     outline: 0;
//     box-shadow:none;
//     padding: 0 .5em;
//     border: 0 !important;
//     background-image: none;
//     cursor: pointer;
//     color: white;
//         &::-ms-expand {
//             display: none;
//         }
// }
.select--city {
    @include select(120px)
}
.select--lang {
    @include select(70px)
}
//     .select.selectOpened::after {
//         content: url('../assets/dropdown.svg');
//         position: absolute;
//         pointer-events:none;
//         cursor:pointer;
//         top: 2px;
//         right: 0;
//         padding: 0 1em;
// }

.city-select {
    position: relative;
    width: 120px;
    cursor: pointer;
    margin-right: 10px;
    @include to-960() {
            width: 60px;
        }
&__lable {
    margin-right: 10px;
}

&__list {
    position: absolute;
    top: 140px;
    right: 180px;
    padding: 10px 25px;
    border-radius: 10%;
    border: solid 1px #3a4f60;
    width: 188px;
    height: 203px;
}
}
.city {
    font-size: 15px;
    font-weight: 500;
    padding: 15px 0;
    border-bottom: solid 1px #3a4f60;
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        color: #33B7BC;
    }
}
.language-select {
    position: relative;
    width: 60px;
    cursor: pointer;
&__lable {
    margin-right: 10px;
}

&__list {
    position: absolute;
    top: 140px;
    right: 49px;
    padding: 10px 25px;
    border-radius: 10%;
    border: solid 1px #3a4f60;
    width: 188px;
    height: 120px;
}
}

</style>
