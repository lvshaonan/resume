<template>
  <div id="app">
    <header>
      <div class="boundary clearfix">
        <h1>
        吕少楠<span>Web前端开发工程师</span>
        </h1>
        <div class="address">
          <ul class="clearfix">
            <li><a href="tel:18513655634">18513655634</a></li>
            <li><a href="mailto:18513655634@163.com">18513655634@163.com</a></li>
          </ul>
        </div>
      </div>
    </header>
    <div class="main">
      <!-- 专业技能 -->
      <section class="professional-skill section">
        <div class="boundary">
          <div class="section-header">
            <h2>专用技能</h2>
            <h3>professional skill</h3>
          </div>
          <div class="section-body">
            <ul class="skill-list">
              <li :class="{'trans': animationStart}" v-for="(item, index) in skillList" :key="index" class="skill-list-item" @mouseout="hoverOut" @mouseover="skillHover(index)">
                {{item}}
                <p v-show = "skillDescriptionIndex === index">{{skillDescription[index]}}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 自我描述 -->
      <section class="working-reason section">
        <div class="boundary">
          <div class="section-header">
            <h2>为什么我要从事web前端</h2>
          </div>
          <div class="section-body">
            <p>曾经我一直都有一个想法就是做一个自己的网站，大学时虽学习了HTML，但没去深入学习web前端课程。然而毕业工作之后，慢慢增加了对web前端的了解，后续自己下载关于html和css教学视频，同时自学JavaScript知识，并深入了解这个行业。如今才发现，Web前端就是我真正感兴趣的行业。</p>
          </div>
        </div>
      </section>
      <!-- 工作经历 -->
      <section class="work-experience section">
        <div class="boundary">
          <div class="section-header">
            <h2>工作经历</h2>
            <h3>work experience</h3>
          </div>
          <div class="section-body">
            <div class="work-exp-list">
              <div class="work-exp-list-point">
                <i class="point-icon"></i>
                现在
              </div>
              <section class="work-exp-list-company">
                <div class="work-exp-list-company-header">
                  <a href="http://www.mailiqing.com" target="_blank" class="link-logo"><img src="http://www.mailiqing.com/staticPages/2017/Home/images/logo.png" alt=""></a>
                  <h4><a href="http://www.mailiqing.com">北京金兆路华电子商务有限公司</a></h4>
                </div>
                <div class="work-exp-list-company-body">
                  <p>在此期间对自己的知识和业务能力有进一步提高，项目更多元化</p>
                  <p>工作中学习并运用了EasyUI，Bootstrap，vue，百度地图到项目中，后期选定<strong>[ VUE.js ]</strong>作为主开发框架,
                  并在业余时间学习 <strong>React.js</strong> 进一步熟练对MVVM模式运用</p>
                </div>
              </section>
              <div class="work-exp-list-point">
                <i class="point-icon"></i>
                2016/6
              </div>
              <section class="work-exp-list-company">
                <div class="work-exp-list-company-header">
                  <a href="" target="_blank" class="link-logo"><img :src="logoSrc" alt=""></a>
                  <h4><a href="javascript:">北京嘉博沃德农业发展有限公司</a></h4>
                </div>
                <div class="work-exp-list-company-body">
                  <p>这是在北京的第一份工作，以基础性的工作为主，并提高团队协作能力</p>
                  <p>在这期间主要编写了PC端的电商商城并参与了商城的移动端项目，学习运用了响应式布局和弹性盒布局，学习了移动端的适配方案</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <!-- 项目经验 -->
      <section class="project-experience section">
        <div class="boundary">
          <div class="section-header">
            <h2>项目经验</h2>
            <h3>project experience</h3>
          </div>
          <div class="section-body">
            
            <section class="project clearfix">
              <div class="project-intro">
                <div class="project-intro-header">
                  <h4>Mai沥青电商平台（WebApp）</h4>
                  <ul>
                    <li class="skill-point-html skill-point">HTML5</li>
                    <li class="skill-point-css skill-point">SCSS</li>
                    <li class="skill-point-js skill-point">VUE</li>
                    <li class="skill-point-node skill-point">Node.js</li>
                  </ul>
                </div>
                <div class="content">
                   <h3>此项目为业余时间运用vue全家桶开发的webApp，并运用移动端组件库cube-ui对项目进行快速开发</h3>
                   <ul>
                     <li>使用vue框架，以及vue-router构建单页面应用，通过vue-cli 快速搭建开发环境；</li>
                     <li>运用HTML5语义化标签+CSS3新特性进行页面布局，实现页面的动态效果，提高代码的清 晰度和代码质量；</li>
                     <li>使用REM单位适配不同尺寸的屏幕，利用SCSS编写常用@function、@mixin快速编写样式；</li>
                     <li>运用vue组件化开发，从而使组件高度复用，代码简洁</li>
                   </ul>
                </div>
              </div>
              <div class="project-img">
                <img :src="web_app" alt="">
              </div>
            </section>
            <section class="project clearfix">
              <div class="project-intro">
                <div class="project-intro-header">
                  <h4>小黑师傅-一键叫车平台（预注册）</h4>
                  <ul>
                    <li class="skill-point-html skill-point">HTML5</li>
                    <li class="skill-point-css skill-point">SCSS</li>
                    <li class="skill-point-js skill-point">VUE</li>
                    <li class="skill-point-node skill-point">Node.js</li>
                  </ul>
                </div>
                <div class="content">
                   <h3>此项目为App上线前利用H5页面对用户进行注册收集，是第一次把vue应用到项目中，真正实现了前后端分离，此项目的难点为注册时需要用户上传大量的证件进行验证，需要上传前对图片进行压缩</h3>
                   <ul>
                     <li>vue+vue-router+vuex+axios完成页面开发</li>
                     <li>封装常用组件，如 loading、dialog等</li>
                     <li>运用路由懒加载解决项目首页加载过长问题</li>
                   </ul>
                </div>
              </div>
              <div class="project-img">
                <img :src="pre_register" alt="">
              </div>
            </section>
            <section class="project clearfix">
              <div class="project-intro">
                <div class="project-intro-header">
                  <h4>兆华领先供应链管理信息系统（二期）</h4>
                  <ul>
                    <li class="skill-point-html skill-point">HTML</li>
                    <li class="skill-point-css skill-point">CSS</li>
                    <li class="skill-point-js skill-point">Bootstrap</li>
                  </ul>
                </div>
                <div class="content">
                   <h3>此项目是运用Bootstrap类库搭建的公司内部管理信息系统</h3>
                   <ul>
                     <li>此项目的难点为运用百度地图实现集装箱地图的功能，因上千坐标点在地图显示会严重影响性能，为解决此问题采用按屏幕显示区域来动态显示坐标点来解决</li>
                   </ul>
                </div>
              </div>
              <div class="project-img">
                <img :src="SCM2" alt="">
              </div>
            </section>
            <section class="project clearfix">
              <div class="project-intro">
                <div class="project-intro-header">
                  <h4>Mai沥青App（hybrid页面）</h4>
                  <ul>
                    <li class="skill-point-html skill-point">HTML5</li>
                    <li class="skill-point-css skill-point">CSS</li>
                    <li class="skill-point-js skill-point">WebViewJavascriptBridge</li>
                  </ul>
                </div>
                <div class="content">
                   <h3>此项目是嵌套在原生App内的H5页面，利用WebViewJavascriptBridge进行了简单的数据传递</h3>
                   <ul>
                     <li>兼容android、ios平台，使用REM单位适配不同尺寸的屏幕</li>
                     <li>运用WebViewJavascriptBridge向原生语言传递数据</li>
                   </ul>
                </div>
              </div>
              <div class="project-img">
                <img :src="mai_app" alt="">
              </div>
            </section>
            <section class="project clearfix">
              <div class="project-intro">
                <div class="project-intro-header">
                  <h4>兆华领先供应链管理信息系统（一期）</h4>
                  <ul>
                    <li class="skill-point-html skill-point">HTML</li>
                    <li class="skill-point-css skill-point">CSS</li>
                    <li class="skill-point-js skill-point">EasyUI</li>
                  </ul>
                </div>
                <div class="content">
                   <h3>此项目是利用EasyUI搭建的管理信息系统</h3>
                   <ul>
                     <li>运用EasyUI进行表格操作、做到页面样式统一</li>
                   </ul>
                </div>
              </div>
              <div class="project-img">
                <img :src="SCM1" alt="">
              </div>
            </section>
            <section class="project clearfix">
              <div class="project-intro">
                <div class="project-intro-header">
                  <h4>Mai沥青电商平台（PC）</h4>
                  <ul>
                    <li class="skill-point-html skill-point">HTML</li>
                    <li class="skill-point-css skill-point">CSS</li>
                    <li class="skill-point-js skill-point">Javascript</li>
                  </ul>
                </div>
                <div class="content">
                  <h3>此项目为大宗沥青电商平台，本人独立完成前端工作，并经过两期改版，主要运用jQuery.js类库进行dom操作</h3>
                   <ul>
                     <li>编写规范的html+css代码，兼容主流浏览器</li>
                   </ul>
                </div>
              </div>
              <div class="project-img">
                <img :src="mai_pc" alt="">
              </div>
            </section>
            <section class="project clearfix">
              <div class="project-intro">
                <div class="project-intro-header">
                  <h4>纯优选（WebApp）</h4>
                  <ul>
                    <li class="skill-point-html skill-point">HTML5</li>
                    <li class="skill-point-css skill-point">CSS</li>
                    <li class="skill-point-js skill-point">Zepto.js</li>
                  </ul>
                </div>
                <div class="content">
                   <h3>此项目移动端农产品电商商城、是第一次接触移动端网页</h3>
                   <ul>
                     <li>html+css3弹性盒布局、适配不同手机屏幕大小</li>
                   </ul>
                </div>
              </div>
              <div class="project-img">
                <img :src="chunyouxuan" alt="">
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
    <section class="thanks">
      <h2>致谢</h2>
      <h3>非常感谢您花时间阅读我的简历，期待有机会与您共事！</h3>
    </section>
    <div class="footer">
      <div class="boundary">
        <div class="erweima">
          <div class="img">
            <img :src="erweimaImg" alt="">
          </div>
          <div class="text">
            <p>您还可以扫描二维码</p>
            <p>在移动设备打开本页</p>
          </div>
        </div>
        <div class="weChat">
          <div class="img">
            <img :src="weChatImg" alt="">
          </div>
          <div class="text">
            <p>打开微信扫一扫</p>
            <p>期待你哦~^o^~</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skillDescriptionIndex: -1,
      msg: 1234564,
      animationStart: false,
      logoSrc: require("./assets/images/jiabologo_01.jpg"),
      mai_app: require("./assets/images/mai_app.png"),
      web_app: require("./assets/images/web_app.png"),
      mai_pc: require("./assets/images/mai_pc.jpg"),
      pre_register: require("./assets/images/pre_register.png"),
      SCM1: require("./assets/images/SCM1.jpg"),
      SCM2: require("./assets/images/SCM2.jpg"),
      chunyouxuan: require("./assets/images/chunyouxuan.png"),
      weChatImg: require("./assets/images/weChat.png"),
      erweimaImg: require("./assets/images/erweima.png"),
      skillList: [
        "HTML & CSS",
        "Javascript",
        "jQuery",
        "MV* 框架 React Vue",
        "Node.js"
      ],
      skillDescription: [
        "熟练使用div+css以及html5+css3新特性，根据设计图完成页面制作并解决各主流浏览器的兼容性；熟悉响应式布局和弹性盒布局，基于HTML5的webApp开发以及各种手机移动端适配；",
        "对JavaScript基础知识的掌握，包括基本语法以及DOM操作；4，	有基于Ajax的应用开发经验，DOM、JSONP等相关技术，与后台开发工程师协作，完成数据交互展现。",
        "掌握Javascript框架 (如;jQuery,Zepto)进行Web开发；",
        "了解MVVM规范，了解虚拟dom，有vue项目经验；",
        "了解express框架，熟练使用自动化构建工具（webpack）"
      ]
    };
  },
  mounted() {
    this.isSkillShow = true;
    setTimeout(() => {
      this.animationStart = true;
    }, 300);
  },
  methods: {
    skillHover(index) {
      this.skillDescriptionIndex = index;
    },
    hoverOut() {
      this.skillDescriptionIndex = -1;
    }
  }
};
</script>
<style lang="scss" scoped>
.boundary {
  width: 960px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media (max-width: 749px) {
    padding: 25px 0;
    width: auto;
  }
  @media (max-width: 768px) {
    margin: 0 20px;
    width: auto;
  }
}
.section-header {
  margin-bottom: 35px;
  text-align: center;
  line-height: 1.4;
  @media (max-width: 749px) {
    margin-bottom: 20px;
  }
  h2 {
    font-size: 42px;
    @media (max-width: 749px) {
      font-size: 26px;
    }
  }
  h3 {
    font-size: 34px;
    color: #999;
    @media (max-width: 749px) {
      font-size: 20px;
    }
  }
}
header {
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  @media (min-width: 880px) {
    width: 100%;
    height: 40px;
    position: fixed;
    z-index: 99999;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.95);
  }
  .boundary {
    @media (max-width: 1040px) and (min-width: 769px) {
      margin: 0 30px;
    }
    @media (max-width: 768px) {
      margin: 0 20px;
      width: auto;
      padding: 0;
    }
    h1 {
      font-size: 40px;
      color: #393939;
      float: left;
      height: 40px;
      span {
        font-size: 16px;
        color: #999;
        margin-left: 10px;
      }
    }
    .address {
      clear: both;
      @media (min-width: 880px) {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    ul {
      margin-top: 8px;
      li {
        float: left;
        padding-left: 26px;
        margin: 8px 8px 0 0;
        background: url(./assets/images/icon-sprites.png) no-repeat;
        background-size: 24px;
        height: 24px;
        line-height: 24px;
        &:nth-child(2) {
          background-position: left bottom;
        }
        @media (min-width: 520px) {
          float: left;
          margin-right: 22px;
        }
      }
    }
  }
}
.main {
  @media (min-width: 880px) {
    padding-top: 71px;
  }
  .section:nth-child(even) {
    background: #fafafa;
  }
  .professional-skill {
    .boundary {
      @media (min-width: 1040px){
        padding: 30px 0;
      }
      @media (max-width: 1040px) and (min-width: 769px) {
        margin: 0 30px;
        padding: 20px 0;
      }
      @media (max-width: 768px) {
        margin: 0 20px;
        width: auto;
        padding: 15px 0;
      }
      .section-body {
        .skill-list {
          .skill-list-item {
            height: 40px;
            line-height: 40px;
            padding-left: 16px;
            border-left: 3px solid skyblue;
            background: rgba(201, 232, 247, 0.8);
            margin-bottom: 20px;
            position: relative;
            width: 100px;
            transition: all 1.5s;
            p {
              width: 350px;
              padding: 10px 20px;
              line-height: 24px;
              z-index: 100;
              background: rgba(255, 255, 255, 0.9);
              border-radius: 4px;
              box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
              top: 12px;
              left: 100px;
              position: absolute;
            }
          }
          .trans {
            width: 80%;
            &:nth-child(2) {
              width: 75%;
            }
            &:nth-child(3) {
              width: 70%;
            }
            &:nth-child(4) {
              width: 66%;
            }
            &:nth-child(5) {
              width: 50%;
            }
          }
        }
      }
    }
  }
  .working-reason {
    .boundary {
      padding: 50px 0;
      @media (max-width: 1040px) and (min-width: 769px) {
        margin: 0 30px;
        padding: 20px 0;
        width: auto;
      }
      @media (max-width: 768px) {
        margin: 0 20px;
        width: auto;
        padding: 15px 0;
      }
      .section-body {
        p {
          padding: 0 50px;
          line-height: 24px;
          text-indent: 24px;
          @media (max-width: 768px) {
            width: auto;
            padding:0;
          }
        }
      }
    }
  }
  .work-experience {
    .boundary {
      padding: 50px 0;
      @media (max-width: 1040px) and (min-width: 769px) {
        margin: 0 30px;
        width: auto;
        padding: 25px 0;
      }
      @media (max-width: 768px) {
        margin: 0 20px;
        width: auto;
        padding: 20px 0;
      }
      .section-body {
        .work-exp-list {
          margin-left: 8px;
          border-left: 4px solid #cccccc;
          padding-top: 1px;
          .work-exp-list-point {
            position: relative;
            padding-left: 15px;
            margin: 15px 0;
            height: 26px;
            line-height: 26px;
            .point-icon {
              position: absolute;
              left: -11px;
              top: 0;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              margin: 4px 0;
              background: #3498db;
              font-size: 0;
              &:before,
              &:after {
                position: absolute;
                left: 0;
                width: 100%;
                height: 4px;
                content: " ";
                background: #fff;
                top: -4px;
              }
              &:after {
                top: 100%;
              }
            }
          }
          .work-exp-list-company {
            margin: 30px 0;
            margin-left: 20px;
            .work-exp-list-company-header {
              padding-left: 125px;
              position: relative;
              .link-logo {
                width: 100px;
                position: absolute;
                top: 0;
                left: 0;
                img {
                  width: 100%;
                }
              }
              h4 {
                font-size: 18px;
                a {
                  color: #000;
                  font-weight: 600;
                }
              }
            }
            .work-exp-list-company-body {
              padding-left: 125px;
              margin-top: 8px;
              p {
                line-height: 24px;
                // width: 680px;
                font-size: 15px;
                strong {
                  font-weight: bolder;
                  font-size: 16px;
                  margin: 0 5px;
                }
              }
            }
          }
        }
      }
    }
  }
  .project-experience {
    .boundary {
      padding: 50px 0;
      @media (max-width: 1040px) and (min-width: 769px) {
        margin: 0 30px;
        width: auto;
        padding: 25px 0;
      }
      @media (max-width: 768px) {
        margin: 0 20px;
        width: auto;
        padding: 20px 0;
      }
      .project {
        // margin-top: 25px;
        // padding: 35px 10px 0;
        border-top: 2px dashed #ccc;
        @media (min-width: 960px) {
          margin-top: 25px;
          padding-top: 35px;
          padding-left: 10px;
          padding-right: 380px;
        }
        @media (max-width: 959px) and (min-width: 750px) {
          margin-top: 20px;
          padding-top: 30px;
          padding-right: 290px;
        }
        @media (max-width: 750px) {
          padding: 15px 0;
        }
        &:first-child {
          border-top: none;
          margin-top: 0;
          padding-top: 0;
        }
        .project-intro {
          float: left;
          .content{
            h3{
              line-height: 20px;
              padding: 10px 0;
              font-size: 15px;
              font-weight: bold;
            }
            li{
              line-height: 18px;
              font-size: 13px;
            }
          }
          @media (max-width: 749px) {
            padding-bottom: 15px;
          }
          .project-intro-header {
            position: relative;
            margin-bottom: 8px;
            line-height: 1.3;
            h4 {
              padding-bottom: 3px;
              font-weight: bold;
              font-size: 18px;
            }
            .skill-point {
              height: 24px;
              line-height: 24px;
              padding: 0 6px;
              border-radius: 3px;
              display: inline-block;
              vertical-align: middle;
              font-size: 12px;
              font-family: "Lucida Grande", arial;
              color: #fff;
            }
            .skill-point-html {
              background: #f60;
            }
            .skill-point-css {
              background: #f90;
            }
            .skill-point-js {
              background: #ffda3f;
              color: #393939;
            }
            .skill-point-node {
              background: #80bd01;
            }
          }
        }
        .project-img {
          float: right;
          width: 320px;
          @media (min-width: 960px) {
            width: 320px;
            margin-right: -370px;
          }
          @media (max-width: 959px) and (min-width: 750px) {
            width: 250px;
            margin-right: -280px;
          }
          @media (min-width: 750px) {
            float: right;
            background: #eee;
          }
          @media (max-width: 749px) {
            width: 90%;
            margin: 12px auto 0 auto;
            float: none;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
.thanks{
  @media (min-width: 960px) {
    background: url(./assets/images/section-salon-bg.jpg) no-repeat left -200px;
    height: 100px;
    background-size: cover;
    padding: 40px 0;
    text-align: center;
    h2{
      line-height: 40px;
      font-size: 24px;
    }
    h3{
      line-height: 24px;
      font-size: 16px;
    }
  }
  @media (max-width: 959px) and (min-width: 750px) {
    background: url(./assets/images/section-salon-bg.jpg) no-repeat left -200px;
    height: 100px;
    background-size: cover;
    padding: 40px 0;
    text-align: center;
    h2{
      line-height: 40px;
      font-size: 24px;
    }
    h3{
      line-height: 24px;
      font-size: 16px;
    }
  }
  @media (max-width: 750px) {
    background: url(./assets/images/section-salon-bg.jpg) no-repeat left -100px;
    height: 100px;
    background-size: cover;
    padding: 40px 0;
    text-align: center;
    h2{
      line-height: 40px;
      font-size: 24px;
    }
    h3{
      line-height: 24px;
      font-size: 16px;
    }
  }
  @media (max-width: 749px) {
    background: url(./assets/images/section-salon-bg.jpg) no-repeat left bottom;
    padding: 20px 0;
    height: auto;
    h2{
      line-height: 24px;
      font-size: 18px;
    }
    h3{
      line-height: 16px;
      font-size: 14px;
      padding: 10px;
    }
  }
}
.footer{
  @media (min-width: 960px) {
    .boundary{
      width: 960px;
      height: 80px;
      padding: 10px 0;
    }
    
  }
  @media (max-width: 959px) and (min-width: 750px) {
    .boundary{
      width: auto;
      height: 80px;
      padding: 10px 25px;
    }
  }
  @media (max-width: 750px) {
    .boundary{
      width: auto;
      height: 80px;
      padding: 10px 0;
    }
  }
  @media (max-width: 549px) {
    .boundary{
      width: auto;
      height: auto;
      padding: 10px;
    }
    .erweima{
      height: auto;
      float: none;
      text-align: center;
      padding-top: 20px;
      .img{
        float: none;
        height: 140px;
        width: 140px;
        background: #cccccc;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .text{
        float: none;
        padding-top: 14px;
        p{
          line-height: 20px;
          font-size: 14px;
          color: #666;
        }
      }
    }
    .weChat{
      height: auto;
      float: none;
      text-align: center;
      padding-top: 20px;
      .img{
        float: none;
        height: 140px;
        width: 140px;
        background: #cccccc;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .text{
        float: none;
        padding-top: 14px;
        p{
          line-height: 20px;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  @media (min-width: 550px){
    .erweima{
      height: 100%;
      float: left;
      .img{
        float: left;
        height: 100%;
        width: 80px;
        margin-right: 6px;
        background: #cccccc;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .text{
        float: left;
        padding-top: 14px;
        p{
          line-height: 20px;
          font-size: 14px;
          color: #666;
        }
      }
    }
    .weChat{
      height: 100%;
      float: right;
      .img{
        float: left;
        height: 100%;
        width: 80px;
        margin-right: 6px;
        background: #cccccc;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .text{
        float: left;
        padding-top: 14px;
        p{
          line-height: 20px;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style>

