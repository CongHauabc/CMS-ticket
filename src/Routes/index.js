
import Home from "~/component/Home/Home"
import Ticket from "~/component/Ticketmanagement/Ticket"
import Ticketcontrol from "~/component/Ticketcontrol/Ticketcontrol"

import Service from "~/component/Service/Service"
const publicRouter = [
    {path:'/',component:Home},
   
    {path:'/Home',component:Home},
    {path:'/Ticket',component:Ticket},
    {path:'/Ticketcontrol',component:Ticketcontrol},
    {path:'/Service',component:Service},

]
const privateRouter = []

export {publicRouter,privateRouter}