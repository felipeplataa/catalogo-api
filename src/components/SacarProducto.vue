<template>
  <div id="sacar_producto">
    <h3 align="center">Sacar producto de Inventario</h3>
    <p align="center">
      Función válida para retirar productos que ya están creados en el
      inventario
    </p>
    <h4>
      Pasos a seguir para realizar la salida de productos en el inventario:
    </h4>
    <p>1. Ingrese el código del producto creado del inventario.</p>
    <p>
      2. Digite al frente de la casilla "Cantidad de producto" la cantidad de
      productos que salen del inventario.
    </p>
    <p>3. De click en Retirar producto.</p>
    <b><label for="codigo_prod">Código de producto</label></b>
    <input
      v-model="codigo_prod"
      id="codigo_prod"
      name="codigo_prod"
      type="text"
    />
    <b><label for="cantidad_prod">Cantidad de producto</label></b>
    <input
      v-model="cantidad_prod"
      id="cantidad_prod"
      name="cantidad_prod"
      type="numeric"
    />
    <button v-on:click="retirarProducto">Retirar Producto</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SacarProducto",
  data: function () {
    return {
      codigo_prod: "",
      cantidad_prod: "",
    };
  },
  methods: {
    retirarProducto: function () {
      var retiro = {
        codigo_prod: this.codigo_prod,
        cantidad_prod: this.cantidad_prod,
      };
      axios
        .put("https://g3m4-gr10-catalogo-api.herokuapp.com/salida/", retiro)
        .then((respuesta) => {
          alert("Producto actualizado correctamente");
        })
        .catch((error) => {
          console.log(error);
          alert("Error en el servidorr" + error.response.status);
        });
    },
  },
};
</script>

<style scoped>
#sacar_producto {
  background-color: #ffffff;
  text-align: center;
}
</style>