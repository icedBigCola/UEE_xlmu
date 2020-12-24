<template>
  <div class="searchCom">
    河流一
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created(){
    this.getTownInfo();
  },
  components: {
  },
  methods: {
    getTownInfo() {
      this.$axios.get("/river_day/all_river_day").then(res => {
        let result = res.data;
        console.log(result);
        // this.tableData = result.data;
      });
    }
  },
};
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>