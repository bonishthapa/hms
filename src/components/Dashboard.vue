<template>
  <div class="dashboard">
      <div class="container">
          <ContentNumber :content="content"/>
          
          <TableData :patient="patient" />
      </div>
  </div>
</template>

<script>
import ContentNumber from '../components/ContentNumber.vue'
import TableData from '../components/TableData.vue'

export default {
    name:'Dashboard',
    components:{
        ContentNumber,
        TableData
    },
    data(){
        return{
            content:[
                {
                    name:'Doctor',
                    number:20,
                },
                {
                    name:'Patient',
                    number:30,
                },
                {
                    name:'Nurse',
                    number:20,
                },
            ],
            patient:[
                {
                    patient_name:"abcd",
                    assigned_doctor:1,
                    visit_date:"2022-03-09"
                },
                {
                    patient_name:"abcd",
                    assigned_doctor:1,
                    visit_date:"2022-03-09"
                },
                {
                    patient_name:"abcd",
                    assigned_doctor:1,
                    visit_date:"2022-03-09"
                },
                {
                    patient_name:"abcd",
                    assigned_doctor:1,
                    visit_date:"2022-03-09"
                },
                {
                    patient_name:"abcd",
                    assigned_doctor:1,
                    visit_date:"2022-03-09"
                },
                {
                    patient_name:"abcd",
                    assigned_doctor:1,
                    visit_date:"2022-03-09"
                },
                {
                    patient_name:"abcd",
                    assigned_doctor:1,
                    visit_date:"2022-03-09"
                }
            ]
        }
    }
}
</script>

<style>
.dashboard{}
</style>