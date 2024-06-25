<script setup lang="ts">
import { ref } from "vue";
import province from "./../../assets/images.jpg";
import Forest from "./../../assets/forest_1.png";
import Forest2 from "./../../assets/forest_2.png";
import Forest3 from "./../../assets/forest_3.png";

defineProps<{
  name: string;
}>();

const comments = ref([
  { id: 1, user: "王晚早好", text: "想问一下这个怎么拍的？", avatar: province },
  { id: 2, user: "User2", text: "Very informative.", avatar: province },
  // Add more comments here
]);

const publisher = ref({
  avatar: Forest,
  name: "环控平台",
  description: "DiJ 拍摄的作品，一起欣赏大自然的美丽吧",
});

const recommendedVideos = ref([
  { id: 1, thumbnail: Forest2, title: "森林自然美色" },
  { id: 2, thumbnail: Forest3, title: "鸟语花香的早晨" },
  // Add more recommended videos here
]);
</script>

<template>
  <div class="AppLayout">
    <slot name="header" />

    <div class="video-page">
      <div class="main-content">
        <div class="video-section">
          <video controls>
            <source src="/src/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div class="tag-container">
            <div class="tag">8K</div>
          </div>
          <div class="comments-section">
            <h2>评论区</h2>
            <div class="comment" v-for="comment in comments" :key="comment.id">
              <div class="comment-header">
                <img :src="comment.avatar" alt="user avatar" class="avatar" />
                <p class="user">{{ comment.user }}</p>
              </div>
              <p class="text">{{ comment.text }}</p>
            </div>
          </div>
        </div>
        <div class="sidebar">
          <div class="publisher-info">
            <h2>发布者</h2>
            <div class="publisher">
              <img :src="publisher.avatar" alt="publisher avatar" class="avatar" />
              <div class="publisher-details">
                <p class="name">{{ publisher.name }}</p>
                <p class="description">{{ publisher.description }}</p>
              </div>
            </div>
          </div>
          <div class="recommendations-section">
            <h2>相关视频推荐</h2>
            <div
              class="recommendation"
              v-for="video in recommendedVideos"
              :key="video.id"
            >
              <img :src="video.thumbnail" alt="video thumbnail" />
              <p>{{ video.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tag-container {
  position: absolute;

  top: 9%;
  right: 31%;

  width: 50px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #000000A0;
  backdrop-filter: blur(10px);
}

.tag {
  font-size: 16px;
  font-weight: bold;
  color: #dabb0c; /* 金色 */
  border-radius: 8px;
  /* animation: shine 2s linear infinite; */
  /* box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700; */
  filter: blur(1px);
  text-shadow: 0 0 1px #FFD70010, 0 0 2px #FFD700230;
}

.video-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #161616;
  height: 100vh;
}

.main-content {
  display: flex;
  width: 100%;
  max-width: 1200px;
}

.video-section {
  flex: 3;
  margin-right: 20px;
}

video {
  width: 100%;
  border: 2px solid #1a1e1d;
  border-radius: 8px;
}

.comments-section {
  text-align: center;

  background: #262626;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
}

.comments-section h2 {
  margin: 0;
  text-align: left;

  font-size: 24px;
  color: #eee;
}

.comment {
  text-align: left;

  display: flex;
  flex-direction: column;
  padding: 15px 0;
  border-bottom: 1px solid #262626;
}

.comment:last-child {
  border-bottom: none;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user {
  font-size: 16px;
  font-weight: bold;
  color: #eee;
}

.text {
  text-indent: 16px;

  font-size: 14px;
  color: #eee;
}

.sidebar {
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 300px;
}

.publisher-info {
  margin: 0;

  padding: 0;
  text-align: left;
}

.recommendations-section {
  margin-bottom: 20px;

  text-align: left;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #f0f0f0;
}

.publisher {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #333;
}

.publisher-details .name {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.publisher-details .description {
  font-size: 14px;
  color: #cccccc;
  margin: 5px 0 0 0;
}

.recommendation {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.recommendation img {
  width: 80px;
  height: 45px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #333;
}

.recommendation p {
  margin: 0;
  font-size: 14px;
  color: #cccccc;
}
.AppLayout {
  flex: 1;
}
</style>
