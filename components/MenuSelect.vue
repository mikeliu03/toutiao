<template>
	<pop-layout title="频道管理" :close="closeHandler" ref="pop_layout">
		<div class="modal-menu-list">
			<ul>
				<li v-for="menu in menus" :class="{checked: menu.checked}" @click="menuClickHandler(menu)">
					<span>{{menu.text}}</span>
					<span class="status-icon" ></span>
				</li>
			</ul>
		</div>
	</pop-layout>
</template>

<script>
	import PopLayout from '../layouts/Pop.vue';
  	export default {
    	components: {
     	 	PopLayout
    	},
    	data: function(){
    		return {
    			menus: [ 
    				{path: "/", text: "推荐", checked: true},
					{path: "/video", text: "宽频", checked: true},
					{path: "/news_hot", text: "热点", checked: true},
					{path: "/news_society", text: "社会", checked: true},
					{path: "/news_entertainment", text: "娱乐", checked: true},
					{path: "/news_military", text: "军事", checked: true},
					{path: "/news_tech", text: "教育", checked: true},
					{path: "/news_car", text: "汽车", checked: true},
					{path: "/news_game", text: "游戏", checked: false},
					{path: "/news_fashion", text: "时尚", checked: false},
					{path: "/news_world", text: "国际", checked: false}
				]
    		}
    	},
    	methods: {
    		menuClickHandler: function(menu){
    			menu.checked = !menu.checked;
    		},
    		closeHandler: function(){
    			console.log(this.menus);
    		},
    		showModal: function(){
				this.$refs["pop_layout"].showModal();
			}
    	}
  	}
</script>

<style scoped>
	.modal-menu-list{
		font-size: 0.22rem;
	}

	.modal-menu-list li{
		list-style: none;
    	display: inline-block;
    	    border: 1px solid #ddd;
    padding: 5px 20px;
    	position: relative;
    	    margin: 10px 6px 0;
	}

	.modal-menu-list li:hover{
		background-color: #f0f0f0;
	}

	.modal-menu-list ul{
		    padding: 10px 10px 0;
	}

	li.checked .status-icon{
		position: absolute;
		background: url("../asset/check.png") no-repeat;
		bottom: 0;
		right: 0;
	    width: 16px;
	    height: 16px;
	    display: block;
	    background-size: cover;
	}

</style>