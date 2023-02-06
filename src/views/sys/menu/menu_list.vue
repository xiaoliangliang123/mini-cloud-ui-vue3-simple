<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-button type="success" style="margin-left: 15px" size="small" @click="handleAdd()">新增</el-button>

        <el-tree ref="tree" style="margin-top: 10px" :props="defaultProps"
                 node-key="orgId"
                 lazy>
          <template #default="{ node }">
          <span class="custom-tree-node">
            <span><el-tag effect="plain">{{ node.label }}</el-tag></span>
          </span>
          </template>
        </el-tree>
      </el-main>
    </el-container>
  </div>

</template>

<script>
export default {
  name: "menu_list",
  data() {
    return {

      defaultProps: {
        children: 'children',
        label: 'orgName'
      }
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
    handleAdd() {
      this.goTo('/menu/menu_edit/new');
    }
  }
}
</script>

<style scoped>

</style>