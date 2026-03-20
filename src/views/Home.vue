<template>
    <div class="home">
        <header class="header">
        <div> class="logo">
            Sistema de EPI
        </div>
        <nav class="menu">
            <a>Home</a>
            <a>Sobre</a>
            <a>Funcionalidades</a>
            <a>Contato</a>

            <button class="btn-sistema"
            @click="irSistema"
            >Área do Sistema
        </button>
        </nav>
        </header>

        <section class="hero">
            <div class="hero-text">
                <h1>Controle de EPIs de forma simples e segura</h1>
        <p>
            Sistema desenvolvido para gerenciamento de Equipamentos deProteção Individual, facilitando o controle de estoque, entrega e histórico.
        </p>
        <div class="hero-buttons">
            <button class="btn-primary"
        @click="irSistema">
        Acessar Sistema
    </button>
    <button class="btn-secondary" @click="irFuncionalidades">
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
                        <p>Gerenciamento de estoques de equipamentos.</p>
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
                    <div class="arrow"></div>

                    <div class="step">Cadastro do EPI</div>
                    <div class="arrow"></div>

                    <div class="step">Entrega do Equipamento</div>
                    <div class="arrow"></div>

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
    name: 'Home',
    data() {
        return {
            // você pode usar isso depois se quiser adicionar interações
            mensagem: "Bem-vindo ao Sistema de Controle de EPIs"
        }
    },
    methods: {
        // Vai para o dashboard
        irSistema() {
            this.$router.push('/dashboard')
        },

        // Scroll até funcionalidades (botão "Ver Funcionalidades")
        irFuncionalidades() {
            const section = document.querySelector('.features')
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        },

        // Exemplo de navegação futura
        irSobre() {
            this.$router.push('/sobre')
        },

        irContato() {
            this.$router.push('/contato')
        }
},

mounted() {

    // Aqui roda quando a página carrega
    console.log("Página Home carregada com sucesso")
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

.menu {
    display:flex;
    gap:30px;
    align-items: center;
}

.menu a {
    cursor:pointer;
    transition:0.3s;
}

.menu a:hover {
    opacity:0.7);
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
    margin-top:25px
    display:flex;
    gap:20px;
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

.card h3 {
    margin-bottom:10px;
}

.fluxo {
    padding:80px 60px;
    text-align:center;
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
    .header {
        flex-direction:column;
        gap:15px;
        text-align:center;
    }

    .menu {
        flex-direction:column;
        gap:10px;
    }

    .hero {
        padding:60px 20px;
        text-align:center;
    }

    .hero h1 {
        font-size:28px;
    }

    .hero-buttons {
        flex-directtion:column;
    }

    .cards {
        flex-direction:column;
        align-items:center;
    }

    .footer {
        flex-direction:column;
        text-align:center;
    }
}
</style>
