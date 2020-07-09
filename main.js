import Vue from 'vue'
import App from './App'
import api from './api'
import util from './common/util'
import addressParse from './common/addressParse'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$api = api
Vue.prototype.$util = util
Vue.prototype.$fuck = (uri, requestData={}, method = 'GET') => new Promise(resolve => {
	uni.request({
    url: 'https://guoya-api.zaiwuhou.com/index.php/' + uri, //仅为示例，并非真实接口地址。
	method: method,
    data: {
		...requestData
        // text: 'uni.request'
    },
    header: {
      'HTTP-X-TOKEN': store.state.member.openid || ''
        // 'content-type': 'multipart/form-data'
    },
    success: (res) => {
		// console.log(res.data)
		return resolve(res.data.data);
    }
	})
	}, 500)

const app = new Vue({
	store,
    ...App
})
app.$mount()
