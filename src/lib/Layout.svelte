<div class="w-screen h-screen max-h-screen pb-8">
    <div class="grid grid-rows-[auto_min-content_1fr] h-full justify-center">
        <div>
            <slot name="header"></slot>
        </div>
        <div class="divider"></div>
        <div>
            <slot name="radar"></slot>
        </div>
        <div class="divider"></div>
        <div class="justify-self-center">
            <slot name="search"/>
        </div>
    </div>
</div>
