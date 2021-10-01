<template>
  <div>
    <!-- ============================ Page Title Start================================== -->
    <div
      class="image-cover page-title"
      style="background-color: #0f9c14"
      data-overlay="6"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h2 class="ipt-title">Our Properties</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- ============================ Page Title End ================================== -->

    <!-- ============================ All Property ================================== -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-md-12 list-layout">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="filter-fl">
                  <div class="btn-group custom-drop">
                    <button
                      type="button"
                      class="btn btn-order-by-filt"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort By<i class="ti-angle-down"></i>
                    </button>
                    <div class="dropdown-menu pull-right animated flipInX">
                      <a
                        href="#"
                        title="Latest first"
                        @click.prevent="updateFormData({ order_by: '' })"
                        >Latest
                      </a>
                      <a
                        href="asc"
                        title="Price: Low to High"
                        @click.prevent="updateFormData({ order_by: 'asc' })"
                        >Low - High</a
                      >
                      <a
                        href="desc"
                        title="Price: High to Low"
                        @click.prevent="updateFormData({ order_by: 'desc' })"
                        >High - Low</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <single-property-listing :property="property" v-for="property in properties" :key="property.id" />
            </div>

            <!-- Pagination -->
            <paginations />
          </div>

          <!-- property Sidebar -->
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div
              class="simple-sidebar sm-sidebar"
              id="filter_search"
              style="left: 0"
            >
              <div class="search-sidebar_header">
                <h4 class="ssh_heading">Close Filter</h4>
                <button
                  onclick="closeFilterSearch()"
                  class="w3-bar-item w3-button w3-large"
                >
                  <i class="ti-close"></i>
                </button>
              </div>

              <search-widget
                :formData="formData"
                @update:formData="updateFormData($event)"
              />
            </div>
            <!-- Sidebar End -->
          </div>
        </div>
      </div>
    </section>
    <!-- ============================ All Property ================================== -->
  </div>
</template>

<script>
import SearchWidget from "~/components/listings/SearchWidget.vue";
import SinglePropertyListing from '~/components/listings/SinglePropertyListing.vue';
import Paginations from "~/components/paginations/Paginations.vue";
export default {
  components: { Paginations, SearchWidget, SinglePropertyListing },
  data() {
    return {
      formData: {
        title: "",
        min_price: "",
        max_price: "",
        bedroom_count: "",
        bathroom_count: "",
        status: "",
        type: "",
        order_by: "",
      },
      propertiesPagination: {
        data: [],
      },
    };
  },
  async fetch() {
    await this.$axios
      .$get(`/properties/search?${this.queryString}`)
      .then((response) => {
        this.propertiesPagination = response.properties;
      }).catch(e => {
        console.log(e)
      })
  },
  methods: {
    updateFormData(val) {
      Object.assign(this.formData, val);
    },
  },
  computed: {
    queryString() {
      let queryString = "";

      for (let key in this.formData) {
        queryString += `${key}=${encodeURI(this.formData[key])}&`;
      }

      queryString = queryString.replace(/(\&$)|(^\&)/g, "");

      return queryString;
    },
    searchUrl() {
      return `/listings?${this.queryString}`;
    },
    properties() {
      return this.propertiesPagination.data || []
    },
    paginationData() {
      const placeHolder = {...this.propertiesPagination}
      delete placeHolder.data

      return placeHolder
    },
  },
  watch: {
    formData: {
      deep: true,
      handler() {
        this.$router.push(this.searchUrl);
      },
    },
    $route() {
      console.log(this.$nuxt.$route);
      this.$fetch();
    },
  },
};
</script>

<style>
</style>