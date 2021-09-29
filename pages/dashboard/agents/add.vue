<template>
  <div>
    <div class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h2 class="ipt-title">Add Agent Under ABC Agency</h2>
            <span class="ipn-subtitle">Add Agent Under ABC Agency</span>
          </div>
        </div>
      </div>
    </div>
    <!-- ============================ Page Title End ================================== -->

    <!-- ============================ Submit Property Start ================================== -->
    <section>
      <div class="container">
        <div class="row">
          <!-- Submit Form -->
          <div class="col-lg-12 col-md-12">
            <form ref="form" @submit.prevent="submit" class="submit-page">
              <!-- Gallery -->
              <!-- <div class="form-submit middle-logo">	
									<h3>Profile Logo</h3>
									<div class="submit-section">
										<div class="form-row">
										
											<div class="form-group col-md-12">
												<form action="https://themezhub.net/upload-target" class="dropzone profile-logo dz-clickable primary-dropzone">
													<div class="dz-default dz-message">
														<i class="ti-gallery"></i>
													</div>
												</form>
											</div>
											
										</div>
									</div>
								</div> -->

              <!-- Basic Information -->
              <div class="form-submit">
                <h3>Basic Information</h3>
                <div class="submit-section">
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label
                        >Full Name<a
                          href="#"
                          class="tip-topdata"
                          data-tip="Property Title"
                          ><i class="ti-help"></i></a
                      ></label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        name="name"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Profile Photo</label>
                      <input
                        required
                        type="file"
                        accept="image/*"
                        class="form-control"
                        name="profile_photo"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Designation/Title</label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        name="title"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Phone</label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        name="phone_number"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Email</label>
                      <input
                        required
                        type="email"
                        class="form-control"
                        name="email"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Landline</label>
                      <input type="text" class="form-control" name="landline" />
                    </div>

                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea
                        required
                        class="form-control h-120"
                        name="about"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="form-submit">
                <h3>Location</h3>
                <div class="submit-section">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Address</label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        name="address"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Address 2</label>
                      <input
                        type="text"
                        class="form-control"
                        name="address_2"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Country</label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        name="country"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>State</label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        name="state"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>City</label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        name="city"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Zip Code</label>
                      <input
                        required
                        type="text"
                        class="form-control"
                        name="zip_code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contact Information -->
              <div class="form-submit">
                <h3>Social Accounts</h3>
                <div class="submit-section">
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label>Facebook</label>
                      <input type="text" class="form-control" name="facebook" />
                    </div>

                    <div class="form-group col-md-4">
                      <label>Twitter</label>
                      <input type="text" class="form-control" name="twitter" />
                    </div>

                    <div class="form-group col-md-4">
                      <label>Linkedin</label>
                      <input type="text" class="form-control" name="linkedin" />
                    </div>

                    <div class="form-group col-md-4">
                      <label>Google Plus</label>
                      <input
                        type="text"
                        class="form-control"
                        name="google_plus"
                      />
                    </div>

                    <div class="form-group col-md-4">
                      <label>Instagram</label>
                      <input
                        type="text"
                        class="form-control"
                        name="instagram"
                      />
                    </div>

                    <div class="form-group col-md-4">
                      <label>Tumbler</label>
                      <input type="text" class="form-control" name="tumbler" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Password Information -->
              <div class="form-submit">
                <h3>Password Information</h3>
                <div class="submit-section">
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label>Password</label>
                      <input
                        type="password"
                        required
                        class="form-control"
                        name="password"
                        v-model="password"
                      />
                    </div>

                    <div class="form-group col-md-4">
                      <label>Password Confirmation</label>
                      <input
                        type="password"
                        required
                        class="form-control"
                        v-model="passwordConfirmation"
                      />
                      <small
                        class="text-danger"
                        v-if="password && password != passwordConfirmation"
                        >Passwords do not match.</small
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group col-lg-12 col-md-12">
                <label>GDPR Agreement *</label>
                <ul class="no-ul-list">
                  <li>
                    <input
                      required
                      id="aj-1"
                      class="checkbox-custom"
                      name="aj-1"
                      type="checkbox"
                    />
                    <label for="aj-1" class="checkbox-custom-label"
                      >I consent to having this website store my submitted
                      information so they can respond to my inquiry.</label
                    >
                  </li>
                </ul>
              </div>

              <input type="text" hidden name="_role" value="AGENT" />
              <div class="form-group">
                <p v-if="errorMessage" class="text-danger">
                  {{ errorMessage }}
                </p>
              </div>
              <div class="form-group col-lg-12 col-md-12">
                <button class="btn btn-theme" type="submit">
                  Submit & Preview
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  //   layout: "dashboard",
  data() {
    return {
      errorMessage: "",
      loading: false,
      password: "",
      passwordConfirmation: "",
    };
  },
  methods: {
    submit() {
      event.preventDefault();

      if (this.loading && false) return;
      this.loading = true;
      this.errorMessage = "";

      const form = this.$refs.form;

      const formData = new FormData(form);

      this.$axios
        .$post("/auth/register", formData)
        .then((response) => {
          this.$nuxt.$router.push(`/dashboard/agents`);
        })
        .catch((e) => {
          try {
            this.errorMessage = e.response.data.message;
          } catch (err) {
            this.errorMessage = "An error occurred";
          }
        })
        .finally(() => {
          this.loading = true;
        });
    }, // end method submit
  },
};
</script>
