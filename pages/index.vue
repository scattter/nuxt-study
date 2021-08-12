<template>
  <section>
    <h2>this is a demo</h2>
    <span>{{ nodeData }}</span>
    <h3>footer</h3>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { getData } from "~/service/index.api";

export default Vue.extend({
  layout: 'blog',
  data() {
    return {
      nodeData: ''
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.nodeData = await getData(this.$axios);
    }
  }
})
</script>
