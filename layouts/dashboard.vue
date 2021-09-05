<template>
  <div class="green-skin">
    <div id="preloader" v-show="!loaded">
      <div class="preloader"><span></span><span></span></div>
    </div>

    <div id="main-wrapper">
      <navbar />
      <!-- End Navigation -->
      <div class="clearfix"></div>
      <!-- ============================================================== -->
      <!-- Top header  -->
      <!-- ============================================================== -->

      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-4"><dashboard-navbar /></div>

            <div class="col-lg-9 col-md-8">
              <Nuxt />
            </div>
          </div>
        </div>
      </section>

      <!-- ============================ Footer Start ================================== -->
      <main-footer />
      <!-- ============================ Footer End ================================== -->

      <back-to-top-button />
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->

    <!-- Color Switcher -->
    <color-switcher />
  </div>
  <!-- ============================ Page Title Start================================== -->

  <!-- ============================ User Dashboard End ================================== -->
</template>

<script>
import DashboardNavbar from "~/components/navbars/DashboardNavbar.vue";
import MainFooter from "~/components/footers/MainFooter.vue";
import BackToTopButton from "~/components/BackToTopButton.vue";
import ColorSwitcher from "~/components/ColorSwitcher.vue";
import Navbar from "~/components/navbars/Navbar.vue";

export default {
  middleware: ["auth"],
  components: {
    DashboardNavbar,
    MainFooter,
    BackToTopButton,
    ColorSwitcher,
    Navbar,
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>

<style>
</style>