

<template>

  <v-app-bar>
  <v-toolbar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title class="flex text-center"></v-toolbar-title>
    <v-dialog>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text="로그인"> </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            <LoginModal></LoginModal>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-toolbar>
  </v-app-bar>
</template>



<script>
import LoginModal from "@/components/Login.vue";
export default {
  name: "AppBar.vue",
  components: {LoginModal},
}
</script>

<style scoped>

</style>