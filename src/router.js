import VueRouter from 'vue-router'
import AgregarProducto from "./components/IngresarProducto";
import SacarProducto from "./components/SacarProducto";
import VerProductos from "./components/verProductos";



const router= new VueRouter({
   // mode:"history",
        routes:[

            {
               name:'ingresar',
               path:'/ingresar/',
               component: AgregarProducto
            },
            {
                name:'sacar',
                path:'/sacar',
                component: SacarProducto
             },
             {
                name:'ver',
                path:'/ver',
                component: VerProductos
             },
             


        ]
}
)
export default router
