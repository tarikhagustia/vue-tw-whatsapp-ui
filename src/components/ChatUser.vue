<template>
  <div class="flex p-2 border-b-2 border-gray-200 pb-4 hover:bg-gray-300 cursor-pointer">
    <div class="w-1/6">
      <img :src="chat.avatar_url" class="rounded-full h-12 w-12  mx-auto">
    </div>
    <div class="w-3/6">
      <h3 class="text-lg text-gray-600">{{chat.name}}</h3>
      <p class="text-sm text-gray-500 truncate">{{chat.last_message}}</p>
    </div>
    <div class="w-2/6 text-right text-sm text-gray-500">{{chat.last_reply}}</div>
  </div>
</template>

<script>
export default {
  props: {
    chat: Object
  }
}
</script>
