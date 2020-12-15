<template>
  <div class="all-page">
    <van-grid>
      <van-grid-item
        :icon="item.icon"
        :text="item.text"
        v-for="(item, index) in list"
        :key="index"
        @click="toRoute(item.route)"
      />
    </van-grid>
  </div>
</template>
<script>

export default {
    name: 'Home',
    data(){
        return {
            list:[
                {
                    icon: 'photo-o',
                    text: "师者",
                    route: '/teacherlive.html'
                },
                {
                    icon: 'photo-o',
                    text: '测试',
                    route: '/test.html'
                }
            ]
        }
    },
    methods:{
        toRoute(route){
            let httpRoute;
            if (location.hostname === 'localhost' ) { 
                httpRoute = '' 
            } else { 
                const http = window.location.protocol + '//' + location.hostname + ':' + location.port 
                //此处为http域名
                httpRoute = http + '/netopenws/wt/vue/dist' 
            }
            window.location.href = httpRoute + route;
        } 
    }
}
</script>