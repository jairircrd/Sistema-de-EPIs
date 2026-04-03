<template>
    <div class="home">
        <header class="header">
            <div class="logo">Sistema de EPIs</div>
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
            <div class="footer-col">
                <strong>Sistema de EPIs</strong>
                <p>Gestão Inteligente de Segurança</p>
            </div>
            <div class="footer-col">
                <strong>Projeto</strong>
                <p>Acadêmico 2024</p>
            </div>
            <div class="footer-col">
                <strong>Contato</strong>
                <p>contato@sistemaepi.com</p>
            </div>
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
.home { font-family: Arial, Helvetica, sans-serif; background:#F5F7FA; color: #1F2937; }
.header { display: flex; justify-content: space-between; align-items: center; padding: 20px 60px; background:#1E3A8A; color: white; }

.btn-sistema, .btn-primary, .btn-secondary {
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.btn-sistema:hover, .btn-primary:hover, .btn-secondary:hover {
    transform: scale(1.08);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-sistema { background:#3B82F6; color:white; border:none; padding:10px 18px; border-radius:8px; }
.btn-primary { background:white; color:#1E3A8A; border:none; padding:12px 22px; border-radius:8px; font-weight:bold; }
.btn-secondary { background:transparent; color:white; border:2px solid white; padding:12px 22px; border-radius:8px; }

.hero { background:linear-gradient(135deg, #1E3A8A, #3B82F6); color:white; padding:100px 60px; }
.hero-image img { 
    max-width: 350px; 
    height: auto; 
    transition: transform 0.5s ease;
}
.hero-image img:hover {
    transform: translateY(-15px) rotate(2deg);
}

.card { 
    background:white; 
    padding:30px; 
    border-radius:12px; 
    box-shadow:0 4px 12px rgba(0,0,0,0.1); 
    width:220px; 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.hero-container { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; gap: 20px; }
.icon-bg { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 24px; }
.icon-bg.blue { background: #DBEAFE; }

.footer { background: #1E3A8A; color: white; padding: 50px 60px; display: flex; justify-content: space-around; border-top: 5px solid #3B82F6; }
</style>