<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-header">
        <div class="login-icon">⛑️</div>
        <h2>Sistema de Controle de EPIs</h2>
      </div>

      <form @submit.prevent="fazerLogin" class="login-form">
        <div class="input-group">
          <label><span class="icon">✉️</span> E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" required />
        </div>

        <div class="input-group">
          <label><span class="icon">🔒</span> Senha</label>
          <input type="password" placeholder="Digite sua senha" required />
        </div>

        <button type="submit" class="btn-login">Entrar</button>

        <a href="#" class="forgot-password">Esqueci minha senha</a>
      </form>
      
      <button class="btn-back" @click="$router.push('/')">← Voltar para Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    fazerLogin() {
      console.log("Tentativa de login enviada");
      this.$router.push('/relatorio');
    }
  }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1E3A8A, #3B82F6);
  font-family: Arial, Helvetica, sans-serif;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-header h2 {
  color: #1E3A8A;
  font-size: 22px;
  margin-bottom: 30px;
  border-bottom: 2px solid #F3F4F6;
  padding-bottom: 15px;
}

.login-icon {
  font-size: 50px;
  margin-bottom: 10px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  text-align: left;
}

.input-group label {
  display: block;
  font-weight: bold;
  color: #1E3A8A;
  margin-bottom: 8px;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #D1D5DB;
  border-radius: 25px;
  outline: none;
  transition: 0.3s;
  box-sizing: border-box;
}

.input-group input:focus {
  border-color: #3B82F6;
  box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
}

.btn-login {
  background: #1E3A8A;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
}

.btn-login:hover {
  transform: scale(1.03);
  background: #172554;
}

.forgot-password {
  color: #3B82F6;
  font-size: 13px;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.btn-back {
  background: none;
  border: none;
  color: #9CA3AF;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
}

.btn-back:hover {
  color: #1E3A8A;
}
</style>