import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Approuter from './router';
import Addcount1 from './actions/count1';
import Addcount2 from './actions/count2';
import store from './store/configure';
const stor=store();

stor.dispatch(Addcount1(0));
stor.dispatch(Addcount2(0));

console.log(stor.getState());
const jsx=()=>{
   return(
     <Provider store={stor}>
         <Approuter/>
     </Provider>
   )
}
ReactDOM.render(
  jsx(),
  document.getElementById('root')
);


