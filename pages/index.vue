<template>
  <div>
    <!-- ============================ Hero Banner  Start================================== -->
    <hero-banner />
    <!-- ============================ Hero Banner End ================================== -->

    <!-- ================= Explore Property ================= -->
    <explore-property />
    <div class="clearfix"></div>
    <!-- ============================ Step How To Use End ================================== -->

    <div class="clearfix"></div>
    <!-- ============================ Packages End ================================== -->

    <!-- ============================ Call To Action ================================== -->
    <call-to-action />
    <!-- ============================ Call To Action End ================================== -->
  </div>
</template>

<script>
import HeroBanner from "~/components/homepage/HeroBanner.vue";
import ExploreProperty from "~/components/homepage/ExploreProperty.vue";
import CallToAction from "~/components/homepage/CallToAction.vue";

export default {
  components: {
    HeroBanner,
    ExploreProperty,
    CallToAction,
  },
};
</script>