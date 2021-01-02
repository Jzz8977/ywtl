<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {request}from '@/utils/api.js'
export default {
  name: 'App',
  data(){
    return {
      res:{
    "success": true,													
    "message": "查询成功",													
    "code": 200,														
    "result": {
        "allAuth": [													
            {
                "action": "user:add",					
                "describe": "添加按钮",				
                "type": "1",									
                "status": "1"									
            },
            
        ],
        "auth": [											   
            {
                "action": "user:add",		
                "describe": "添加按钮",	
                "type": "1",						
            },
          
        ],

        "menu": [												
            {
                "redirect": null,										
                "path": "/#",										
                "component": "layouts/RouteView",					
                "route": "1",						
                "children": [							
                    {
                        "path": "/model/ee01006/Ee_01006List",				
                        "component": "model/ee01006/Ee_01006List",			
                        "route": "1",						
                        "meta": {
                            "keepAlive": false,				
                            "internalOrExternal": false,      
                            "title": "规上企业月度经营状况详细"                
                        },
                        "name": "model-ee01006-Ee_01006List",				
                        "id": "1303940844494274562"					
                    },
                 
                ],
                "meta": {
                    "keepAlive": false,				
                    "internalOrExternal": false,       	
                    "icon": "upload",					
                    "title": "数据管理"				
                },
                "name": "#",						
                "id": "1303874653887234050"		
            },
        ]
    },
    "timestamp": 1600227217992					
}
    }
  },
  async mounted(){
   
    // result = this.res;
    // let menu = result.result.menu;
    // console.log(menu);
    // let result = await this.$post(request.getUserPermissionByToken,{
    //   token:request.token,
    //   type:1
    // });
  }
}
</script>

<style>
@import url(./assets/css/style.css);
</style>
