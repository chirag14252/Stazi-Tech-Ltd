import { useReducer} from "react";
import "./Footer.css"
const Footer = (props)=>{
    const triggered = (state,action)=>{
        switch(action.type){
            case "INC": return state+1;
            break;
            case "DEC":return state-1;
            break;
        }
        return state;
    }
    const [currentState,changeState] = useReducer(triggered,1);
    props.pageInfo(currentState)
    return(
       <div className="Footer-section">
         <div className="Footer-item">
            <button onClick={()=>{
            if(currentState > 1){
                    changeState({type:"DEC"});
           
            }
            }
            }>Prev</button>
            <div className="page-show">{currentState}</div>
            <button onClick={()=>{
                if(currentState < 10){
                    changeState({type:"INC"});
                }
            }}>Next</button>
         </div>
       </div>
    )
}

export default Footer;