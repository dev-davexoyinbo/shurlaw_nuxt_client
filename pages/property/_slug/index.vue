<template>
  <div>
    <!-- ============================ Hero Banner  Start================================== -->
    <div class="single-advance-property gray">
      <div class="container-fluid p-0">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-7 col-sm-12">
            <div class="slider-for">
              <a
                v-for="url in galleryImages"
                :key="url"
                :href="url"
                target="_blank"
                class="item-slick"
                ><img :src="url" alt="Alt"
              /></a>
            </div>
          </div>

          <div class="col-lg-5 col-md-5 col-sm-12">
            <div class="single-advance-caption">
              <div class="property-name-info">
                <h4 class="property-name">{{ title }}</h4>
                <p class="property-desc">
                  {{ description }}
                </p>
              </div>

              <div class="property-price-info">
                <h4 class="property-price">N {{ formatNumber(price) }}</h4>
                <p class="property-sqa">
                  {{ formatNumber(area) }}<sub>m2</sub> ({{
                    formatNumber(Number(price) / Number(area))
                  }}
                  NGN/m2)
                </p>
              </div>

              <div class="property-statement">
                <ul>
                  <li>
                    <i class="lni-apartment"></i>
                    <div class="ps-trep">
                      <span>Type</span>
                      <h5 class="ps-type">{{ type.toLowerCase() }}</h5>
                    </div>
                  </li>
                  <li>
                    <i class="lni-restaurant"></i>
                    <div class="ps-trep">
                      <span>Building Age</span>
                      <h5 class="ps-type">{{ building_age }}</h5>
                    </div>
                  </li>
                  <li>
                    <i class="lni-helmet"></i>
                    <div class="ps-trep">
                      <span>Maintenence Fee</span>
                      <h5 class="ps-type">$710/PA</h5>
                    </div>
                  </li>
                  <li>
                    <i class="lni-leaf"></i>
                    <div class="ps-trep">
                      <span>Status</span>
                      <h5 class="ps-type">For {{ status.toLowerCase() }}</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="slider-nav">
              <div class="item-slick" v-for="url in galleryImages" :key="url">
                <img :src="url" alt="Alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="spd-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="slide-property-detail">
              <div class="slide-property-first">
                <div class="pr-price-into">
                  <h2>
                    NGN {{ formatNumber(price) }}
                    <i v-if="status.toLowerCase() == 'rent'">/ yearly</i>
                    <span
                      v-if="status.toLowerCase() == 'rent'"
                      class="prt-type rent"
                      >For Rental</span
                    >
                    <span
                      v-if="status.toLowerCase() == 'sale'"
                      class="prt-type rent"
                      >For Sale</span
                    >
                  </h2>
                  <span><i class="lni-map-marker"></i> {{ address }}</span>
                </div>
              </div>

              <div class="slide-property-sec">
                <div class="pr-all-info">
                  <div class="pr-single-info">
                    <div class="share-opt-wrap">
                      <button
                        type="button"
                        class="btn-share"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-original-title="Share this"
                      >
                        <i class="lni-share"></i>
                      </button>
                      <div class="dropdown-menu animated flipInX">
                        <a href="#" class="cl-facebook"
                          ><i class="lni-facebook"></i
                        ></a>
                        <a href="#" class="cl-twitter"
                          ><i class="lni-twitter"></i
                        ></a>
                        <a href="#" class="cl-gplus"
                          ><i class="lni-google-plus"></i
                        ></a>
                        <a href="#" class="cl-instagram"
                          ><i class="lni-instagram"></i
                        ></a>
                      </div>
                    </div>
                  </div>

                  <div class="pr-single-info">
                    <a
                      href="JavaScript:Void(0);"
                      data-toggle="tooltip"
                      data-original-title="Get Print"
                      ><i class="ti-printer"></i
                    ></a>
                  </div>

                  <div class="pr-single-info">
                    <a
                      href="JavaScript:Void(0);"
                      class="compare-button"
                      data-toggle="tooltip"
                      data-original-title="Compare"
                      ><i class="ti-control-shuffle"></i
                    ></a>
                  </div>

                  <div class="pr-single-info">
                    <a
                      href="JavaScript:Void(0);"
                      class="like-bitt add-to-favorite"
                      data-toggle="tooltip"
                      data-original-title="Add To Favorites"
                      ><i class="lni-heart-filled"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ============================ Hero Banner End ================================== -->

    <!-- ============================ Property Detail Start ================================== -->
    <section class="gray">
      <div class="container">
        <div class="row">
          <!-- property main detail -->
          <div class="col-lg-8 col-md-12 col-sm-12">
            <!-- Single Block Wrap -->
            <div class="block-wrap">
              <div class="block-header">
                <h4 class="block-title">Property Info</h4>
              </div>

              <div class="block-body">
                <ul class="dw-proprty-info">
                  <li><strong>Bedrooms</strong>{{ bedroom_count }}</li>
                  <li><strong>Bathrooms</strong>{{ bathroom_count }}</li>
                  <li><strong>Garage</strong>{{ garage_count || "No" }}</li>
                  <li><strong>Area</strong>{{ formatNumber(area) }} sq m2</li>
                  <li><strong>Type</strong>{{ type.toLowerCase() }}</li>
                  <li><strong>Price</strong>NGN {{ formatNumber(price) }}</li>
                  <li><strong>City</strong>{{ city }}</li>
                  <li><strong>Building Age</strong>{{ building_age }}</li>
                </ul>
              </div>
            </div>

            <!-- Single Block Wrap -->
            <div class="block-wrap">
              <div class="block-header">
                <h4 class="block-title">Description</h4>
              </div>

              <div class="block-body">
                <p>{{ description }}</p>
              </div>
            </div>

            <!-- Single Block Wrap -->
            <div class="block-wrap">
              <div class="block-header">
                <h4 class="block-title">Ameneties</h4>
              </div>

              <div class="block-body">
                <ul class="avl-features third">
                  <li v-for="feature in other_features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Single Block Wrap -->
            <div class="block-wrap" v-show="false">
              <div class="block-header">
                <h4 class="block-title">Floor Plan</h4>
              </div>

              <div class="block-body">
                <div class="accordion" id="floor-option">
                  <div class="card">
                    <div class="card-header" id="firstFloor">
                      <h2 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link"
                          data-toggle="collapse"
                          data-target="#firstfloor"
                        >
                          First Floor<span>740 sq ft</span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="firstfloor"
                      class="collapse"
                      aria-labelledby="firstFloor"
                      data-parent="#floor-option"
                    >
                      <div class="card-body">
                        <img
                          src="~/assets/img/floor.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="seconfFloor">
                      <h2 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#secondfloor"
                        >
                          Second Floor<span>710 sq ft</span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="secondfloor"
                      class="collapse show"
                      aria-labelledby="seconfFloor"
                      data-parent="#floor-option"
                    >
                      <div class="card-body">
                        <img
                          src="~/assets/img/floor.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="third-garage">
                      <h2 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#garages"
                        >
                          Garage<span>520 sq ft</span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="garages"
                      class="collapse"
                      aria-labelledby="third-garage"
                      data-parent="#floor-option"
                    >
                      <div class="card-body">
                        <img
                          src="~/assets/img/floor.jpg"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single Block Wrap -->
            <div class="block-wrap" v-show="false">
              <div class="block-header">
                <h4 class="block-title">Location</h4>
              </div>

              <div class="block-body">
                <div class="map-container">
                  <div
                    id="singleMap"
                    data-latitude="40.7427837"
                    data-longitude="-73.11445617675781"
                    data-mapTitle="Our Location"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Property Reviews -->
            <div class="block-wrap" v-show="false">
              <div class="block-header">
                <h4 class="block-title">47 Reviews</h4>
              </div>

              <div class="block-body">
                <div class="author-review">
                  <div class="comment-list">
                    <ul>
                      <li class="article_comments_wrap">
                        <article>
                          <div class="article_comments_thumb">
                            <img src="~/assets/img/user-1.jpg" alt="" />
                          </div>
                          <div class="comment-details">
                            <div class="comment-meta">
                              <div class="comment-left-meta">
                                <h4 class="author-name">Rosalina Kelian</h4>
                                <div class="comment-date">19th May 2018</div>
                              </div>
                            </div>
                            <div class="comment-text">
                              <p>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                laborumab. perspiciatis unde omnis iste natus
                                error.
                              </p>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li class="article_comments_wrap">
                        <article>
                          <div class="article_comments_thumb">
                            <img src="~/assets/img/user-5.jpg" alt="" />
                          </div>
                          <div class="comment-details">
                            <div class="comment-meta">
                              <div class="comment-left-meta">
                                <h4 class="author-name">Rosalina Kelian</h4>
                                <div class="comment-date">19th May 2018</div>
                              </div>
                            </div>
                            <div class="comment-text">
                              <p>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                laborumab. perspiciatis unde omnis iste natus
                                error.
                              </p>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li class="article_comments_wrap">
                        <article>
                          <div class="article_comments_thumb">
                            <img src="~/assets/img/user-4.jpg" alt="" />
                          </div>
                          <div class="comment-details">
                            <div class="comment-meta">
                              <div class="comment-left-meta">
                                <h4 class="author-name">Russel Ikravia</h4>
                                <div class="comment-date">17th May 2020</div>
                              </div>
                            </div>
                            <div class="comment-text">
                              <p>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                laborumab. perspiciatis unde omnis iste natus
                                error.
                              </p>
                            </div>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="#" class="reviews-checked theme-cl"
                  ><i class="fas fa-arrow-alt-circle-down mr-2"></i>See More
                  Reviews</a
                >
              </div>
            </div>

            <!-- Nearest Places -->
            <div class="block-wrap" v-show="false">
              <div class="block-header">
                <h4 class="block-title">Nearby Places</h4>
              </div>

              <div class="block-body">
                <!-- Schools -->
                <div class="nearby-wrap">
                  <h5>Schools</h5>
                  <div class="neary_section_list">
                    <div class="neary_section">
                      <div class="neary_section_first">
                        <h4 class="nearby_place_title">
                          Wikdom Senior High Scool
                        </h4>
                      </div>
                      <div class="neary_section_last">
                        <div class="nearby_place_rate good">
                          <i class="ti-star"></i>4.2
                        </div>
                        <span>2.5 km</span>
                      </div>
                    </div>

                    <div class="neary_section">
                      <div class="neary_section_first">
                        <h4 class="nearby_place_title">
                          Reena Secondary High Scool
                        </h4>
                      </div>
                      <div class="neary_section_last">
                        <div class="nearby_place_rate mid">
                          <i class="ti-star"></i>4.0
                        </div>
                        <span>3.7 km</span>
                      </div>
                    </div>

                    <div class="neary_section">
                      <div class="neary_section_first">
                        <h4 class="nearby_place_title">
                          Victory Primary Scool
                        </h4>
                      </div>
                      <div class="neary_section_last">
                        <div class="nearby_place_rate high">
                          <i class="ti-star"></i>4.8
                        </div>
                        <span>2.9 km</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Hotel & Restaurant -->
                <div class="nearby-wrap">
                  <h5>Hotel &amp; Restaurant</h5>
                  <div class="neary_section_list">
                    <div class="neary_section">
                      <div class="neary_section_first">
                        <h4 class="nearby_place_title">
                          Hotel Singhmind Alite
                        </h4>
                      </div>
                      <div class="neary_section_last">
                        <div class="nearby_place_rate poor">
                          <i class="ti-star"></i>3.2
                        </div>
                        <span>1.5 km</span>
                      </div>
                    </div>

                    <div class="neary_section">
                      <div class="neary_section_first">
                        <h4 class="nearby_place_title">
                          Wiksy Bar &amp; Restaurant
                        </h4>
                      </div>
                      <div class="neary_section_last">
                        <div class="nearby_place_rate high">
                          <i class="ti-star"></i>4.9
                        </div>
                        <span>2.7 km</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single Block Wrap -->
            <div class="block-wrap" v-show="false">
              <div class="block-header">
                <h4 class="block-title">Write A Review</h4>
              </div>

              <div class="block-body">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Subject Title"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <textarea
                        class="form-control ht-80"
                        placeholder="Messages"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <button class="btn btn-theme" type="submit">
                        Submit Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- property Sidebar -->
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="page-sidebar">
              <!-- Agent Detail -->
              <div class="agent-widget">
                <div class="agent-title">
                  <div class="agent-photo">
                    <img src="~/assets/img/user-6.jpg" alt="" />
                  </div>
                  <div class="agent-details">
                    <h4><a href="#">{{contact_name}}</a></h4>
                    <span
                      ><i class="lni-phone-handset"></i>{{contact_phone}}</span
                    >
                  </div>
                  <div class="clearfix"></div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Phone"
                  />
                </div>
                <div class="form-group">
                  <textarea class="form-control">
