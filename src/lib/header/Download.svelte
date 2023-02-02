<script lang="ts">

    import {items} from "../store";

    let link: HTMLAnchorElement

    function download() {

        let str = JSON.stringify($items);
        const file = new File([str], 'tech-radar.json', {
            type: 'application/json',
        })
        const url = URL.createObjectURL(file)
        link.href = url
        link.download = file.name
        link.click()
        URL.revokeObjectURL(url)
    }
</script>

<div class="whitespace-nowrap cursor-pointer pt-2 pb-2" on:click={download} >
    <u>↓</u>
    Download
</div>
<a bind:this={link} href={'#'} class="hidden">x</a>
