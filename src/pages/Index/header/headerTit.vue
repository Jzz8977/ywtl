<template>
    <div class="title">
        <div class="word">
            {{title}}
        </div>
        <div class="time">
            {{time}}
        </div>
    </div>
</template>

<script>
    export default {
        name:'headerTitle',
        props:['title','time']
        
    }
</script>

<style  scoped>
.title{
    box-sizing: border-box;
    margin:13px 0 12px 0 ;
    height: 41px;
    line-height: 41px;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    border: 0;
}
.word{
    min-width: 258px;
    height: 41px;
    padding-left: 21px;
    box-sizing: border-box;
    background: url(../../../assets/img/headerTitleBg.png) -10px center no-repeat;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    float: left;
}
.time{
    font-size: 18px;
    float: right;
    padding:0 21px;
    height: 41px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #A3D5FF;
    line-height: 41px;
}

</style>