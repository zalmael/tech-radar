<script>
    import Download from "./Download.svelte";
    import Upload from "./Upload.svelte";

    let isOpen = false
    function toggleOpen() {
        isOpen = !isOpen
    }

</script>

<div class="relative">
    <button class="btn btn-outline text-xl" on:click={toggleOpen}>&#9776;</button>
    {#if isOpen}
        <div class="absolute top-full -ml-2 p-2 pr-4 bg-base-100 border rounded flex flex-col">
            <Download/>
            <Upload/>
        </div>
    {/if}
</div>
