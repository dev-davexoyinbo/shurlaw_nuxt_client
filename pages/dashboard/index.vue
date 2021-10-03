<template>
  <div>
    <div>
      <button
        v-show="!editingProfile"
        @click="editingProfile = true"
        style="float: right; border-radius: 20px"
        class="btn btn-primary"
      >
        Edit my profile information
      </button>
      <button
        v-show="editingProfile"
        @click="editingProfile = false"
        style="float: right; border-radius: 20px"
        class="btn btn-primary"
      >
        Cancel profile editing
      </button>
      <br />
      <br />
      <br />
    </div>
    <div class="dashboard-wraper">
      <!-- Basic Information -->
      <form
        ref="form"
        enctype="multipart/form-data"
        @submit.prevent="submit"
        class="form-submit"
      >
        <h4>My Account</h4>
        <div class="submit-section">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Your Name</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.name"
                name="name"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                disabled
                :value="user.email"
              />
            </div>

            <div class="form-group col-md-6">
              <label>Your Title</label>
              <input
                type="text"
                :disabled="!editingProfile"
                class="form-control"
                :value="user.title"
                name="title"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label>Profile Photo</label>
              <input
                :disabled="!editingProfile"
                type="file"
                accept="image/*"
                class="form-control"
                name="profile_photo"
              />
            </div>

            <div class="form-group col-md-6">
              <label>Landline</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.landline"
                name="landline"
              />
            </div>

            <div class="form-group col-md-6">
              <label>Phone</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.phone_number"
                name="phone_number"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label>Facebook</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.facebook"
                name="facebook"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Twitter</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.twitter"
                name="twitter"
              />
            </div>
            <div class="form-group col-md-6">
              <label>LinkedIn</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.linkedin"
                name="linkedin"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Google Plus</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.google_plus"
                name="google_plus"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Instagram</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.instagram"
                name="instagram"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Tumbler</label>
              <input
                :disabled="!editingProfile"
                type="text"
                class="form-control"
                :value="user.tumbler"
                name="tumbler"
              />
            </div>

            <div class="form-group col-md-6">
              <label>Address</label>
              <input
                type="text"
                class="form-control"
                :disabled="!editingProfile"
                :value="user.address"
                name="address"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label>Address 2</label>
              <input
                type="text"
                class="form-control"
                :disabled="!editingProfile"
                :value="user.address_2"
                name="address_2"
              />
            </div>

            <div class="form-group col-md-6">
              <label>City</label>
              <input
                type="text"
                class="form-control"
                :disabled="!editingProfile"
                :value="user.city"
                name="city"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label>State</label>
              <input
                type="text"
                class="form-control"
                :disabled="!editingProfile"
                :value="user.state"
                name="state"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label>Country</label>
              <input
                type="text"
                class="form-control"
                :disabled="!editingProfile"
                :value="user.country"
                name="country"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label>Zip Code</label>
              <input
                type="text"
                class="form-control"
                :disabled="!editingProfile"
                :value="user.zip_code"
                name="zip_code"
                required
              />
            </div>

            <div class="form-group col-md-12">
              <label>About</label>
              <textarea
                class="form-control"
                :disabled="!editingProfile"
                :value="user.about"
                name="about"
                required
              ></textarea>
            </div>
            <span
              class="text-danger m-3"
              v-if="errorMessage && editingProfile"
              >{{ errorMessage }}</span
            >
            <div class="form-group col-md-12">
              <button
                v-if="editingProfile"
                @click="editingProfile = false"
                style="border-radius: 20px"
                class="btn btn-danger mr-2"
              >
                Cancel
              </button>
              <button
                v-show="editingProfile"
                type="submit"
                style="border-radius: 20px"
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DashboardNavbar from "~/components/navbars/DashboardNavbar.vue";
export default {
  middleware: ["auth"],
  layout: "dashboard",
  components: { DashboardNavbar },
  data() {
    return {
      editingProfile: false,
      loading: false,
      errorMessage: "",
    };
  },
  mounted() {},
  methods: {
    submit() {
      event.preventDefault();
      if (!this.editingProfile || this.loading) return;

      const form = this.$refs.form;
      const formData = new FormData(form);

      this.loading = true;
      this.errorMessage = "";

      let editToast = this.$toast.show("Editing profile...");

      this.$axios
        .$post("/users/update-user", formData)
        .then((response) => {
          this.$toast.success("Success").goAway(800);
          this.$auth.fetchUser();
          this.editingProfile = false;
        })
        .catch((err) => {
          try {
            this.errorMessage = err.response.data.message;
          } catch (e) {}
          this.$toast
            .error(`An error occured: ${this.errorMessage}`)
            .goAway(800);
        })
        .finally(() => {
          this.loading = false;
          editToast.goAway(200);
        });
    },
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  watch: {
    $route: function () {
      this.$toast.clear();
    },
  },
};
</script>

<style scoped lang="scss">
input:not([disabled]),
textarea:not([disabled]) {
  background: white !important;
  border-color: rgb(146 146 146 / 50%);
  &:focus {
    outline: 1px solid darkcyan !important;
  }
}
</style>