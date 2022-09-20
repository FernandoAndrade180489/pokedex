<template>
  <div>
    <div v-if="!pokemon.habilidades">Selecione um Pokémon</div>
    <div v-else>
      <table class="table text-white">
        <tbody>
          <tr v-for="(h, index) in pokemon.habilidades" :key="index">
            <td>{{ h }}</td>
            <td class="d-flex justify-content-end">
              <button type="button" class="btn btn-danger btn-sm">x</button>
            </td>
          </tr>
        </tbody>
      </table>
      <input
        type="text"
        class="form-control"
        placeholder="Adicionar habilidade"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HabilidadesView",
  props: {
    pokemon: Object,
  },
};
</script>

<style scoped>
.table td {
  border: none;
}
</style>