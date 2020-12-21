<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity= "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimum-dcale=1.0">
    <div class="header">
      <div class="imagen1">
        <img src="./assets/Hola.png" alt="" />
      </div>
      <section class="textos-header">
        <h1>Sistema de gestión de información</h1>
        <h2>
          CoManagement es un sistema de software que permite gestionar
          información de manera óptima
        </h2>
      </section>
      <div class="wave" style="height: 150px; overflow: hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #fff"
          ></path>
        </svg>
      </div>
    </div>
    <div class="main-component">
      <section class="contenedor sobre-nosotros">
            <h2 class="titulo">Catálogo</h2>
      </section>
      <nav>
        <button v-on:click="cambiarVer">Productos</button>
        <button v-on:click="cambiarEntrarProd">Entrada inventario</button>
        <button v-on:click="cambiarSacarProd">Salida inventario</button>
        <button v-on:click="cambiarCrearProd">Crear Producto</button>
        <router-view></router-view>
      </nav>
    </div>
    <div class="footer">
      <div class="footer-left">
      <img src="./assets/Imagen1.png" alt="">
        <p>CoManagement le permitirá gestionar la información de su empresa de una forma rápida, segura y confiable</p>
        <div class="socials">
          <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
           <a href="#" class="facebook"><i class="fab fa-twitter"></i></a>
            <a href="#" class="facebook"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    <ul class="footer-right">
      <li>
        <h2>Catálogo</h2>
        <ul class="box">
          <li><a href="#">Productos</a></li>
          <li><a href="#">Entrada Inventario</a></li>
          <li><a href="#">Salida Inventario</a></li>
        </ul>
      </li>
      <li class="features">
        <h2>Módulos</h2>
          <ul class="box">
            <li><a href="#">Configuración</a></li>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#">Facturación</a></li>
          </ul>
        </li>
        <li>
        <h2>Contactos</h2>
          <ul class="box">
            <li><a href="#">CoManag@gmail.com</a></li>
            <li><a href="#">3132547895</a></li>
            <li><a href="#">21054785</a></li>
          </ul>
        </li>
    </ul>
</div>
</div>
</template>


<script>
import AgregarProducto from "./components/IngresarProducto";
import SacarProducto from "./components/SacarProducto";
import VerProductos from "./components/verProductos";
import NuevoProducto from "./components/CrearProducto";


export default {
  name: "App",
  components: { AgregarProducto, SacarProducto, VerProductos, NuevoProducto},
  methods: {
    cambiarEntrarProd: function () {
      if (this.$route.name != "ingresar") {
        this.$router.push({ name: "ingresar" });
      }
    },
    cambiarSacarProd: function () {
      if (this.$route.name != "sacar") {
        this.$router.push({ name: "sacar" });
      }
    },
    cambiarVer: function () {
      if (this.$route.name != "ver") {
        this.$router.push({ name: "ver" });
      }
    },
    cambiarCrearProd: function () {
      if (this.$route.name != "crear") {
        this.$router.push({ name: "crear" });
      }
    },

    beforeCreate: function () {
      if (this.$route.name != "verProductos") {
      }
      this.$router.push({ name: "verProductos" });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.header {
  width: 100%;
  height: 500px;
  background: #000428;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(
      to right,
      hsla(208, 100%, 29%, 0.575),
      hsla(234, 100%, 8%, 0.568)
    ),
    url(./assets/img6.jpg);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
      to right,
      hsla(208, 100%, 29%, 0.575),
      hsla(234, 100%, 8%, 0.575)
    ),
    url(./assets/img6.jpg);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}
.imagen1 {
  padding: 20px 0px 0px 20px;
}

.textos-header {
  display: flex;
  height: 270px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.textos-header h1 {
  font-size: 50px;
  color: #ffffff;
}

.textos-header h2 {
  font-size: 30px;
  font-weight: 300;
  color: #ffffff;
}
.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.main-component {
  height: 100vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.titulo{
    color: #000428;
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
}

  .main-component nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-inline-start: 40px;
    cursor: pointer;
  }
  .main-component nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    cursor: pointer;
  }
.footer {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-flow: rwo wrap;
  padding: 0px;
  color: #ffffff;
  background-color: #283747;
}
.footer p{
  margin: auto;
  margin-block: 30px;
  margin-left: 40px;
  display: inline-block;
  text-align:justify;
}
.footer > *{
  flex: 1 1000;
}
.footer-left{
  margin-right: 1.25em;
}
.footer-left img{
  width: 50%;
  margin-left: 55px;
  margin-top: 20px;
}
h2{
  font-weight: 600;
  font-size: 15px;
}
.footer ul{
  list-style: none;
  padding-left: 0;
}
.footer li{
  line-height: 2em;
}
.footer a{
  text-decoration: none;
}
.footer-right{
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-flow: row wrap;
}
.footer-right >*{
  flex: 1 50%;
  margin-left: 130px;
  margin-block: 30px;
}
.box a{
  color: #999;
}
.footer-left p{
  color: #999;
}
.socials a{
  background: #ffff;
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-left: 50px;
}
.socials a i{
  color: #999;
  padding: 10px 12px;
  font-size: 20px;
}
@media screen and (min-width: 600px){
  .footer-right *{
    flex: 1;
  }
  .footer-left{
    flex: 1 0px;
  }
  .footer-right{
    flex: 2 0px;
  }
}
</style>
