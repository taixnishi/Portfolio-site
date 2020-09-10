<template>
    <div class="home">
        <div class="mid">
            <h1>Welcome to<br> Nishikawa Portfolio</h1>
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
    }
}
</script>

<style scoped>
    .fade-enter,
    .fade-leave-to{
        opacity: 0
    }
    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.5s;
    }
    .fade-leave,
    .fade-enter-to{
        opacity: 1;
    }
    
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
    h1{
        font-family: 'Alfa Slab One', cursive, 'Noto Serif JP', serif;
        font-size: 3rem;
        color: white;
        text-shadow: 10px 10px 1px rgba(0,0,0,0.7)
    }

    @media screen and (min-width:600px) {
    h1{
        font-size: 5rem;
    }
}
</style>