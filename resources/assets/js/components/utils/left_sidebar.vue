<template>
  <section class="leftbar">
    <div class="padded">
        <span class="title">CHAT<span class="title_sub">YARD</span></span>
    </div>

    <section class="profile padded">
      <div class="user">
        <img
          class="user__avatar"
          src="../../sass/avatars/Avatar.png"
          alt="User_Avatar"
        />
        <span class="ml-8 user__name">Ivan Bryan</span>
        <label class="dropdown">
          <div class="dd-button">
            <i class="fa fa-angle-down ml-4"></i>
          </div>
        </label>

      </div>

      <div class="online__status">
        <i class="fa fa-circle"></i>
      </div>
    </section>

    <section class="direct__message">
      <div class="section__top ">
        <div class="section">
          <span class="section__header">Direct Messages</span>
          <i class="fa fa-plus"></i>
        </div>
      </div>

      <div class="profile__container">
        <div class="profiles">
          <div>
            <div v-for="i in 20" 
            :class="profile_select_id === i ? 'profile active' : 'profile'" 
            v-on:click="() => selectId('profile',i)"
            :key="i">
              <div class="user">
                <img
                  class="user__avatar"
                  src="../../sass/avatars/Avatar.png"
                  alt="User_Avatar"
                />
                <span class="ml-8 user__name">Ivan Bryan</span>
              </div>

              <div class="online__status" :class="{'offline': i%2 == 0}">
                <i class="fa fa-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="channels">
      <div class="section mb-4">
        <span class="section__header">Channels</span>
        <i class="fa fa-plus"></i>
      </div>

      <ul class="hashtag">
        <li v-for="(channel, i) in channels"
         :class="channel_select_id === i ? 'list active' : 'list'"
         v-on:click="() => selectId('channel',i)"
         :key="i">
          <div>
            <span class="hash mr-8">#</span><span>{{channel}}</span>
          </div>

          <div v-show='i%2 == 0' class="ellipse">
            <span class="ellipse_text">1</span>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        channels: ['Relationship', 'Sport', 'Entertainment', 'Tech', 'SavagePosts', 'Lifestyle', 'Travels'],
        profile_select_id: '',
        channel_select_id: '',
      };
    },
    methods: {
      selectId(type, value) {
        if (type === 'profile') {
            this.profile_select_id = value
        } else {
          this.channel_select_id = value
        }
      }
    }
  };
</script>
<style lang="sass" scoped>
  @import "../../sass/components/LeftSideBar"
</style>
