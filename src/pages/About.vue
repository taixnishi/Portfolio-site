<template>
    <div>
        <section class="about">
            <div class="about-header">
                <h1>About</h1>
            </div>
            <div class="about-main">

            </div>
        </section>
    </div>
</template>

<style scoped>
    .about{
        padding: 10px;
    }
    .about-header{
        width: 100%;
    }
    h1{
        display: inline-block;
        font-family: 'Alfa Slab One', cursive, 'Noto Serif JP', serif;
        font-size: 4rem;
        color: #00995e;
    }

    @media screen and (min-width:600px) {
    .about{
        padding: 30px;
    }       
    .about-header{
        display: flex;
    }
    h1{
        font-size: 5rem;
        margin-left: 50px;
    }
}
</style>