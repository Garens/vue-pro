<template>
  <div class="">
    <Table :columns="tableCol" :height="height" :data="tableData"></Table>
  </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        props: ['tableCol', 'tableData', 'height'],
        methods: {
          emitEvent (type, item) {
            this.$emit(type, item);
          }
        }
    }
</script>
