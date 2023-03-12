<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { ClientExam } from '../../../classes/ClientExam';
	import { Topic } from '../../../classes/Topic';
	import Exam from '../../../components/Exam.svelte';

	export let data;

	const topics: Topic[] = Topic.generateFromJSON(data.topics);
	let clientExam: ClientExam;
	$: topic = topics.find((topic) => topic.id == Number.parseInt($page.params.id));
	$: clientExam = new ClientExam(
		topic?.exam.id || 0,
		topic?.exam.result || 0,
		topic?.exam.questions || []
	);
	$: if (typeof window != 'undefined') {
		clientExam.upload();
	}
</script>

<svelte:head>
	<title>{topic?.article.title}</title>
</svelte:head>

<div class="main">
	<div class="container">
		<!-- <div class="title">{topic?.article.title}</div> -->
		<div class="article-container">{@html topic?.article.text}</div>
		<Exam exam={clientExam} />
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
