<template>
<p class="bg-red-900 text-white">{{userData}}</p>
  <router-link to="/contact">Contact</router-link>
  <router-view/>
</template>

<script>
import {computed, reactive, toRefs} from "vue";
import {useStore} from "vuex";

export default {
   
      setup(){
          const store =useStore();
          const data =reactive({
              userData:computed(()=>store.state.text),
          });
          return{
              ...toRefs(data),
          }
      }
}
</script>

<style>

</style>