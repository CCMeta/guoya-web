import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import addresses from '@/api/addresses'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		store: {},
		cart: [],
		orderType: 'takein',
		address: {},
		addresses: addresses,
		member: {},
		order: {},
		orders: []
	},
	getters: {
		isLogin: state => Object.keys(state.member).length > 0	//是否登录
	},
	mutations: {
		SET_ORDER_TYPE(state, type) {
			state.orderType = type
		},
		SET_MEMBER(state, member) {
			state.member = member
		},
		SET_ADDRESS(state, address) {
			state.address = address
		},
		SET_STORE(state, store) {
			state.store = store
		},
		SET_CART(state, cart) {
			state.cart = cart
		},
		REMOVE_CART(state) {
			state.cart = []
		},
		SET_ORDER(state, order) {
			state.order = order
		},
		SET_ORDERS(state, orders) {
			state.orders = orders
		}
	},
	actions: {
		async getStore({commit}, store) {
			const old_store = await api('store')
      // console.log(store)
			commit('SET_STORE', {...old_store,'mobile':store})
		}
	}
})

export default store