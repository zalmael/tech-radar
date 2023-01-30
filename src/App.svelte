<script lang="ts">
    import ItemEditor from "./lib/ItemEditor.svelte";
    import Radar from "./lib/Radar.svelte";
    import Help from "./lib/Help.svelte";
    import Download from "./lib/Download.svelte";
    import Upload from "./lib/Upload.svelte";

    let isHelpOpen = false

    function toggleHelp() {
        isHelpOpen = !isHelpOpen;
        console.log(isHelpOpen)
    }
</script>

<main class="flex flex-col items-center mt-4 relative">
    <div class="w-full print:hidden">
        <div class="flex items-center">
            <div class="pl-3">
                <Download></Download>
                <Upload></Upload>
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
        <div class="divider"></div>
    </div>
    <Radar></Radar>
    {#if isHelpOpen}
        <div class="absolute flex h-screen">
            <div class="m-auto bg-base-100 w-2/3 p-10 border border-slate-400 rounded-md relative">
                <div class="absolute top-2 right-4 text-2xl"><a href={"#"} on:click={toggleHelp}>&times;</a></div>
                <Help></Help>
            </div>
        </div>
    {/if}


</main>
