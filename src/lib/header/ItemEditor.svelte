<script lang="ts">
    import type {Quarter, Level} from "../type";
    import {items, index} from '../store';
    import { onMount } from 'svelte'

    const defaultItem = {x: 0, y: 0, quarter: 1, level: 1}
    let name: string;
    let quarter: Quarter = 1
    let level: Level = 1
    let nameInput: HTMLInputElement


    function submit() {
        if (!name || name.trim().length === 0) {
            return
        }
        items.add({...defaultItem, name: name.trim(), quarter, level, index: $index})
        nameInput.focus()
    }

    items.subscribe(() => {
        name = undefined;
        quarter = 1
        level = 1
    })

    onMount(() => nameInput.focus())

</script>

<form on:submit|preventDefault={submit}>
    <input type="text"
           bind:this={nameInput} bind:value={name} class="input input-bordered w-80" placeholder="React, Git, TDD, ...">
    <select bind:value="{level}" class="select">
        <option value={1}>Adopt</option>
        <option value={2}>Trial</option>
        <option value={3}>Assess</option>
        <option value={4}>Hold</option>
    </select>
    <select bind:value="{quarter}" class="select">
        <option value={1}>Language</option>
        <option value={2}>Tools</option>
        <option value={3}>Plateform</option>
        <option value={4}>Technique</option>
    </select>
    <button type="button" on:click={submit} class="btn">
        Add</button>

</form>
