<template>
  <div class="">
    <div class="dashboard-wraper">
      <a
        href="/dashboard/agents/add"
        style="float: right; border-radius: 20px"
        class="btn btn-primary"
        @click.prevent="gotoPage(`/dashboard/agents/add`)"
        >Add new Agent</a
      >
      <br />
      <!-- Bookmark Property -->
      <div class="form-submit">
        <h4>All Agents</h4>
      </div>

      <table class="property-table-wrap responsive-table bkmark">
        <tbody>
          <tr>
            <th><i class="fa fa-file-text"></i> Registered</th>
            <th></th>
          </tr>

          <!-- Item #1 -->
          <tr>
            <td class="property-container">
              <img src="~assets/img/user-2.jpg" alt="" />
              <div class="title">
                <h4><a href="#">Tinuke Thompson</a></h4>
                <span>6 Bishop Ave. Lagos </span>
                <span class="table-property-price">3 Properties</span>
              </div>
            </td>
            <td class="action">
              <a href="#" class="delete"><i class="ti-close"></i> Disable</a>
            </td>
          </tr>

          <!-- Item #2 -->
          <tr>
            <td class="property-container">
              <img src="~assets/img/user-1.jpg" alt="" />
              <div class="title">
                <h4><a href="#">TD JAKES</a></h4>
                <span>9 Bishop Ave. Lagos </span>
                <span class="table-property-price">30 Properties</span>
              </div>
            </td>
            <td class="action">
              <a href="#" class="delete"><i class="ti-close"></i> Disable</a>
            </td>
          </tr>

          <!-- Item #3 -->
          <tr>
            <td class="property-container">
              <img src="~assets/img/user-4.jpg" alt="" />
              <div class="title">
                <h4><a href="#">Florence Micheals</a></h4>
                <span>9 Bishop Ave. Ikoyi </span>
                <span class="table-property-price">9 Properties</span>
              </div>
            </td>
            <td class="action">
              <a href="#" class="delete"><i class="ti-close"></i> Disbale</a>
            </td>
          </tr>

          <!-- Item #4 -->
          <tr>
            <td class="property-container">
              <img src="~assets/img/user-5.jpg" alt="" />
              <div class="title">
                <h4><a href="#">Micheal Thornton</a></h4>
                <span>9 Bishop Ave. Lagos </span>
                <span class="table-property-price">30 Properties</span>
              </div>
            </td>
            <td class="action">
              <a href="#" class="delete"><i class="ti-close"></i> Disable</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
		<!-- New Js -->
<script>
export default {
  layout: "dashboard",
  methods: {
    gotoPage(path) {
      event.preventDefault()
      this.$nuxt.$router.push(path)
    }
  }
};
</script>
