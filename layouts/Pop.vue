<template>
	<div class="cem-modal" :class="{ hide: hide }">
		<div class="cem-modal-header">
			<span class="modal-title">{{title}}</span>
			<span class="close-icon" @click="closeModalHandler">
				<span></span>
				<span></span>
			</span>
		</div>
		<div class="cem-modal-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			},
			close: {
				type: Function
			}
		},
		data: function(){
			return {
				hide: true
			}
		},
		methods: {
			showModal: function(){
				this.hide = false;
			},
			closeModalHandler: function(){
				if(this.close && typeof this.close == "function"){
					this.close();
				}
				this.hide = true;
			}
		}
	}
</script>

<style>
	.cem-modal{
		position: absolute;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    background: rgba(255,255,255,0.9);
	    z-index: 101;
	    animation: show-modal 0.3s;
	}
	
	.cem-modal-header{
		height: 40px;
		font-size: 0.28rem;
		border-bottom: 2px solid #eee;
	}
	
	.cem-modal-header .modal-title{
		margin-left: 15px;
    	line-height: 40px;
	}

	.cem-modal-header .close-icon{
		float: right;
    	margin: 20px 10px;
	}
	.close-icon>span{
		width: 0.32rem;
	    height: 1px;
	    background-color: #666;
	    display: block;
	}

	.close-icon>span:first-of-type{
		transform: rotate(45deg);
	}

	.close-icon>span:last-of-type{
		transform: rotate(-45deg) translateY(-1px)
	}

	@keyframes show-modal{
		0% {
			transform: scale(0.6);
		}

		100% {
			transform: scale(1);
		}
	}
</style>