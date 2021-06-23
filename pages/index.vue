<template>
  <v-container fluid>
    <v-row>
      <v-col
        lg="12"
        md="12"
      >
        <v-card
          flat
          color="background"
        >
          <v-card-title>
            Les restaurants par catégories
          </v-card-title>
          <v-card-text>
            <v-data-iterator
              :items="restaurantCategory"
              no-data-text="Il n'y a pas encore de catégories implémentées"
              no-results-text="Aucune catégorie ne correspond a votre recherche"
            >
              <template #default="{items}">
                <v-row>
                  <v-col
                    v-for="item in items"
                    :key="item._id"
                    cols="2"
                  >
                    <v-hover
                      v-slot="{ hover }"
                    >
                      <v-card
                        rounded="xl"
                        class="px-8"
                        :color="hover ? 'primary' : 'secondary'"
                        :elevation="hover ? 4 : 0"
                        :to="'/restaurant?category=' + item.name"
                      >
                        <v-card-title style="justify-content: center" class="pt-8">
                          <v-avatar
                            :color="hover ? 'secondary' : 'primary'"
                            elevation="0"
                            size="64"
                          >
                            <v-icon :color="hover ? 'primary' : 'secondary'" large>
                              mdi-chevron-right
                            </v-icon>
                          </v-avatar>
                        </v-card-title>
                        <v-card-title style="justify-content: center" class="px-4">
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title :style="hover ? 'color: var(--v-textLight-base)' : ''">
                                {{ item.name }}
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card-title>
                        <v-card-actions style="justify-content: center">
                          <v-btn
                            :color="hover ? 'secondary' : 'primary'"
                            elevation="0"
                            fab
                            x-small
                          >
                            <v-icon :color="hover ? 'primary' : 'secondary'">
                              mdi-chevron-right
                            </v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-card-text>
        </v-card>
        <v-card
          flat
          color="background"
        >
          <v-card-title>
            Tout les restaurants
          </v-card-title>
          <v-card-text>
            <v-data-iterator
              :items="restaurant"
              no-data-text="Il n'y a pas encore de restaurants"
              no-results-text="Aucun restaurant ne correspond a votre recherche"
            >
              <template #default="{items}">
                <v-row>
                  <v-col
                    v-for="item in items"
                    :key="item._id"
                    cols="3"
                  >
                    <restaurant-card
                      :item="item"
                    />
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import restaurantCard from '../components/restaurantCard'

export default {
  components: {
    restaurantCard
  },
  data () {
    return {
      orderDrawer: true
    }
  },
  computed: {
    restaurantCategory: {
      get () {
        return this.$store.getters['category/restaurantCategories']
      }
    },

    restaurant: {
      get () {
        return this.$store.getters['restaurant/restaurant']
      }
    }
  }
}
</script>
