<template>
    <div class="slider">
        <div class="slider__container">
          <div class="slider__buttons">
            <button class="slider__button" @click="slideEvent('prev')">
              <img v-if="prevActiveGreen"
              src="../assets/blue-button.svg" alt="" class="prev-green">
              <img v-else src="../assets/slider-button.svg" alt="" class="unactive-button">
            </button>
            <div class= "slider__button-line"></div>
            <button class="slider__button" @click="slideEvent('next')">
              <img v-if="nextActiveGreen"
              src="../assets/blue-button.svg" alt="" class="next-green">
              <img v-else src="../assets/slider-button.svg" alt="" class="unactive-button">
            </button>
          </div>
          <div class="slider__wrapper" ref="sliderWrapper">
              <div v-for="(slide, i) in slides" :key="i"  :id="i" class="slider__slide">
                  <div class="slider__name" >{{ slide.name }}</div>
                  <div class="slider__model">{{ slide.model }}</div>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SliderApp',
  data() {
    return {
      slideHeight: 0,
      scrollHeight: 0,
      prevActiveGreen: true,
      nextActiveGreen: true,
      clickCounter: 2,

    };
  },
  props: {
    slides: { type: Array, default: () => [] },
  },
  methods: {
    slideEvent(type) {
      if (this.clickCounter >= 0 && this.clickCounter <= this.slides.length - 1) {
        if (type === 'next') {
          if (this.clickCounter < this.slides.length - 1) {
            this.clickCounter += 1;
            this.scrollHeight += this.slideHeight;
          }
        } else if (type === 'prev') {
          if (this.clickCounter >= 1) {
            this.clickCounter -= 1;
            this.scrollHeight -= this.slideHeight;
          }
        }
        this.$refs.sliderWrapper.scroll({
          top: this.scrollHeight,
          behavior: 'smooth',
        });
        this.changeCentralSlide();
        if (this.clickCounter === this.slides.length - 1) {
          this.nextActiveGreen = false;
          this.prevActiveGreen = true;
        } else if (this.clickCounter === 0) {
          this.prevActiveGreen = false;
          this.nextActiveGreen = true;
        } else {
          this.nextActiveGreen = true;
          this.prevActiveGreen = true;
        }
      }
    },

    // callback(entries, observer) {
    //   console.log(entries);
    //   // console.log(this.clickCounter);
    //   entries.forEach((entry) => {
    //     console.log(observer);

    //     // console.log(entry.isIntersecting);
    //     console.log(entry.target.id, entry.isIntersecting);
    //     if (entry.target.id === '0') {
    //       if (entry.isIntersecting) {
    //         this.prevActiveGreen = false;
    //       } else {
    //         this.prevActiveGreen = true;
    //       }
    //     }

    //     if (entry.target.id === `${this.slides.length - 1}`) {
    //       if (entry.isIntersecting) {
    //         this.nextActiveGreen = false;
    //       } else {
    //         this.nextActiveGreen = true;
    //       }
    //     }
    //   });
    // },
    changeCentralSlide() {
      // console.log(document.querySelectorAll('.slider__name'));
      document.querySelectorAll('.slider__name').forEach((el, ind) => {
        if (ind === this.clickCounter) {
          el.classList.add('click-slidename');
        } else {
          el.classList.remove('click-slidename');
        }
      });
    },
  },
  mounted() {
    this.changeCentralSlide();
    this.slideHeight = document.querySelector('.slider__slide').offsetHeight;
    // console.log(this.slides.length);
    document.querySelector('.slider__wrapper').style.height = `${this.slideHeight * 5}px`;
    // const observer = new IntersectionObserver(this.callback, {
    //   root: this.$refs.sliderWrapper,
    //   threshold: 0.8,
    // });
    // const target1 = document.getElementById('0');
    // const target2 = document.getElementById(`${this.slides.length - 1}`);
    // observer.observe(target1);
    // observer.observe(target2);
  },
};
</script>
<style lang="scss" scoped>

.slider {
  color: white;
  position: relative;
  &__container {
      margin-bottom: 64px;
      display: flex;
      @include to-960 {
        margin-bottom: 20px;
        height: 213px;
        overflow: hidden;
    }
  }
  &__wrapper {
    overflow: hidden;
}

&__slide {
  padding: 22px 0 22px 90px;
  @include to-960 {
    padding: 10px 0 10px 60px;
  }
}

&__name {
    color: #FFF;
    font-family: Stolzl;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    cursor: pointer;
    @include to-960 {
      font-size: 16px;
      line-height: 25px;
    }
}

&__model {
    color: #646464;
    font-family: Stolzl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    @include to-960 {
      font-size: 12px;
    }
}
&__button {
  background-color: black;
  &:first-child {
    transform: rotate(-180deg);
  }
}
&__buttons {
  display: flex;
  align-items: center;
  flex-direction: column;
  //margin-right: 90px;
  justify-content: space-between;
}
&__button-line {
  height: 100%;
  width: 4px;
  border-radius: 20px;
  background: #2C2C2C;
}
}
.click-slidename {
  color: #33B7BC;
  font-family: Stolzl;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px; /* 300% */
  // transform: translateX(-20px);
  position: relative;
  right: 20px;
  & + .slider__model {
    color: #049393;
    font-family: Stolzl;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    position: relative;
    right: 20px;
    padding-bottom: 17px;
    &::before {
      content: '';
      position: absolute;
      border-bottom: solid #2C2C2C 3px;
      border-left: solid #2C2C2C 3px;
      transform: skew(40deg);
      top: -3px;
      left: -29px;
      width: 100%;
      height: 100%;
    }
    @include to-960 {
      font-size: 13px;
    }
  }
  @include to-960 {
    font-size: 24px;
  }
}
.prev-green {
  transform: rotate(-180deg);
}
.next-green {
  transform: rotate(180deg);
}
.unactive-button {
  pointer-events: none;
  cursor: not-allowed !important;
}

</style>
