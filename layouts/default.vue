<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      mini-variant-width="5em"
      fixed
      color="secondary"
      elevation="0"
      app
    >
      <v-list
        rounded
        class="my-4"
      >
        <img
          v-if="!miniVariant"
          width="128"
          height="64"
          class="ml-4 mt-8 mb-8"
          alt="Login"
          src="https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"
        >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          exact-active-class="selected"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      width="25em"
      color="secondary"
      absolute
      permanent
      right
      app
    >
      <v-toolbar
        class="px-4 mt-8"
        style="transition: background-color 0s"
        flat
        color="secondary"
      >
        <v-spacer />
        <v-btn
          class="mr-2"
          icon
          @click="switchTheme()"
        >
          <v-icon>
            mdi-brightness-4
          </v-icon>
        </v-btn>
        <template class="d-block justify-end align-end">
          <v-menu open-on-hover bottom offset-y max-height="300">
            <template #activator="{ on, attrs }">
              <v-badge
                :content="2"
                style="border-color: var(v--background-color)"
                :value="2"
                class="mr-4"
                color="green"
                bordered
                overlap
              >
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-bell
                </v-icon>
              </v-badge>
            </template>
            <!--<v-list rounded color="secondary" max-width="375">
                <template v-for="(item, a) in notification">
                  <notification
                    :key="a"
                    :notification="item"
                  />
                </template>
                <v-list-item to="/notifications" class="d-flex justify-center">
                  <v-list-item-content>
                    <v-list-item-title>
                      En voir plus
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>!-->
          </v-menu>
          <v-list color="secondary" dense rounded class="mr-8">
            <v-menu open-on-hover bottom offset-y>
              <template #activator="{ on, attrs }">
                <v-list-item
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-list-item-avatar style="border: solid var(--v-primary-base) 2px">
                    <v-img src="https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Prescription01&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Side&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Light" />
                  </v-list-item-avatar>
                  <v-list-item-title v-if="on">
                    <h3>Gurvan</h3>
                  </v-list-item-title>
                </v-list-item>
              </template>
              <v-list rounded color="background">
                <v-list-item
                  disabled
                >
                  <v-list-item-title>Mon compte</v-list-item-title>
                </v-list-item>
                <v-list-item
                  disabled
                >
                  <v-list-item-title>Deconnexion</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list>
        </template>
      </v-toolbar>
      <v-card
        class="pt-6"
        flat
        color="secondary"
        rounded="xl"
      >
        <v-card-title>
          <v-list-item>
            <v-list-item-title class="text-h5 font-weight-bold">
              Votre Commande
            </v-list-item-title>
            <v-list-item-action>
              <v-btn
                color="primary"
                small
                icon
              >
                <v-icon
                  small
                >
                  mdi-cart
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card-title>
        <v-card-text class="my-4">
          <orderCard />
        </v-card-text>
        <v-card-actions class="mt-8">
          <v-row
            align="center"
            justify="end"
            class="mb-16"
          >
            <p class="text-h6">
              <span class="font-weight-bold">Total: </span>5.95<span style="color: var(--v-primary-base)">€</span>
            </p>
          </v-row>
          <v-row
            align="center"
            justify="end"
          >
            <v-btn
              color="primary"
              large
              rounded
            >
              Acheter
            </v-btn>
            <v-btn
              text
              large
              rounded
            >
              Annuler
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar
      class="px-4 mb-8 mt-8"
      style="transition: color 0s"
      fixed
      flat
      absolute
      app
      color="background"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer />
      <v-autocomplete
        rounded
        filled
        label="Rechercher un plat ou un restaurant"
        prepend-inner-icon="mdi-magnify"
        hide-details
      />
    </v-app-bar>
  </v-app>
</template>

<script>
import orderCard from '../components/orderCard'

export default {
  components: {
    orderCard
  },
  data () {
    return {
      drawer: false,
      orderDrawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        }
      ],
      miniVariant: true,
      title: 'Cesi Shop'
    }
  },
  computed: {
    order: {
      get () {
        return this.$store.getters['order/order']
      }
    }
  },
  methods: {
    switchTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped>
>>> .v-dialog {
  box-shadow: none;
}
/*Arriere plan de l'application*/

.theme--dark.v-application {
  background: var(--v-background-base);
}
.theme--light.v-application {
  background: var(--v-background-base);
}
/*Couleur du drawer*/
.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
  background-color: rgba(255, 255, 255, 0);
}
.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
  background-color: rgba(255, 255, 255, 0);
}
>>> .v-navigation-drawer__border {
  height: 0;
  width: 0;
}
</style>
