<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="300"
    >
      <v-card>
        <v-card-title class="text-h5">
          Snippet Solution
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-btn
                class="my-4"
                color="primary"
                dark
                block
                >
                <v-icon dark small> mdi-google </v-icon>&#160; Continue With Google
                </v-btn>
                <v-btn
                class="my-4"
                color="black"
                dark
                block
                >
                <v-icon dark small> mdi-github </v-icon>&#160; Continue With GitHub
                </v-btn>
            </v-row>
          </v-container>
          <small>By continuing you agree to our terms and conditions</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cancle
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
        openModal(){
            this.dialog = true
        }
    }
  }
</script>