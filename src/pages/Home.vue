<template>
    <div class="home">
        <div class="mid">
            <vue-typer 
            :text="['Hello\nWorld','Welcome to \nMy Portfolio']" 
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='120'
            :type-delay='120'
            :pre-erase-delay='2000'
            :erase-delay='250'
            erase-style='select-all'
            :erase-on-complete='false'
            caret-animation='expand'
            ></vue-typer>
        </div>
        <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="100"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.7"
            :linesDistance="150"
            :moveSpeed="4"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            >
        </vue-particles>
    </div>
</template>

<script>


export default {
    data(){
        return{
            show: true,
        }
    },
}
</script>

<style scoped>
    .home{
        width: 100%;
        height: 90vh;
        position: relative;
        background-image: url("../assets/universe4.jpeg");
        background-size: cover;
    }
    .mid{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        width: 100%;
    }
    .vue-typer{
        font-size: 3rem;
    }
    .vue-typer .custom.char .typed {
        color: white;
    }
    .vue-typer .custom.char .selected{
        color: white;
    }
    @media screen and (min-width:600px) {
    .vue-typer{
        font-size: 5rem;
    }
}
</style>