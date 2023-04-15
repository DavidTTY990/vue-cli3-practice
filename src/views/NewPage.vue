<template>
  <div>
    這是一個新增的頁面！是一個全新的元件。
    <img
      src="https://i.pinimg.com/originals/27/1b/32/271b32daaaed620be3f5155c8db82a14.jpg"
      alt="BMW E30 Touring"
      class="newpage-cover"
    />
  </div>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newPage/ComponentA" class="list-group-item list-group-item-action">
          Mercedes 190E "The Champion of DTM"
        </router-link>
        <router-link to="/newPage/ComponentB" class="list-group-item list-group-item-action">
            BMW E39 M5 "The First M5 of All Times"
        </router-link>
        <router-link to="/newPage/NamedView/2ba" class="list-group-item list-group-item-action">命名 router 2ba</router-link>
        <router-link to="/newPage/NamedView/2ab" class="list-group-item list-group-item-action">命名 router 2ab</router-link>
      </div>
    </div>
    <div class="col-8">
        <router-view></router-view>
    </div>
  </div>

  <!-- <div> -->
  <!-- <router-link to="/newPage/ComponentA">元件A</router-link>
    <router-link to="/newPage/ComponentB">元件B</router-link> -->
  <!-- </div> -->
</template>

<style>
.newpage-cover {
  width: 100%;
}

.col-4 {
  margin-top: 23px;
}
</style>
