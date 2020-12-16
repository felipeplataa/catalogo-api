<template>
    <div id="agregar_producto">
        <h3 align="center">Ingresar producto a Inventario</h3>
        <p align="center">Función válida para ingresar productos que ya están creados en el inventario</p>
        <h4>Pasos a seguir para realizar la entrada de productos en el inventario:</h4>
        <p>1. Ingrese el código del producto creado del inventario.</p>
        <p>2. Digite al frente de la casilla Cantidad de producto la cantidad de productos que ingresan.</p>
        <p>3. Digite al frente de la casilla Costo de producto el costo de adquisición de los productos.</p>
        <p>4. De click en agregar producto.</p>
        <b><label for="codigo_prod">Código de producto</label></b>
        <input v-model="codigo_prod" id="codigo_prod" name="codigo_prod" type="text">
        <b><label for="cantidad_prod">Cantidad de producto</label></b>
        <input v-model="cantidad_prod" id="cantidad_prod" name="cantidad_prod" type="numeric">
        <b><label for="costo_prod_ent">Costo de producto</label></b>
        <input v-model="costo_prod_ent" id="costo_prod_ent" name="costo_prod_ent" type="numeric">
        <button v-on:click="ingresarProducto"> Agregar Producto</button>
    </div>

</template>

<script>

import axios from 'axios'
export default {
    name:"AgregarProducto",
    data: function() {
        return {
            numero_transaccion: 0,
            codigo_prod: "",
            cantidad_prod: "",
            costo_prod_ent: "",
            date: "",
            cantidad_actual: 0,
            costo_actual:0
        };
    },
    methods: {
        mostrar_codigo: function(){
            alert(this.codigo_prod)
        },
        ingresarProducto: function(){
            var ingreso ={
            codigo_prod: this.codigo_prod,
            cantidad_prod: this.cantidad_prod,
            costo_prod_ent: this.costo_prod_ent
            }
            axios
            .put("http://127.0.0.1:8000/producto/entrada/",ingreso)
            .then(respuesta=> {
               alert("Producto ingresado a inventario correctamente");
            })
            .catch(error => {
            console.log(error);
            alert("Error en el servidorr"+error.response.status);

        });
    }
    },

};


</script>

<style scoped>
#agregar_producto{
    background-color: #fff;
    align-content: center;
    justify-content: center;
    width:100%;
    display:flexbox;
    text-align: center;
}
</style>