<template>
  <div class="dashboard-navbar">
    <div class="d-user-avater">
      <img :src="profilePhoto" class="img-fluid avater" alt="" />
      <h4>{{ user.name }}</h4>
      <span>{{ `${user.state}, ${user.country}` }}</span>
    </div>

    <div class="d-navigation">
      <ul>
        <li class="active">
          <nuxt-link to="/dashboard"
            ><i class="ti-user"></i>My Profile</nuxt-link
          >
        </li>
        <li>
          <a href="bookmark-list.html"><i class="ti-bookmark"></i>All Agents</a>
        </li>
        <li>
          <a href="my-property.html"><i class="ti-layers"></i>My Listings</a>
        </li>
        <li>
          <a href="submit-property-dashboard.html"
            ><i class="ti-pencil-alt"></i>Add New Property</a
          >
        </li>
        <li>
          <a href="change-password.html"
            ><i class="ti-unlock"></i>Change Password</a
          >
        </li>
        <li>
          <a href="#"><i class="ti-power-off"></i>Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // debugger;
  },
  computed: {
    profilePhoto() {
      return (
        this.$config.baseUrl.replace(/\/$/, "") +
        "/" +
        this.$auth.user.profile_photo.replace(/^\//, "")
      );
    },
    user() {
      return this.$auth.user;
    },
  },
};
</script>

<style>
</style>