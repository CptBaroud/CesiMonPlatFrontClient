<template>
  <v-container fluid>
    <v-row>
      <v-col
        lg="9"
        md="12"
      >
        <v-card
          flat
          color="background"
        >
          <v-card-title>
            Nom du restaurant
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="2">
                <v-hover
                  v-slot="{ hover }"
                >
                  <v-card
                    rounded="xl"
                    :color="hover ? 'accent' : 'secondary'"
                    :elevation="hover ? 4 : 0"
                  >
                    <v-card-title style="justify-content: center" class="pt-8">
                      <v-avatar
                        :color="hover ? 'secondary' : 'accent'"
                        elevation="0"
                        size="64"
                      >
                        <v-icon :color="hover ? 'accent' : 'secondary'" large>
                          mdi-chevron-right
                        </v-icon>
                      </v-avatar>
                    </v-card-title>
                    <v-card-title style="justify-content: center">
                      <v-list-item color="text-white">
                        <v-list-item-content>
                          <v-list-item-title>
                            Nom du restaurant
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            Fast-food
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card-title>
                    <v-card-actions style="justify-content: center">
                      <v-btn
                        :color="hover ? 'secondary' : 'accent'"
                        elevation="0"
                        fab
                        x-small
                      >
                        <v-icon :color="hover ? 'accent' : 'secondary'">
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
  name: 'IndexDev'
}
</script>

<style scoped>

</style>
