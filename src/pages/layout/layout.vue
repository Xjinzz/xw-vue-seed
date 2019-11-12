
<template>
    <div class='demoPage clearfix' tag="demoPage">
		<Top></Top>	
		<Left></Left>
		<!--主内容-->
		<div id='page-wrapper' class='page-wrapper'>
			<div id='contentBox' class='contentBox'>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
    import Top from "./top.vue";
    import Left from "./left.vue";
    export default {
        name:"Layout",
        components:{Top,Left}
    }
</script>  

<style scoped>

</style>