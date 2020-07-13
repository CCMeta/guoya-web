<template>
	<view class="container">
		<view class="orders-list d-flex flex-column w-100" style="padding: 20rpx; padding-bottom: 0;">
			<view class="order-item" v-for="(item, index) in orders" :key="index" style="margin-bottom: 30rpx;" @tap="detail(item.id)">
				<list-cell>
					<view class="w-100 d-flex align-items-center">
						<view class="flex-fill d-flex flex-column">
							<view class="font-size-lg text-color-base" style="margin-bottom: 20rpx;">
								{{ item.name }} ({{item.mobile}})
							</view>
							<view class="font-size-sm text-color-assist">{{ $util.formatDateTime(item.created_at) }}</view>
						</view>
						<view class="font-size-lg text-color-primary">
							{{ item.status_text || '已完成' }}
						</view>
					</view>
				</list-cell>
				<list-cell>
					<view class="w-100 d-flex flex-column">
						<view class="w-100 text-truncate font-size-lg text-color-base" style="margin-bottom: 20rpx;" v-html="orderGoodsName(item.goods)">
							
						</view>
						<view class="d-flex justify-content-between align-items-center" style="margin-bottom: 30rpx;">
							<view class="font-size-sm text-color-assist">
							</view>
							<view class="d-flex font-size-sm text-color-base align-items-center">
								<view style="margin-right: 10rpx;">共{{ item.count }}件商品，实付</view>
								<view class="font-size-lg">￥{{ item.amount }}</view>
							</view>
						</view>
						<view class="d-flex align-items-center justify-content-end">
							<view style="margin-right: 10rpx;">
			<!-- 					<button type="primary" plain size="mini" v-if="item.invoice_status > 0">查看发票</button>
								<button type="primary" plain size="mini" v-else>开发票</button> -->
								<button type="primary" plain size="mini">查看订单</button>
							</view>
<!-- 							<view>
								<button type="primary" plain size="mini" @tap.stop="review(item)">去评价</button>
							</view> -->
						</view>
					</view>
				</list-cell>
			</view>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell'
	import {mapState, mapMutations, mapGetters} from 'vuex'
	export default {
		components: {
			listCell
		},
		data() {
			return {
				page: 1,
				pageSize: 5,
				orders: []
			}
		},
		computed: {      
      ...mapGetters(['isLogin']),
			orderGoodsName() {
				return (goods) => {
					let arr = []
					goods.forEach(good => arr.push(good.good_name + ' x ' + good.good_count))
					return arr.join(`<br>`)
				}
			}
		},
		async onShow() {
			if(!this.$store.getters.isLogin) {
				uni.navigateTo({url: '/pages/login/login'})
        return
			}
			await this.getOrders(false)
		},
		async onReachBottom() {
			await this.getOrders(false)
		},
		async onPullDownRefresh() {
			await this.getOrders(true)
		},
		methods: {
			...mapMutations(['SET_ORDERS']),
			async getOrders(isRefresh = false) {
				uni.showLoading({
					title: '加载中'
				})
				
				let orders = await this.$fuck('orders')
				this.SET_ORDERS(orders);
				if(isRefresh) {
					this.orders = []
					this.page = 1
				}
				orders = orders.slice(this.pageSize * (this.page - 1), this.pageSize * this.page)
				if(orders.length) {
					this.orders = this.orders.concat(orders)
					this.page += 1
				}
				// console.log(orders)
				uni.hideLoading()
			},
			detail(id) {
				uni.navigateTo({
					url: '/pages/orders/detail?id=' + id
				})
			},
			review(order) {
				return;
				// const date = order.completed_time.split(' ')[0]
				uni.navigateTo({
					url: '/pages/review/review?storename=' + order.store.name + '&typeCate=' + order.typeCate + '&date=' + date
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
