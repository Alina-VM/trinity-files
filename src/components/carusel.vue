<template>
    <div class="container carusel" @click="getCoordinates" @keypress="getCoordinates"
    @mousedown="moveSliderLine" @mousemove="move" @mouseup="mouseUp" ref="caruselBlock">
        <ul class="carusel__list" ref="listCarusel">
            <li class="carusel__item" ref="firstSliderItem" id="first">Audi</li>
            <li class="carusel__item">BMW</li>
            <li class="carusel__item">Rolls-Royce</li>
            <li class="carusel__item">Cadillac</li>
            <router-link :to="{name: 'lamborgini'}" class="carusel__item" @click.stop>
              Lamborgini
            </router-link>
            <li class="carusel__item">Maserati</li>
            <li class="carusel__item">Bentley</li>
            <li class="carusel__item">Porsche</li>
            <li class="carusel__item">Lexus</li>
            <li class="carusel__item" ref="lastSliderItem" id="last">Mercedes</li>
        </ul>
    </div>

</template>

<script>
export default {
  name: 'AppCarusel',
  data() {
    return {
      auto: [{ label: 'Audi' }, { label: 'BMW' }, { label: 'Rolls-Royce' }, { label: 'Cadillac' },
        { label: 'Maserati' }, { label: 'Lamborgini' }, { label: 'Bentley' }, { label: 'Porsche' },
        { label: 'Lexus' }, { label: 'Mercedes' }],
      counter: 0,
      options: {
        threshold: 1.0,
      },
      isSliderStopFirst: false,
      isSliderStopLast: false,
      isMouseDown: false,
      clientX: 0,
    };
  },
  methods: {
    getCoordinates(e) {
      if (e.x < document.documentElement.clientWidth / 2 && !this.isSliderStopFirst) {
        this.counter += 50;
        this.$refs.listCarusel.style.transform = `translateX(${this.counter}px)`;
      } else if (!this.isSliderStopLast) {
        this.counter -= 50;
        this.$refs.listCarusel.style.transform = `translateX(${this.counter}px)`;
      }
    },
    callback(entries, observer) {
      console.log(observer);
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'first') {
          this.isSliderStopFirst = true;
        }
        if (entry.isIntersecting && entry.target.id === 'last') {
          this.isSliderStopLast = true;
        }
      });
    },
    moveSliderLine(e) {
      this.isMouseDown = true;
      this.clientX = e.clientX;
      console.log(e.clientX);
    },
    move(e) {
      if (this.isMouseDown) {
        console.log(e.clientX - this.clientX);
        this.$refs.listCarusel.style.transform = `translateX(${e.clientX - this.clientX}px)`;
      }
    },
    mouseUp(e) {
      console.log(this.clientX);
      this.clientX = e.clientX;
      this.isMouseDown = false;
      // this.$refs.listCarusel.style.transform = `translateX(${e.clientX - this.clientX}px)`;
      console.log(this.clientX);
      console.log(e.clientX);
    },
  },
  mounted() {
    const observer = new IntersectionObserver(this.callback, this.options);
    observer.observe(this.$refs.lastSliderItem);
    observer.observe(this.$refs.firstSliderItem);
  },
};
</script>
<style src="../css/common.css"></style>
<style lang="scss" scoped>
@mixin to-960 {
    @media  screen and (max-width: 960px) {
        @content
    }
}
@mixin to-375 {
    @media  screen and (max-width: 375px) {
        @content
    }
}
  .carusel {
      background-color: #161516;
      padding: 40px 0;
      @include to-960() {
        padding: 30px 0;
        }
      &__list {
          display: flex;
          justify-content: space-around;
          // transition: all .2s ease-in-out;
          //overflow: hidden;

      }
      &__item {
          color: #414141;
          font-weight: 500;
          font-size: 40px;
          display: inline-block;
          min-width: fit-content;
          margin-left: 20px;
          margin-right: 20px;
          cursor: pointer;
          position: relative;
          z-index: 1;
          @include to-960() {
          font-size: 35px;
          }
          @include to-375() {
            font-size: 24px;
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
  .transition-right {
      transform: translateX(5%);
      transition: 1s;
  }
  .transition-left {
      transform: translateX(-5%);
      transition: 1s;
  }
}

</style>
