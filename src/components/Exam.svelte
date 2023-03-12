<script lang="ts">
	import { onMount } from 'svelte';
	import type { ClientExam } from '../classes/ClientExam';
	import type { Exam } from '../classes/Exam';
	import Question from './Question.svelte';

	export let exam: ClientExam | undefined;

	// let exam = new exam(exam?.id || 0, exam?.result || 0, exam?.questions || []);

	const max = 50;
	$: result = exam?.checkExam() || 0;
</script>

<div class="main">
	{#if exam != null}
		{#each exam.questions as question}
			<Question
				{question}
				onClick={() => {
					exam?.checkExam();
					exam?.save();
					exam = exam;
				}}
			/>
		{/each}
	{/if}
	<div class="result">
		<div class="result-description">Ваш результат:</div>
		<div class="result-main" class:good={result >= max} class:bad={result <= max}>
			{exam?.result}%
		</div>
	</div>
</div>

<style>
	.result {
		background: #ffffff;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
		padding: 25px 30px;
		margin: 30px 0px;
	}

	.result-main,
	.result-description {
		display: inline;
		font-family: 'Exo 2';
		font-style: normal;
		font-weight: 400;
		font-size: 21px;
		line-height: 32px;

		color: #000000;
	}

	.bad {
		color: #d65a5a;
	}

	.good {
		color: #5aced6;
	}
</style>
