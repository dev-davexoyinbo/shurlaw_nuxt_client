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

      <Nuxt />

      <!-- ============================ Footer Start ================================== -->
      <main-footer />
      <!-- ============================ Footer End ================================== -->

      <!-- Sign Up Modal -->
      <signup-modal />
      <!-- End Modal -->

      <back-to-top-button />
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->

    <!-- Log In Modal -->
    <login-modal />
    <!-- End Modal -->

    <!-- Color Switcher -->
    <color-switcher />
  </div>
</template>

<script>
import Navbar from "~/components/navbars/Navbar.vue";
import ColorSwitcher from "~/components/ColorSwitcher.vue";
import HeroBanner from "~/components/homepage/HeroBanner.vue";
import ExploreProperty from "~/components/homepage/ExploreProperty.vue";
import CallToAction from "~/components/homepage/CallToAction.vue";
import MainFooter from "~/components/footers/MainFooter.vue";
import LoginModal from "~/components/modals/LoginModal.vue";
import BackToTopButton from "~/components/BackToTopButton.vue";
import SignupModal from "~/components/modals/SignupModal.vue";

export default {
  components: {
    Navbar,
    ColorSwitcher,
    HeroBanner,
    ExploreProperty,
    LoginModal,
    MainFooter,
    CallToAction,
    BackToTopButton,
    SignupModal,
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