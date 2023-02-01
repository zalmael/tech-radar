<script lang="ts">
    import {items} from './store';
    import Target from "./Target.svelte";
    import Blip from "./Blip.svelte";
    import ItemsList from "./ItemsList.svelte";

</script>

<div class="radar grid h-full">
    <div class="quarter-2 text-xs ml-2 pb-2 h-full max-h-full flex justify-self-center">
        <ItemsList quarter={2} orientation="right"></ItemsList>
    </div>

    <div class="target relative aspect-square justify-self-center h-full max-h-full">
        <Target/>
        {#each $items as item}
            <Blip item={item}/>
        {/each}
    </div>
    <div class="quarter-1 text-xs ml-2 pb-2 h-full max-h-full flex justify-self-center">
        <ItemsList quarter={1}></ItemsList>
    </div>
    <div class="quarter-3 text-xs ml-2 pb-2 h-full max-h-full flex justify-self-center">
        <ItemsList quarter={3} orientation="right"></ItemsList>
    </div>
    <div class="quarter-4 text-xs ml-2 pb-2 h-full max-h-full flex justify-self-center">
        <ItemsList quarter={4}></ItemsList>
    </div>

</div>

<style>

    .radar {
        position: initial;
        grid-template-columns: minmax(max-content, 1fr) 3fr minmax(max-content, 1fr);
        grid-template-rows: 50% 50%;
    }

    .target {
        grid-column: 2;
        grid-row: 1/3;
    }

    .quarter-1 {
        grid-column: 3;
        grid-row: 1;
    }

    .quarter-2 {
        grid-column: 1;
        grid-row: 1;
    }

    .quarter-3 {
        grid-column: 1;
        grid-row: 2;

    }

    .quarter-4 {
        grid-column: 3;
        grid-row: 2;

    }

</style>
