<template>
  <tr>
    <td class="image">
      <img :src="event.Img" />
    </td>
    <td class="date">
      {{ event.Title }}
    </td>
    <td class="email">
      {{ event.Date }}
    </td>
    <td class="email">
      {{ event.Description }}
    </td>
    <td class="email">
      {{ event.Type }}
    </td>
    <td><i  @click="deleteEvent(event.id)" class="fa-solid fa-trash-can"></i></td>
    <!-- <td><button @click="deleteEvent(event.id)">Delete</button></td> -->
    <!-- <td class="commenter"><i class="fas fa-angle-down"></i></td>
    <td class="activeUser"><i class="fas fa-angle-down"></i></td> -->
  </tr>
</template>
<script>
export default {
  props: ["event"],
  methods: {
    deleteEvent(id) {
      return this.$store.dispatch("deleteEvent", id);
    },
  },
};
</script>
<style scoped>
img,
svg {
  vertical-align: middle;
  width: 80px;
  height: 50px;
}
</style>
>
