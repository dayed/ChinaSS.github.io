define(["baseDialog"],function(baseDialog){
    return {
        createDialog : function(){
            //为弹出框增加操作按钮
            var buttons = [];
            buttons.push(
                {name:"确定",callback:function(){
                    //此处写扩展代码

                }}
            );
            var dialog = baseDialog({
                id:"BaseDialog",
                cache:false,                 //是否缓存，默认为true
                title:"BaseDialog",
                width:"400px",
                height:"100px",
                dialogSize:"",               //modal-lg或modal-sm
                body:"窗口中间内容",
                buttons:buttons
            });
            //可以通过返回的dialog对象调用相关方法
            dialog.setBody("修改内容");
        }
    }
});