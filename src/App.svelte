<script lang="ts">
    import Radar from "./lib/radar/Radar.svelte";
    import Help from "./lib/Help.svelte";
    import Layout from "./lib/Layout.svelte";
    import Header from "./lib/header/Header.svelte";

    let isHelpOpen = false

    function toggleHelp(): void {
        isHelpOpen = !isHelpOpen;
    }
</script>

<main class="relative">
    <Layout>
        <Header slot="header" toggleHelp={toggleHelp}></Header>
        <Radar slot="radar"></Radar>
    </Layout>
    {#if isHelpOpen}
        <div class="absolute flex h-screen top-0 left-0">
            <div class="m-auto bg-base-100 w-2/3 p-10 border border-slate-400 rounded-md relative">
                <div class="absolute top-2 right-4 text-2xl"><a href={"#"} on:click={toggleHelp}>&times;</a></div>
                <Help></Help>
            </div>
        </div>
    {/if}
</main>