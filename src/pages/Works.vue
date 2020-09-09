<template>
    <div>
        <section class="works">
            <div class="works-header">
                <h1>Works</h1> 
            </div>
        </section>
    </div>
</template>

<style scoped>
        .works{
        padding: 10px;
    }
    .works-header{
        width: 100%;
    }
    h1{
        display: inline-block;
        font-family: 'Alfa Slab One', cursive, 'Noto Serif JP', serif;
        font-size: 4rem;
        color: #00995e;
    }

    @media screen and (min-width:600px) {
    .works{
        padding: 30px;
    }       
    .works-header{
        display: flex;
    }
    h1{
        font-size: 5rem;
        margin-left: 50px;
    }
}
</style>