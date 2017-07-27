import axios from '../../fetch/api'
import * as types from '../types.js'
//这个页面的注释请参照同级目录的blog.js文件，复制的内容逻辑
const state = {
    data:"",
    algorithmMsg:""
}

const mutations = {
    [types.GET_ALGORITHM_DATA](state,res){
        state.data = res.data;
    },
    [types.ALGORITHM_INDEX](state,index){
        window.name = state.data[index].todo;
    },
    [types.READ_ALGORITHM](state,res){
        state.algorithmMsg = res.data;
    }
}

const actions = {
    getAlgorithmMsg({commit}){
        axios({
            method: 'post',
            url: 'index.php/index/getAlgorithm'
        }).then((res)=>{
            commit(types.GET_ALGORITHM_DATA,res)
        })
    },
    openAlgorithm({commit},index){
        commit(types.ALGORITHM_INDEX,index)
    },
    readAlgorithm({commit}){
        axios({
            method: 'get',
            url: 'index.php/index/readAlgorithm',
            params:{
                "index":window.name
            }
        }).then((res)=>{
            commit(types.READ_ALGORITHM,res)
        })
    }
}

const getters = {
    algorithmData(state){
        return state.data;
    },
    algorithmMsg(state){
        return state.algorithmMsg;
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}