<template>
  <base-card>
    <transition-group name="slide" mode="in-out">
      <div v-show="current === 1" key="1">
        <base-opt @selected="selectedOption" :items="optionData"></base-opt>
        <p v-if="isLoading" class=" text-green-600 backdrop-blur-xl">در حال بارگزاری</p>
      <p v-else-if="!isLoading && error" class=" text-red-800">خطا : {{ error }}</p>
      <p
        v-else-if="!isLoading && (!results || results.length === 0)"
      >اطلاعاتی یافت نشد.</p>
      </div>
      <div v-show="current === 2" key="1" class="mt-10">
        <music-player></music-player>
      </div>
      <div
        v-show="current === 3"
        key="1"
        class="mt-10 flex flex-row justify-center"
      >
        <date-picker inline="true" placeholder="انتخاب تاریخ"></date-picker>
      </div>

      <span class=" float-right" key="span">
        <base-button
          class="float-right"
          @click="next"
          state="next"
          v-show="current < 3"
        >
          بعدی
        </base-button>
        <base-button class="float-left" @click="prev" v-show="current >= 2">
          <template #prev>
            قبلی
          </template>
        </base-button>
      </span>
    </transition-group>
  </base-card>
</template>

<script>
import BaseOpt from "./slides/BaseOptOptions.vue";
import BaseCard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";
import MusicPlayer from './slides/BaseMusicPlayer.vue';

export default {
  components: {
    BaseOpt,
    BaseCard,
    BaseButton,
    MusicPlayer
  },
  data() {
    return {
        optionData:[
            {
                id: 999,
            name:'لوازم خانگی'
        },
        {
            id: 998,
            name: 'کتاب و مجله'
        },
        {
            id:997,
            name: 'تولید محتوا'
        },
        {
            id:996,
            name: 'برنامه نویسی'
        }
        ],
      current: 1,
      optionSelected:'',
      isLoading : false,
      error:null,
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev(){
        this.current--;
    },
    selectedOption(data){
        this.optionSelected = data;
    },
    loadOptions() {
      this.isLoading = true;
      this.error = null;
      fetch('/task_a.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
            });
          }
          this.optionData.push(results);
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later.';
        });
    },
  },
    mounted() {
    this.loadOptions();
  },
  }

</script>

<style scoped>
.slide-enter-from,
.slide-enter-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease-out;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
</style>