I'm interested in this property.</textarea
                  >
                </div>
                <button class="btn btn-theme full-width">Send Message</button>
              </div>

              <!-- Mortgage Calculator -->
              <div class="sidebar-widgets" v-show="false">
                <h4>Mortgage Calculator</h4>

                <div class="form-group">
                  <div class="input-with-icon">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Sale Price"
                    />
                    <i class="ti-money"></i>
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-with-icon">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Down Payment"
                    />
                    <i class="ti-money"></i>
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-with-icon">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Loan Term (Years)"
                    />
                    <i class="ti-calendar"></i>
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-with-icon">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Interest Rate"
                    />
                    <i class="fa fa-percent"></i>
                  </div>
                </div>

                <button class="btn btn-theme full-width">Calculate</button>
              </div>

              <!-- Featured Property -->
              <div class="sidebar-widgets">
                <h4>Featured Property</h4>

                <div class="sidebar_featured_property">
                  <!-- List Sibar Property -->
                  <div class="sides_list_property">
                    <div class="sides_list_property_thumb">
                      <img
                        src="~/assets/img/p-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="sides_list_property_detail">
                      <h4>
                        <a href="single-property-1.html"
                          >Loss vengel New Apartment</a
                        >
                      </h4>
                      <span><i class="ti-location-pin"></i>Sans Fransico</span>
                      <div class="lists_property_price">
                        <div class="lists_property_types">
                          <div class="property_types_vlix sale">For Sale</div>
                        </div>
                        <div class="lists_property_price_value">
                          <h4>$4,240</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- List Sibar Property -->
                  <div class="sides_list_property">
                    <div class="sides_list_property_thumb">
                      <img
                        src="~/assets/img/p-4.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="sides_list_property_detail">
                      <h4>
                        <a href="single-property-1.html"
                          >Montreal Quriqe Apartment</a
                        >
                      </h4>
                      <span
                        ><i class="ti-location-pin"></i>Liverpool, London</span
                      >
                      <div class="lists_property_price">
                        <div class="lists_property_types">
                          <div class="property_types_vlix">For Rent</div>
                        </div>
                        <div class="lists_property_price_value">
                          <h4>$7,380</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- List Sibar Property -->
                  <div class="sides_list_property">
                    <div class="sides_list_property_thumb">
                      <img
                        src="~/assets/img/p-7.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="sides_list_property_detail">
                      <h4>
                        <a href="single-property-1.html"
                          >Curmic Studio For Office</a
                        >
                      </h4>
                      <span
                        ><i class="ti-location-pin"></i>Montreal, Canada</span
                      >
                      <div class="lists_property_price">
                        <div class="lists_property_types">
                          <div class="property_types_vlix buy">For Buy</div>
                        </div>
                        <div class="lists_property_price_value">
                          <h4>$8,730</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- List Sibar Property -->
                  <div class="sides_list_property">
                    <div class="sides_list_property_thumb">
                      <img
                        src="~/assets/img/p-5.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="sides_list_property_detail">
                      <h4>
                        <a href="single-property-1.html"
                          >Montreal Quebec City</a
                        >
                      </h4>
                      <span
                        ><i class="ti-location-pin"></i>Sreek View, New
                        York</span
                      >
                      <div class="lists_property_price">
                        <div class="lists_property_types">
                          <div class="property_types_vlix">For Rent</div>
                        </div>
                        <div class="lists_property_price_value">
                          <h4>$6,240</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ============================ Property Detail End ================================== -->

    <!-- ============================ Call To Action ================================== -->
    <call-to-action />
    <!-- ============================ Call To Action End ================================== -->
  </div>
</template>

<script>
import CallToAction from "~/components/homepage/CallToAction.vue";
import PropertyHeroBanner from "~/components/property/PropertyHeroBanner.vue";
export default {
  components: { PropertyHeroBanner, CallToAction },
  async asyncData({ route, params, $axios, error }) {
    if (process.client) location.href = route.fullPath;

    const slug = params.slug;

    const property = await $axios
      .$get(`/properties/${slug}`)
      .then((response) => response.property)
      .catch((e) => {
        console.log(e);
        error({ statusCode: 404, message: "Post not found" });
      });

    return property;
  },
  methods: {
    formatNumber(number) {
      return Number(Number(number).toFixed(2)).toLocaleString();
    },
  },
  computed: {
    galleryImages() {
      return (this.gallery || []).map((el) => {
        return (
          process.env.baseUrl.replace(/\/$/, "") + "/" + el.replace(/^\//, "")
        );
      });
    },
  },
};
</script>

<style>
</style>