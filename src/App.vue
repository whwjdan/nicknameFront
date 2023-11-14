<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <router-view/>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>

import AppBar from "@/components/AppBar.vue";

export default {
  name: 'App',
  components: {
    AppBar
  },
  data: () => ({
    //
  }),
}
</script>
