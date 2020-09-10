<template>
    <div class="home">
        <div class="mid">
            <h1>Welcome to<br> Nishikawa Portfolio</h1>
        </div>
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
        background-image: url("../assets/art.jpg");
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
        font-weight: bold;
        color: black;
    }

    @media screen and (min-width:600px) {
    h1{
        font-size: 5rem;
    }
}
</style>