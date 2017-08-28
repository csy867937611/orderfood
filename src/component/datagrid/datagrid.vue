<template>
    <div>
        <div class="dk-toolbar dk-grid-toolbar" :id="toolbar_id" v-if="toolbar">
            <a href="javascript:" class="btn btn-primary btn-sm" v-if="toolList" v-for="(value,key) in toolList" @click="click(value)">{{value.text ? value.text : key}}</a>
        </div>
        <el-table
      :data="dataset"
      height="600"
      border
      style="width: 100%">
      <el-table-column
        prop="ID"
        label="ID"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="name"
        width="150">
      </el-table-column>
      <el-table-column
        className="description"
        prop="description"
        label="description"
         width="150">
      </el-table-column>
      <el-table-column
        prop="category"
        label="category"
        width="100">
      </el-table-column>
      <el-table-column
        prop="nowPrice"
        label="nowPrice"
        width="100">
      </el-table-column>
      <el-table-column
        prop="oldPrice"
        label="oldPrice"
        width="100">
      </el-table-column>
      <el-table-column
        prop="discount"
        label="discount"
        width="100">
      </el-table-column>
      <el-table-column
        prop="time"
        label="time">
      </el-table-column>
      <el-table-column
        prop="sales"
        label="sales">
      </el-table-column>
      <el-table-column
        prop="imgurl"
        label="imgurl"
        width="150">
      </el-table-column>
    <el-table-column
        prop="remain"
        label="remain"
        width="150">
      </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[15, 20, 30, 50]"
          :page-size="qty"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
    </div>
    </div>
</template>

<script type="text/javascript">
	import './datagrid.scss'
    import $ from 'jquery'

	export default {
		name: 'datagrid',
        props: ['api', 'tools', 'toolbar'],
        components: {
            
        },
		data(){
			return {
                dataset: [],
                toolList: null,
                qty:0,
                total:0,
                page:0,
                toolbar_id: 'toobar_' + parseInt(Math.random() * 10000),
                currentPage: 1,
                getData(obj){
                    console.log(this.api)
                   $.get(this.api,obj,(res)=>{
                    console.log(res)
                    this.dataset = res.data
                    this.qty = Number(res.qty)
                    this.total = res.total
                    this.page = Number(res.page)
                    })    
                },
            }
		},
        methods: {
            click: function(evt){
                if(evt && evt.event){
                    evt.event()
                }
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.getData({qty:val,page:this.page})
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.getData({qty:this.qty,page:val})
            }
        },
        created(){
            if(this.api){
                console.log(this.api)
                $.get(this.api,(res)=>{
                    console.log(res.qty)
                    this.dataset = res.data
                    this.qty = Number(res.qty)
                    this.total = res.total
                    this.page = Number(res.page)
                })    
                
            }
            if(this.tools){
                if(this.toolbar){
                    this.toolList = this.tools
                } else {
                    this.$parent.$parent.addTool(this.tools)
                }
            }  
        }
	}
</script>