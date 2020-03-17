<template>
  <v-app
    id="inspire"
    dark
  >
    
    <v-toolbar
      color="gray"
      dense
      fixed
      clipped-left
      app
    >
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">YCode Assignment</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-toolbar>
    <v-content>
      <v-container>
        <transition name="fade">
            <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      
    }),
    props: {
      source: String
    },
    mounted(){
        
    },
    methods: {
    }
  }
</script>