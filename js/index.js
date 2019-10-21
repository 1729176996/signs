var mainData,loading;
$(function(){
    FastClick.attach(document.body);
    mainData = new Vue({
        el: "#main",
        data:{
            bscroll:null,
            list:[],
            object:{},
            show:'0'//显示标志，0就不显示，1只显示图片，2显示全部
        },
        mounted:function(){
            var _this = this;
            
            _this.list = list;
            
            //渲染节点结束后执行
            _this.$nextTick(function(){
                if(_this.bscroll) _this.bscroll.destroy();
                _this.bscroll = new BScroll(".content",{
                    click: true,
                    pullUpLoad: {
                      threshold: 50
                    }
                })
            })
        },
        methods:{
            openShow:function(){
                var _this = this;
                _this.object = _this.list[0];
                _this.show = '1';
            },
            look:function(){
                this.show = '2';
            },
            closeShow:function(){
                var _this = this;
                _this.object = {};
                _this.show = '0';
            }
        }
    })
});
