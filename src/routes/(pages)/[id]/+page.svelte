<script lang="ts">
	import { page } from '$app/stores';
	import { ClientTopic } from '../../../classes/ClientTopic';
	import Exam from '../../../components/Exam.svelte';

	export let data;

	const topics: ClientTopic[] = ClientTopic.generateFromJSON(data.topics);
	$: topic = topics.find((topic) => topic.id == Number.parseInt($page.params.id));
</script>

<svelte:head>
	<title>{topic?.article.title}</title>
</svelte:head>

<div class="main">
	<div class="container">
		<!-- <div class="title">{topic?.article.title}</div> -->
		<div class="article-container">{@html topic?.article.text}</div>
		<Exam exam={topic?.exam} />
	</div>
</div>

<style>
	.main {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.container {
		width: 90%;
	}

	.title {
		font-family: 'Exo 2';
		font-style: normal;
		font-weight: 500;
		font-size: 30px;
		line-height: 40px;
		/* identical to box height */

		color: #3e435d;

		padding: 20px;
	}

	.article-container {
		background: #ffffff;
		border-radius: 10px;
		margin-top: 20px;
		padding: 25px 30px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);

		font-family: 'Exo 2';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
		/* or 200% */

		letter-spacing: 1px;

		color: #8b8282;
	}
</style>
