<template>
    <button type="button">
        SEND THE REQUEST
    </button>
</template>
<script>
export default {
  name: 'sendRequestButton',
};
</script>
<style lang="scss" scoped>
    @mixin to-960 {
        @media screen and (max-width: 960px) {
            @content
        }
    }
    button {
        font-family: 'Stolzl';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 90px;
        text-align: center;
        border-radius: 10px;
        border: #33B7BC 1px solid;
        background-color: transparent;
        color: white;
        max-width: 310px;
        @include to-960() {
            font-size: 15px;
            max-width: 320px;
            line-height: 60px;
        }
    }
</style>
