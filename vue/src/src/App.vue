<template>
  <div id="app">
    <div class="headtitle"><h2>SSAFY 글적어버리기</h2></div>
    <div class="search_box">
      <nav>
        <router-link class="btn btn-primary" to="/">모든 글 보기</router-link>
        |
        <router-link class="btn btn-primary" to="/insert"
          >글 등록하기
        </router-link>
        |
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
