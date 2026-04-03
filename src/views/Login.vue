<template>
  <div class="container">
  <h2>Entrar na sua conta</h2>
  
  <form @submit.prevent="fazerLogin">
  <div class="campo">
  <label>E-mail</label>
  <input type="email" v-model="email" required /> </div>
  <div class="campo">
  <label>Senha</label>
  <input type="password" v-model="senha" required /> </div>
  <p v-if="erro">{{ erro }}</p>
  <button type="submit">Entrar</button>
  </form> </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSupabase } from '@/composables/useSupabase'
import { useRouter } from 'vue-router'

const { supabase } = useSupabase();
const router = useRouter();

const email = ref('');
const senha = ref('');
const erro = ref('');
async function fazerLogin() {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: senha.value
  })

  if (error) {
    erro.value = 'Credenciais inválidas'
    return
  }

  router.push('/dashboard')
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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