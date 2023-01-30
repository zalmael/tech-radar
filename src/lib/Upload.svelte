<script lang="ts">

    import {items} from "./store";

    let files: FileList
    let input: HTMLInputElement

    function upload() {
        input.click()
    }

    async function loadFromFile(fileList?: FileList) {
        if (fileList) {
            // Note that `fileList` is of type `FileList`, not an Array:
            // https://developer.mozilla.org/en-US/docs/Web/API/FileList
            for (const file of fileList) {
                const text = await file.text()
                const saved = JSON.parse(text || '[]')
                items.set(saved)
                break;
            }
        }
        // reset input element
        input.type = ''
        input.type = 'file'
    }

    $: loadFromFile(files)

</script>

<button class="btn btn-outline text-xl" on:click={upload}><u>↑</u></button>
<input type="file" class="hidden"
       bind:this={input} bind:files
       accept="application/json">
