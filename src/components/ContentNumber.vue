<template>
    <div class="container">
        <div class="row">
            <div class="col-md-7" v-for="(item,index) in content" :key="index">
                <div class="card">
                    <div class="card-body">
                        Total Number of {{item.name}}<p />
                        {{item.number}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ContentNumber',
    props:['content']
}
</script>

<style scoped>
.container{
    margin:20px;
}
.row{
    flex-flow: nowrap;
}
.card{
    widows: 200px;
    box-shadow: 0 5px 20px rgba(0, 0,0, 0.2);
}
.card-body{
    text-align: center;
}
</style>