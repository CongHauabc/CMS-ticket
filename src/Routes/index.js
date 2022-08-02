
import Home from "~/component/Home/Home"
import Ticket from "~/component/Ticketmanagement/Ticket"
const publicRouter = [
    {path:'/',component:Home},
   
    {path:'/Home',component:Home},
    {path:'/Ticket',component:Ticket},
  

]
const privateRouter = []

export {publicRouter,privateRouter}