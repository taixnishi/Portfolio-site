<template>
    <div class="home">
        <div class="mid">
            <h1>Welcome to Nishikawa Portfolio</h1>
        </div>
    </div>
</template>

<style scoped>
    .home{
        width: 100%;
        height: 90vh;
        position: relative;
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
        color: #00995e;
    }

    @media screen and (min-width:600px) {
    h1{
        font-size: 5rem;
    }
}
</style>