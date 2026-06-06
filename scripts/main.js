/* 全局与基础设置 */
html {
  font-size: 20px; /* 基础字号*/
  font-family: "Open Sans", sans-serif;
  background-color: #ffffff;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* 防止页面切换闪屏 */
body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  transition: opacity 0.3s ease-in-out;
  will-change: opacity;
}

/* 页面加载时保持可见 */
body.loading {
  opacity: 1;
}

/* 页面淡入动画 */
body {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 标题动画 */
.title {
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 导航栏动画 */
.bar {
  animation: slideInRight 0.8s ease-out 0.2s both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 链接悬停效果 */
a {
  transition: all 0.3s ease;
  position: relative;
}

a:hover {
  color: #ff6b6b;
  transform: scale(1.1);
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

/* 导航菜单项悬停效果 */
.bar > ul > li {
  transition: all 0.3s ease;
}

.bar > ul > li:hover {
  background-color: rgba(255, 107, 107, 0.2);
  border-radius: 5px;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

/* 社徽图片动画 */
.title img {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

a {
  color: #124578;
}

/*  */
header {
  color: #000000;
  margin: 0;
  padding: 0;
}

header * {
  margin: 0;
  padding: 0;
}

.title {
  display: inline-flex;
  height: auto;
  align-items: center; /*垂直居中对齐*/
  margin: 0;
  padding: 0;
}

/*首页标题*/
.title .home-title {
  font-size: 32px;
}

/*非首页标题*/
.title h1:not(.home-title) {
  font-size: 24px;
}

.bar {
  background-color: aquamarine;
  width: 100%;
}

.bar > ul {
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-around;
}

.bar > ul > li {
  padding: 2px 10px;
}

/*  */
.left-right {
  display: flex;
}

.left-right > div {
  width: 50%;
}

/* 页面过小提示 */
.warn-taixiao {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4c4c4c; 
  color: #87ffeba4;
  text-align: center;
  padding: 10px;
  z-index: 1000;
  font-weight: bold;
  border-bottom: 2px solid #9affe7;
}


@media (max-width: 600px) {
  .warn-taixiao {
    display: block;
  }
}
