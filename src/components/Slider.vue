<template>
    <div class="slider">
        <div class="slider__container">
          <div class="slider__buttons">
            <button class="slider__button" @click="slidePrev" >
              <img v-if="prevActiveGreen = true"
              src="../assets/slider-button.svg" alt="" >
              <img v-else src="../assets/blue-button.svg" alt="" class="prev-green">
            </button>
            <button class="slider__button" @click="slideNext">
              <img v-if="nextActiveGreen"
              src="../assets/blue-button.svg" alt="" class="next-green">
              <img v-else src="../assets/slider-button.svg" alt="">
            </button>
          </div>
          <div class="slider__wrapper" ref="sliderWrapper">
              <div v-for="(slide, i) in slides" :key="i" class="slider__slide">
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
      prevActiveGreen: false,
      nextActiveGreen: true,
    };
  },
  props: {
    slides: { type: Array, default: () => [] },
  },
  methods: {
    slideNext() {
      this.scrollHeight += this.slideHeight;
      this.changeActiveButton();
      this.$refs.sliderWrapper.scroll({
        top: this.scrollHeight,
        behavior: 'smooth',
      });
      console.log(this.scrollHeight);
    },
    slidePrev() {
      this.scrollHeight -= this.slideHeight;
      this.$refs.sliderWrapper.scroll({
        top: this.scrollHeight,
        behavior: 'smooth',
      });
      console.log(this.scrollHeight);
    },
    changeActiveButton() {
      if (this.scrollHeight > 244) {
        this.nextActiveGreen = false;
      }
    },
  },
  mounted() {
    console.log(this.cars);
    this.slideHeight = document.querySelector('.slider__slide').offsetHeight;
    console.log(this.scrollHeight);
    document.querySelector('.slider__wrapper').style.height = `${this.slideHeight * 5}px`;
  },
};
</script>
<style lang="scss" scoped>

.slider {
  color: white;
  position: relative;
&__container {

    display: flex;
}
&__wrapper {
  overflow: hidden;
}

&__slide {}

&__name {
    color: #FFF;
    font-family: Stolzl;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    cursor: pointer;
}

&__model {
    color: #646464;
    font-family: Stolzl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
}
&__button {
  background-color: black;
  &:first-child {
    transform: rotate(-180deg);
  }
}
&__buttons {
  display: flex;
  flex-direction: column;
  margin-right: 15px;
}
}
.click-slide {
  color: #33B7BC;
  font-family: Stolzl;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px; /* 300% */
  transform: translateY(50px);
}
.prev-green {
  transform: rotate(-180deg);
}
.next-green {
  transform: rotate(180deg);
}

</style>
