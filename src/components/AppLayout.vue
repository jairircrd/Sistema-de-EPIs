<template>
    <div class="shell">
        <aside class="sidebar">
            <nav>
                <RouterLink to="/funcionarios">Funcionários</RouterLink>
                <RouterLink to="/entregas">Entregas de EPI</RouterLink>
                <RouterLink to="/relatorios">Relatórios</RouterLink>
                <button @click="sair">Sair</button>
            </nav> </aside>
            <main> <RouterView /> </main>
    </div>
</template>

<script setup>
import { useSupabase } from '@/composables/useSupabase'
import { useRouter } from 'vue-router'
const { supabase } = useSupabase();
const router = useRouter();
async function sair() {
    await supabase.auth.signOut();
    router.push('/login');
}
</script>