<template>
  <div>
    <main class="full-nav">
      <div class="container">
        <nav class="nav">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/formazione" class="nav-item">Mia Formazione</router-link>
          <router-link to="/listone" class="nav-item">Listone</router-link>
        </nav>
      </div>
    </main>
    <RouterView class="body"/>
  </div>
</template>


<style scoped>
.full-nav {
  background-color: #2F4F4F;
  height: 115px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
}

.nav-item {
  font-family: 'Courier New', Courier, monospace;
  margin: 0 1%;
  color: #FFFFFF;
  background-color: #808080;
  text-decoration: none;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1%;
}

.nav-item:hover {
  color: aqua;
}

.nav {
  display: flex;
  justify-content: start;
}

</style>