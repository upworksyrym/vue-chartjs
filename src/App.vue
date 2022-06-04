<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-6">
        <h1>Where Are We Going to Land?</h1>
      </div>
      <div class="col-3">
        <span class="mx-1 badge rounded-pill bg-info">CERTAIN</span>
        <span class="mx-1 badge rounded-pill bg-warning text-black">EXPECTED</span>
        <span class="mx-1 badge rounded-pill bg-danger">UNLIKELY</span>
      </div>
      <div class="col-3">
        <div class="btn-group border border-dark border-3 float-end" role="group" aria-label="Basic example">
          <router-link to="/">
            <button type="button" class="btn btn-info">Sales</button>
          </router-link>
          <router-link to="/pres">
            <button type="button" class="btn btn-white">Prospecting</button>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
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
