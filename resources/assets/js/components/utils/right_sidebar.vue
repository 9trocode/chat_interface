<template>
  <section class="rightbar">
    <ul class="nav ">
      <li class="nav-list"><a class="nav-link" href="#"><i class="fa fa-users"></i></a></li>
      <li class="nav-list"><a class="nav-link" href="#"><i class="fa fa-at"></i></a></li>
      <li class="nav-list"><a class="nav-link" href="#"><i class="fa fa-bell"></i></a></li>
      <li class="nav-list"><a class="nav-link" href="#"><i class="fa fa-thumb-tack"></i></a></li>
    </ul>
    <section class="profile ml-12 mt-32">
      <div v-for="i in 5" :key="i" class="user flex align-items-center mb-24">
        <img
          class="user__avatar"
          src="../../sass/avatars/Avatar1.png"
          alt="User_Avatar"
        />
        <span class="ml-8 user__name">Ivan Bryan</span>
        <span class="ml-4 has__joined">has joined</span>
      </div>

    </section>
  </section>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style lang="sass" scoped>
  @import "../../sass/components/RightSideBar"
</style>
