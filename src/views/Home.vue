<template>

<div class="home">

<header class="header">

<div class="logo">
EPI System
</div>

<nav class="menu">
<a>Home</a>
<a>Sobre</a>
<a>Funcionalidades</a>
<a>Contato</a>

<button class="btn-sistema" @click="irSistema">
Área do Sistema
</button>

</nav>

</header>


<section class="hero">

<div class="hero-text">

<h1>Controle de EPIs de forma simples e segura</h1>

<p>
Sistema desenvolvido para gerenciamento de Equipamentos de Proteção Individual,
facilitando controle de estoque, entrega e histórico.
</p>

<div class="hero-buttons">

<button class="btn-primary" @click="irSistema">
Acessar Sistema
</button>

<button class="btn-secondary">
Ver Funcionalidades
</button>

</div>

</div>

</section>


<section class="features">

<h2>Funcionalidades do Sistema</h2>

<div class="cards">

<div class="card">
<h3>Funcionários</h3>
<p>Cadastro e controle de colaboradores.</p>
</div>

<div class="card">
<h3>EPIs</h3>
<p>Gerenciamento de estoque de equipamentos.</p>
</div>

<div class="card">
<h3>Entregas</h3>
<p>Registro de entrega de EPIs.</p>
</div>

<div class="card">
<h3>Histórico</h3>
<p>Acompanhamento completo das movimentações.</p>
</div>

</div>

</section>


<section class="fluxo">

<h2>Como Funciona o Sistema</h2>

<div class="steps">

<div class="step">Cadastro do Funcionário</div>
<div class="arrow">↓</div>

<div class="step">Cadastro do EPI</div>
<div class="arrow">↓</div>

<div class="step">Entrega do Equipamento</div>
<div class="arrow">↓</div>

<div class="step">Registro no Histórico</div>

</div>

</section>


<footer class="footer">

<div>
Sistema de Controle de EPIs
</div>

<div>
Projeto Acadêmico
</div>

<div>
Contato: contato@episystem.com
</div>

</footer>

</div>

</template>

<script>

export default {

name: "Home",

methods:{

irSistema(){

this.$router.push('/dashboard')

}

}

}

</script>

<style scoped>

.home{
font-family: Arial;
background:#F5F7FA;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 60px;
background:#1E3A8A;
color:white;
}

.menu{
display:flex;
gap:30px;
align-items:center;
}

.menu a{
cursor:pointer;
}

.btn-sistema{
background:#3B82F6;
border:none;
padding:10px 16px;
border-radius:8px;
color:white;
cursor:pointer;
}

.hero{
background:linear-gradient(135deg,#1E3A8A,#3B82F6);
color:white;
padding:100px 60px;
}

.hero-text{
max-width:600px;
}

.hero h1{
font-size:42px;
margin-bottom:20px;
}

.hero-buttons{
margin-top:20px;
display:flex;
gap:20px;
}

.btn-primary{
background:white;
color:#1E3A8A;
border:none;
padding:12px 20px;
border-radius:8px;
cursor:pointer;
}

.btn-secondary{
background:transparent;
border:2px solid white;
color:white;
padding:12px 20px;
border-radius:8px;
cursor:pointer;
}

.features{
padding:80px 60px;
text-align:center;
}

.cards{
display:flex;
justify-content:center;
gap:30px;
margin-top:40px;
}

.card{
background:white;
padding:30px;
width:220px;
border-radius:10px;
box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.fluxo{
padding:80px 60px;
text-align:center;
}

.steps{
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
}

.step{
background:white;
padding:15px 25px;
border-radius:8px;
box-shadow:0 3px 8px rgba(0,0,0,0.1);
}

.arrow{
font-size:30px;
}

.footer{
background:#1E3A8A;
color:white;
padding:30px;
display:flex;
justify-content:space-around;
margin-top:60px;
}

</style>
