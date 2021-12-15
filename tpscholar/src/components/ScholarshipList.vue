<template>
<div class="wrapper">
  <div class="row">
    <div v-for="scholarship in scholarships" :key="scholarship.id" class="col-sm-3">
      <b-card
        v-bind:title="scholarship.name"
        v-bind:img-src="'/images/scholarships/'+scholarship.image"
        v-bind:img-alt="'Image for' +scholarship.image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="my-4 p-3 px-4 mx-2 "

      >
      <b-card-text>
        {{scholarship.about}} <br /> Valued at: {{scholarship.value}}
      </b-card-text>
      <router-link to="/Apply">
        <b-button class="auto" @click="addToCart(scholarship)">Apply</b-button>
      </router-link>
      </b-card>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ScholarshipList',
  props: {
    scholarships: Array
  },
  methods: { 
    addToCart(scholarship) {
        if (!this.$root.$data.appliedFor.includes(scholarship)){
            this.$root.$data.appliedFor.push(scholarship);
        }
        this.$root.$data.applyingTitle = scholarship.name;
        this.$root.$data.applyingValue = scholarship.value;
    }

  }
}
</script>

<style scoped>
.card{
  margin-bottom: 30px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.scholarships {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.scholarship {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.scholarship img {
  border: 2px solid #333;
  height: 250px;
  width: 400px;
  object-fit: cover;
}

.scholarship .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #f0a21e;
  color: #000;
  padding: 10px 30px;
  height: 100px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.value {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>