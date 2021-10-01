<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <ul class="pagination p-center">
        <li class="page-item">
          <a
            :data-disabled="!paginationData.prev_page_url"
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="prev()"
          >
            <span class="ti-arrow-left"></span>
            <span class="sr-only">Previous</span>
          </a>
        </li>

        <!-- First page if ellipsis is showing -->
        <li class="page-item" v-show="showFirstItem">
          <a class="page-link" @click.prevent="navigateTo(1)" href="#">1</a>
        </li>
        <!-- End First page if ellipsis is showing -->
        <!-- Ellipsis for large number of pages -->
        <li class="page-item" data-disabled v-show="showFirstEllipsis">
          <a class="page-link" data-disabled href="#">...</a>
        </li>

        <!-- End Ellipsis for large number of pages -->

        <li
          class="page-item"
          v-for="i in paginationData.last_page"
          :key="i"
          v-show="showItem(i)"
          @click.prevent="navigateTo(i)"
        >
          <a
            class="page-link"
            :data-active="paginationData.current_page == i"
            href="#"
            >{{ i }}</a
          >
        </li>
        <!-- Ellipsis for large number of pages -->
        <li class="page-item" data-disabled v-show="showLastEllipsis">
          <a class="page-link" data-disabled href="#">...</a>
        </li>

        <!-- End Ellipsis for large number of pages -->
        <!-- Last page if ellipsis is showing -->
        <li class="page-item" v-show="showLastItem">
          <a class="page-link" @click.prevent="navigateTo(paginationData.last_page)" href="#">{{ paginationData.last_page }}</a>
        </li>
        <!-- End Last page if ellipsis is showing -->

        <li class="page-item">
          <a
            :data-disabled="!paginationData.next_page_url"
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="next()"
          >
            <span class="ti-arrow-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paginationData: {
      type: Object,
      default: () => ({
        current_page: 1,
        first_page_url: "",
        from: 1,
        next_page_url: null,
        path: "",
        per_page: 15,
        prev_page_url: null,
        to: 5,
      }),
    },
  },
  emits: ["navigateTo"],
  methods: {
    showItem(i) {
      const paginationData = this.paginationData;
      return (
        i - paginationData.current_page >= -1 &&
        i <= paginationData.current_page + 1
      );
    },
    navigateTo(val) {
      event?.preventDefault();
      this.$emit("navigateTo", val)
    },
    next() {
      event?.preventDefault();
      if (this.paginationData.next_page_url)
        this.navigateTo(this.paginationData.current_page + 1);
    },
    prev() {
      event?.preventDefault();
      if (this.paginationData.prev_page_url)
        this.navigateTo(this.paginationData.current_page - 1);
    },
  },

  computed: {
    showLastEllipsis() {
      const paginationData = this.paginationData;
      return (
        this.showLastItem &&
        paginationData.current_page + 2 < paginationData.last_page
      );
    },
    showLastItem() {
      const paginationData = this.paginationData;

      return paginationData.last_page > paginationData.current_page + 1;
    },
    showFirstItem() {
      const paginationData = this.paginationData;
      return paginationData.current_page - 1 > 1;
    },
    showFirstEllipsis() {
      const paginationData = this.paginationData;
      return this.showFirstItem && paginationData.current_page - 2 != 1;
    },
  },
};
</script>

<style scoped>
*[data-disabled] {
  background: darkgrey !important;
  border-color: darkgrey !important;

  color: lightgray !important;
  cursor: not-allowed !important;
}

*[data-active] {
  border-color: #00ba74 !important;
  background: #00ba74 !important;
  color: white !important;
}
</style>