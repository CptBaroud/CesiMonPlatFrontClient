<template>
  <v-container fluid>
    <v-row>
      <v-col
        lg="8"
        md="12"
      >
        <!--<v-card
          class="my-4"
          color="secondary"
          rounded="xl"
        >
          <v-card-title>
            Faite vous livrer Adresse Albert de Mun
          </v-card-title>
        </v-card>-->
        <v-card
          flat
          color="background"
        >
          <v-card-title>
            Tout les restaurants
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <v-hover
                  v-slot="{ hover }"
                >
                  <v-card
                    rounded="xl"
                    class="px-8"
                    :color="hover ? 'primary' : 'secondary'"
                    :elevation="hover ? 4 : 0"
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
                            Nom du restaurant
                          </v-list-item-title>
                          <v-list-item-subtitle :style="hover ? 'color: var(--v-textLight-base)' : ''">
                            Fast-food
                          </v-list-item-subtitle>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orderDrawer: true
    }
  }
}
</script>
