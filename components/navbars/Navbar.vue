<template>
  <div class="header header-light head-shadow">
    <div class="container">
      <nav id="navigation" class="navigation navigation-landscape">
        <div class="nav-header">
          <a class="nav-brand" href="#" @click.prevent="gotoPage(`/`)">
            <img src="~/assets/img/spl.png" width="50%" class="logo" alt="" />
          </a>
          <div class="nav-toggle"></div>
        </div>
        <div class="nav-menus-wrapper" style="transition-property: none">
          <ul class="nav-menu">
            <li v-if="$auth.loggedIn">
              <nuxt-link to="/dashboard"
                >Dashboard<span class="submenu-indicator"></span
              ></nuxt-link>
            </li>
            <li>
              <nuxt-link to="/"
                >Home<span class="submenu-indicator"></span
              ></nuxt-link>
            </li>
            <li><nuxt-link to="/about">About us</nuxt-link></li>
            <li><nuxt-link to="/listings">Listings</nuxt-link></li>
            
            <li>
              <nuxt-link to="/contact">Contact us</nuxt-link>
              <span class="submenu-indicator"></span>
            </li>
          </ul>

          <ul class="nav-menu nav-menu-social align-to-right">
            <li v-if="!$auth.loggedIn">
              <a href="#" data-toggle="modal" data-target="#login">
                <i class="fas fa-user-circle mr-1"></i>Login</a
              >
            </li>
            <li class="add-listing theme-bg" v-if="$auth.loggedIn">
              <nuxt-link to="/dashboard/create-property">Add Property</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoPage(path) {
      this.$nuxt.$router.push(path)
    }
  }
};
</script>

<style>
</style>