<template>
  <div class="image-cover hero-banner" style="">
    <div class="container">
      <div class="hero-search-wrap">
        <div class="hero-search">
          <h3>Find Your New Property</h3>
        </div>
        <div class="hero-search-content">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="form-group">
                <div class="input-with-icon">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Neighborhood"
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
                    type="text"
                    class="form-control"
                    placeholder="Minimum Price"
                  />
                  <!-- <i class="ti-money"></i> -->
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="form-group">
                <div class="input-with-icon">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Maximum Price"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="form-group">
                <div class="input-with-icon">
                  <select id="bedrooms" class="form-control">
                    <option value="">&nbsp;</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <i class="fas fa-bed"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="form-group">
                <div class="input-with-icon">
                  <select id="bathrooms" class="form-control">
                    <option value="">&nbsp;</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <i class="fas fa-bath"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-search-action">
          <a href="listings.html" class="btn search-btn">Search Result</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>