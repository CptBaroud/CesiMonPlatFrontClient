<template>
  <v-card
    rounded="xl"
    color="secondary"
    flat
    :to="'/restaurant/' + item._id"
  >
    <v-img :src="item.picture ? item.picture : 'http://localhost:3000/svg/Hinterrhein.svg'" height="130" />
    <v-card-title>
      {{ item.name }}
    </v-card-title>
    <v-card-subtitle style="padding-top: 0">
      {{ item.type }}
    </v-card-subtitle>
    <v-card-text>
      {{ item.description }}
      <v-chip-group
        v-if="item.tags.length > 1"
      >
        <v-chip
          v-for="(tag, i) in item.tags"
          v-show="i >= 1"
          :key="i"
        >
          <v-icon>
            {{ tag.icon }}
          </v-icon>
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: {
    item: {
      type: Object,
      default () {
        return {
          _id: '',
          name: '',
          type: '',
          tags: [
            {
              icon: '',
              name: ''
            }
          ],
          description: '',
          picture: 'http://localhost:3000/images/pizza1.png'
        }
      },
      required: true
    }
  }
}
</script>

<style scoped>

</style>
