


<template>
    <div class='demoPage clearfix' tag="demoPage">
		<top></top>	
		<left></left>
		<!--主内容-->
		<div id='page-wrapper' class='page-wrapper'>
			<div id='contentBox' class='contentBox'>
				
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