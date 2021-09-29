<template>
  <div>

    <div>
      <button style="float: right; border-radius: 20px" class="btn btn-primary">
        Edit my profile information
      </button>
      <br />
      <br />
      <br />
    </div>
    <div class="dashboard-wraper">
      <!-- Basic Information -->
      <div class="form-submit">
        <h4>My Account</h4>
        <div class="submit-section">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Your Name</label>
              <input type="text" class="form-control" value="Shaurya Preet" />
            </div>

            <div class="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                value="preet77@gmail.com"
              />
            </div>

            <div class="form-group col-md-6">
              <label>Your Title</label>
              <input type="text" class="form-control" value="Web Designer" />
            </div>

            <div class="form-group col-md-6">
              <label>Phone</label>
              <input type="text" class="form-control" value="123 456 5847" />
            </div>

            <div class="form-group col-md-6">
              <label>Address</label>
              <input
                type="text"
                class="form-control"
                value="522, Arizona, Canada"
              />
            </div>

            <div class="form-group col-md-6">
              <label>City</label>
              <input type="text" class="form-control" value="Montquebe" />
            </div>

            <div class="form-group col-md-6">
              <label>State</label>
              <input type="text" class="form-control" value="Canada" />
            </div>

            <div class="form-group col-md-6">
              <label>Zip</label>
              <input type="text" class="form-control" value="160052" />
            </div>

            <div class="form-group col-md-12">
              <label>About</label>
              <textarea class="form-control">
Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNavbar from "~/components/navbars/DashboardNavbar.vue";
export default {
  middleware: ["auth"],
  layout: "dashboard",
  components: { DashboardNavbar },
  mounted() {},
};
</script>

<style>
</style>