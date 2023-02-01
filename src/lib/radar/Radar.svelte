<script lang="ts">
    import {items} from '../store';
    import Target from "./Target.svelte";
    import Blip from "./Blip.svelte";
    import Quarter from "./Quarter.svelte";
</script>

<div class="radar grid h-full">
    <Quarter quarter={1}/>
    <Quarter quarter={2}/>
    <Quarter quarter={3}/>
    <Quarter quarter={4}/>
    <div class="relative aspect-square justify-self-center h-full max-h-full" style="grid-area: target">
        <Target/>
        {#each $items as item}
            <Blip item={item}/>
        {/each}
    </div>

</div>

<style>
    .radar {
        position: initial;
        grid-template-columns: minmax(max-content, 1fr) 3fr minmax(max-content, 1fr);
        grid-template-areas:
    "quarter-2 target quarter-1"
    "quarter-3 target quarter-4";
        grid-template-rows: 50% 50%;
    }
</style>
