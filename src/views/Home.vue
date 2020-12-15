<template>
  <div class="all-page">
    <van-grid>
      <van-grid-item
        :icon="item.icon"
        :text="item.text"
        v-for="(item, index) in list"
        :key="index"
        @click="toRoute(item.route, item.url)"
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
                    route: '/teacherlive.html',
                    url: ''
                },
                {
                    icon: 'photo-o',
                    text: '测试',
                    route: '/test.html',
                    url: ''
                }
            ]
        }
    },
    methods:{
        toRoute(route, url){
            let httpRoute;
            if (location.hostname === 'localhost' ) { 
                httpRoute = '' 
            } else { 
                const http = window.location.protocol + '//' + location.hostname + ':' + location.port 
                //此处为url http 域名
                httpRoute = http + url + '/dist' 
            }
            window.location.href = httpRoute + route;
        } 
    }
}
</script>