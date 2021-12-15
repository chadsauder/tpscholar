<template>
    <div>
        <div>
            <p> Application for: {{this.$root.$data.applyingTitle}} </p>
            <p> Valued at: {{this.$root.$data.applyingValue}} </p>

        </div>
        <form>
            <label> First Name: </label>
            <input type="fistName" required v-model="firstName">
            <label> Last Name: </label>
            <input type="lastName" required v-model="lastName">
            <label> Email: </label>
            <input type="email" required v-model="email">
            <label> University: </label>
            <input type="university" required v-model="university">
            <label> Student: </label>
            <select v-model="student">
                <option value="undergrad"> Undergraduate </option>
                <option value="grad"> Graduate </option>
            </select>
            <label> GPA: </label>
            <input type="gpa" required v-model="gpa">
            <label> Essay: </label>
            <br/>
            <textarea type="essay" required v-model="essay" placeholder="Tell us about yourself. Why do you deserve this scholarship?"></textarea>
            <button @click="upload">Submit</button>


        </form>
        <!-- <p>First Name: {{firstName}}</p>
        <p>Last Name: {{lastName}}</p>
        <p>Email: {{email}} </p>
        <p>University: {{university}} </p>
        <p>GPA: {{gpa}} </p>
        <p>Essay: {{essay}} </p> -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            university: '',
            student: 'undergrad',
            gpa: '',
            essay: '',
            scholarshipAppliedFor: this.$root.$data.applyingTitle,

        }
    },
    methods: {
      async upload() {
        try {
            await axios.post('/api/applications', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                university: this.university,
                student: this.student,
                gpa: this.gpa,
                essay: this.essay,
                scholarshipAppliedFor: this.$root.$data.scholarshipAppliedFor,
            });
            this.firstName = '';
            this.lastName= '';
            this.email= '';
            this.university= '';
            this.student = 'undergrad';
            this.gpa= '';
            this.essay= '';
            this.scholarshipAppliedFor= this.$root.$data.applyingTitle;
        } catch (error) {
            console.log(error);
        }
    },




    }
}
</script>


<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
textarea {
    width: 450px;
    height: 385px;
}

p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
}

</style>