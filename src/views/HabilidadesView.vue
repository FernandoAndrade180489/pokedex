<template>
  <div>
    <div v-if="!pokemon.habilidades">Selecione um Pokémon</div>
    <div v-else>
      <table class="table text-white">
        <tbody>
          <transition-group name="lista">
            <tr v-for="(h, index) in pokemon.habilidades" :key="h">
              <td>{{ h }}</td>
              <td class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  @click="$emit('removerHabilidade', index)"
                >
                  x
                </button>
              </td>
            </tr>
          </transition-group>
        </tbody>
      </table>
      <input
        type="text"
        class="form-control"
        placeholder="Adicionar habilidade"
        v-model="habilidade"
        @keyup.enter="adicionarHabilidade"
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
  data: () => ({
    habilidade: "",
  }),
  methods: {
    adicionarHabilidade() {
      this.$emit("adicionarHabilidade", this.habilidade);
      this.habilidade = "";
    },
  },
};
</script>

<style scoped>
.table td {
  border: none;
}
</style>