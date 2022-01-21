const Countreducer2=(state=0,action)=>{
    switch(action.type){
        case 'addcount2':
            return state+action.value;
       default:
           return state;
    }
}

export default Countreducer2;