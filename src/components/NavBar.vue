<template>
    <nav class="navbar">
      <div class="logo">CorporEat</div>
      <ul class="nav-links">
        <li>
          <router-link to="/">Inicio</router-link>
        </li>
        <li>
          <router-link to="/reservations">Mis Reservas</router-link>
        </li>
        <li>
          <router-link to="/make-reservation">Hacer Reserva</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #2c3e50;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
  .nav-links a:hover {
    text-decoration: underline;
  }
  .router-link-exact-active {
    font-weight: bold;
    border-bottom: 2px solid #42b983;
  }
  </style>