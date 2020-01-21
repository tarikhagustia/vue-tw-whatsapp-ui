<template>
  <div class="container mx-auto bg-white chat-app relative flex flex-row shadow-lg flex mb-10">
    <div class="w-1/3 flex flex-col">
      <div class="bg-gray-300">
        <div class="p-2 flex items-center">
          <div class="w-3/4">
            <img class="rounded-full h-12" src="https://randomuser.me/api/portraits/men/34.jpg" />
          </div>
          <div class="icon-action w-1/4 flex justify-between mr-3">
            <font-awesome-icon icon="spinner" class="text-xl text-gray-600" />
            <font-awesome-icon icon="comment-dots" class="text-xl text-gray-600" />
            <font-awesome-icon icon="ellipsis-v" class="text-xl text-gray-600" />
          </div>
        </div>
      </div>
      <div class="bg-gray-200 p-2">
        <input
          class="w-full bg-white p-2 rounded-full outline-none"
          placeholder="Search or start new chat"
        />
      </div>
      <div class="overflow-auto h-full">
        <ChatUser v-for="(item, key) in chats" :key="key" :chat="item" />
      </div>
    </div>
    <div class="w-2/3">

      <ChatBox />
    </div>
  </div>
</template>

<script>
import ChatUser from '@/components/ChatUser'
import ChatBox from '@/components/ChatBox'
const chats = []

for (let i = 1; i < 20; i++) {
  chats.push({
    avatar_url: `https://randomuser.me/api/portraits/men/${i}.jpg`,
    name: `Fulan ${i}`,
    last_message: `Hi bro, ini gw Fulan ${i}. Gimana utang lo yang kmren ?`,
    last_reply: 'yesterday'
  })
}
export default {
  components: {
    ChatUser,
    ChatBox
  },
  data () {
    return {
      chats
    }
  }
}
</script>

<style lang="scss">
.chat-app {
  height: calc(100vh - 38px);
  top: 19px;
  width: 1396px;
}
.bg {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.06;
  background-image: url("../assets/bg-chat-tile.png");
}
</style>
