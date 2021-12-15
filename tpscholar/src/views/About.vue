<template>
  <div>
    <header class="w3-container w3-grey w3-center" style="padding:128px 16px">
      <h1 class="w3-margin w3-jumbo">About Us</h1>
      <router-link to="/">
        <button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Browse Applications</button>
      </router-link>
    </header>

    <!-- First Grid -->
    <div class="w3-row-padding w3-padding-64 w3-container">
      <div class="w3-content">
        <div class="w3-twothird">
          <h1>TP Scholar</h1>
          <h5 class="w3-padding-32">Come and joing the community of crowd-funded micro scholarships</h5>

          <p class="w3-text-grey">TP Scholar is a platform where you can sponsor your own scholarships.
            you can even make it fun! University students can then browse all of the posted scholarships
            and apply to some that they're interested in. Providers can then view all the applicants and
            select one for that year.
          </p>
        </div>

        <div class="w3-third w3-center">
          <i class="fa fa-anchor w3-padding-64 w3-text-red"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
.w3-bar,h1,button {font-family: "Montserrat", sans-serif}
.fa-anchor,.fa-coffee {font-size:200px}
</style>
