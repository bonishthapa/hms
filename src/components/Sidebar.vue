<template>
  <div class="sidebar">
      <div class="sidebar-item">
          <ul>
              <li v-for="(item,index) in sidebar" :key="index">
                  {{item.name}}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'Sidebar',
    data(){
        return{
            sidebar:[
                {
                    name:'Doctor',
                    path:'#'
                },
                {
                    name:'Doctor',
                    path:'#'
                },
                {
                    name:'Doctor',
                    path:'#'
                },
                {
                    name:'Doctor',
                    path:'#'
                },
                {
                    name:'Doctor',
                    path:'#'
                },
            ]
        }
    }
}
</script>

<style>
.sidebar{
    width: 300px;
    height: 100vh;
    background-color: #69a5e1;
}
.sidebar-item{
    padding: 50px;
}
.sidebar-item ul li{
    list-style: none;
    line-height: 2;
}
</style>