const state = {
    opcionMenu:'cargas'
}
const getters ={
    opcionMenu: state => state.opcionMenu
}
const actions ={
    cambiarOpcion({commit}, opcion){
        commit('mutateOpcionMenu', opcion)
    }
}
const mutations={
    mutateOpcionMenu: (state, payload) => state.opcionMenu = payload
}

export default{
    state,
    getters,
    actions,
    mutations,
    namespaced:true
}

