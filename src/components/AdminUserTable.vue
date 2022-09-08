<template>
  <tr>
    <td class="image">
      <img :src="users.image" />
    </td>
    <td class="date">
      {{ users.name }}
    </td>
    <td class="email">
      {{ users.create_date }}
    </td>
    <td class="email">
      {{ users.descriptions }}
    </td>
    <td class="email">
      {{ users.category }}
    </td>
    <td>
      <button
        type="button"
        data-bs-toggle="modal"
        :data-bs-target="`#editusers` + users.users_id"
      >
        edit
      </button>
    </td>
    <td>
      <i
        @click="this.$store.dispatch('deleteusers', users.users_id)"
        class="fa-solid fa-trash-can"
      ></i>
    </td>
    <!-- <td><button @click="deleteusers(users.id)">Delete</button></td> -->
    <!-- <td class="commenter"><i class="fas fa-angle-down"></i></td>
    <td class="activeUser"><i class="fas fa-angle-down"></i></td> -->
    <editprod :users="users" />
  </tr>
</template>
<script>
import editprod from "./editprod.vue";
export default {
  props: ["users"],
  components: {
    editprod,
  },
  methods: {
    deleteusers(id) {
      return this.$store.dispatch("deleteusers", id);
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
