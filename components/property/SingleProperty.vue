<template>
  <div class="property-listing property-2">
    <div class="listing-img-wrapper">
      <div class="list-img-slide">
        <div class="click">
          <div v-for="image in galleryImages" :key="image">
            <a href="single-property-1.html"
              ><img :src="image" class="img-fluid mx-auto" alt=""
            /></a>
          </div>
        </div>
      </div>
      <span class="property-type">FOR {{ property.status }}</span>
    </div>

    <div class="listing-detail-wrapper pb-0">
      <div class="listing-short-detail">
        <h4 class="listing-name">
          <a href="single-property-1.html">{{ property.title }}</a
          ><i class="list-status ti-check"></i>
        </h4>
      </div>
    </div>

    <div class="price-features-wrapper">
      <div class="listing-price-fx">
        <h6 class="listing-card-info-price">
          N{{ price
          }}<span
            v-show="property.status.toLowerCase() != 'sale'"
            class="price-suffix"
            >/yr</span
          >
        </h6>
      </div>
      <div class="list-fx-features">
        <div class="listing-card-info-icon">
          <span class="inc-fleat inc-bed"
            >{{ property.bedroom_count }} Beds</span
          >
        </div>
        <div class="listing-card-info-icon">
          <span class="inc-fleat inc-bath"
            >{{ property.bathroom_count }} Bath</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
  computed: {
    galleryImages() {
      return (this.property.gallery || []).map((el) => {
        return (
          process.env.baseUrl.replace(/\/$/, "") + "/" + el.replace(/^\//, "")
        );
      });
    },
    price() {
      return Number(
        Number(this.property.price || 0).toFixed(2)
      ).toLocaleString();
    },
  },
};
</script>
