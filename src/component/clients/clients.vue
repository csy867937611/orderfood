<template>
    <div>
        <datagrid api="http://localhost:1000/page" :tools="tools"></datagrid>
    </div>
</template>

<script type="text/javascript">
    import datagrid from '../datagrid/datagrid.vue'
    import base from '../../assets/common/common.js'
    var baseurl = base.global.baseurl
    import router from '../../router'

    export default {
        components: {
            datagrid
        },
        data(){
            return {
                tools: {
                    add: {
                        text: '添加菜品',
                        event: function(){
                            router.push({name: 'client'})
                        }
                    }
                }
            }
        }
    }
</script>