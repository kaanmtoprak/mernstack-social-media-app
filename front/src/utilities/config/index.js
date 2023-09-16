import { Dashboard, Messages, Notifications, Profile, Settings, SignIn, SignUp } from "../../pages"


const routesList  = [
{
    path:"/",
    component:<Dashboard/>,
    access:true
},
// {
//     path:"/profile",
//     component:<Profile/>,
//     access:true
// },
{
    path:"/:username",
    component:<Profile/>,
    access:true
},
{
    path:"/notifications",
    component:<Notifications/>,
    access:true
},
{
    path:"/messages",
    component:<Messages/>,
    access:true
},
{
    path:"/settings",
    component:<Settings/>,
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