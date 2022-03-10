<template>
  <div class="addDoctor">
        <div class="container">
            <div class="add-button">
                <router-link :to="isData == 'doctor' ? {name:'AddDoctor'}:{name:'AddPatient'}"><button class="btn btn-primary">Add {{isData == 'doctor' ? isdoctor : ispatient}}</button></router-link>
            </div>
            <div class="table-row">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.N.</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Assigned Patient Number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in isData == 'doctor' ? doctor : patient" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.mobile_number}}</td>
                            <td>{{item.visit_date}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'DoctorList',
    data(){
        return{
            isData:null,
            
            isdoctor:"Doctor",
            ispatient:"Patient"
        }
    },
    watch: {
    // call again the method if the route changes
    $route: "fetchURL",
    },
    computed:mapGetters(['doctor','patient']),
    methods:{
        fetchURL(){
            console.log("url",this.$route.path);
            if (this.$route.path == "/doctor"){

                this.isData = "doctor"
            }
            else{
                this.isData = "patient"
            }
        }
    },
    created(){
       this.fetchURL()
    }
}
</script>

<style scoped>
.add-button{
    padding: 20px;
    float: right;
}
</style>