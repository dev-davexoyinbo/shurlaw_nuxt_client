<template>
  <section class="gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="sec-heading center">
            <h2>Browse All Property</h2>
            <p>Popular properties by our expert agents</p>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Single Property -->
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="property in properties"
          :key="property.id"
        >
          <single-property :property="property" />
        </div>
        <!-- End Single Property -->
      </div>
    </div>
  </section>
</template>

<script>
import SingleProperty from "~/components/property/SingleProperty.vue";

export default {
  components: {
    SingleProperty,
  },
  props: {
    propertiesPagination: {
      type: Object,
      default: () => ({
        data: [],
      }),
    },
  },
  data() {
    return {
      properties: [],
      paginationData: {},
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      if (this.propertiesPagination.data.length > 0) {
        this.properties = [...this.propertiesPagination.data];
        Object.assign(this.paginationData, this.propertiesPagination);
        delete this.paginationData.data;
      }
    },
  },
};
</script>

<style>
</style>