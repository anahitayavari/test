<script>
export default {
  name: "News_Item",
  props:['title','image','description'],
}
</script>

<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="text-center">
        <img width="320" :src="image" alt="">
      </div>
      <div class="mt-3">
        <h6>{{title}} </h6>
      </div>
      <div class="mt-1">
        {{ description }}
      </div>
      <a href="" class="btn btn-primary btn-sm float-end">مشاهده خبر</a>
    </div>
  </div>
</template>

<style scoped>

</style>