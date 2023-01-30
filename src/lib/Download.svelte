<script lang="ts">

    import {items} from "./store";

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

<button class="btn btn-outline text-xl" on:click={download}><u>↓</u></button>
<a bind:this={link} href={'#'} class="hidden">x</a>