<template>
  <div>
    <div class="dk-toolbar dk-grid-toolbar" :id="toolbar_id" v-if="toolbar">
      <a href="javascript:" class="btn btn-primary btn-sm" v-if="toolList" v-for="(value,key) in toolList" @click="click(value)">{{value.text ? value.text : key}}</a>
    </div>
    <div style="margin-top: 15px;" class="search">
      <el-input placeholder="请输入ID/菜名/菜系/描述" v-model="input" size="small">
        <el-button slot="append" icon="search" @click="search"></el-button>
      </el-input>
    </div>
    <div>
        <el-button  class="toggle" type="primary" @click="toggle" size="small">{{text}}</el-button>
    </div>
    <el-table class="table" :data="dataset" height="560" border style="width: 100%">
        <el-table-column v-for="(value,key) in dataset[0]" :prop="key" width="150" sortable :label="dictionary[lan][key] || key " :className="key" align="center" :key="key+value"></el-table-column>
      <!-- <el-table-column
        prop="ID"
        :label="dictionary[lan].ID"
        sortable
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        :label="dictionary[lan].name"
        sortable
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
        sortable
        width="130">
      </el-table-column>
      <el-table-column
        prop="oldPrice"
        label="oldPrice"
        sortable
        width="120">
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
        sortable
        width="100"
        label="sales">
      </el-table-column>
      <el-table-column
        prop="imgurl"
        label="imgurl"
        width="170">
      </el-table-column>
      <el-table-column
        prop="remain"
        label="remain"
        width="100">
      </el-table-column>
       <el-table-column
        prop="CreateTime"
        label="CreateTime"
        width="150">
      </el-table-column> -->
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template scope="scope">
          <el-button @click="update" type="text" size="small">修改</el-button>
          <el-button @click="remove" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="cyq-block">
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
  import base from'../../assets/common/common.js'
	import './datagrid.scss'
  import $ from 'jquery'

  var baseurl = base.global.baseurl;

	export default {
		name: 'datagrid',
        props: ['api', 'tools', 'toolbar'],
        components: {
            
        },
		data(){
			return {
        dataset: [],
        dictionary: {},
        text: 'English',
        lan: 'cn',
        toolList: null,
        input:'',
        qty:0,
        total:0,
        page:0,
        toolbar_id: 'toobar_' + parseInt(Math.random() * 10000),
        currentPage: 1,
        getData(obj){
          //console.log(this.api)
         $.get(this.api,obj,(res)=>{
          //console.log(res)
          this.dataset = res.data
          this.qty = Number(res.qty)
          this.total = res.total
          this.page = Number(res.page)
          })    
        },
      }
		},
    methods: {
      //新增
      click: function(evt){
        if(evt && evt.event){
            evt.event()
        }
      },

      //中英文切换
      toggle(){
        this.text = this.text == '中文' ? 'English' : '中文';
        if(this.text == '中文') {
            this.lan = 'en';
        }else{
            this.lan = 'cn';
        }
      },

      //搜索菜名
      search() {
        let self = this
        $.get(baseurl + 'search',{keyword:self.input},function(res) {
            console.log(res)
            self.dataset = res.data
            self.total   = res.data.length
        })
      }, 

      //删除菜品
      remove(evt) {
        var self = this;
        this.$confirm('此操作将永久删除该菜品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let currentID = $(evt.target).parents('tr').children().eq(0).text()
          $.post(baseurl + 'removeProduct', {id:currentID,qty:self.qty,page:self.page},function(res){
            self.dataset = res.data
            if(res.status) {
              self.$message({
              type: 'success',
              message: '删除成功!'
              });
            }
          })
        }).catch(() => {
          this.$message({type: 'info',message: '已取消删除'});          
        });

      
      },
      //更新菜品
      update(evt) {
        var self = this
        //console.log('更新成功')
        let index = $(evt.target).closest('tr').index();
        //console.log(this.dataset[index])
        this.$router.push({name:'update',params:{data:self.dataset[index]}})
      },

      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        this.getData({qty:val,page:this.page})
      },

      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        this.getData({qty:this.qty,page:val})
      }
    },
    created(){
        let self = this
      $.get(baseurl + 'src/assets/common/dictionary.json',function(res){
        self.dictionary = res
      })
      if(this.api){
          //console.log(this.api)
          $.get(this.api,(res)=>{
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