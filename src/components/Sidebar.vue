<template>
  <div class="sidebar">
      <div class="sidebar-item">
          <ul>
              <li v-for="(item,index) in sidebar" :key="index">
                  <router-link :to="item.path">{{item.name}}</router-link>

              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'Sidebar',
    computed:mapGetters(['sidebar']),
    created(){
        // this.sidebar()
    }

}
</script>

<style>
.sidebar{
    width: 300px;
    height: 100vh;
    background-color: #69a5e1;
    box-shadow: 0 5px 20px rgba(0, 0,0, 0.2);
}
.sidebar-item{
    padding: 50px;
}
.sidebar-item ul li{
    list-style: none;
    line-height: 2;
}
</style>