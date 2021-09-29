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
          <agent-strip-widget
            @toggle-active="toggleActive($event)"
            :agent="agent"
            v-for="agent in agents"
            :key="agent.id"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
		<!-- New Js -->
<script>
import AgentStripWidget from "~/components/widgets/AgentStripWidget.vue";
export default {
  components: { AgentStripWidget },
  layout: "dashboard",
  data: () => ({
    agentsPaginationData: {
      data: [],
    },
  }),
  async asyncData({ $axios }) {
    let agentsPaginationData = {
      data: [],
    };

    const fetchAgents = new Promise((resolve, reject) => {
      $axios
        .$get("/users/agents")
        .then((response) => {
          if (response.agents) agentsPaginationData = response.agents;
          resolve();
        })
        .catch((e) => reject(e));
    });

    await Promise.allSettled([fetchAgents]);

    return { agentsPaginationData };
  },
  methods: {
    gotoPage(path) {
      event.preventDefault();
      this.$nuxt.$router.push(path);
    },
    toggleActive(newAgent) {
      if(!(newAgent && newAgent.id)) return
      const agentId = newAgent.id

      const index = (this.agentsPaginationData.data || []).findIndex(
        (el) => el.id == agentId
      );

      // debugger

      if (index < 0) return;
      let agents = [...this.agents];

      agents.splice(index, 1, newAgent);

      Object.assign(this.agentsPaginationData, { data: agents });
    },
  },
  computed: {
    agents() {
      return this.agentsPaginationData.data || [];
    },
  },
};
</script>
