<script lang="ts">
    import {items} from './store';
    import Target from "./Target.svelte";
    import Blip from "./Blip.svelte";
    import ItemsList from "./ItemsList.svelte";

    let size = 800;

    function coordTop(radius: number) {
        return 100 / 2 + Math.cos(Math.PI / 6) * 100 * radius / 10
    }

    function coordLeft(radius: number) {
        return 100 / 2 + Math.sin(Math.PI / 6) * 100 * radius / 10
    }
</script>

<div class="radar w-full">
    <div class="quarter quarter-2 ml-2 h-full max-h-full flex justify-center">
        <ItemsList quarter={2} orientation="right"></ItemsList>
    </div>

    <div class="target relative w-full aspect-square">
        <Target/>
        <div class="absolute opacity-50 top-[5%] right-[5%]">Languages &<br> Framework</div>
        <div class="absolute opacity-50 top-[5%] left-[5%]">Tools</div>
        <div class="absolute opacity-50 bottom-[5%] left-[5%]">Plateform &<br> Data</div>
        <div class="absolute opacity-50 bottom-[5%] right-[5%]">Techniques</div>

        {#each $items as item}
            <Blip item={item}/>
        {/each}
        <div class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] uppercase text-xs opacity-50"
             style="top: {coordTop(2)}%; left: {coordLeft(2)}%; text-shadow: 0 0 20px white;">
            adopt
        </div>
        <div class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] uppercase text-xs opacity-50"
             style="top: {coordTop(3)}%; left: {coordLeft(3)}%; text-shadow: 0 0 20px white;">
            trial
        </div>
        <div class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] uppercase text-xs opacity-50"
             style="top: {coordTop(4)}%; left: {coordLeft(4)}%; text-shadow: 0 0 20px white;">
            assess
        </div>
        <div class="absolute -translate-y-6 -translate-x-6 -rotate-[30deg] uppercase text-xs opacity-50"
             style="top: {coordTop(5)}%; left: {coordLeft(5)}%; text-shadow: 0 0 20px white;">
            hold
        </div>
    </div>
    <div class="quarter quarter-1 ml-2 h-full max-h-full flex justify-center">
        <ItemsList quarter={1}></ItemsList>
    </div>
    <div class="quarter quarter-3 ml-2 h-full max-h-full flex justify-center">
        <ItemsList quarter={3} orientation="right"></ItemsList>
    </div>
    <div class="quarter quarter-4 ml-2 h-full max-h-full flex justify-center">
        <ItemsList quarter={4}></ItemsList>
    </div>

</div>

<style>

    .radar {
        position: initial;
        display: grid;
        grid-template-columns: auto 50% auto;
        grid-template-rows: 50% 50%;
    }

    .quarter {
        font-size: 0.7em;
        padding-bottom: 1em;
    }

    .quarter-1 {
        grid-column: 3;
        grid-row: 1;
    }

    .target {
        grid-column: 2;
        grid-row: 1/3;
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
