<template>
    <section class="contact">
        <div class="contact-header">
            <h1>Contact</h1> 
        </div>
        <hr>
    </section>
</template>

<style scoped>
    .contact{
        padding: 10px;
    }
    .contact-header{
        width: 100%;
    }
    h1{
        display: inline-block;
        font-family: 'Lobster', cursive,'Noto Serif JP', serif;
        font-size: 3rem;
        color: #000;
    }

    @media screen and (min-width:600px) {
    .contact{
        padding: 30px;
    }       
    .contact-header{
        display: flex;
    }
    h1{
        font-size: 4rem;
        margin-left: 50px;
    }
}
</style>