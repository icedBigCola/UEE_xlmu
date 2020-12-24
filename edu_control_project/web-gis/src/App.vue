<template>
<div id="app">
    <router-view />
    <!-- <el-container>
      <el-header id="common-header">
        <common-header>
        </common-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div> -->
</div>
</template>

<script>
// import CommonHeader from '@/views/CommonHeader.vue'

export default {
    data() {
        return {};
    },
    mounted() {},
    components: {
        // CommonHeader,
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    // background: #398144;
    width: 100%;
    height: 100vh;
}

.searchCom {
    background: #f2f2f2;
}
</style>
