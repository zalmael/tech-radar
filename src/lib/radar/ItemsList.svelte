<script lang="ts">
    import {items, selected} from '../store';
    import type {Item} from "../type";

    export let quarter: number;
    export let orientation = "left"

    function remove(item: Item) {
        return () => {
            items.remove(item)
        }
    }

    function onSelect(item: Item) {
        return () => {
            selected.update(() => item)
        }
    }

</script>

<ul class="items-list">

    {#each $items.filter(value => value.quarter === quarter && value.level === 1) as item, index}
        {#if index === 0}
            <li class="title">Adopt</li>
        {/if}
        <li class="hover:bg-accent-focus/50 pr-1 pl-1 rounded-sm"
            style="text-decoration: {item.index === ($selected?.index || -1) ? 'underline' : 'none'}">
            <a on:click={onSelect(item)} class="cursor-pointer" href={'#'} tabIndex="-1">
                {#if orientation === "right"}{item.name}&nbsp;-&nbsp;{item.index}
                {:else}{item.index}&nbsp;-&nbsp;{item.name}
                {/if}
            </a>

            <a href={'#'} on:click={remove(item)} tabIndex="-1">&times;</a>
        </li>
    {/each}

    {#each $items.filter(value => value.quarter === quarter && value.level === 2) as item, index}
        {#if index === 0}
            <li class="title">Trial</li>
        {/if}
        <li class="hover:bg-accent-focus/50 pr-1 pl-1 rounded-sm"
            style="text-decoration: {item.index === ($selected?.index || -1) ? 'underline' : 'none'}">
            <a on:click={onSelect(item)} class="cursor-pointer" href={'#'} tabIndex="-1">
                {#if orientation === "right"}{item.name}&nbsp;-&nbsp;{item.index}
                {:else}{item.index}&nbsp;-&nbsp;{item.name}
                {/if}
            </a>

            <a href={'#'} on:click={remove(item)} tabIndex="-1">&times;</a>
        </li>
    {/each}

    {#each $items.filter(value => value.quarter === quarter && value.level === 3) as item, index}
        {#if index === 0}
            <li class="title">Assess</li>
        {/if}
        <li class="hover:bg-accent-focus/50 pr-1 pl-1 rounded-sm"
            style="text-decoration: {item.index === ($selected?.index || -1) ? 'underline' : 'none'}">
            <a on:click={onSelect(item)} class="cursor-pointer" href={'#'} tabIndex="-1">
                {#if orientation === "right"}{item.name}&nbsp;-&nbsp;{item.index}
                {:else}{item.index}&nbsp;-&nbsp;{item.name}
                {/if}

            </a>
            <a href={'#'} on:click={remove(item)} tabIndex="-1">&times;</a>
        </li>
    {/each}

    {#each $items.filter(value => value.quarter === quarter && value.level === 4) as item, index}
        {#if index === 0}
            <li class="title">Hold</li>
        {/if}
        <li class="hover:bg-accent-focus/50 pr-1 pl-1 rounded-sm"
            style="text-decoration: {item.index === ($selected?.index || -1) ? 'underline' : 'none'}">
            <a on:click={onSelect(item)} class="cursor-pointer" href={'#'} tabIndex="-1">
                {#if orientation === "right"}{item.name}&nbsp;-&nbsp;{item.index}
                {:else}{item.index}&nbsp;-&nbsp;{item.name}
                {/if}
            </a>
            <a href={'#'} on:click={remove(item)} tabIndex="-1">&times;</a>
        </li>
    {/each}
</ul>

<style>
    li.title {
        font-variant: small-caps;
        font-weight: bolder;
    }

    li {
        white-space: nowrap;
        padding: 0;
        margin: 0;
    }
</style>
