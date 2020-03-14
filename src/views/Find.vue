<template>
    <div :class="'game is-'+$route.params.type" :style="'background-image: url(/img/'+$route.params.type+'/bg.jpg);'">

        <div class="game__items">
            <div class="game__item" v-for="(item, index) in list" :key="index">
                <div class="game__cover" :style="'background-image: url(/img/'+$route.params.type+'/cover.png);'"></div>
                <div class="game__x" :style="'background-image: url(/img/'+$route.params.type+'/item.png);'"></div>
            </div>
        </div>

        <a :click="test()">Click</a>
    
    </div>
</template>

<script>
export default {
    name: 'Find',
    data(){
        return {
            list: new Array(45)
        }
    },
    methods: {
        test: () => {
            console.log('TEST');
        }
    }
}
</script>

<style lang="scss" scoped>
    .game {
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        &__items {
            display: grid;
            grid-template-columns: repeat(9, 60px);
            grid-template-rows: repeat(5, 60px);
            grid-gap: 4px;
        }
        &__item {
            position: relative;
        }
        &__cover, &__x {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
        &__x {
            z-index: 1;
        }
    }
</style>
