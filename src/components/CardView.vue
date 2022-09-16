<template>
<!-- CARD -->
<div class="row">
  <div class="col-md-7">
    <img class="img-fluid" :src="dados.imagem" :alt="['foto de ',dados.nome]">
  </div>
  <div class="col-md-5">
    <h3 class="font-weight-light">{{dados.nome}}</h3>
    <p class="mt-4">
    {{dados.descricao}}
    </p>
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Saber mais</button>
  </div>
</div>

<!-- Modal -->

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Localização: </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <h4>{{dados.nome}}</h4>
        <div class="ratio ratio-16x9">
          <iframe
            width="100%"
            height="auto"
            frameborder="0"
            style="border:0"
            :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyBRxTAWtsHtRRg2zhv9ZNoVHi8acNrHm4A&q=` +
            dados.lt +',' +dados.lg"
            allowfullscreen
              ></iframe>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  name: "CardView",
  props: ["dados"],
  setup() {
    
  },
}
</script>

<style scoped>

.row{
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 10px #e9ecef;
  margin-bottom: 2.2em;
  padding: 1em 1em;
  background: #e9ecef;

  transition: 500ms;
}

.img-fluid{
border-radius: 10px;
}

.col-md-5{
  border: none;
  border-radius: 0 10px 10px 0;
  background: #e9ecef;
}

.col-md-5 h3{
  margin-block: 1.5em;
}

.col-md-5 p {
  margin-top: 2em;
  text-align: justify;
  font-size: 1.1em;
  font-weight: 500;
}

.col-md-5 button{
  margin-top: 2.5em;
}

@media (max-width: 760px) {
  .row {
    padding: 0;
    margin: 2em auto;
    max-width: 80%;

    transition: 500ms;
  }
}

</style>