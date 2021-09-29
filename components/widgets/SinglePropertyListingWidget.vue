<template>
  <!-- Single Property -->
  <div class="col-md-12 col-sm-12 col-md-12">
    <div class="singles-dashboard-list">
      <div class="sd-list-left">
        <img :src="gallery[0]" class="img-fluid" alt="" />
      </div>
      <div class="sd-list-right">
        <h4 class="listing_dashboard_title">
          <a href="#" class="theme-cl">{{property.title}}</a>
        </h4>
        <div class="user_dashboard_listed">Price: N {{price}} {{property.status == "RENT" ? '/ yr' : ''}}</div>
        <div class="user_dashboard_listed">
          Listed in
          <span class="text-uppercase">{{property.status == "RENT" ? 'rentals' : 'sales'}}</span> and 
          <span>{{property.type}}</span>
          <!-- <a href="javascript:void(0);" class="theme-cl">Rentals</a> and
          <a href="javascript:void(0);" class="theme-cl">Apartments</a> -->
        </div>
        <div class="user_dashboard_listed">
          City: <a href="javascript:void(0);" class="theme-cl">{{property.city}}</a> ,
          Area: {{property.area}} sq m
        </div>
        <div class="action">
          <a href="#" data-toggle="tooltip" data-placement="top" title="Edit"
            ><i class="ti-pencil"></i
          ></a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete Property"
            class="delete"
            ><i class="ti-close"></i
          ></a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="top"
            title="Make Featured"
            class="delete"
            ><i class="ti-star"></i
          ></a>
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
      default: () => ({}),
    },
  },
  computed: {
    gallery() {
      return this.property.gallery.map((el) => {
        return (
          process.env.baseUrl.replace(/\/$/, "") +
          "/" +
          (el || "").replace(/^\//, "")
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
