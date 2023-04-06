<template>
    <div class="menu" v-if="show">
        <div class="menu-header row">
            <div class="menu__cross">
                <img src="../assets/cross.svg" alt="cross-the-menu" @click="$emit('close')"
                @keypress="$emit('close')">
            </div>
            <div class="menu__logo row">
                <img src="../assets/logo.svg" alt="logo">
                <div class="menu__name">TRINITY</div>
                <div class="menu__description">CAR RENTAL BOUTIQUE</div>
            </div>
        </div>
        <div class="menu__block">
            <ul class="menu__list">
                <router-link :to= "{name: 'carlist'}" class="menu__item"
                @click="$emit('close')" @keypress="$emit('close')"
                >Car list</router-link>
                <router-link :to= "{name: 'carlist'}" class="menu__item"
                @click="$emit('close')" @keypress="$emit('close')"
                >Yacht list</router-link>
                <router-link :to= "{name: 'carlist'}" class="menu__item"
                @click="$emit('close')" @keypress="$emit('close')"
                >Chauffeur</router-link>
                <router-link :to= "{name: 'carlist'}" class="menu__item"
                @click="$emit('close')" @keypress="$emit('close')"
                >Conditions</router-link>
                <router-link :to= "{name: 'carlist'}" class="menu__item"
                @click="$emit('close')" @keypress="$emit('close')"
                >Testimonials</router-link>
            </ul>
            <ul class="menu__list">
                <router-link :to= "{name: 'carlist'}" class="menu__item"
                @click="$emit('close')" @keypress="$emit('close')"
                >Articles</router-link>
                <router-link :to= "{name: 'carlist'}" class="menu__item"
                @click="$emit('close')" @keypress="$emit('close')"
                >About US</router-link>
                <router-link :to= "{name: 'carlist'}" class="menu__item"
                @click="$emit('close')" @keypress="$emit('close')"
                >Contacts</router-link>
            </ul>
        </div>
        <div class="menu__footer">
            <div class="footer-adress">
                24 4th St - Al Quoz - Al Quoz <br>
                Industrial Area 3 - Dubai
            </div>
            <div class="footer-contact">
                <div class="footer-phone">+971 58 590 7875</div>
                <img src="../assets/social.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppBurger',
  props: {
    show: Boolean,
  },
};
</script>
<style src="../css/common.css"></style>
<style lang="scss" scoped>
@mixin to-375 {
    @media  screen and (max-width: 375px) {
        @content
    }
}
    .menu {
        position: absolute;
        top: 0;
        width: 1200px;
        padding: 50px 75px;
        background-color: black;
        background-image: url('../assets/burger-bg.jpg');
        background-position: bottom;
        @include to-375() {
            padding: 30px 20px;
        }
        &__logo {
            color: white;
            flex-direction: column;
            align-items: center;
            & img {
                @include to-375() {
                width: 50px;
                height: 47px;
                }
            }

        }
        &__name {
            font-size: 26px;
            margin-bottom: 10px;
            @include to-375() {
                display: none;
            }
        }
        &__description {
            @include to-375() {
                display: none;
            }
        }
        &__cross {
            width: 47px;
            height: 47px;
            margin-right: 37%;
            cursor: pointer;
            @include to-375() {
                width: 34px;
                height: 34px;
                margin-right: 100px;
            }
            & img {
                width: 100%;
                height: 100%;
            }
        }
        &__item {
            color: #76828C;
            font-size: 40px;
            margin-bottom: 50px;
            display: block;
            position: relative;
            z-index: 1;
            width: fit-content;
            cursor: pointer;
            @include to-375() {
                font-size: 20px;
            }
            &:hover {
                color: white;
                &::before {
                content: "";
                position: absolute;
                display: inline-block;
                //left: 29%;
                bottom: 0px;
                width: 100%;
                height: 14px;
                transform: skew(-12deg) ;
                background-color: rgb(144, 196, 179);
                z-index: -1;
            }
            }
        }
        &__block {
            height: 400px;
            display: flex;
            margin-bottom: 90px;
        }
        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .menu-header {
        align-items: center;
        margin-bottom: 78px;
    }
    .footer-adress {
        color: #76828C;
        //font-size: 24px;
        font-weight: 300;
    }
    .footer-contact {
        font-weight: 700;
        display: flex;
        align-items: center;
        color: white;
    }
    .footer-phone {
        margin-right: 20px;
    }
</style>
