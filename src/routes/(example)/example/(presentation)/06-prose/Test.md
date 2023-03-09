<script lang="ts">
	import { addSteps } from '$lib/addsteps';
	import Test from './Test.md'

	let classP = 'text-blue-400';

</script>


## Test

<div use:addSteps={[{ steps: '1', classes: classP }]}>

This is some *markdown*!

$$x^2 = 34$$

That is dollar sign math.

</div>

<div use:addSteps={[{ steps: '2', classes: classP }]}>

Markdown test:

1. A
2. List

* Bullets were working all along!
* Just needed to change the color!

| Tables | Are |
|-------|------|
| spaced | weird |

</div>