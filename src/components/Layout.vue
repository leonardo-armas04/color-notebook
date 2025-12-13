<script setup lang="ts">
</script>

<template>
    <header>
        <nav>
            <a class="btn" href="/">Color Notebook</a>
            <button class="navbar-btn">
                New
                <i class="fa-solid fa-file-pen"></i>
            </button>
        </nav>
    </header>

    <slot></slot>

    <footer>
        <small>Created with Vue</small>
    </footer>
</template>