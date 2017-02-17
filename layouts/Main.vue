<template>
	<div>
		<header class="topbar">
			<div class="abs_l vertical-mid">
				<span class="icon msg-icon"></span>
			</div>
			<div class="abs_m">
				<span class="title-text">今日头条</span>
				<span class="icon refresh-icon vertical-mid"></span>
			</div>
			<div class="abs_r vertical-mid">
				<span class="icon search-icon"></span>
			</div>			
		</header>
		<nav class="cemnavbar">
			<div class="nav-menumore">
				<span class="sep-shadow"></span>
				<span class="more-btn" @click="openMoreMenu">+</span>
			</div>
			<div class="nav-menu" @touchstart="touchstartHandler" @touchmove="touchmoveHandler" @touchend="touchendHandler">
				<router-link :to="menu.path" v-for="menu in menus">{{menu.text}}
				</router-link>
			</div>			
		</nav>
		

		<slot></slot>
	</div>
</template>

<script>	
	export default {
		data: function(){
			return {
				menus: [
					{path: "/", text: "推荐"},
					{path: "/video", text: "阳光宽频"},
					{path: "/news_hot", text: "热点"},
					{path: "/news_society", text: "社会"},
					{path: "/news_entertainment", text: "娱乐"},
					{path: "/news_military", text: "军事"},
					{path: "/news_tech", text: "教育"},
					{path: "/news_car", text: "汽车"}
				]
			}
		},
		methods: {
			openMoreMenu: function(){
				this.$root.$refs["menu_select_modal"].showModal();
			},
			touchstartHandler: function(){

			},
			touchmoveHandler: function(){

			},
			touchendHandler: function(){

			}
		}
	}
</script>

<style>
.topbar{
	height: 0.6rem;
	background-color: rgb(212, 61, 61);
	    position: relative;
}

.vertical-mid{
	position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.title-text{
	color: white;
    font-weight: bold;
    font-size: 0.25rem;
}

.abs_l{
	left: 0.1rem;
}

.abs_m{
    width: 100%;
    text-align: center;
    line-height: 0.6rem;
}

.abs_r{
	right: 0.1rem;
}

.topbar .icon{
	display: inline-block;
	background-size: contain;
	width: 0.4rem;
	height: 0.35rem;
}
.msg-icon{
	background: url("../asset/feed_ic_message_normal.png") no-repeat;
}

.search-icon{
	background: url("../asset/feed_ic_search_normal.png") no-repeat;
}

.refresh-icon{
	background: url("../asset/titlebar_refresh_small.png") no-repeat;
}

.topbar .refresh-icon{
	width: 0.3rem;
    height: 0.25rem;
    margin-left: 5px;	
}

.cemnavbar a{
	color: #505050;
	padding: 0.08rem 0.15rem;
}

.cemnavbar{
	background-color: rgb(244,245,246);
	height: 0.45rem;
	font-size: 0.22rem;
    line-height: 0.45rem;
}

.nav-menu{
	overflow: hidden;
	white-space: nowrap;
}
.nav-menumore{
	position: relative;
	float: right;
	height: 100%
}

.more-btn{
	color: #f85959;
    margin: 0 14px;
    font-size: 0.3rem;
}

.sep-shadow{
	position: absolute;
	width: 2px;
	    height: 100%;
	background: -webkit-linear-gradient(bottom, rgba(255,255,255, 1), rgba(0,0,0,0.5), rgba(255,255,255, 1));
}
</style>