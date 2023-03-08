<script lang="ts">
	import { addSteps } from '$lib/addsteps';

	let classP = 'text-blue-400';


</script>

<div class="flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
<h1 class="mx-auto mb-12 text-center font-sans text-5xl font-black tracking-tighter text-white">
	Prose...
</h1>
<div class="flex flex-col items-center gap-8 text-2xl md:flex-row md:gap-20">
	<article class="prose">
		<p use:addSteps={[{ steps: '1', classes: classP }]}>
			For years parents have espoused the health benefits of eating garlic bread with cheese to their
			children, with the food earning such an iconic status in our culture that kids will often dress
			up as warm, cheesy loaf for Halloween.
		</p>
		<!-- ... -->
	</article>
</div>
</div>
