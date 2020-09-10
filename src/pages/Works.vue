<template>
    <div>
        <section class="works">
            <div class="works-header">
                <h1>Works</h1> 
            </div>
            <div class="item-list" v-for="(item) of items" :key="item.img_src">
                <div class="card">
                    <img @click="openModal(item)" :src="item.img_src" alt="Card image" width="400px">
                </div>
                <modal :val="postItem" v-show="showContent" @close="closeModal" />
            </div>
        </section>
    </div>
</template>


<script>
import Modal from '../components/Mordal'

export default {
    data(){
        return{
        postItem:'',
        showContent: false,
        items: [
            {
            id: 1,
            desc: "課題で作成したポートフォリオです",
            range: "コーディング(レスポンシブ対応)",
            lang: "HTML,CSS(SaaS)",
            img_src: require('../assets/vintage1.jpg'),
            },
            {
            id: 2,
            desc: "課題で作成したポートフォリオです",
            range: "コーディング",
            lang: "Ruby,Javascript, HTML",
            img_src: require("../assets/example3.jpg")
            }
        ]
        }
    },
    methods: {
        openModal(item){
        this.showContent = true
        this.postItem = item
        },
        closeModal(){
        this.showContent = false
        }
        
    },
    components: {
        Modal
    }
}
</script>



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

.card{
    width: 500px;
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