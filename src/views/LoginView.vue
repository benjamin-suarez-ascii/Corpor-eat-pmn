<template>
    <div class="login-view">
      <div class="login-card">
        <h1>{{ isLoginMode ? 'Iniciar Sesión' : 'Registrarse' }}</h1>
        
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="tu@empresa.com"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" class="submit-btn">
            {{ isLoginMode ? 'Ingresar' : 'Registrarse' }}
          </button>
          
          <p class="toggle-mode" @click="toggleMode">
            {{ isLoginMode ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión' }}
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: '',
        isLoginMode: true
      }
    },
    methods: {
      handleSubmit() {
        alert(`${this.isLoginMode ? 'Login' : 'Registro'} con: ${this.email}`)
        this.$router.push('/')
      },
      toggleMode() {
        this.isLoginMode = !this.isLoginMode
      }
    }
  }
  </script>
  
  <style scoped>
  .login-view {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
    padding: 2rem;
  }
  .login-card {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  .form-group {
    margin-bottom: 1.5rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  .submit-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .submit-btn:hover {
    background-color: #3aa876;
  }
  .toggle-mode {
    margin-top: 1rem;
    color: #42b983;
    text-align: center;
    cursor: pointer;
  }
  .toggle-mode:hover {
    text-decoration: underline;
  }
  </style>