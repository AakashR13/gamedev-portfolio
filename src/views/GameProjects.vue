<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      Here are some projects I've made in Unreal Engine 5, mostly personal projects.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
