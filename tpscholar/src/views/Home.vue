
<template>
<div>
  <div class="wrapper">
    <div class="search">
      <input v-model="searchText" placeholder="Search" /> 
    </div>
  </div>
  <scholarshipList :scholarships="filteredScholarships" />
</div>
</template>

<script>
import ScholarshipList from "../components/ScholarshipList.vue"
import axios from "axios"

export default {
  name: 'Home',
  components: {
    ScholarshipList,
  },
  data() {
    return {
      searchText: '',
      scholarships: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.scholarships = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    filteredScholarships() {
      return this.scholarships.filter(scholarship => scholarship.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
  color: black;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

</style>
