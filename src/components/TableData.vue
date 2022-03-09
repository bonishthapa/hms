<template>
    <div class="container">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Assigned Doctor</th>
                    <th scope="col">Visit Date</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in patient" :key="index">
                    <th>{{index+1}}</th>
                    <td>{{item.patient_name}}</td>
                    <td>{{item.assigned_doctor}}</td>
                    <td>{{item.visit_date}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'TableData',
    props:['patient']
}
</script>

<style scoped>
.container{
    margin:20px
}
.table{
    width: 100vw;
    box-shadow: 0 5px 20px rgba(0, 0,0, 0.2);
}

</style>