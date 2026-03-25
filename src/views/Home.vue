<template>
    <div class="home">
        <header class="header">
            <div class="logo">Sistema de EPI</div>
            <nav class="menu">
                <button class="btn-sistema" @click="irLogin">Área do Sistema</button>
            </nav>
        </header>

        <section class="hero">
            <div class="hero-container">
                <div class="hero-text">
                    <h1>Controle de EPIs de forma simples e segura</h1>
                    <p>
                        Sistema desenvolvido para gerenciamento de Equipamentos de Proteção Individual, facilitando o controle de estoque, entrega e histórico.
                    </p>
                    <div class="hero-buttons">
                        <button class="btn-primary" @click="irLogin">Acessar Sistema</button>
                        <button class="btn-secondary" @click="irFuncionalidades">Ver Funcionalidades</button>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="../assets/hero-security.png" alt="Segurança" />
                </div>
            </div>
        </section>

        <section class="features">
            <h2>Funcionalidades do Sistema</h2>
            <div class="cards">
                <div class="card">
                    <div class="icon-bg blue">👤</div>
                    <h3>Funcionários</h3>
                    <p>Cadastro e controle de colaboradores.</p>
                </div>
                <div class="card">
                    <div class="icon-bg orange">⛑️</div>
                    <h3>EPIs</h3>
                    <p>Gerenciamento de estoques de equipamentos.</p>
                </div>
                <div class="card">
                    <div class="icon-bg light-blue">📦</div>
                    <h3>Entregas</h3>
                    <p>Registro de entrega de EPIs.</p>
                </div>
                <div class="card">
                    <div class="icon-bg dark-blue">📊</div>
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
            <div>Sistema de Controle de EPIs</div>
            <div>Projeto Acadêmico</div>
            <div>Contato: contato@sistemaepi.com</div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        irLogin() { this.$router.push('/login') },
        irFuncionalidades() {
            const section = document.querySelector('.features')
            if (section) { section.scrollIntoView({ behavior: 'smooth' }) }
        },
    }
}
</script>

<style scoped>
.home {
    font-family: Arial, Helvetica, sans-serif;
    background:#F5F7FA;
    color: #1F2937;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    background:#1E3A8A;
    color: white;
}

.logo {
    font-size: 22px;
    font-weight: bold;
}

.btn-sistema {
    background:#3B82F6;
    color:white;
    border:none;
    padding:10px 18px;
    border-radius:8px;
    cursor:pointer;
    transition:0.3s;
}

.btn-sistema:hover {
    transform:scale(1.05);
    background:#2563EB;
}

.hero {
    background:linear-gradient(135deg, #1E3A8A, #3B82F6);
    color:white;
    padding:100px 60px;
}

.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.hero-text {
    max-width:600px;
}

.hero h1 {
    font-size:42px;
    margin-bottom:20px;
}

.hero p {
    font-size:18px;
    line-height:1.5;
}

.hero-buttons {
    margin-top:25px;
    display:flex;
    gap:20px;
}

.hero-image img {
    max-width: 450px;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
}

.btn-primary {
    background:white;
    color:#1E3A8A;
    border:none;
    padding:12px 22px;
    border-radius:8px;
    cursor:pointer;
    font-weight:bold;
    transition:0.3s;
}

.btn-primary:hover {
    transform:scale(1.05);
    background:#E5E7EB;
}

.btn-secondary {
    background:transparent;
    color:white;
    border:2px solid white;
    padding:12px 22px;
    border-radius:8px;
    cursor:pointer;
    transition:0.3s;
}

.btn-secondary:hover {
    transform:scale(1.05);
    background:rgba(255,255,255,0.1);
}

.features {
    padding:80px 60px;
    text-align:center;
}

.features h2 {
    font-size:30px;
}

.cards {
    display:flex;
    gap:30px;
    justify-content:center;
    margin-top:40px;
    flex-wrap:wrap;
}

.card {
    background:white;
    padding:30px;
    border-radius:12px;
    box-shadow:0 4px 12px rgba(0,0,0,0.1);
    width:220px;
    transition:0.3s;
}

.card:hover {
    transform:translateY(-5px);
}

.icon-bg {
    width: 60px; height: 60px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 15px;
    font-size: 24px;
}
.icon-bg.blue { background: #DBEAFE; }
.icon-bg.orange { background: #FFEDD5; }
.icon-bg.light-blue { background: #E0F2FE; }
.icon-bg.dark-blue { background: #E0E7FF; }

.fluxo {
    padding: 80px 60px;
    text-align: center;
}

.steps {
    display:flex;
    gap:15px;
    align-items:center;
    flex-direction:column;
    margin-top:30px;
}

.step {
    background:white;
    padding:15px 25px;
    border-radius:10px;
    box-shadow:0 3px 10px rgba(0,0,0,0.1);
    width: 280px;
}

.arrow {
    font-size:28px;
    color:#1E3A8A;
}

.footer {
    background:#1E3A8A;
    color:white;
    padding:30px;
    display:flex;
    justify-content:space-around;
    margin-top:60px;
    flex-wrap:wrap;
    gap:10px;
}

@media(max-width:768px) {
    .hero-container { flex-direction: column; text-align: center; }
    .hero-image img { max-width: 100%; margin-top: 30px; }
    .header, .footer { flex-direction:column; gap:15px; text-align:center; }
    .hero-buttons { flex-direction:column; }
    .cards { flex-direction:column; align-items:center; }
}
</style>
