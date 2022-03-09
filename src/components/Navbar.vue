<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed">
        <a class="navbar-brand" href="#">HMS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div class="nav-right">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="souter">
        <Sidebar />
        <router-view></router-view>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
    name:'Navbar',
    components:{
        Sidebar
    }
}
</script>

<style scoped>
.navbar{
    background-color: teal !important;
    color: white !important;
}
.souter{
    display: flex;
    flex-flow: wrap;
}
</style>