<template>
  <div>
    <header id="header">
        <router-link to="/">Home</router-link>     
        <router-link to="/works">Works</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
    </header>
    <main>
      <div id="app">
        <router-view></router-view>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>

  body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  display: flex;
}

#header a {
  text-decoration: none;
  color: #00331f;
  width: 25%;
  background: rgb(255, 255, 255);
  text-align: center;
  line-height: 60px;
}
#header a:hover{
  border: solid 0.8px rgba(0, 0, 0, 0.1);
  font-weight: bold;
}
@media screen and (min-width:600px) {
    #header a{
      font-size: 1.5rem;
    }
}

</style>
