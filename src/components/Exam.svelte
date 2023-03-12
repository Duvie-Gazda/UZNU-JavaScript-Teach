<script lang="ts">
	import { onMount } from 'svelte';
	import { ClientExam } from '../classes/ClientExam';
	import type { Exam } from '../classes/Exam';
	import Question from './Question.svelte';

	export let exam: Exam | undefined;

	let clientExam = new ClientExam(exam?.id || 0, exam?.result || 0, exam?.questions || []);

	const max = 50;
	$: result = clientExam?.checkExam() || 0;
	$: if (typeof window != 'undefined') {
		clientExam.upload();
	}
</script>

<div class="main">
	{#if clientExam != null}
		{#each clientExam.questions as question}
			<Question
				{question}
				onClick={() => {
					clientExam?.checkExam();
					clientExam = clientExam;
					clientExam.save();
				}}
			/>
		{/each}
	{/if}
	<div class="result">
		<div class="result-description">Ваш результат:</div>
		<div class="result-main" class:good={result >= max} class:bad={result <= max}>
			{clientExam?.result}%
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
