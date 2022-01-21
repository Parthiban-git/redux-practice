import { connect } from "react-redux";
import Addcount1 from "../actions/count1";

const Count=(props)=>{
    return(
        <div>
            <h3>The count is {props.count1}</h3>
            <button onClick={()=>{
                 props.dispatch(Addcount1(1));
            }}>+1</button>
        </div>
    )
}
const mapstatetoprops=(state)=>{
    return{
        count1:state.count1
    }
}
export default connect(mapstatetoprops)(Count)