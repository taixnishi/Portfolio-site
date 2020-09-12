<template>
    <div>
        <section class="about">
            <div class="about-header">
                <h1 style="border-bottom: solid 3px black;">About</h1>
            </div>
            <hr>
            <div class="about-main">
                <div class="main-right">
                    <div class="profile">
                        <div class="profile-head">
                            <h2>Profile</h2>
                            <p>-私について-</p>
                        </div>
                        <div class="profile-photo">
                            <img src="../assets/my.jpg" class="photo">
                            <div>
                                <p>同志社大学</p>
                                <p>経済学部 経済学科</p>
                                <p>西川 太智</p>
                            </div>
                        </div>
                    </div>
                    <div class="skills">
                        <h2>Skills</h2>
                        <p>-スキルについて-</p>
                        <div class="wrap">
                            <div class="skill"   v-for="mySkill in mySkills" :key="mySkill.name">
                                <img :src='mySkill.img_src' alt="" width="60px">
                                <p class="skill-name">{{mySkill.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-left">
                    <div class="career">
                        <h2>Career</h2>
                        <p>-経歴-</p>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mySkills: [
                {img_src: require("../assets/html-5.svg"), name: "HTML5"},
                {img_src: require("../assets/css-3.svg"), name: "CSS3"},
                {img_src: require("../assets/javascript.svg"), name: "Javascript"},
                {img_src: require("../assets/vue.svg"), name: "Vue.js"},
                {img_src: require("../assets/ruby.svg"), name: "Ruby"},
                {img_src: require("../assets/rails.svg"), name: "RubyonRails"},
            ]
        }
    }
}
</script>

<style scoped>
    .about{
        padding: 20px;
    }
    .about-header{
        width: 100%;
    }
    h1{
        display: inline-block;
        font-family: 'Lobster', cursive,'Noto Serif JP', serif;
        font-size: 3rem;
        color: rgba(0, 0, 0, 0.89);
    }

/* profile */
    .profile{
        margin: 0 auto;
        width: auto;
        height: auto;
        background: #fff;
    } 
    .profile-head{
        padding-top: 10px;
    }
    h2{
        font-size: 2rem;
        font-weight: bold;
    }
    .profile-photo{
        width: 250px;
        height: auto;
        margin: 0 auto;
    }
    .photo{
        object-fit: cover;
        width: 220px;
        height: 220px;
        border-radius: 10px;
    }
/* skill */
    .skills{
        margin-top: 20px;
        padding: 10px;
    }
    .wrap{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .skill{
        width: 33%;
    }
    .skill-name{
        font-weight: bold;
    }

 /* career */
    .career{
        margin-top: 20px;
        padding: 10px;
        width: auto;
        height: 700px;
    }



    @media screen and (min-width:600px) {
    .about{
        padding: 30px;
    }       
    .about-header{
        display: flex;
    }
    h1{
        font-size: 4rem;
        margin-left: 50px;
    }
    .about-main{
        display: flex;
        justify-content: space-between;
    }
    .main-right{
        width: 50%;
    }
    .main-left{
        width: 50%;
    }
    .career{
        margin-top: 0;
        margin-left: 10px;
    }

    @media screen and (min-width:800px){
        .career{
        margin-left: 30px;
    }
    }
}
</style>