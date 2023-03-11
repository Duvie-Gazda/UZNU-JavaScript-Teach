<script lang="ts">
	import type { Question } from '../classes/Question';

	export let question: Question | undefined;
	export let onClick: Function;

	const checkResult = (id: number) => {
		if (question?.answered) {
			return;
		}
		question?.makeAnswer(id);
		onClick();
	};

	$: chosen = question?.chosenAnswer;
</script>

<div class="main">
	<div class="title">{question?.title}</div>
	<div class="answers-container">
		{#if question?.answers != null}
			{#each question?.answers as answer}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="answer"
					class:good={chosen?.id == answer.id && answer.isCorrect}
					class:bad={chosen?.id == answer.id && !answer.isCorrect}
					on:click={() => {
						checkResult(answer.id);
					}}
				>
					{answer.text}
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.main {
		background: #ffffff;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
		padding: 25px 30px;
		margin: 30px 0px;
	}

	.title {
		font-family: 'Exo 2';
		font-style: normal;
		font-weight: 400;
		font-size: 21px;
		line-height: 32px;
		/* identical to box height */

		color: #000000;
	}

	.answers-container {
		display: flex;
		flex-direction: column;

		padding: 10px 0px;
	}

	.answer {
		padding: 12px 0px;
		padding-left: 50px;
		margin-left: 30px;
		width: 533.5px;

		display: inline;
		font-family: 'Exo 2';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 32px;
		/* or 200% */

		letter-spacing: 0.03em;

		color: #8b8282;

		cursor: pointer;
	}

	.answer:not(:last-child) {
		border-bottom: 1px solid #efefef;
	}

	.bad {
		color: #dd3737;
		font-weight: 500;
	}

	.good {
		color: #5aced6;
	}
</style>
