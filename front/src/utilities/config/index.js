import { Dashboard, SignIn, SignUp } from "../../pages"


const routesList  = [
{
    path:"/",
    component:<Dashboard/>,
    access:true
},
{
    path:"/sign-in",
    component:<SignIn/>,
    access:false
},
{
    path:"/sign-up",
    component:<SignUp/>,
    access:false
}
]

export {routesList}