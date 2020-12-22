<template>
    <div class="main-component">
        <div class= "card">
            <div class="content-card">
                <div class="people">
                    <img src="https://image.freepik.com/vector-gratis/ilustracion-vector-concepto-abstracto-desarrollo-micrositio-desarrollo-web-micrositio-pequeno-sitio-internet-servicio-diseno-grafico-pagina-destino-metafora-abstracta-equipo-programacion-software_335657-2296.jpg" alt="">
                </div>
                <div class="texto-team">
                    <h4>Agilidad</h4>
                    <p>CoManagement le permitirá hacerse cargo de distintas operaciones internas de su empresa, desde producción a distribución e incluso clientes. </p>
                </div>
            </div>
                <div class="content-card">
                <div class="people">
                    <img src="https://image.freepik.com/vector-gratis/ilustracion-concepto-diseno-interaccion_114360-1442.jpg" alt="">
                </div>
                <div class="texto-team">
                    <h4>Rapidez</h4>
                    <p> CoManagement le permitirá acceder a la información clave en tiempo real y automatizar los procesos de su empresa de manera eficiente.</p>
                </div>
            </div>
            <div class="content-card">
                <div class="people">
                    <img src="https://image.freepik.com/vector-gratis/actualizacion-sistema_41910-336.jpg" alt="">
                </div>
                <div class="texto-team">
                    <h4>Seguridad</h4>
                    <p>CoManagement le proporcionará la mayor seguridad y confianza de que la información de su empresa se encuentra protegida.</p>
                </div>
            </div>
            </div>
       </div>
</template>

<script>
import vueRouter from "vue-router";


export default {
  name: "Inicio",
  data: function () {
      return {
          data:null,
      };
  },
    cambiarInicio: function () {
      if (this.$route.name != "Inicio") {
        this.$router.push({ name: "Inicio" });
      }
    },
};
</script>

<style scoped>
.card{
    display: flex;
    justify-content:space-around;
    align-items: center;
    flex-wrap: wrap;
}
.content-card{
    width: 25%;
    padding: 30px 0;
    overflow: hidden;
    background: #dadadf;
    border-radius: 10px;
    position: relative;
    /* text-align: right;*/
    margin-bottom: 60px;
    box-shadow: 0 0 6px #0000;
    margin-top: 60px;
}
.card img{
    width: 95%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    text-align: center;
}
.texto-team{
    text-align: left;
    width: 90%;
    margin: 0 auto;
}
.texto-team p{
    text-align: left;
    width: 95%;
    margin-left: auto;
    padding-right: 25px;
    text-align: justify;
}
.texto-team h4{
    color: #283747;
    font-weight: 700;
    margin: 25px 0 12px;
    font-size: 18px;

}
</style>
