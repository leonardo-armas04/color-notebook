<script setup lang="ts">

</script>

<template>
    <section id="void-input">
        <article class="warning">
            <h5>
                <i class="fa-solid fa-circle-info"></i>
                You must complete all fields
            </h5>
            <br>
            <button @click="$emit('close')">Ok</button>
        </article>
    </section>
</template>