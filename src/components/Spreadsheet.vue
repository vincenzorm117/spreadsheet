<template>
  <div class="table">
    <div class="header"></div>
    <div class="sidebar"></div>
    <div class="body">
      <div class="rows">
        <div class="row" v-for="(row, index) of rows" :key="index">
          <div class="cell" v-for="(key, index) of keys" :key="index">{{ row[key] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Spreadsheet",
  props: {
    rows: [],
    keys: []
  },
  data() {
    return {
      settings: {
      }
    };
  }
};
</script>

<style scoped lang="scss">

$border-color: #333;


.table {
    border: 1px solid $border-color;
}

.rows {

}

.row {
    display: flex;
    flex-flow: row nowrap;
}

.cell {
    min-width: 20px;
    min-height: 20px;
    border-left: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
}

</style>
