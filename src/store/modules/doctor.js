import routes from '@/router/index'


const state={
    sidebars:[
        {
            name:'Doctor List',
            path:"/doctor"
        },
        {
            name:'Patient List',
            path:"/patient"
        },
        {
            name:'Apointment List',
            path:'#'
        },
        {
            name:'Staff List',
            path:'#'
        },
    ],
    doctorList:[],
    patientList:[],
};

const getters={
    sidebar: (state)=>state.sidebars,
    doctor:(state)=>state.doctorList,
    patient:(state)=>state.patientList
};

const actions={
    addDoctor({commit},data){
        const new_data = JSON.stringify(data)
        console.log(new_data);
        // this.state.sidebars.push(data)
        // this.$router.push('/')
        commit('setDoctor',data)
        routes.push('/doctor')
    },
    addPatient({commit},data){
        console.log("patient");
        commit('setPatient',data)
        routes.push('/patient')
    }
}

const mutations={
    setDoctor:(state,data)=>state.doctorList = [...state.doctorList,data],
    setPatient:(state,data)=>state.patientList = [...state.patientList,data]
}

export default{
    state,
    getters,
    actions,
    mutations
}