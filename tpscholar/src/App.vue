<template>
<div id="app">
  <NavBar />
  <br />
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/TP logo.png">
      </router-link>
    </div>
  </div>
  <router-view />
    <div id="side">
      <a href="https://github.com/chadsauder/tpscholar.git">
        <img src="/images/GitHub_Logo.png">
      </a>
    </div>
</div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>



<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

</style>
