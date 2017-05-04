<template>
  <div class="">
    <Table :columns="tableCol" :data="tableData"></Table>
  </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        props: ['tableCol', 'tableData'],
        methods: {
          emitEvent (type, item) {
            this.$emit(type, item);
          }
        }
    }
</script>
