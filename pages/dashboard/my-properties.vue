<template>
  <div class="">
    <div class="dashboard-wraper">
      <!-- Bookmark Property -->
      <div class="form-submit">
        <h4>My Listings</h4>
      </div>

      <div class="row">
        <single-property-listing-widget
          @property-deleted="propertyDeleted(property.id)"
          v-for="property in properties"
          :key="property.id"
          :property="property"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SinglePropertyListingWidget from "~/components/widgets/SinglePropertyListingWidget.vue";
export default {
  components: { SinglePropertyListingWidget },
  layout: "dashboard",
  data() {
    return {
      propertiesPagination: {
        data: [],
      },
    };
  },
  async asyncData({ $axios }) {
    let propertiesPagination = {};

    const fetchProperties = new Promise((resolve, reject) => {
      $axios
        .$get("/properties?by=me")
        .then((response) => {
          propertiesPagination = response.properties;
          resolve();
        })
        .catch((e) => reject(e));
    });

    await Promise.allSettled([fetchProperties]);

    return {
      propertiesPagination,
    };
  },
  computed: {
    properties() {
      return this.propertiesPagination.data || [];
    },
  },
  methods: {
    propertyDeleted(id) {
      const index = this.properties.findIndex((el) => el.id == id);

      if (index < 0) return;

      let properties = [...this.properties]

      properties.splice(index, 1);

      Object.assign(this.propertiesPagination, {data: properties})

      // debugger
    },
  },
};
</script>