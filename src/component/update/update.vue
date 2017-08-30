<template>
  <div>
      <el-form :inline="true" ref="updateForm" :rules="rules" :model="editData" class="demo-form-inline">
          <el-form-item label="ID:">
              <el-input v-model="editData.ID"  ></el-input>
          </el-form-item>
          <el-form-item label="name:" prop="name">
              <el-input v-model="editData.name"   ></el-input>
          </el-form-item>
          <el-form-item label="description:">
              <el-input v-model="editData.description"  ></el-input>
          </el-form-item>
          <el-form-item label="category:" prop="category">
            <el-select v-model="editData.category"  >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="nowPrice:" prop="nowPrice">
              <el-input v-model="editData.nowPrice"   ></el-input>
          </el-form-item>
          <el-form-item label="oldPrice:">
              <el-input v-model="editData.oldPrice" ></el-input>
          </el-form-item>
          <el-form-item label="discount:">
              <el-input v-model="editData.discount" ></el-input>
          </el-form-item>
          <el-form-item label="time:" prop="time">
              <el-input v-model="editData.time"   ></el-input>
          </el-form-item>
          <el-form-item label="sales:">
              <el-input v-model="editData.sales"   ></el-input>
          </el-form-item>
          <el-form-item label="isNew:">
            <el-select v-model="editData.isNew">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="isFmous:">
            <el-select v-model="editData.isFmous" >
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="imgurl:" prop="imgurl">
              <el-input v-model="editData.imgurl"  ></el-input>
          </el-form-item>
          <el-form-item label="remain:">
            <el-input v-model="editData.remain" ></el-input>
          </el-form-item>
          <el-form-item label="limit1:">
            <el-select v-model="editData.limit1" >
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="isSellOut:">
            <el-select v-model="editData.isSellOut" >
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="pass100:">
            <el-select v-model="editData.pass100" >
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="pass200:">
            <el-select v-model="editData.pass200" >
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="promotion:">
            <el-select v-model="editData.promotion" >
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <p class="align">
          <el-button  type="primary" @click="update" >确认修改</el-button>
          <el-button  type="primary" @click="cancel" >取消</el-button></p>
      </el-form>
  </div>
</template>

<script>
  import router from '../../router'
  import base from '../../assets/common/common.js'
  var baseurl = base.global.baseurl;

  import './update.scss'
  import $ from 'jquery'
  export default {
    name:'update',
    data(){
      return {
        editData: {},
        options:[{
          value: '沙拉',
          label: '沙拉'
          }, {
          value: '小吃',
          label: '小吃'
          }, {
          value: '主菜',
          label: '主菜'
          }, {
          value: '汤品',
          label: '汤品'
          }, {
          value: '主食',
          label: '主食'
          }, {
          value: '甜点',
          label: '甜点'
          }, {
          value: '饮品',
          label: '饮品'
        }],
        option:[{
          value: 'true',
          label: 'true'
          },{
          value: 'false',
          label: 'false'
        }],
        rules:{
          name:[{
              required: true, message: '请输入活动名称', trigger: 'blur' 
          }],
          category:[{
              required: true, message: '请选择分类',trigger: 'blur'
          }],
          nowPrice:[{
              required: true, message: '请输入价格',trigger: 'blur'
          }],
          imgurl:[{
              required: true, message: '请输入图片路径',trigger: 'blur'
          }],
          time:[{
              required: true, message: '请输入制作时间', trigger: 'blur'
          }]
        }
        }
    },
    created(){
        this.editData = this.$route.params.data
    },
    methods:{
        update(){
            console.log(this.editData);
            this.$refs.updateForm.validate((valid)=>{
                if(valid){
                    $.post(baseurl + 'updateProduct', this.editData,function(res) {
                    console.log(res)
                })
                    this.$alert('保存成功！','success',{
                        confirmButtonText: '确定',
                        callback(){
                            router.push({name: 'clients'})
                        }
                    })
                }else{
                    $.alert('保存失败');
                    return false;
                }
            })
        },
        cancel() {
            this.$router.push({name:'clients'})
        }
    }
  }  
</script>