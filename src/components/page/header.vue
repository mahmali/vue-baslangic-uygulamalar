<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link
          to="/">
          <a class="navbar-brand">Beginning</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link
              active-class="active"
              to="/singin"
              tag="li">
              <a class="nav-link active" aria-current="page">Singin</a>
            </router-link>
            <router-link
              active-class="active"
              to="/worksheet"
              tag="li">
              <a class="nav-link active" aria-current="page">Worksheet</a>
            </router-link>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home-Page</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>

</style>
