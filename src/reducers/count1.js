const Countreducer1=(state=0,action)=>{
     switch(action.type){
         case 'addcount1':
             return state+action.value;
        default:
            return state;
     }
}

export default Countreducer1;