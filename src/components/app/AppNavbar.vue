<template>
  <nav class="navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row">
    <router-link class="navbar-brand" to="/">Tochelin</router-link>
    <ul class="navbar-nav">
      <router-link class="nav-item nav-link" active-class="active" to="guide">guide</router-link>
      <router-link class="nav-item nav-link" active-class="active" to="films">films</router-link>
      <router-link class="nav-item nav-link" active-class="active" to="actress">actress</router-link>
      <router-link class="nav-item nav-link" active-class="active" to="about">about</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>
