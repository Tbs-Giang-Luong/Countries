import Home from "../src/Component/Home/Home";
import Regions from "../Pages/Regions/Regions";
import Countries from "../Pages/Countries/Countries";



const publicRoutes = [
    { path: "/", component: Home },
    { path: "./regions", component: Regions },
    { path: "countries", component: Countries },


]

const privateRoutes = [


]

export { publicRoutes, privateRoutes }

