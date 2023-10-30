<template>
    <div class="offer-block">
        <div class="offer-block__menu">
            <ul class="offer-block__list" @click.self="activeCarusel" @keypress="activeCarusel">
                <li class="offer-block__item" @click="activeTab = 1"
                @keypress="activeTab = 1" ref="FirstItem" >Special Offer</li>
                <li class="offer-block__item" @click="activeTab = 2"
                @keypress="activeTab = 2">New  car</li>
                <li class="offer-block__item" @click="activeTab = 3"
                @keypress="activeTab = 3">Most popular</li>
                <li class="offer-block__item" @click="activeTab = 4"
                @keypress="activeTab =4" ref="LastItem">Daily</li>
            </ul>
        </div>
        <div class="special-offer">
            <div v-show="activeTab === 1" v-for="item in carsForOffer"
                :key="item" class="special-offer__item">
                <div class="special-offer__img">
                    <img :src="item.img" alt="">
                </div>
                <div class="special-offer__text">
                    <div class="special-offer__name">{{ item.name }} {{ item.model }}</div>
                    <button class="special-offer__button">RENT</button>
                </div>
            </div>
        </div>

        <div  v-show="activeTab === 2" class="new-car">i'm a new car block</div>
        <div v-show="activeTab === 3" class="popular-car"></div>
        <div v-show="activeTab === 4" class="daily"></div>
        <button type="button" class="button">VIEW ALL</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OfferBlockMain',
  data() {
    return {
      activeTab: 1,
      counter: 0,
    };
  },
  computed: {
    ...mapGetters({ availableCars: 'availableCars', carsForOffer: 'availableOffers' }),
  },
  methods: {
    callback(entries, observer) {
      console.log(observer);
      Array.from(document.getElementsByClassName('offer-block__item')).forEach((el) => {
        if (!entries[0].isIntersecting && !entries[1].isIntersecting) {
          el.style.margin = '0 10px'; // eslint-disable-line no-param-reassign
        } else {
          el.style.margin = '0 15px'; // eslint-disable-line no-param-reassign
        }
      });
    },
    activeCarusel(e) {
      console.log(e.clientX, window.innerWidth);
      console.log(e);
      if (e.clientX < window.innerWidth / 2) {
        this.counter += 30;
        e.target.style.transform = `translateX(${this.counter}px)`;
      } else {
        this.counter -= 30;
        e.target.style.transform = `translateX(${this.counter}px)`;
      }
    },
  },
  mounted() {
    const observer = new IntersectionObserver(this.callback, { root: document.querySelector('.offer-block__list'), threshold: 1.0 });
    const target1 = this.$refs.FirstItem;
    const target2 = this.$refs.LastItem;
    observer.observe(target1);
    observer.observe(target2);
  },
};
</script>
<style lang="scss" scoped>
.offer-block {
    display: flex;
    flex-direction: column;
    //align-items: center;
    background-color: black;
    padding-bottom: 260px;
    &__menu {
        //padding: 0 370px 0px;
        width: 100%;
    }

    &__list {
        display: flex;
        justify-content: center;
        //padding: 35px;
        width: 100%;
        height: 90px;
        align-items: center;
    }

    &__item {
        color: #414141;
        font-family: Stolzl;
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        //line-height: 90px;
        position: relative;
        margin: 0 35px;
        cursor: pointer;
        z-index: 1;
        &:hover {
            color: white;
            &::before {
            content: "";
            position: absolute;
            display: inline-block;
            left: 2px;
            bottom: -12px;
            width: 100%;
            height: 8px;
            transform: skew(-12deg) ;
            background-color: #33B7BC;
            z-index: -1;
            }
        }
        @include to-960 {
            font-size: 30px;
            padding-bottom: 80px;
        }
        @include to-768 {
            min-width: fit-content;
            font-size: 16px;
        }
        @media screen and (max-width: 500px) {
            margin: 0 15px;

        }
    }
    @include to-960 {
        padding-bottom: 100px;
    }
}
.special-offer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 80px;
    &__item {
        width: calc(50% - 5px);
        position: relative;
        margin: 5px 0;
        border-radius: 5px;
        & img {
            width: 100%;
            border-radius: 5px;
        }
        @include to-768 {
        width: 100%;
    }
    }
    &__img {
        // max-width: 995px;
    }

    &__text {
        display: flex;
        position: absolute;
        bottom: 0;
        padding: 0 60px 40px;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        @include to-768 {
            padding: 0 20px 15px;
        }
    }
    &__name {
        color: #FFF;
        font-family: Stolzl;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 60px;
        @include to-960 {
            font-size: 20px;
            line-height: normal;
        }
        @include to-768 {
            font-size: 18px;
            line-height: normal;
        }
    }
    &__button {
        border-radius: 8px;
        border: 2px solid #33B7BC;
        width: 108px;
        height: 54px;
        flex-shrink: 0;
        color: #FFF;
        background-color: transparent;
        text-align: center;
        font-family: Stolzl;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 60px; /* 375% */
        text-transform: uppercase;
        @include to-960 {
            width: 88px;
            height: 47px;
            font-size: 12px;
            line-height: normal;
        }
        @include to-768 {
            width: 79px;
            height: 39px;
        }
    }
    @include to-960 {
        margin-bottom: 40px;
    }
    @include to-768 {
        display: block;
    }
}
.new-car {
}
.popular-car {
}
.daily {
}
.button {
    width: 350px;
    height: 72px;
    color: #FFF;
    text-align: center;
    font-family: Stolzl;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #33B7BC;
    border-radius: 10px;
    margin: 0 auto;
    @include to-768 {
        width: 320px;
        height: 60px;
    }
}
</style>
