<template>
  <div class="dashboard-navbar">
    <div class="d-user-avater">
      <img :src="profilePhoto" class="img-fluid avater" alt="" />
      <h4>{{ user.name }}</h4>
      <span>{{ `${user.state}, ${user.country}` }}</span>
    </div>

    <div class="d-navigation">
      <ul>
        <li :class="{ active: $nuxt.$route.fullPath == '/dashboard' }">
          <nuxt-link to="/dashboard"
            ><i class="ti-user"></i>My Profile</nuxt-link
          >
        </li>
        <li
          v-show="
            $auth.loggedIn &&
            $auth.user &&
            $auth.user.permissions.some(el => el == `agents_view`)
          "
          :class="{
            active: $nuxt.$route.fullPath.startsWith('/dashboard/agents'),
          }"
        >
          <nuxt-link to="/dashboard/agents"
            ><i class="ti-bookmark"></i>All Agents</nuxt-link
          >
        </li>
        <li
          :class="{
            active: $nuxt.$route.fullPath.startsWith(
              '/dashboard/my-properties'
            ),
          }"
        >
          <nuxt-link to="/dashboard/my-properties"
            ><i class="ti-layers"></i>My Listings</nuxt-link
          >
        </li>
        <li
          :class="{
            active: $nuxt.$route.fullPath.startsWith(
              '/dashboard/create-property'
            ),
          }"
        >
          <nuxt-link to="/dashboard/create-property"
            ><i class="ti-pencil-alt"></i>Add New Property</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/dashboard/change-password"
            ><i class="ti-unlock"></i>Change Password</nuxt-link
          >
        </li>
        <li>
          <a href="#" @click.prevent="logout"
            ><i class="ti-power-off"></i>Log Out</a
          >
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
  methods: {
    logout() {
      event.preventDefault();
      this.$auth.logout().then(() => {
        this.$nuxt.$router.push("/");
      });
    },
  },
  computed: {
    profilePhoto() {
      return (
        process.env.baseUrl.replace(/\/$/, "") +
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