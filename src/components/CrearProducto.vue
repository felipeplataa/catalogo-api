<template>
    <div id="crear_producto">
     <section class="contenedor sobre-nosotros">
            <div class="contenedor-sobre-nosotros">
                <img src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg" alt="" class="imagen-about-us">
                <div class="contenido-textos">
                    <h3 align="center">Crear producto</h3>
                    <tr>
                    <td>
                    <b><label for="codigo_prod">Código de producto</label></b>
                    </td>
                    <td>
                    <input v-model="codigo_prod" id="codigo_prod" name="codigo_prod" type="text" size="20" placeholder="Escriba un código nuevo">
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <b><label for="nombre_prod">Nombre de producto</label></b>
                    </td>
                    <td>
                    <input v-model="nombre_prod" id="nombre_prod" name="nombre_prod" type="text" placeholder="Escriba el nombre del producto">
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <b><label for="unidad_de_medida_prod">Unidad de medida</label></b>
                    </td>
                    <td>
                    <input v-model="unidad_de_medida_prod" id="unidad_de_medida_prod" name="unidad_de_medida_prod" type="text" placeholder="Escriba las unidades de medida del producto">
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <b><label for="cantidad_prod">Cantidad de productos</label></b>
                    </td>
                    <td>
                    <input v-model="cantidad_prod" id="cantidad_prod" name="cantidad_prod" type="number" min="0" placeholder="Escriba la cantidad">
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <b><label for="costo_unit_prod">Costo unitario de producto</label></b>
                    </td>
                    <td>
                    <input v-model="costo_unit_prod" id="costo_unit_prod" name="costo_unit_prod" type="number" min="0" placeholder="Escriba el costo del producto">
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <b><label for="precio_venta_prod">Precio de venta de producto</label></b>
                    </td>
                    <td>
                    <input v-model="precio_venta_prod" id="precio_venta_prod" name="precio_venta_prod" type="number" min="0" placeholder="Escriba el precio de venta">
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <b><label for="proveedor">Proveedor</label></b>
                    </td>
                    <td>
                    <input v-model="proveedor" id="proveedor" name="proveedor" type="text" placeholder="Escriba el proveedor">
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <b><label for="almacen">Almacén</label></b>
                    </td>
                    <td>
                    <input v-model="almacen" id="almacen" name="almacen" type="text" placeholder="Escriba el almacén">
                    </td>
                    </tr>
                    <button v-on:click="crearProducto"> Crear Producto</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NuevoProducto",
  data: function () {
    return {
      codigo_prod: "",
      nombre_prod: "",
      unidad_de_medida_prod: "",
      cantidad_prod: "",
      costo_unit_prod: "",
      precio_venta_prod: "",
      proveedor: "",
      almacen: "",
    };
  },
  methods: {
    crearProducto: function () {
      var ingreso = {
        codigo_prod: this.codigo_prod,
        nombre_prod: this.nombre_prod,
        unidad_de_medida_prod: this.unidad_de_medida_prod,
        cantidad_prod: this.cantidad_prod,
        costo_unit_prod: this.costo_unit_prod,
        precio_venta_prod: this.precio_venta_prod,
        proveedor: this.proveedor,
        almacen: this.almacen,
      };
      axios
        .post("https://g3m4-grupo10.herokuapp.com/producto/create/", ingreso)
        .then((respuesta) => {
          alert("Producto creado en inventario correctamente");
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
#crear_producto {
  background-color: #fff;
  align-content: center;
  justify-content: center;
  width: 100%;
  display: flexbox;
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
    width: 700px;
    background: #bcc1c5;
    padding: 20px;
    margin: auto;
    margin-top: 50px;
}

.contenido-textos h3{
    margin-bottom: 40px;
    font-size: 20px;
}

.contenido-textos input{
  width: 200%;
  background: #ffff;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  font-family: "calibri";
}
.contenido-textos b{
  font-family: "calibri";
  font-size: 18px;
  margin-inline-start: 70px;
  font-size: 17px;
}
</style>
