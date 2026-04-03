<template>
  <div>
    <h2>Registrar Entrega de EPIs</h2>
    <form @submit.prevent="salvarEntrega">
      <select v-model="form.funcionario_id">
        <option v-for="f in funcionarios" :key="f.id" :value="f.id">{{ f.nome }}</option>
      </select>
      <select v-model="form.epis_id">
        <option v-for="e in epis" :key="e.id" :value="e.id">{{ e.nome }}</option>
      </select>
      <input type="date" v-model="form.data_entrega" />
      <input type="date" v-model="form.validade" />
      <input type="number" v-model="form.quantidade" min="1" />
      <label>
        <input type="checkbox" v-model="form.confirmado" /> Entrega Confirmada / assinada
      </label>
      <button type="submit">Registrar Entrega</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useSupabase } from '@/composables/useSupabase'

const { supabase } = useSupabase()
const funcionarios = ref([])
const epis = ref([])
const form = reactive({
  funcionario_id: null,
  epis_id: null,
  data_entrega: '',
  validade: '',
  quantidade: 1,
  confirmado: false
})

onMounted(async () => {
  const { data: funcs } = await supabase.from('funcionarios').select('*')
  funcionarios.value = funcs

  const { data: ep } = await supabase.from('epis').select('*')
  epis.value = ep
})

async function salvarEntrega() {
  await supabase.from('entregas').insert(form)
  // Reset form or navigate
}
</script>