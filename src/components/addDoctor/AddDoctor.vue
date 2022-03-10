<template>
  <div class="doctor-add">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="doctorAdd">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" v-model="data.name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Mobile Number</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Mobile Number" v-model="data.mobile_number">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Address</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address" v-model="data.address">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Department</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Department" v-model="data.department">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'AddDoctor',
    data(){
        return{
            data:{
                name:null,
                mobile_number:null,
                address:null,
                department:null
            }
        }
    },
    watch:{
        $route:"doctorAdd"
    },
    methods:{
        ...mapActions(['addDoctor','addPatient']),
        doctorAdd(){
            console.log(this.$route.path);
            if (this.$route.path =='/doctor/add'){
                this.addDoctor(this.data)
            }
            else if (this.$route.path =='/patient/add'){
                 this.addPatient(this.data)
            }
        }
    },
    // created(){
    //     this.addDoctor()
    // }
}
</script>

<style scoped>
.doctor-add{
    padding: 20px;
}
.card{
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.2);
    width: 100%;
}

</style>