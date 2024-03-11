<script setup lang="ts">
import navBar from './nav-bar';
import Logo from './../../assets/logo-removebg-preview.png'

const props = defineProps<{
  option?: any,
}>()

if (!props.option?.now) {
  props.option.now = navBar[0]
}
</script>

<template>
  <div class="NavBar">
    <div class="NavBar-Head">
      <img :src="Logo" alt="Logo" />
    </div>

    <ul class="NavBar-List">
      <li @click="option.now = item" :class="{ active: props.option.now.name === item.name }" v-for="(item) in navBar">
        <span v-html="item.svg" />
      </li>
    </ul>
  </div>
</template>

<style>
.NavBar {
  padding: 2rem 1rem;
  left: 0;

  width: 80px;
  height: 100%;

  box-sizing: border-box;
  border-right: 1px solid #212324;
}

.NavBar-Head {
  position: relative;

  width: 50px;
  height: 50px;

  overflow: hidden;
}

.NavBar-Head img {
  position: absolute;

  width: 400%;
  height: 400%;

  top: -160%;
  left: -26%;

  object-fit: contain;
}

.NavBar-List li {
  display: flex;

  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;

  color: #fff;
  opacity: .5;

  cursor: pointer;
  border-radius: 12px;

  transition: cubic-bezier(0.39, 0.575, 0.565, 1) .35s;
}

.NavBar-List li.active {
  opacity: .75;

  background-color: #1F2122;
}

.NavBar-List li span {
  margin-top: 5px;
  display: block;

  /* transform: scale(.95); */
}

.NavBar-List {
  display: flex;
  padding: 0;
  margin: 5rem 0;

  gap: 1rem;
  flex-direction: column;

  list-style: none;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
}
</style>