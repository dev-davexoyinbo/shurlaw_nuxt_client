<template>
  <form @submit.prevent="submit" class="hero-search-content" ref="form">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="form-group">
          <div class="input-with-icon">
            <input
              type="text"
              class="form-control"
              placeholder="Neighborhood"
              required
              v-model="title"
            />
            <i class="ti-search"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="form-group">
          <div class="input-with-icon">
            <input
              type="number"
              class="form-control"
              placeholder="Minimum Price"
              v-model.number="minPrice"
            />
            <!-- <i class="ti-money"></i> -->
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="form-group">
          <div class="input-with-icon">
            <input
              type="number"
              class="form-control"
              placeholder="Maximum Price"
              v-model.number="maxPrice"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="form-group">
          <div class="input-with-icon">
            <select id="bedrooms" class="form-control" v-model="bedroomCount">
              <option value="">&nbsp;</option>
              <option :key="i" :value="i" v-for="i in 100">{{ i }}</option>
            </select>
            <i class="fas fa-bed"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="form-group">
          <div class="input-with-icon">
            <select id="bathrooms" class="form-control" v-model="bathroomCount">
              <option value="">&nbsp;</option>
              <option :key="i" :value="i" v-for="i in 100">{{ i }}</option>
            </select>
            <i class="fas fa-bath"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-search-action">
          <nuxt-link :to="searchUrl" class="btn search-btn">Search Result</nuxt-link>
        </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      minPrice: "",
      maxPrice: "",
      bedroomCount: "",
      bathroomCount: "",
    };
  },
  methods: {
    submit() {
      event.preventDefault();
      debugger;
      this.$nuxt.$router.push(
        this.searchUrl
      );
    },
  },
  computed: {
      searchUrl() {
          return `/listings?title=${encodeURI(this.title)}&min_price=${this.minPrice}&max_price=${this.maxPrice}&bedroom_count=${this.bedroomCount}&bathroom_count=${this.bathroomCount}`
      }
  }
};
</script>