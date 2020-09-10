<template>
    <div>
        <section class="works">
            <div class="works-header">
                <h1>Works</h1> 
            </div>
            <hr>
            <div class="flex">
                <div class="item-list" v-for="(item) of items" :key="item.img_src">
                    <div class="card">
                        <img @click="openModal(item)" :src="item.img_src" alt="Card image">
                    </div>
                    <modal :val="postItem" v-show="showContent" @close="closeModal" />
                </div>
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
            img_src: require("../assets/hurugi1.jpeg")
            },
            {
            id: 3,
            desc: "課題で作成したポートフォリオです",
            range: "コーディング",
            lang: "Ruby,Javascript, HTML",
            img_src: require("../assets/hurugi2.jpeg")
            },
            {
            id: 4,
            desc: "課題で作成したポートフォリオです",
            range: "コーディング",
            lang: "Ruby,Javascript, HTML",
            img_src: require("../assets/hurugi3.jpeg")
            },
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
        font-family: 'Lobster', cursive,'Noto Serif JP', serif;
        font-size: 3rem;
        color: #000;
    }

.card{
    width: auto;
    margin: 20px;
    background-color: #fdfdfd;
    transition: transform 0.7s;
}
.card > img{
    vertical-align: middle;
    width: auto;
    height: auto;
    box-shadow: 1px 2px 10px rgba(0,0,0,0.7);
    cursor: pointer;
}
.card:hover{
    transform: scale(0.95);
}


    @media screen and (min-width:600px) {
    .works{
        padding: 30px;
    }       
    h1{
        font-size: 4rem;
        margin-left: 50px;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
    }
    .item-list{
        width: 50%;
    }

}


</style>