<template>
  <tr>
    <td class="property-container">
      <img :src="profilePhoto" alt="" />
      <div class="title">
        <h4>
          <a href="#">{{ agent.name }}</a>
        </h4>
        <span>{{ agent.address }}</span>
        <span class="table-property-price"
          >{{ agent.properties_count }} Propert{{
            agent.properties_count == 1 ? "y" : "ies"
          }}</span
        >
      </div>
    </td>
    <td class="action">
      <a href="#" class="delete" @click.prevent="toggleActive"
        ><i class="ti-close" v-show="agent.is_active"></i>
        <i class="ti-thumb-up" v-show="!agent.is_active"></i>
        {{ agent.is_active ? "Disable" : "Enable" }}</a
      >
    </td>
  </tr>
</template>

<script>
export default {
  name: "AgentStripWidget",
  props: {
    agent: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    toggleActive() {
      event.preventDefault();

      if (this.loading) return;
      let self = this
      this.$axios
        .$post(`/users/agents/${this.agent.id}/toggle-active`)
        .then(response => {
          this.$emit("toggle-active", response.user);
        })
        .catch(err => {
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    profilePhoto() {
      return (
        process.env.baseUrl.replace(/\/$/, "") +
        "/" +
        (this.agent.profile_photo || "").replace(/^\//, "")
      );
    },
  },
};
</script>
