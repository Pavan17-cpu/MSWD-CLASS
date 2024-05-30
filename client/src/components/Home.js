import AuthReducer from "./reducer/AuthReducer";
function Home(props)
{
    console.log(props)
    if(props.store.getState().AuthReducer[0]===null)
    {
    props.store.dispatch({type:"login",data:{un:props.un,role:1}})  // new state value
    }
    
    return(
        <div>
            This is the HomePage {props.un}
        </div>
    );
}
export default Home