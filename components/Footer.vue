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
        Snippet solution is a notes saving tool aimed for software developer to fasten their coding skills while helping them with a snippet to their problems that are hard to find even on the internet. The focus of snippet solution is to provide solutions for problems you face while coding at your office, at your home for your own software, a simple or complex college project or even logical programs. Being a real developer means helping people with your skill so do become a member and help people to find answer of the problem you face while working.
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
      <router-link
        :to="link.path"
        tag="v-btn"
      >
        {{ link.name }}
      </router-link>
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
                {name: 'Home', path: '/' },
                {name: 'About Us', path: '/About'},
                {name: 'Team', path: '/Team'},
                {name:'FAQ', path: '/Faqs'},
                {name: 'Contact Us', path: '/Contact'}
            ],
        }
    }
}
</script>