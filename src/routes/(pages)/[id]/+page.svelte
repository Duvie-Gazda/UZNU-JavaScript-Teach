<script lang="ts">
	import type { ClientTopic } from '../../../classes/ClientTopic';

	export let data;

	const topic: ClientTopic = JSON.parse(data.topic);
</script>

<svelte:head>
	<title>{topic.article.title}</title>
</svelte:head>

<div class="main">
	<div class="container">
		<div class="title">{topic.article.title}</div>
		<div class="article-container">{topic.article.text}</div>
	</div>
</div>

<style>
</style>
