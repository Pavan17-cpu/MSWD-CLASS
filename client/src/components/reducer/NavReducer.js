const initState="Login"
function NavReducer(state=initState,action)
{
    switch(action.type) {
        case "nav":
            console.log(action.data.nav_val)
            state = action.data.nav_val
            return state
        default:
            return state
    }
}
export default NavReducer
//action={type:"nav",data:{nav_val:"Registration"}}
