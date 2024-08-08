<script>
import News_Item from "@/components/index/News_Item.vue";

export default {
  name: "Index",
  data(){
    return{
      news :[
        {
          title : "خبر شماره یک",
          image : "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg",
          description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
          title : "خبر شماره do",
          image : "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
          description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
          title : "خبر شماره se",
          image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDFp3dmPTGj1xOEuSlAt-ilTfBOmYfth5hQ&s",
          description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        }
      ]


    }
  },
  components: {
    'news_item' : News_Item
  }
}
</script>

<template>

  <div class="mt-4 row">
    <div v-for="item in news" class="col-md-3">
      <news_item :title="item.title" :image="item.image" :description="item.description"></news_item>

    </div>

  </div>

</template>

<style scoped>

</style>