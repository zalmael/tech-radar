<script lang="ts">

    import {items} from "../stores";

    let files: FileList = undefined
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
        if (input) {
            input.type = ''
            input.type = 'file'
        }
    }

    $: loadFromFile(files)

</script>

<div class="whitespace-nowrap cursor-pointer pt-2 pb-2" on:click={upload} on:keydown={upload}>
    <u>↑</u>
    Upload
    <input type="file" class="hidden"
           bind:this={input} bind:files
           accept="application/json">
</div>

