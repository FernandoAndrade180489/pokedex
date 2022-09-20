<template>
  <div>
    <p>Identificador: {{ pokemon.id }}</p>
    <p>Nome: {{ pokemon.nome }}</p>
    <p>Tipo: {{ pokemon.tipo }}</p>
  </div>
</template>

<script>
export default {
  name: "SobreView",
  props: {
    pokemon: Object,
  },
};
</script>