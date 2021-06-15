<template>
  <v-card
    rounded="lg"
    color="background"
    flat
  >
    <v-card-title>
      Shop
    </v-card-title>
    <v-card-text>
      <v-data-iterator
        :items="shopItem"
        :search="search"
        :items-per-page="5"
      >
        <template #header>
          <v-text-field
            v-model="search"
            color="primary"
            clearable
            flat
            filled
            rounded
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Recherche"
          />
          <v-spacer />
        </template>

        <template #default="props">
          <v-row class="mt-8">
            <v-col
              v-for="item in props.items"
              :key="item.title"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card
                color="secondary"
                flat
                rounded="lg"
                class="px-4"
              >
                <v-card-subtitle>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-img height="256" width="324" :src="item.picture" />
                    </v-col>
                  </v-row>
                </v-card-subtitle>
                <v-card-title class="subheading font-weight-bold">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-light">
                        {{ item.category }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-chip color="background">
                        {{ item.price }} €
                      </v-chip>
                    </v-list-item-action>
                  </v-list-item>
                </v-card-title>
                <v-card-text>
                  <v-row class="mb-2">
                    <v-col v-for="(color, i) in item.colors" :key="i" cols="1" class="mr-1">
                      <v-badge
                        :color="color"
                      />
                    </v-col>
                  </v-row>
                  <span> {{ item.description }}</span>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    rounded
                    color="primary"
                    @click="addToCart(item)"
                  >
                    Ajouter au panier
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  computed: {
    cart: {
      get () {
        return this.$store.getters['cart/cart']
      }
    },

    shopItem: {
      get () {
        return this.$store.getters['shop/item']
      }
    }
  },
  mounted () {
    this.$store.dispatch('shop/fetch')
  },
  methods: {
    addToCart (item) {
      this.$store.commit('cart/addCart', item)
    }
  }
}
</script>
