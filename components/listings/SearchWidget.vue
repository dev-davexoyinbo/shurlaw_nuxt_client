<template>
  <!-- Find New Property -->
  <div class="sidebar-widgets">
    <h5 class="mb-3">Find New Property</h5>

    <div class="form-group">
      <div class="input-with-icon">
        <input
          required
          :value="formData.title"
          type="text"
          class="form-control"
          placeholder="Neighborhood"
          @input="updateFormData(`title`)"
        />
        <i class="ti-search"></i>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="form-group">
          <div class="input-with-icon">
            <input
              :value="formData.min_price"
              @input="updateFormData(`min_price`)"
              type="number"
              class="form-control"
              placeholder="Minimum"
            />
            <!-- <i class="ti-money"></i> -->
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="form-group">
          <div class="input-with-icon">
            <input
              :value="formData.max_price"
              @input="updateFormData(`max_price`)"
              type="number"
              class="form-control"
              placeholder="Maximum"
            />
            <!-- <i class="ti-money"></i> -->
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="input-with-icon">
        <select
          id="bedrooms"
          class="form-control"
          :value="formData.bedroom_count"
          @change="updateFormData(`bedroom_count`)"
        >
          <option value="">Bedrooms</option>
          <option :value="i" v-for="i in 1000" :key="i">{{ i }}</option>
        </select>
        <i class="fas fa-bed"></i>
      </div>
    </div>

    <div class="form-group">
      <div class="input-with-icon">
        <select
          id="bathrooms"
          class="form-control"
          @change="updateFormData(`bathroom_count`)"
          :value="formData.bathroom_count"
        >
          <option value="">Bathrooms</option>
          <option :value="i" v-for="i in 1000" :key="i">{{ i }}</option>
        </select>
        <i class="fas fa-bath"></i>
      </div>
    </div>

    <div class="form-group">
      <div class="input-with-icon">
        <select  id="ptypes" class="form-control" :value="formData.status" @change="updateFormData(`status`)">
          <option value="">Property Status</option>
          <option value="">Any Status</option>
          <option value="RENT">For Rental</option>
          <option value="SALE">For Sale</option>
        </select>
        <i class="ti-briefcase"></i>
      </div>
    </div>

    <div class="form-group">
      <div class="input-with-icon">
        <select id="ptypes" class="form-control" :value="formData.type" @change="updateFormData(`type`)">
          <option value="">Property Type</option>
          <option value="">Any Type</option>
          <option value="APARTMENT">APARTMENT</option>
          <option value="GARAGE">GARAGE</option>
          <option value="COMMERCIAL">COMMERCIAL</option>
          <option value="OFFICE">OFFICE</option>
          <option value="VILLA">VILLA</option>
        </select>
        <i class="ti-home"></i>
      </div>
    </div>

    <!-- <div class="range-slider">
      <label>Custom Price</label>
      <div
        data-min="0"
        data-max="5000000"
        data-min-name="min_price"
        data-max-name="min_price"
        data-unit="NGN"
        class="range-slider-ui ui-slider"
        aria-disabled="false"
      ></div>
      <div class="clearfix"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => ({
        title: "",
        min_price: "",
        max_price: "",
        bedroom_count: "",
        bathroom_count: "",
        status: "",
        type: "",
      }),
    },
  },
  emits: ["update:formData.title"],
  mounted() {
  },
  methods: {
      updateFormData(keyName) {
          this.$emit("update:formData", {[keyName]: event.target.value})
      },
  }
};
</script>