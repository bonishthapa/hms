<template>
  <div class="dashboard">
      <div class="container">
          <ContentNumber :content="content"/>
      </div>
  </div>
</template>

<script>
import ContentNumber from '../components/ContentNumber.vue'
export default {
    name:'Dashboard',
    components:{
        ContentNumber
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
            ]
        }
    }
}
</script>

<style>

</style>