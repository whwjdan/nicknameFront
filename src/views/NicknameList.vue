<template>
  <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col
            v-for="(item, index) in visiblePages"
            :key="index"
            cols="3"
            md="3"
            xl="3"
        >
          <v-card class="mt-4 mb-4 mx-auto" max-width="200">
            <v-img class="white--text align-end" height="150px"
                   :lazy-src="item.image">
              <v-card-title>{{item.nickname}}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>{{item.price}}원</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  <v-pagination
      v-model="page"
      :length="Math.ceil(pages.length/perPage)"
  ></v-pagination>
</template>

<script>

import axios from "axios";

//var url = "https://randomuser.me/api/?results=20"
var url = "/api/nickname"

export default {
  name: 'App',
  data () {
    return {
      page: 1,
      perPage: 8,
      pages: []
    }
  },
  created: function () {
    this.getUsers()
  },
  methods:{
    getUsers(){
      axios.get(url)
          .then(res =>
  { this.pages = res.data})
          .catch(error => {
            console.log(error)
          })
    }
  },
  computed: {
    visiblePages () {
      return this.pages.slice((this.page - 1)* this.perPage, this.page* this.perPage)
    }
  }
}

</script>