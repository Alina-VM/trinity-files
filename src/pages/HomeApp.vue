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
        </div>
    </div>

</template>

<style lang="scss" scoped>

.all {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 245px);
    flex: 1 1 auto;
}
.homebg {
    position:absolute;
    bottom: 0px;
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
</style>
