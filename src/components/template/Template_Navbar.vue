<script>
export default {
  name: "Template_Navbar"
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link :to="{name:'index'}">
        <a class="navbar-brand" href="#">خبر</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name:'index'}">
              <a class="nav-link active" aria-current="page" href="#">خانه</a>
            </router-link>

          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              دسته بندی ها
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'login'}">
              <a class="nav-link" aria-current="page" href="#">ورود به حساب</a>
            </router-link>

          </li>
          <li class="nav-item">
            <router-link :to="{name:'register'}">
              <a class="nav-link" aria-current="page" href="#">ایجاد حساب</a>
            </router-link>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder=" ... " aria-label="Search">
          <button class="btn btn-outline-success" type="submit">جستجو</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>