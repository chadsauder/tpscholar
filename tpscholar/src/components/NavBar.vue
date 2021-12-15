<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item >
          <router-link style="text-decoration: none; color: white;" to="/">Browse Scholarships</router-link>
      </b-nav-item>
      <b-nav-item >
          <router-link style="text-decoration: none; color: white;" to="/About">About</router-link>
      </b-nav-item>

      <!-- Navbar dropdowns -->
      <!-- <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.router-link {
  color: white;
  text-decoration: none;
}
</style>