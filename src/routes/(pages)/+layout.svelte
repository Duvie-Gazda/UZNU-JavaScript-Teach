<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { Topic } from '../../classes/Topic';

	export let data;
	export let url: URL;

	const topics: Topic[] = JSON.parse(data.topics);
	let activeId: number | null = null;
	$: activeId = Number.parseInt($page.params.id) || 0;

	const changeTopic = (id: number) => {
		activeId = id;
		goto(id.toString());
	};
</script>

<div class="main">
	<div class="left">
		<div class="container">
			<div class="title">Вивчення JavaScript</div>
			<div class="menu">
				{#each topics as topic}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="menu-item"
						class:active={topic.id == activeId}
						on:click={() => {
							changeTopic(topic.id);
						}}
					>
						{topic.article.title}
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="right">
		<slot />
	</div>
</div>

<style>
	.main {
		min-height: 100%;
		background-color: #f9f9f9;

		display: grid;
		grid-template-columns: 15% auto;
	}

	.left {
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		padding: 40px 10px;

		box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
	}

	.right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;

		color: #8b8282;
	}

	.menu {
		padding: 40px 0px;
	}

	.menu-item {
		padding: 15px 40px;
		text-align: center;

		font-family: 'Exo 2';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		/* identical to box height */

		letter-spacing: 0.02em;

		color: #928e8e;

		cursor: pointer;
	}

	.active {
		color: white !important;
		background: #5aced6;
		border-radius: 6px;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-family: 'Exo 2';
		font-style: normal;
		font-weight: 600;
		font-size: 28px;
		line-height: 42px;
		/* identical to box height */

		color: #3e435d;
		text-align: center;
	}

	@media only screen and (max-width: 600px) {
		.main {
			min-height: 100%;
			background-color: #f9f9f9;

			display: block;
		}
	}
</style>
