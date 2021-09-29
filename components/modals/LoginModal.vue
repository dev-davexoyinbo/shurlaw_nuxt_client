<template>
  <div
    class="modal fade"
    id="login"
    tabindex="-1"
    role="dialog"
    aria-labelledby="registermodal"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered login-pop-form"
      role="document"
    >
      <div class="modal-content" id="registermodal">
        <span class="mod-close" data-dismiss="modal" aria-hidden="true"
          ><i class="ti-close"></i
        ></span>
        <div class="modal-body">
          <h4 class="modal-header-title">Log In</h4>
          <div class="login-form">
            <form @submit.prevent="login">
              <div class="form-group">
                <label>User Name</label>
                <div class="input-with-icon">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    ref="emailInput"
                    required
                  />
                  <i class="ti-user"></i>
                </div>
              </div>

              <div class="form-group">
                <label>Password</label>
                <div class="input-with-icon">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="*******"
                    ref="passwordInput"
                    required
                  />
                  <i class="ti-unlock"></i>
                </div>
              </div>

              <small class="text-danger text-center">{{ errorMessage }}</small>

              <div class="form-group">
                <button
                  @click.prevent="login"
                  type="submit"
                  class="btn btn-md full-width pop-login"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <!-- <div class="text-center">
								<p class="mt-5"><a href="#" class="link">Forgot password?</a></p>
							</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    login() {
      event?.preventDefault();
      event?.stopPropagation();

      const email = this.$refs.emailInput.value;
      const password = this.$refs.passwordInput.value;

      // try {
      // this.$toast.show("Logging in...");

      this.errorMessage = "";
      this.$auth
        .loginWith("local", { data: { email, password } })
        .then((response) => {
          // this.$toast.success("Successfully authenticated");
          windows.href = "/dashboard"
        })
        .catch((e) => {
          // this.$toast.error("Error while authenticating");
          if (e.response.data && e.response.data.message)
            this.errorMessage = e.response.data.message;
        })
        .finally(() => {
          setTimeout(() => {
            this.errorMessage = "";
          }, 10000);
        });
    },
    gotoPage(path) {
      event?.preventDefault();
      return this.$nuxt.$router.push(path);
    },
  },
};
</script>

<style>
</style>