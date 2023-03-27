<template>
    <div class="container carusel" @click="getCoordinates" @keypress="getCoordinates"
    >
        <ul class="carusel__list">
            <li class="carusel__item">Audi</li>
            <li class="carusel__item">BMW</li>
            <li class="carusel__item">Rolls-Royce</li>
            <li class="carusel__item">Cadillac</li>
            <li class="carusel__item">Maserati</li>
            <li class="carusel__item">Lamborgini</li>
            <li class="carusel__item">Bentley</li>
            <li class="carusel__item">Porsche</li>
            <li class="carusel__item">Lexus</li>
            <li class="carusel__item">Mercedes</li>
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
    };
  },
  methods: {
    getCoordinates(e) {
      const list = document.querySelector('.carusel__list');
      console.log(e.x < document.documentElement.clientWidth / 2);
      if (e.x < document.documentElement.clientWidth / 2) {
        this.counter += 50;
        console.log(this.counter);
        list.style.transform = `translateX(${this.counter}px)`;
      } else {
        this.counter -= 50;
        console.log(this.counter);
        console.log(`translateX(${this.counter}px)`);
        list.style.transform = `translateX(${this.counter}px)`;
      }
      // this.currentClass = e.x < document.documentElement.clientWidth / 2;
    },
  },
};
</script>
<style src="../css/common.css"></style>
<style lang="scss" scoped>
    .carusel {
        background-color: #161516;
        padding: 20px 0;
        &__list {
            display: flex;
            justify-content: space-around;
            transition: all .2s ease-in-out;
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
