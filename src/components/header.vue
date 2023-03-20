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
                    <select name="cities">
                        <option value="dubai">Dubai</option>
                        <option value="dubai">Kyiv</option>
                        <option value="dubai">Budapest</option>
                        <option value="dubai">Wiesbaden</option>
                    </select>
                </label>
                <label for="lang" class="right-menu__item">
                    <select name="lang">
                        <option value="ENG">ENG</option>
                        <option value="UA">UA</option>
                    </select>
                </label>
            </div>
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
    };
  },
};
</script>
<style src="../css/common.css"></style>
<style lang="scss" scoped>
    .header-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
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
</style>
