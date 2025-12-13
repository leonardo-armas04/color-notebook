<script setup lang="ts">
</script>

<template>
    <header>
        <nav>
            <a class="btn" href="/">Color Notebook</a>
            <a href="/new">
                <button class="navbar-btn">
                    New
                    <i class="fa-solid fa-file-pen"></i>
                </button>
            </a>
        </nav>
    </header>

    <slot></slot>

    <footer>
        <small>Created with Vue</small>
    </footer>
</template>