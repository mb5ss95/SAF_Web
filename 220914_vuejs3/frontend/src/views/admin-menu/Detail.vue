<template>
  <div>
    <b-card
    v-id="data"
    :title="data.name"
    :img-src="setImage()"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2 detail-card"
    >
    <b-card-text>
      {{data.description}}
    </b-card-text>

    <b-button v-on:click="moveRegister" href="#" variant="primary">수정하기</b-button>
    <b-button v-on:click="deleteMenu" href="#" variant="danger">삭제</b-button>
    <b-button v-on:click="moveList" href="#" variant="outline-primary">목록</b-button>
    
    </b-card>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  data(){
    return{
      data:{}
    }
  },
  async created(){
    console.log(this.$route);
    console.log(this.$route.params);
    const result = await api.menus.findOne(this.$route.params.id);
    console.log(result);
    this.data = result.data;
  },

  methods:{
    setImage(){
      return `http://3.36.112.248:8080/${this.data.image_src}`;
    },
    moveRegister(){
      this.$router.push(`/admin/menus/register/${this.$route.params.id}`);
    },
    async deleteMenu(){
      console.log("삭제")
    },
    moveList(){
      this.$router.push("/admin/menus");
    }
  }

}
</script>

<style>

</style>
