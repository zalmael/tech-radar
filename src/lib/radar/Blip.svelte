<script lang="ts">
    import type {Item} from "../type";
    import {selected} from "../stores";

    export let item: Item

    let radius = 50
    let isSelected = false
    selected.subscribe(value => {
        isSelected = item.index === (value?.index || -1)
    })

    function weightedLevel(item: Item) {
        if (item.level > 1) {
            return item.y + item.level;
        }

        return 2 * item.y
    }

    type Coord = {x: number, y: number}

    function unitToRadial(item: Item): Coord {
        return {x: (item.x + item.quarter - 1) * Math.PI / 2 + Math.PI / 2, y: weightedLevel(item)}
    }

    function radialToCartesian(coord: Coord) {
        return {x: Math.cos(coord.x) * coord.y, y: Math.sin(coord.x) * coord.y}
    }

    function toArc(item: Item, radius: number) {
        const pos = radialToCartesian(unitToRadial(item))
        return {...item, x: pos.x * radius, y: pos.y * radius}
    }

    function select(item: Item) {
        return () => {
            selected.update(() => item)
        }
    }
</script>

<div class="absolute bg-slate-800 text-slate-300 border border-slate-900 -mt-3.5 -ml-3.5 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
     style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
     title="{item.name}"><a on:click={select(item)} href={'#'} tabIndex="-1">{item.index}</a></div>
{#if isSelected}
    <div class="absolute border-2 border-slate-900 -mt-5 -ml-5 w-10 h-10 rounded-full flex justify-center items-center"
         style="top:{radius + toArc(item, radius/5).x}%; left:{radius + toArc(item, radius/5).y}%;"
         title="{item.name}"></div>
{/if}
