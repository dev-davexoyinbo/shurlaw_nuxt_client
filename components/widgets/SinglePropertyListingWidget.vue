<template>
  <!-- Single Property -->
  <div class="col-md-12 col-sm-12 col-md-12">
    <div class="singles-dashboard-list">
      <div class="sd-list-left">
        <img :src="gallery[0]" class="img-fluid" alt="" />
      </div>
      <div class="sd-list-right">
        <h4 class="listing_dashboard_title">
          <a @click.prevent="gotoPage(`/property/${property.slug}`)" :href="`/property/${property.slug}`" class="theme-cl">{{ property.title }}</a>
        </h4>
        <div class="user_dashboard_listed">
          Price: N {{ price }} {{ property.status == "RENT" ? "/ yr" : "" }}
        </div>
        <div class="user_dashboard_listed">
          Listed in
          <span class="text-uppercase">{{
            property.status == "RENT" ? "rentals" : "sales"
          }}</span>
          and
          <span>{{ property.type }}</span>
          <!-- <a href="javascript:void(0);" class="theme-cl">Rentals</a> and
          <a href="javascript:void(0);" class="theme-cl">Apartments</a> -->
        </div>
        <div class="user_dashboard_listed">
          City:
          <a href="javascript:void(0);" class="theme-cl">{{ property.city }}</a>
          , Area: {{ property.area }} sq m
        </div>
        <div class="action">
          <a
            @click.prevent="gotoPage(`/property/${property.slug}/edit`)"
            :href="`/property/${property.slug}/edit`"
            data-toggle="tooltip"
            data-placement="top"
            title="Edit"
            ><i class="ti-pencil"></i
          ></a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete Property"
            class="delete"
            @click.prevent="deleteProperty()"
            ><i class="ti-close"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'

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
  methods: {
    gotoPage(path) {
      event.preventDefault();
      this.$nuxt.$router.push(path);
    },
    deleteProperty() {
      event.preventDefault();

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.delete(`/properties/${this.property.slug}`).then(() => {
            this.$emit("property-deleted");
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
        }
      });
    },
  },
};
</script>
