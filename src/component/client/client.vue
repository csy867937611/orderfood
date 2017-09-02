<template>
    <div>
        <el-form :inline="true" ref="cyqform" :rules="rules" :model="editData" class="demo-form-inline">
            <el-form-item label="菜品编号" prop="ID">
                <el-input v-model="editData.ID"  placeholder="菜品编号" ></el-input>
            </el-form-item>
            <el-form-item label="菜品名称:" prop="name">
                <el-input v-model="editData.name"  placeholder="菜名" ></el-input>
            </el-form-item>
            <el-form-item label="描述:">
                <el-input v-model="editData.description"  placeholder="描述"></el-input>
            </el-form-item>
            <el-form-item label="菜系:" prop="category">
                <el-select v-model="editData.category"  placeholder="请选择" >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="销售价:" prop="nowPrice">
                <el-input v-model="editData.nowPrice"  placeholder="销售价" ></el-input>
            </el-form-item>
            <el-form-item label="原价:">
                <el-input v-model="editData.oldPrice" placeholder="原价"></el-input>
            </el-form-item>
            <el-form-item label="折扣:">
                <el-input v-model="editData.discount" placeholder="折扣"></el-input>
            </el-form-item>
            <el-form-item label="制作时间:" prop="time">
                <el-input v-model="editData.time" name="time" placeholder="制作时间:多少分钟" required></el-input>
            </el-form-item>
            <el-form-item label="销售量:">
                <el-input v-model="editData.sales"  name="sales" placeholder="月售量" required></el-input>
            </el-form-item>
            <el-form-item label="是否新品:">
                <el-select v-model="editData.isNew" placeholder="请选择">
                    <el-option
                      v-for="item in option"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否招牌菜:">
                <el-select v-model="editData.isFmous" placeholder="请选择">
                    <el-option
                      v-for="item in option"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="图片路径:" prop="imgurl">
                <el-input v-model="editData.imgurl" placeholder="图片路径" ></el-input>
            </el-form-item>
            <el-form-item label="库存:">
                <el-input v-model="editData.remain" placeholder="库存量"></el-input>
            </el-form-item>
            <el-form-item label="是否限量:">
                <el-select v-model="editData.limit1" placeholder="请选择">
                    <el-option
                      v-for="item in option"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否买完:">
                <el-select v-model="editData.isSellOut" placeholder="请选择">
                    <el-option
                      v-for="item in option"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="满100减免:">
                <el-select v-model="editData.pass100" placeholder="请选择">
                    <el-option
                      v-for="item in option"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="满200减免:">
                <el-select v-model="editData.pass200" placeholder="请选择">
                    <el-option
                      v-for="item in option"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否促销:">
                <el-select v-model="editData.promotion" placeholder="请选择">
                    <el-option
                      v-for="item in option"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script type="text/javascript">
    import router from '../../router'
    import base from '../../assets/common/common.js'
    var baseurl = base.global.baseurl
    import './client.scss'
    import $ from 'jquery'

    export default {
        data(){
            return {
                editData: {
                    ID: '',
                    name: '',
                    description: '',
                    category: '',
                    nowPrice: '',
                    oldPrice: '',
                    discount: '',
                    time: '',
                    sales: '',
                    isNew: '',
                    isFmous: '',
                    imgurl: '',
                    remain: '',
                    limit1: '',
                    isSellOut: '',
                    pass100: '',
                    pass200: '',
                    promotion: ''

                },
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
                    value: 'Y',
                    label: 'Y'
                    },{
                    value: 'N',
                    label: 'N'
                }],
                rules:{
                    ID:[{
                        required: true, message: '请输入菜品的ID', trigger: 'blur'
                    }],
                    name:[{
                        required: true, message: '请输入菜名', trigger: 'blur' 
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
            console.log(this)
            var self = this;
            var tools = {
                add: {
                    text: '保存',
                    event: () => {
                        this.$refs.cyqform.validate((valid)=>{
                            if(valid){
                                $.post(baseurl + 'addProduct', this.editData,function(res) {
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
                },
                back: {
                    text: '返回',
                    class: 'btn-goback',
                    event: () => {
                        router.push({name: 'clients'})
                    }
                }
            }
            this.$parent.addTool(tools);
        }
    }
</script>