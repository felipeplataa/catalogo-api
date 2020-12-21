<template>
  <div id="sacar_producto">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimum-dcale=1.0">
     <section class="contenedor sobre-nosotros">
            <div class="contenedor-sobre-nosotros">
                <img src="https://image.freepik.com/foto-gratis/maquina-codigo-barras-caja_1150-5007.jpg" alt="" class="imagen-about-us">
                <div class="contenido-textos">
                    <h3 align="center">Salida de productos del inventario</h3>
                    <h3 align="center">Función válida para retirar productos que ya están creados en el inventario</h3>
                    <p><span>1</span>Ingrese el código del producto creado del inventario.</p>
                    <p><span>2</span>Digíte al frente de la casilla "Cantidad de producto" la cantidad de productos que salen del inventario.</p>
                    <p><span>3</span>De click en "Retirar producto".</p>
                </div>
            </div>
        </section>
    <div class="Label">
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
      type="number" min="0"
    />
    <button v-on:click="retirarProducto">Retirar Producto</button>
  </div>
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
        .put("https://g3m4-grupo10.herokuapp.com/producto/salida/", retiro)
        .then((respuesta) => {
          alert("Producto actualizado correctamente");
        })
        .catch((error) => {
          console.log(error);
          alert("Error en el servidor" + error.response.status);
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
    margin-block-start: 60px;
}

.contenido-textos h3{
    margin-bottom: 40px;

}

.contenido-textos p span{
    background: #283747;
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
    font-size: 16px;
}

.Label{
    margin-top: 37px;
}
</style>
