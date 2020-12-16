<template>
    <div>
        <h2 align="center">Información de todos los productos</h2>
        <table class="table-cebra">
            <thead>
            <tr>
                <th>Código producto</th>
                <th>Nombre de producto</th>
                <th>unidad de Medida</th>
                <th>Cantidad de productos</th>
                <th>Costo Unitario de Productos</th>
                <th>Precio de Venta de Productos</th>
                <th>Proveedor</th>
                <th>Almacén</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="producto in database_producto" v-bind:key="producto.codigo_prod">
                <td>{{producto.codigo_prod}}</td>
                <td>{{producto.nombre_prod}}</td>
                <td>{{producto.unidad_de_medida_prod}}</td>
                <td>{{producto.cantidad_prod}}</td>
                <td>{{producto.costo_unit_prod}}</td>
                <td>{{producto.precio_venta_prod}}</td>
                <td>{{producto.proveedor}}</td>
                <td>{{producto.almacen}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {


    name: "VerProductos",
    data: function(){
        return{
            database_producto:[
                {   
                codigo_prod:"111111",
                nombre_prod:"Arroz",
                unidad_de_medida_prod:"Unidades",
                cantidad_prod:200,
                costo_unit_prod:2000,
                precio_venta_prod:3000,
                proveedor: "Empresa ABC SAS",
                almacen: "AlmacenBogota"},

               { 
                codigo_prod:"22222",
                nombre_prod:"Maiz Pira",
                unidad_de_medida_prod:"Libras",
                cantidad_prod:100,
                costo_unit_prod:800,
                precio_venta_prod:1400,
                proveedor: "Empresa ABC SAS",
                almacen: "AlmacenBogota"
                }
                ]
        };
    },
    beforeCreate: function(){
        axios
        .get("https://g3m4-gr10-catalogo-api.herokuapp.com/producto/")
        .then(respuesta => {
            this.database_producto = respuesta.data;
        })
        .catch(error => {
            console.log(error);
            alert("Error en la petición con código"+error.response.status);

        });
    }
};
</script>

<style>
body{
    margin: auto;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1.6em;
    color: #283747;
}
* {
    box-sizing: border-box;
}
.page-container {
    max-width: 700px;
    margin: 2rem auto;
    display: flex;
    align-items: center;
}
.table-cebra {
    border:solid 1px #cccccc;
    border-spacing: 0;
    margin: auto;
}
.table-cebra thead tr {
    background: #283747;
    color: white;
}

.table-cebra th,
.table-cebra td {
    border-right: 1px solid #cccccc;
    min-width: 150px;
    padding: 0.5rem;
    text-align: left;
}
.table-cebra th:last-child,
.table-cebra td:last-child{
    border-right: 0;
}
.table-cebra td {
    border-bottom: 1px solid #cccccc;
}
.table-cebra tbody tr{
    background: white;
}
.table-cebra tbody tr:nth-child(2n){
    background: #f2f2f2;
}
.table-container{
    max-width: 100%;
    overflow-x: scroll;
}
</style>