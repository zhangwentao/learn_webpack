<template>
    <div class="comp1">
            msg:{{msg}}
    </div>
</template>

<script>
    export default {
        data: () => ({
            msg: 'hello webpack'
        })
    }
</script>

<style scope>
    .comp1 {
        color: white;
        background: black;
        background-image:url(../abc.jpg);
    }
</style>
