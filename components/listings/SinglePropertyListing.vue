<template>
  <div class="col-lg-12 col-md-12">
    <div class="property-listing property-1">
      <div class="listing-img-wrapper">
        <a href="#">
          <img src="~/assets/img/p-1.jpg" class="img-fluid mx-auto" alt="" />
        </a>
        <span class="property-type"
          >For <span class="text-lower">{{ property.status }}</span></span
        >
      </div>

      <div class="listing-content">
        <div class="listing-detail-wrapper">
          <div class="listing-short-detail">
            <h4 class="listing-name">
              <a href="#">{{ property.title }}</a>
            </h4>
            <span class="listing-location"
              ><i class="ti-location-pin"></i
              >{{
                `${property.address}, ${property.city}, ${property.country}`
              }}</span
            >
          </div>
        </div>

        <div class="listing-features-info">
          <ul>
            <li><strong>Bed:</strong>{{property.bedroom_count}}</li>
            <li><strong>Bath:</strong>{{property.bathroom_count}}</li>
          </ul>
        </div>

        <div class="listing-footer-wrapper">
          <div class="listing-price">
            <h4 class="list-pr">N{{price}} {{property.status == 'RENT' ? 'yearly' : ''}}</h4>
          </div>
          <div class="listing-detail-btn">
            <nuxt-link :to="`/property/${property.slug}`" class="more-btn">More Info</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePropertyListing",
  props: {
    property: {
      required: true,
      type: Object,
    },
  },
  computed: {
    price() {
      return Number(Number(this.property.price).toFixed(2)).toLocaleString();
    },
  },
};
</script>