<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import drone1 from '../../assets/drone1.jpg';
import drone2 from '../../assets/drone2.jpg';
import drone3 from '../../assets/drone3.jpg';
import drone4 from '../../assets/drone4.jpg';

defineProps<{
    name: String,
}>();

const droneclick = (event:MouseEvent) => {
    const but = event.target as HTMLButtonElement;
    const dronebut = Array.from(document.querySelectorAll('.dronebut')) as HTMLButtonElement[];
    dronebut.forEach(element => {
        element.classList.remove('select2');
    });
    but.classList.add('select2');
}

const serviceclick = (event:MouseEvent) => {
    const but = event.target as HTMLButtonElement;
    if (but.classList.contains('select2')) {
        but.classList.remove('select2');
    }
    else
    {
        but.classList.add('select2');
    }
} 

let index = 1;
let time = setInterval(() => {
    const img = Array.from(document.querySelectorAll('.itemimg')) as HTMLImageElement[];
    if(img){
        img[index].classList.remove('select1');
        switch (index) {
            case 1:
                img[0].src=drone2;
                break;
            case 2:
                img[0].src=drone3;
                break;
            case 3:
                img[0].src=drone4;
                break;
            case 4:
                img[0].src=drone1;
                break;
            default:
                break;
        }
        index = index % 4 + 1;
        img[index].classList.add('select1');
    }
},2000);

onBeforeUnmount(() => {
    clearInterval(time);
})
</script>

<template>
    <div class="all">
        <slot name="header"/>
        <div class="main">
            <div class="item">
                <div class="picture">
                    <div class="display">
                        <img class="itemimg"src="../../assets/drone1.jpg" alt="当前型号无人机展示">
                    </div>
                    <div class="small-display">
                        <li><img class="itemimg select1" src="../../assets/drone1.jpg" alt="无人机展示图"></li>
                        <li><img class="itemimg" src="../../assets/drone2.jpg" alt="无人机展示图"></li>
                        <li><img class="itemimg" src="../../assets/drone3.jpg" alt="无人机展示图"></li>
                        <li><img class="itemimg" src="../../assets/drone4.jpg" alt="无人机展示图"></li>
                    </div>
                </div>
                <div class="sell">
                    <h2 style="text-align: left;color: black;">无人机及平台服务租贷</h2>
                    <p style="text-align: left;color: black;">无人机型号</p>
                    <div class="dronebutlist">
                        <button class="dronebut" @click="droneclick">气象无人机</button>
                        <button class="dronebut" @click="droneclick">污染监测无人机</button>
                        <button class="dronebut" @click="droneclick">空气监测无人机</button>
                    </div>
                    <p style="text-align: left;color: black;">平台服务</p>
                    <div class="servicelist">
                        <button @click="serviceclick">实时数据分析报告</button>
                        <button @click="serviceclick">数据库保存</button>
                        <button @click="serviceclick">安全标准认证</button>
                        <button @click="serviceclick">数据库数据权限</button>
                    </div>
                    <div class="sellbutlist">
                        <button style="background-color: orangered;border-top-right-radius: 0;border-bottom-right-radius: 0;">购买</button>
                        <button style="background-color: aqua;border-top-left-radius: 0;border-bottom-left-radius: 0;">客服/售后</button>
                    </div>
                </div>
            </div>
            <div class="review">
                <h2>客户评价</h2>
                <li>
                    <div class="user"></div>
                    <p>平台功能很齐全，客服服务也很好！</p>
                </li>
            </div>
        </div>
    </div>
</template>

<style scoped>
.select1 {
    border: 6px solid white;
}
.select2 {
    border: 1px solid orange;
}

.all {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
}
.main {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
}
.item {
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    width: 80%;
    height: 60%;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;

    /* background-color: rgba(255, 255, 255, 0.8); */
}
.picture {
    display: flex;
    flex-direction: column;

    width: 50%;
    height: 100%;
}
.display {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 75%;
}
.display img{
    width: 80%;
    height: 100%;
}
.small-display {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 25%;

    background-color: rgba(255, 255, 255, 0.5);
}
.small-display li {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 25%;
    height: 100%;
}
.small-display img {
    width: 80%;
    height: 80%;
}
.sell {
    width: 50%;
    height: 100%;

    text-align: left;

    background-color: rgba(255, 255, 255, 0.9);
}
.dronebutlist button {
    display: inline-block;
    margin: 1px 5px;

    border: 1px solid black;
    border-radius: 10px;
}
.servicelist button {
    display: inline-block;
    margin: 1px 5px;

    border: 1px solid black;
    border-radius: 10px;
}
.sellbutlist {
    width: 60%;
    height: 20%;

    margin: 5% auto;

    border-radius: 20px;

    background-color: aqua
}
.sellbutlist button {
    width: 50%;
    height: 100%;

    font-size: 20px;

    overflow: hidden;
}
.review {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    width: 80%;
    height: 40%;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    background-color: rgba(255, 255, 255, 0.05);
}
.review h2 {
    width: 12%;
}
.review li {
    width: 100%;
    height: 70%;

    border: 1px solid rgba(255, 255, 255, 0.2);
}
.review .user {
    width: 60px;
    height: 60px;
    border-radius: 50%;

    background-color: rgb(0, 255, 174);
}
.review p {
    text-align: left;
    color: rgba(255, 255, 255, 0.8);
    margin-left: 60px;
}

li {
  list-style-type: none;
}
</style>