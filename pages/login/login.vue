<template>
	<view class="container">
		<view class="intro">
			<image src="/static/images/logo.png"></image>
			<view class="tips">
				一份好货，一份幸福
				<br>
				在果亚遇见两种美好
			</view>
		</view>
		<view class="bottom">
			<!-- #ifdef H5 -->
				<button type="primary" size="default" class="login-btn" @tap="login">
					登录
				</button>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
				<button type="primary" size="default" class="login-btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo">
					<image src="/static/images/mine/wechat.png"></image>
					微信一键登录
				</button>
			<!-- #endif -->
			<view class="d-flex flex-column justify-content-evenly align-items-center text-center" style="height: 30vh;display: none;">
				<view class="w-100 font-size-base text-color-assist">新用户登录即加入会员，享会员权益</view>
				<view class="w-100 row d-flex just-content-around align-items-center font-size-sm text-color-assist">
					<view class="grid">
						<image src="/static/images/mine/rhyl.png"></image>
						<view>入会有礼</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/jfdh.png"></image>
						<view>积分兑换</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/sjtq.png"></image>
						<view>升级特权</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/srtq.png"></image>
						<view>生日特权</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/nxbz.png"></image>
						<view>奈雪宝藏</view>
					</view>
				</view>
				<view class="font-size-base text-color-primary">会员权益说明</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Member from '@/api/member'
	import {mapMutations} from 'vuex'
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations(['SET_MEMBER']),
			async getUserInfo(e) {
        // console.log(e)
				const {errMsg, userInfo} = e.detail
				if(errMsg !== "getUserInfo:ok") {
					uni.showModal({
						title: '提示',
						content: '您取消了授权登录，请重新授权',
						showCancel: false
					})
					uni.navigateBack()					
					return
				} else {
          wx.login({
            success: async (res) => {
              if (res.code) {
                //发起网络请求 注意这里是异步的 非同步
                const member = await this.$fuck('index/login',{ code:res.code })
                this.SET_MEMBER(member)
                uni.navigateBack()
              } else {
                uni.showModal({
                	title: '提示',
                	content: '获取微信登录信息失败',
                	showCancel: false
                })
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
				}
			},
			login() {
				this.SET_MEMBER(Member)
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.intro {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		font-size: $font-size-base;
		color: $text-color-assist;
		
		image {
			width: 165rpx;
			height: 165rpx;
		}
		
		.tips {
			line-height: 72rpx;
			text-align: center;
		}
	}
	
	.bottom {
		height: 40vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 40rpx;
		
		.login-btn {
			width: 100%;
			border-radius: 50rem !important;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10rpx 0;
			
			image {
				width: 36rpx;
				height: 30rpx;
				margin-right: 10rpx;
			}
		}
		
		.row {
			.grid {
				width: 20%;
				image {
					width: 60rpx;
					height: 60rpx;
					margin-bottom: 10rpx;
				}
			}
		}
	}
</style>
