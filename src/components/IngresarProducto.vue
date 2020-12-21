<template>
    <div id="agregar_producto">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimum-dcale=1.0">
        <section class="contenedor sobre-nosotros">
            <div class="contenedor-sobre-nosotros">
                <img src="https://image.freepik.com/foto-gratis/personal-entrega-escanea-caja-carton-escaner-codigo-barras-verificar-productos-clientes_11304-1664.jpg" alt="" class="imagen-about-us">
                <div class="contenido-textos">
                    <h3 align="center">Ingresar producto a Inventario</h3>
                    <h3 align="center">Función válida para ingresar productos que ya están creados en el inventario</h3>
                    <p><span>1</span>Ingrese el código del producto creado del inventario.</p>
                    <p><span>2</span>Digíte al frente de la casilla "Cantidad de producto" la cantidad de productos que ingresan.</p>
                    <p><span>3</span>Digíte al frente de la casilla "Costo de producto" el costo de adquisición de los productos.</p>
                    <p><span>4</span>De click en "Agregar producto".</p>
                </div>
            </div>
        </section>
    <div class="Label1">
        <b><label for="codigo_prod">Código de producto</label></b>
        <input v-model="codigo_prod" id="codigo_prod" name="codigo_prod" type="text">
        <b><label for="cantidad_prod">Cantidad de producto</label></b>
        <input v-model="cantidad_prod" id="cantidad_prod" name="cantidad_prod" type="number" min="0">
        <b><label for="costo_prod_ent">Costo de producto</label></b>
        <input v-model="costo_prod_ent" id="costo_prod_ent" name="costo_prod_ent" type="number" min="0">
        <button v-on:click="ingresarProducto"> Agregar Producto</button>
    </div>
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
            .put("https://g3m4-grupo10.herokuapp.com/producto/entrada/",ingreso)
            .then(respuesta=> {
               alert("Producto ingresado a inventario correctamente");
            })
            .catch(error => {
            console.log(error);
            alert("Error en el servidor"+error.response.status);

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
.contenedor-sobre-nosotros{
    display: flex;
    justify-content: space-evenly;
}

.imagen-about-us{
    width: 42%;
    margin-top: 50px;
    margin-left: 50px;
}

.sobre-nosotros .contenido-textos{
    width: 48%;
    margin-block-start: 20px;
}

.contenido-textos h3{
    margin-bottom: 40px;
}

.contenido-textos p span{
    background:#283747;
    color: #ffffff;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    padding: 2px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
    margin-right: 5px;
}

.contenido-textos p{
    padding: 0px 0px 30px 15px;
    font-weight: 300;
    text-align: justify;
}

.Label1{
    margin-top: 40px;
}
</style>
