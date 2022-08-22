<template>
<div style="width: 100%">
  <div>
       <avue-crud
          ref="crud"
          :option="tableOption"
          :data="tableData"
          :page="page"
          v-model="form"
          :table-loading="listLoading"

          @on-load="queryRoles"
          >
      </avue-crud>

  </div>
</div>
</template>


<script>
import {queryList} from "@/api/sys/role"
import { tableOption } from '@/curd/role/role'

export default {
  name: "user_role_list",
  data(){
    return {
      tableOption: tableOption,
      tableData : [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20 // 每页显示多少条
      },
      form: {},
      listLoading: true,

    }
  },
  created() {
     this.queryRoles();
  },
  methods:{
    queryRoles(){

      let that = this;
      queryList().then(response=>{
        debugger
        that.tableData = response.data.data;
      }).catch(err=>{
        console.log(err)
      });
    }
  }


}
</script>

