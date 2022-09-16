<template>
  <header class="container-fluid" id="nav-container">
    <nav class="navbar navbar-expand-lg">
      <div class="logo-box">
      <a href="">
        <h4 id="logo"><span>Tour </span> in rio</h4>
      </a>
      </div>

      <button @click="showMenu" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      <div :class="['collapse navbar-collapse justify-content-end', classVar] "  id="navbar-links">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" id="item-menu" to="/"><span><font-awesome-icon icon="fas fa-home"></font-awesome-icon> Home</span></router-link>

          <router-link class="nav-item nav-link" id="item-menu" to="/Hospitais"><font-awesome-icon icon="fas fa-suitcase-medical"></font-awesome-icon> Hospitais</router-link>

          <router-link class="nav-item nav-link" id="item-menu" to="/Delegacias"><font-awesome-icon icon="fas fa-person-military-pointing"></font-awesome-icon> Delegacias</router-link>

          <router-link class="nav-item nav-link" id="item-menu" href="/praias" to="/Praias"><font-awesome-icon icon="fas fa-house-tsunami"></font-awesome-icon> Praias</router-link>

          <router-link class="nav-item nav-link" id="item-menu" to="/PontosTuristicos"><font-awesome-icon icon="fas fa-landmark"></font-awesome-icon> Pontos Turisticos</router-link>

          <router-link class="nav-item nav-link" id="item-menu" to="/OndeDormir"><font-awesome-icon icon="fas fa-bed"></font-awesome-icon> Hotéis</router-link>

          <router-link class="nav-item nav-link" id="item-menu" to="/OndeComer"><font-awesome-icon icon="fas fa-bowl-rice"></font-awesome-icon> Restaurantes</router-link>

          <router-link class="nav-item nav-link" id="item-menu" to="/Banheiros"><font-awesome-icon icon="fas fa-toilet"></font-awesome-icon> Banheiros</router-link>

          <router-link class="nav-item nav-link" id="item-menu" to="/Eventos"><font-awesome-icon icon="fas fa-people-group"></font-awesome-icon> Eventos</router-link>

          <router-link class="nav-item nav-link" id="item-menu" to="/about"><font-awesome-icon icon="fas fa-id-card"></font-awesome-icon> About</router-link>

        </div>
      </div>
    </nav>
  </header>
  <main class="container">
  <router-view/>
  </main>

</template>

<script>
export default {
  name: 'MyNav',
  data() {
    return{
      
      classVar: ''
    }
  },
  methods:{
    showMenu(){
      if(this.classVar === ''){
        this.classVar = 'show'
      }else{
        this.classVar = ''
      }

    }
  },
}
</script>

<style scoped>
.row{
  margin: 0;
}
header{
  position: fixed;
  z-index: 180;
}

header .container{
  padding: 70px 0;
  
}
.logo-box{
    width: 180px;
    cursor: pointer;
  }

.logo-box a{
  text-decoration: none;
}

#logo{
  color: #Fafafa;
  font-weight: 100;
  font-size: 2em;
}

#logo span{
  font-weight: 700;
  }


/* navbar */
header, .navbar {
  background-color: #343a40;
}

#nav-container{
  padding-block: .5em;
}

.navbar-nav a {
  font-weight: bold;
  color: #A3A3A3;
}

.navbar-nav a:hover{
  transition: 300ms;
  color: #FFFFFF;
}

.navbar-nav a.router-link-exact-active {
  color: #FFFFFF;
  transition: 300ms;
} 

.container{
  padding-top: 100px;

}

.show {
  padding-top: 100px;
  padding-bottom: 200px;
  display: block;
}

.show a{
  font-size: 2em;
}


</style>