<template>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push1">Push</button>
  <button type="button" @click="replace">Replace</button>
  <button type="button" @click="go">Go</button>
  <hr/>
  <button type="button" @click="addRoute">新增路由</button>
  <button type="button" @click="push2">前往新增路由的目標頁面</button>
</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄
    push1 () {
      // this.$router.push({
      //   name: 'home'
      // })
      // or
      this.$router.push('namedView/2ba')
    },
    push2 () {
      this.$router.push('/newcreateRandomProfile')
    },
    // 沒有歷史紀錄
    replace () {
      this.$router.replace({ name: 'about' })
    },
    // 操作歷史紀錄
    go () {
      this.$router.go(-1) // 參數輸入的是一個實數，正值或負值皆可，用來操作 上/下一頁
    },
    // 取得常用參數
    getRoute () {
      // 取得路由的屬性
      // 範例：this.$route.fullPath (目前網址)
      console.log(this.$route)
      // 呼叫路由的方法
      // 範例：this.$router.go(-1) (回到前一頁)
      console.log(this.$router)
    },
    // 延伸介紹
    addRoute () {
      this.$router.addRoute({
        path: '/routerNavigation/newcreateRandomProfile',
        component: () => import('../views/CreateRandomProfile.vue')
      }) // 用於如果臨時要額外新增一個新路由時，輸入方法和路由表的內容相同
    }
  }
}
</script>
