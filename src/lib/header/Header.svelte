<script>
    import ItemEditor from "./ItemEditor.svelte";
    import Menu from "./Menu.svelte";

    export let toggleHelp

</script>

<div class="w-full print:hidden mt-4">
    <div class="flex items-center">
        <div class="pl-3">
            <Menu/>
        </div>
        <div class="flex-grow text-center whitespace-nowrap">
            <ItemEditor></ItemEditor>
        </div>
        <div class="text-right pr-3">
            <a href={'#'} on:click={toggleHelp}>
                <span class="border border-slate-900 w-7 h-7 rounded-full flex justify-center items-center">?</span>
            </a>
        </div>
    </div>
</div>