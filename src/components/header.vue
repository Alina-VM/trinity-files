<template>
    <div class="header-wrapper">
        <div class="header row" :class="{'blur': showModal}">
            <div class="header__left-menu row" :class="{'display-none': showModal}">
                <img src="../assets/menu.svg" alt="menu" class="menu-burger left-menu__item"
                @click="showModal = true" @keypress="showModal = true"
                >
                <div class="left-menu__item">Car List</div>
                <div class="left-menu__item">Yach List</div>
                <div class="left-menu__item">Chauffeur</div>
            </div>
            <div class="header-logo row" :class="{'display-none': showModal}">
                <img src="../assets/logo.svg" alt="logo" class="header-logo__img">
                <div class="header-logo__name">TRINITY</div>
                <div class="header-logo__description">CAR RENTAL BOUTIQUE</div>
            </div>
            <div class="header__right-menu row" :class="{'display-none': showModal}">
                <div class="right-menu__item">+971 58 590 7875</div>
                <label for="cities" class="right-menu__item">
                    <div class="select select--city" :class="{'selectOpened': isActive}"
                    @click="isActiveCity=!isActiveCity" @keypress="isActive=!isActive">
                        <select v-model="selectedCity" >
                            <option v-for="city in cities" v-bind:value="city.value"
                            v-bind:key="city">
                                {{city.text}}</option>
                        </select>
                    </div>
                </label>
                <label for="lang" class="right-menu__item">
                    <div class="select select--lang" :class="{'selectOpened': isActive}"
                    @click="isActiveLang=!isActiveLang" @keypress="isActive=!isActive">
                        <select v-model="selectedLang">
                            <option v-for="lang in languages" v-bind:value="lang.value"
                            v-bind:key="lang">
                            {{ lang.text }}</option>
                        </select>
                    </div>
                </label>
            </div>
        </div>
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
    </div>
    <AppBurger
    :show="showModal" @close="showModal = false"
    />
</template>
<script>
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
      cities: [
        { text: 'Dubai', value: 'Dubai' },
        { text: 'Kyiv', value: 'Kyiv' },
        { text: 'Budapest', value: 'Budapest' },
        { text: 'Wiesbaden', value: 'Wiesbaden' },
      ],
      languages: [
        { text: 'UA', value: 'UA' },
        { text: 'ENG', value: 'ENG' },
      ],
      isActiveCity: false,
      isActiveLang: false,
    };
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
            content: url('../assets/arrow-point-to-right\ 1.svg');
            position: absolute;
            pointer-events:none;
            cursor:pointer;
            top: 2px;
            right: 0;
            padding: 0 1em;
        }
    }
    .header-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        background-image: url('../assets/header-bg.jpg');
        background-position: top;
    }
    .header {
        padding: 40px 60px 60px;
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
    }
    .header-logo {
        flex-direction: column;
        align-items: center;
        &__img {
            margin-bottom: 22px;
        }

        &__name {
            font-size: 28px;
            text-transform: uppercase;
            margin-bottom: 15px;
        }

        &__description {
            font-size: 11px;
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
        }
    }
    .menu-burger {
        cursor: pointer;
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
    .main-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        &__title {
            color:white;
            font-size: 120px;
        }
        &__description {
            color:white;
            font-size: 32px;
            text-transform: uppercase;
        }
}
.socials {
    display: flex;
    justify-content: flex-end;
}
select {
    appearance: none;
    flex: 1;
    background: #3a4f60;
    margin-right: 10px;
    outline: 0;
    box-shadow:none;
    padding: 0 .5em;
    border: 0 !important;
    background-image: none;
    cursor: pointer;
    color: white;
        &::-ms-expand {
            display: none;
        }
}
.select--city {
    @include select(120px)
}
.select--lang {
    @include select(70px)
}
    .select.selectOpened::after {
        content: url('../assets/dropdown.svg');
        position: absolute;
        pointer-events:none;
        cursor:pointer;
        top: 2px;
        right: 0;
        padding: 0 1em;
}
</style>
