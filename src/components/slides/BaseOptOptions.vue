<template>
<div class="inline-block my-8 w-5/6 mx-auto">
<label class=" text-left m-2" style="max-width: 400px;">
  <span class="text-gray-700 mt-6 text-xl font-bold">انتخاب زمینه فعالیت مجموعه</span>
  <select class="form-select block w-full p-2 m-4 text-lg items-center border-2 border-gray-400 rounded-xl bg-blue-200 text-purple-800" v-model="selected" @click="option">
      <option disabled value="">یک زمینه را انتخاب نمایید </option>
      <option v-for="item in items" :key="item">{{ item.name }}</option>

      
  </select>
  <span class="m-4">از بین گزینه های زیر گزینه مدنظر خود را انتخاب کنید و در غیر اینصورت گزینه سایر را انتخاب کنید</span>
</label>
<h1 class="backdrop-blur-lg bg-green-300 m-4" v-if="selected !== null">انتخاب شده {{selected}}</h1>
</div>
</template>
<script>
export default {
  props:['items'],
  data() {
    return {
      selected:null,
    }
  },
  methods: {
    option(){
      this.$emit('selected',this.selected);
    }
  },

}
</script>