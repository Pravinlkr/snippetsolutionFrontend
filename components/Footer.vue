<<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="gray white--text text-center mt-3"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text" style="padding:1% 15%;">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-row justify="center"
      no-gutters> 
          <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      </v-row>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} — <strong>Snippet Solution</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data(){
        return{
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin'
            ],
            links: [
                'Home',
                'About Us',
                'Team',
                'FAQ',
                'Contact Us',
            ],
        }
    }
}
</script>