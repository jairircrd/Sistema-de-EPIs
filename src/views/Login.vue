<template>
  <div class="login-container">
    <div class="login-card">
      <header class="login-header">
        <div class="logo-login">Sistema de EPIs</div>
        <p>Acesse sua conta para gerenciar equipamentos</p>
      </header>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label>E-mail</label>
          <input v-model="email" type="email" placeholder="Digite seu e-mail" required />
        </div>

        <div class="input-group">
          <label>Senha</label>
          <input v-model="password" type="password" placeholder="Digite sua senha" required />
        </div>

        <button type="submit" class="btn-login" :disabled="loading">
          {{ loading ? 'Entrando...' : 'Entrar no Sistema' }}
        </button>

        <div class="login-footer">
          <a href="#" class="forgot-password" @click.prevent="esqueciSenha">Esqueci minha senha</a>
        </div>
      </form>

      <p v-if="error" class="error-msg">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: null
    }
  },
  methods: {
    handleLogin() {
      console.log("Tentando logar com:", this.email)
    },
    esqueciSenha() {
      alert("Recuperação de senha enviada para o e-mail cadastrado!")
    }
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F7FA;
  font-family: Arial, Helvetica, sans-serif;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.logo-login {
  font-size: 24px;
  font-weight: bold;
  color: #1E3A8A;
  margin-bottom: 10px;
}

.login-header p {
  color: #6B7280;
  font-size: 14px;
  margin-bottom: 30px;
}

.input-group {
  text-align: left;
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #1F2937;
}

input {
  width: 100%;
  padding: 12px;
  border: 1.5px solid #D1D5DB;
  border-radius: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

input:focus {
  border-color: #3B82F6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-login {
  width: 100%;
  background: #1E3A8A;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  margin-top: 10px;
}

.btn-login:hover {
  transform: scale(1.05);
  background: #3B82F6;
}

.login-footer {
  margin-top: 20px;
}

.forgot-password {
  color: #3B82F6;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.forgot-password:hover {
  text-decoration: underline;
  color: #1E3A8A;
}

.error-msg {
  color: #EF4444;
  margin-top: 15px;
  font-size: 14px;
}
</style>