<template>
    <div>
        <button @click="abrirNovo">+ Novo Funcionário</button>

        <table>
            <tr v-for="f in funcionarios" :key="f.id">
                <td>{{ f.nome }}</td>
                <td>{{ f.cpf }}</td>
                <td>{{ f.cargo }}</td>
                <td><button @click="editar(f)">Editar</button></td>
                <td><button @click="excluir(f.id)">Excluir</button></td>
            </tr>
        </table>
        <div v-if="modalAberto" class="overlay">
            <h3>{{ form.id ? 'Editar' : 'Novo' }} Funcionário</h3>
            <form @submit.prevent="salvar">
                <input v-model="form.nome" placeholder="Nome" required />
                <input v-model="form.cpf" placeholder="CPF" required />
                <input v-model="form.cargo" placeholder="Cargo" required />
                <button type="submit">Salvar</button>
                <button @click="fecharModal">Cancelar</button>
            </form> </div> </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useSupabase } from '@/composables/useSupabase'

const { supabase } = useSupabase()
const funcionarios = ref([])
const modalAberto = ref(false)
const form = reactive({ id: null, nome: '', cpf: '', cargo: '' })

onMounted(async () => {
    const { data } = await supabase.from('funcionarios').select('*')
    funcionarios.value = data
})

async function salvar() {
    if (form.id) {
        await supabase.from('funcionarios').update(form).eq('id', form.id)
    } else {
        await supabase.from('funcionarios').insert(form)
    }
    carregarLista()
    fecharModal()
}

async function excluir(id) {
    if (!confirm('Confirma exclusão?')) return
    await supabase.from('funcionarios').delete().eq('id', id)
    funcionarios.value = funcionarios.value.filter(f => f.id !== id)
}

function abrirNovo() {
    form.id = null
    form.nome = ''
    form.cpf = ''
    form.cargo = ''
    modalAberto.value = true
}

function editar(f) {
    form.id = f.id
    form.nome = f.nome
    form.cpf = f.cpf
    form.cargo = f.cargo
    modalAberto.value = true
}

function fecharModal() {
    modalAberto.value = false
}

async function carregarLista() {
    const { data } = await supabase.from('funcionarios').select('*')
    funcionarios.value = data
}
</script>
