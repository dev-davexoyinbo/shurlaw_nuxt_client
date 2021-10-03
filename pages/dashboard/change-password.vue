<template>
  <div class="">
    <div class="dashboard-wraper">
      <!-- Basic Information -->
      <form @submit.prevent="submit" ref="form" class="form-submit">
        <h4>Change Your Password</h4>
        <div class="submit-section">
          <div class="form-row">
            <div class="form-group col-lg-12 col-md-6">
              <label>Old Password</label>
              <input type="password" class="form-control" name="password" required/>
            </div>

            <div class="form-group col-md-6">
              <label>New Password</label>
              <input type="password" class="form-control" name="new_password" minlength="8" required v-model="newPassword" />
            </div>

            <div class="form-group col-md-6">
              <label>Confirm password</label>
              <input type="password" class="form-control" name="new_password_confirmation" v-model="newPasswordConfirmed" minlength="8" required />
              <span class="text-danger" v-if="newPassword && (newPassword != newPasswordConfirmed)">Passwords don't match</span>
            </div>

            <div class="form-group col-lg-12 col-md-12">
              <button class="btn btn-theme" type="submit" :disabled="loading">Save Changes</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      newPassword: "",
      newPasswordConfirmed: "",
      loading: false,
    }
  },
  methods: {
    submit() {
      event.preventDefault()

      if(this.loading) return

      const form = this.$refs.form
      const formData = new FormData(form)

      const editToast = this.$toast.show("Changing password...")
      this.loading = true
      this.$axios.$post("/auth/change-password", formData)
      .then((response) => {
        this.$toast.success(response.message).goAway(800)
        form.reset()
        this.newPassword = ""
        this.newPasswordConfirmed = ""
      })
      .catch((err) => {
        try{
          this.$toast.error(err.response.data.message).goAway(2500)
        }catch(e) {
          this.$toast.error("An error occurred while updating password").goAway(2500)
        }
      })
      .finally(() => {
        editToast.goAway(200)
        this.loading = false
      })
    },
  }
};
</script>

<style scoped>
button:disabled {
  cursor: progress;
  background: darkgray !important;
  border: none !important;
  outline: none !important;

}
</style>