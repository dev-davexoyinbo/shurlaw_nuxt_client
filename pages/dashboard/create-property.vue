<template>
  <div class="">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div
          id="extraPackages"
          class="collapse"
          aria-labelledby="Packages"
          data-parent="#accordionExample"
        >
          <div class="row">
            <!-- Single Package -->
            <div class="col-lg-4 col-md-4 c-l-sm-12">
              <div class="package-box">
                <span class="theme-cl">Gold Package</span>
                <h4 class="packages-features-title">USD 49 / 1 year</h4>
                <ul class="packages-lists-list">
                  <li>Unlimited listings</li>
                  <li>100 Featured</li>
                  <li>Unlimited Images</li>
                  <li>Help & Support</li>
                </ul>
                <div class="buypackage">
                  <div class="switchbtn paying">
                    <input
                      id="gold"
                      class="switchbtn-checkbox"
                      type="radio"
                      value="2"
                      checked
                      name="package7"
                    />
                    <label class="switchbtn-label" for="gold"></label>
                  </div>
                  <span>Switch to this package</span>
                </div>
              </div>
            </div>

            <!-- Single Package -->
            <div class="col-lg-4 col-md-4 c-l-sm-12">
              <div class="package-box">
                <span class="theme-cl">Premium Package</span>
                <h4 class="packages-features-title">USD 39 / 1 year</h4>
                <ul class="packages-lists-list">
                  <li>20 listings</li>
                  <li>5 Featured</li>
                  <li>5 Images/ per list</li>
                  <li>Help & Support</li>
                </ul>
                <div class="buypackage">
                  <div class="switchbtn paying">
                    <input
                      id="premium"
                      class="switchbtn-checkbox"
                      type="radio"
                      value="2"
                      name="package7"
                    />
                    <label class="switchbtn-label" for="premium"></label>
                  </div>
                  <span>Switch to this package</span>
                </div>
              </div>
            </div>

            <!-- Single Package -->
            <div class="col-lg-4 col-md-4 c-l-sm-12">
              <div class="package-box">
                <span class="theme-cl">Standard Package</span>
                <h4 class="packages-features-title">USD 10 / 1 year</h4>
                <ul class="packages-lists-list">
                  <li>10 listings</li>
                  <li>2 Featured</li>
                  <li>2 Images</li>
                  <li>Help & Support</li>
                </ul>
                <div class="buypackage">
                  <div class="switchbtn paying">
                    <input
                      id="standard"
                      class="switchbtn-checkbox"
                      type="radio"
                      value="2"
                      name="package7"
                    />
                    <label class="switchbtn-label" for="standard"></label>
                  </div>
                  <span>Switch to this package</span>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-lg-12 col-md-12">
              <h4>Payment Method</h4>
            </div>
            <div class="col-lg-12 col-md-12">
              <a href="#" class="pay-btn paypal">Pay with PayPal</a>
              <a href="#" class="pay-btn stripe">Pay with Stripe</a>
              <a href="#" class="pay-btn wire-trans">Wire Transfer</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dashboard-wraper">
      <div class="row">
        <!-- Submit Form -->
        <div class="col-lg-12 col-md-12">
          <form action="" ref="form" @submit.prevent="submit">
            <span class="text-danger" v-if="errorMessages.main">{{
              errorMessages.main
            }}</span>
            <div class="submit-page">
              <!-- Basic Information -->
              <div class="form-submit">
                <h3>Property Information</h3>
                <div class="submit-section">
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label
                        >Property Title <span class="text-danger">*</span
                        ><a
                          href="#"
                          class="tip-topdata"
                          data-tip="Property Title"
                          ><i class="ti-help"></i></a
                      ></label>
                      <input
                        type="text"
                        class="form-control"
                        name="title"
                        required
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Status <span class="text-danger">*</span></label>
                      <select
                        id="status"
                        class="form-control"
                        name="status"
                        required
                      >
                        <option value="">&nbsp;</option>
                        <option value="RENT">For Rent</option>
                        <option value="SALE">For Sale</option>
                      </select>
                    </div>

                    <div class="form-group col-md-6">
                      <label
                        >Property Type <span class="text-danger">*</span></label
                      >
                      <select
                        id="ptypes"
                        class="form-control"
                        name="type"
                        required
                      >
                        <option value="">&nbsp;</option>

                        <option
                          class="text-capitalize"
                          v-for="propertyType in propertyTypes"
                          :value="propertyType"
                          :key="propertyType"
                        >
                          {{ propertyTypes[propertyType].toLowerCase() }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group col-md-6">
                      <label>Price <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="NGN"
                        required
                        name="price"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Area <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        name="area"
                        required
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Bedrooms <span class="text-danger">*</span></label>
                      <select
                        id="bedrooms"
                        class="form-control"
                        name="bedroom_count"
                        required
                      >
                        <option value="">&nbsp;</option>
                        <option v-for="i in 1001" :key="i" :value="i - 1">
                          {{ i - 1 }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group col-md-6">
                      <label
                        >Bathrooms <span class="text-danger">*</span></label
                      >
                      <select
                        id="bathrooms"
                        name="bathroom_count"
                        required
                        class="form-control"
                      >
                        <option value="">&nbsp;</option>
                        <option v-for="i in 1001" :key="i" :value="i - 1">
                          {{ i - 1 }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Gallery -->
              <div class="form-submit" ref="gallerySection">
                <h3>Gallery <span class="text-danger">*</span></h3>
                <input
                  type="file"
                  multiple
                  name="gallery[]"
                  ref="galleryInput"
                  hidden
                />
                <div class="submit-section">
                  <div class="form-row">
                    <div
                      class="form-group col-md-12"
                      id="gallery-area"
                      ref="galleryArea"
                      draggable="false"
                      :class="{ error: errorMessages.gallery }"
                    >
                      <div
                        v-if="gallery.urls && gallery.urls.length > 0"
                        class="__image-wrapper-container"
                        draggable="false"
                      >
                        <div
                          class="__image-wrapper"
                          draggable="false"
                          v-for="(url, i) in gallery.urls"
                          :key="i"
                        >
                          <img :src="url" alt="" srcset="" draggable="false" />
                        </div>
                      </div>
                      <div v-else>
                        <label>Upload Gallery</label>
                        <div class="dropzone dz-clickable primary-dropzone">
                          <div class="dz-default dz-message">
                            <i class="ti-gallery"></i>
                            <span class="text __show-inactive"
                              >Drag & Drop To Gallery Images</span
                            >
                            <span class="text __show-active">
                              Leave To Upload Images</span
                            >
                            <br />
                            <button
                              ref="selectFilesButton"
                              style="margin-top: 10px"
                              class="btn btn-sm btn-info rounded mt-10"
                            >
                              Select Files
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span class="text-danger" v-if="errorMessages.gallery">{{
                      errorMessages.gallery
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="form-submit">
                <h3>Location</h3>
                <div class="submit-section">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Address <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        name="address"
                        required
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>City <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        name="city"
                        required
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>State <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        name="state"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Country <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        name="country"
                        required
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label>Zip Code <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        name="zip_code"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Detailed Information -->
              <div class="form-submit">
                <h3>Detailed Information</h3>
                <div class="submit-section">
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label
                        >Description <span class="text-danger">*</span></label
                      >
                      <textarea
                        class="form-control h-120"
                        name="description"
                        required
                      ></textarea>
                    </div>

                    <div class="form-group col-md-4">
                      <label>Building Age (optional)</label>
                      <select
                        id="bage"
                        class="form-control"
                        name="building_age"
                      >
                        <option value="">&nbsp;</option>
                        <option value="0 - 5 Years">0 - 5 Years</option>
                        <option value="6 - 10Years">6 - 10Years</option>
                        <option value="11 - 15 Years">11 - 15 Years</option>
                        <option value="16 - 20 Years">0 - 20 Years</option>
                        <option value="20+ Years">20+ Years</option>
                      </select>
                    </div>

                    <div class="form-group col-md-4">
                      <label>Garage (optional)</label>
                      <select
                        id="garage"
                        class="form-control"
                        name="garage_count"
                      >
                        <option value="">&nbsp;</option>
                        <option v-for="i in 1000" :key="i" :value="i">
                          {{ i }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group col-md-4">
                      <label>Rooms (optional)</label>
                      <select id="rooms" class="form-control" name="room_count">
                        <option value="">&nbsp;</option>
                        <option v-for="i in 1000" :key="i" :value="i">
                          {{ i }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group col-md-12">
                      <label>Other Features (optional)</label>
                      <div class="o-features">
                        <ul class="no-ul-list third-row">
                          <li
                            v-for="feature in Object.keys(propertyFeatures)"
                            :key="feature"
                            ref="features"
                          >
                            <input
                              :id="`a-${feature}`"
                              class="checkbox-custom"
                              :name="`a-${feature}`"
                              type="checkbox"
                              :data-value="feature"
                            />
                            <label
                              :for="`a-${feature}`"
                              class="checkbox-custom-label"
                              >{{ propertyFeatures[feature] }}</label
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contact Information -->
              <div class="form-submit">
                <h3>Contact Information</h3>
                <div class="submit-section">
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label>Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="contact_name"
                        required
                      />
                    </div>

                    <div class="form-group col-md-4">
                      <label>Email</label>
                      <input
                        type="email"
                        name="contact_email"
                        required
                        class="form-control"
                      />
                    </div>

                    <div class="form-group col-md-4">
                      <label>Phone (optional)</label>
                      <input
                        type="text"
                        name="contact_phone"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group col-lg-12 col-md-12">
                <label>GDPR Agreement *</label>
                <ul class="no-ul-list">
                  <li>
                    <input
                      class="checkbox-custom"
                      name="consent"
                      type="checkbox"
                      id="consent"
                      required
                    />
                    <label class="checkbox-custom-label" for="consent"
                      >I consent to having this website store my submitted
                      information so they can respond to my inquiry.</label
                    >
                  </li>
                </ul>
              </div>

              <div class="form-group col-lg-12 col-md-12">
                <button
                  class="btn btn-theme __submit-button"
                  type="submit"
                  :disabled="loading"
                >
                  Submit & Preview
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  middleware: ["auth"],
  async asyncData({ $axios }) {
    let propertyTypes = {};
    let propertyFeatures = {};
    const fetchPropertiesTypes = new Promise((resolve, reject) => {
      $axios
        .$get("/properties/types")
        .then((response) => {
          if (response && response.types) propertyTypes = response.types;

          resolve();
        })
        .catch((e) => reject(e));
    });

    const fetchPropertiesFeatures = new Promise((resolve, reject) => {
      $axios
        .$get("/properties/features")
        .then((response) => {
          if (response && response.features)
            propertyFeatures = response.features;

          resolve();
        })
        .catch((e) => reject(e));
    });

    await Promise.allSettled([fetchPropertiesTypes, fetchPropertiesFeatures]);

    return {
      propertyTypes,
      propertyFeatures,
    };
  },

  data() {
    return {
      loading: false,
      gallery: {
        urls: [],
        files: [],
      },
      errorMessages: {
        gallery: "",
        main: "",
      },
    };
  },
  mounted() {
    this.handleGalleryEvents();
  },
  methods: {
    async handleGalleryEvents() {
      const galleryArea = this.$refs.galleryArea;
      const galleryInput = this.$refs.galleryInput;
      const selectFilesButton = this.$refs.selectFilesButton;

      const handleFileChangeAndDrag = (iFiles) => {
        let files = Array.from(iFiles).filter((el) =>
          /image\/.*/i.test(el.type)
        );
        this.gallery.urls = [];
        this.gallery.files = [];

        files.forEach((file) => {
          let fileReader = new FileReader();

          fileReader.onload = () => {
            this.gallery.urls.push(fileReader.result);
          };
          fileReader.readAsDataURL(file);
        });

        this.gallery.files = files;
      };

      selectFilesButton.addEventListener("click", () => {
        event.preventDefault();
        event.stopPropagation();
        galleryInput.click();
      });

      galleryArea.addEventListener("dragover", () => {
        event.preventDefault();
        galleryArea.classList.add("active");
      });

      galleryArea.addEventListener("dragleave", (event) => {
        galleryArea.classList.remove("active");
      });

      galleryArea.addEventListener("drop", () => {
        event.preventDefault();

        handleFileChangeAndDrag(event.dataTransfer.files);
      });

      galleryInput.addEventListener("change", () =>
        handleFileChangeAndDrag(event.currentTarget.files)
      );
    },
    getSelectedFeatures() {
      let features = [];

      for (let listItem of this.$refs.features) {
        const inputElement = listItem.querySelector("input[type=checkbox]");

        if (inputElement && inputElement.checked) {
          features.push(inputElement.getAttribute("data-value"));
        }
      }

      return features;
    },

    async submit() {
      event.preventDefault();

      if (this.loading) return;

      this.errorMessages.gallery = "";
      this.errorMessages.main = "";

      if (this.gallery.files.length == 0) {
        this.errorMessages.gallery = "Gallery images are required";
        const gallerySection = this.$refs.gallerySection;
        gallerySection.scrollIntoView({ behaviour: "smooth" });
        return;
      }

      //valid data
      const form = this.$refs.form;

      let formData = new FormData(form);

      const features = this.getSelectedFeatures();

      formData.append("other_features", JSON.stringify(features));

      for (let file of this.gallery.files) {
        formData.append("gallery[]", file);
      }

      this.loading = true;
      this.$axios
        .$post("/properties", formData)
        .then((response) => {
          form.reset();
          this.$nuxt.$router.push(`/property/${response.slug}`);
        })
        .catch((e) => {
          if (e.response && e.response.data && e.response.data.message)
            this.errorMessages.main = e.response.data.message;

          this.$el.scrollIntoView({ behavior: "smooth" });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.__submit-button[disabled] {
  background: rgb(94, 94, 94);
  cursor: progress;
  border: none;

  &:hover,
  &:active,
  &:focus {
    background: rgb(94, 94, 94);
    cursor: progress;
    border: none;
  }
}
#gallery-area {
  .dropzone {
    border: 2px dashed rgba(0, 0, 0, 0.3);
  }
  .__show-active {
    display: none;
  }
  &.error {
    .dropzone {
      border-color: red !important;
    }
  }
  &.active {
    .dropzone {
      border: 2px solid rgba(0, 0, 0, 0.3);
    }
    .__show-active {
      display: inline;
    }

    .__show-inactive {
      display: none;
    }
  }

  .__image-wrapper-container {
    display: flex;
    gap: 1rem;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: auto;
    .__image-wrapper {
      // height: 100%;
      height: 250px;
      border-radius: 5px;
      // overflow: hidden;

      img {
        height: 100%;
        max-height: 100%;
        // width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>