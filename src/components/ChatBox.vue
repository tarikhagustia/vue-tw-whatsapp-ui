<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center p-2 bg-gray-300 z-50">
      <div class="flex-none">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          class="rounded-full h-12 w-12 mr-2"
        />
      </div>
      <div class="w-5/6">
        <h3 class="text-gray-700">Jogn Due</h3>
        <small class="text-gray-600">Last seen today at 11.00 pm</small>
      </div>
      <div class="w-1/6 flex justify-between mr-5">
        <font-awesome-icon icon="search" class="text-xl text-gray-600" />
        <font-awesome-icon icon="paperclip" class="text-xl text-gray-600" />
        <font-awesome-icon icon="ellipsis-v" class="text-xl text-gray-600" />
      </div>
    </div>
    <div class="flex-grow chat-area overflow-auto">
      <div
        class="flex mt-4 ml-20 mr-20 mb-2"
        v-for="(item, key) in chats"
        :key="key"
        :class="{'justify-end': item.me}"
      >
        <div class="p-2 rounded-lg text-sm text-gray-900" :class="{'bg-green-200': item.me, 'bg-white': !item.me}">
          <p>
            {{item.message}}
            <span class="inline text-xs text-gray-500 ml-3">11.00 pm</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex p-4 bg-gray-200 justify-center justify-center items-center">
      <font-awesome-icon icon="grin" class="flex-none text-xl text-gray-600" />
      <input class="outline-none flex-grow mx-2 p-2 rounded-full text-gray-600 text-sm" v-model="message" placeholder="Type a message">
      <font-awesome-icon :icon="icon" class="text-xl text-gray-600" />
    </div>
  </div>
</template>

<script>
const chats = [
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Hi gan, gimana tailwind mantap tydact?' },
  { me: false, message: 'Mantap gan, ' },
  { me: true, message: 'Ok sip gan' },
  { me: false, message: 'hehe' },
  { me: true, message: 'hihi' }
]
export default {
  data () {
    return {
      chats,
      message: ''
    }
  },
  computed: {
    icon () {
      return this.message === '' ? 'microphone' : 'paper-plane'
    }
  }
}
</script>

<style>
.chat-area {
  opacity: 1 !important;
  background-color: #e5ddd5;
}
</style>
