<template>
  <div class="login">
    <header class="header">
      <div class="box1 container">
        <h1>亚马逊</h1>
        <img src="../../assets/images/toplogin.PNG" alt="">
        <p>广告</p>
      </div>
    </header>
    <nav class="nav container clearfix">
      <div class="login"></div>
      <a href="#">免费试享Prime</a>
      <div class="search">
        <el-input v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend"  placeholder="全部分类">
            <el-option label="全部分类" value="1"></el-option>
            <el-option label="亚马逊设备" value="2"></el-option>
            <el-option label="Kind商店" value="3"></el-option>
            <el-option label="应用程序与设备" value="4"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>

<!--        <a href="#" class="searchLogo" role="button"><i></i></a>-->
      </div>
      <div class="advertisement"><img
        src="https://images-cn.ssl-images-amazon.com/images/G/28/CN-Ad/clc_app_SWMS_370x39._CB451019764_.jpg"
        alt=""></div>
    </nav>
    <main class="main  clearfix">
      <div class="main-left clearfix">
        <button>
          <p>浏览</p>
          <p>全部商品分类
            <i class="arrow-bottom">∨</i>
          </p>

        </button>
      </div>
      <div class="main-center">
        <ul class="main-center-keywords">
          <li><a href="#">我的亚马逊</a></li>
          <li><a href="#">海外购</a></li>
          <li><a href="#">KindLE电子书</a></li>
          <li><a href="#">镇店之宝</a></li>
          <li><a href="#">全球开店</a></li>
          <li><a href="#">帮助</a></li>
          <li><a href="#">In English</a></li>
        </ul>
      </div>
      <div class="main-right clearfix">
        <button class="button1">
          <p>您好，登录</p>
          <p>我的账户</p><i class="arrow-bottom">▲</i>

        </button>
        <button class="button2">
          <p>免费试享</p>
          <p>Prime </p><i class="arrow-bottom">▲</i>

        </button>
        <button class="button3">
          <span class="zero">0</span>
          <span class="cart"></span>

          <p class="cart2">购物车</p>

        </button>
        <button class="button4">
          <p></p>
          <p>心愿单</p><i class="arrow-bottom">▲</i>

        </button>
      </div>
    </main>
    <article class="article container">
      <div class="row">
        <div class="article-left">
          <span class="article-content"><a href="#">Kindle电子书阅读器1</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">Kindle电子书</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">鞋靴</a>&nbsp/&nbsp<a
            href="#">箱包</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp&nbsp&nbsp&nbsp<span
            class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp/&nbsp<a
            href="#">服装</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp&nbsp&nbsp&nbsp<span
            class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp&nbsp&nbsp&nbsp<span
            class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp/&nbsp<a
            href="#">服装</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp/&nbsp<a
            href="#">服装</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp/&nbsp<a
            href="#">服装</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp&nbsp&nbsp&nbsp<span
            class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp/&nbsp<a
            href="#">服装</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp/&nbsp<a
            href="#">服装</a><span class="character">＞</span></span>
          <span class="article-content"><a href="#">服装</a>&nbsp/&nbsp<a href="#">服装</a>&nbsp&nbsp&nbsp&nbsp<span
            class="character">＞</span></span>

          <div class="article-line"></div>
          <div class="article-bottom"><a href="#">全部商品分类</a></div>
          <div class="jiao"></div>

        </div>
<!--        <div class="article-center">-->
<!--          <h4>Kindle电子书阅读器</h4>-->
<!--          <div class="article-center-content"><h5>Kindle设备</h5><span><a href="#">Kindle</a>  &nbsp | &nbsp<a href="#">Kindle Paperwhite</a> &nbsp | &nbsp <a-->
<!--            href="#">Kindle Oasis</a> </span>-->
<!--            <p><a href="#">Kindle入门版(2016款)认证翻新机</a></p>-->
<!--            <p class="p2"><a href="#">Kindle Paperwhite（2015款）认证翻新机</a></p>-->
<!--            <h5>Kindle帮助</h5>  <span><a href="#">常见问题</a>&nbsp | &nbsp <a href="#">帮助视频</a></span>-->
<!--          </div>-->
<!--          <img src="images/family_big_GNO._CB440911578_.jpg" height="273" width="543"/>-->
<!--        </div>-->
        <div class="article-right">
          <div class="article-right-slider">
            <a href="#"><el-carousel :interval="3000" arrow="always">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel></a>
            <!--箭头-->
<!--            <div class="arrow"><a href="#"></a>-->
<!--              <span class="arrow-left">&lt;</span>-->
<!--              <span class="arrow-right">&gt;</span>-->
<!--            </div>-->
          </div>

        </div>
      </div>
    </article>
    <div class="slider-bottom">
      <div class="bottom-first">
        <div class="slider-bottom-border"><a href="#">今日</a>
          <span>镇店之宝</span></div>
        <img src="https://images-cn.ssl-images-amazon.com/images/G/28/img14/ngateway/widgetpreview/dzf141008_widgetpreview_todaydeal._CB473619060_.gif"
             alt="">
      </div>
      <div class="bottom-line-one"></div>
      <div class="bottom-second">
        <div class="slider-bottom-border"><a href="#">海外购</a>
          <span>直邮</span></div>
        <div class="bottom-second-center">
          <div class="bottom-second-center-left"><span>瑞贝卡</span><a href="#">¥ 412.12</a></div>
          <div class="bottom-second-center-right"><img
            src="https://images-cn.ssl-images-amazon.com/images/I/41M8rguEEvL._SY134_.jpg" alt="">
          </div>
        </div>
        <a class="bottom-second-check" href="#">点击查看</a></div>

      <div class="bottom-line-two"></div>
      <div class="bottom-third">
        <div class="slider-bottom-border"><a href="#">海外购</a>
          <span>直邮</span></div>
        <img src="https://images-cn.ssl-images-amazon.com/images/G/28/kindle/2016/yacan/2019_KQD-Tator3._CB1198675309_.jpg"
             alt="">
      </div>
    </div>
    <div class="slider container ">
      <div class="slider-left clearfix">
        <div class="slider-left-common slider-left-first">
          <div class="slider-left-first-title "><span>镇店之宝</span>
            <a href="#">查看所有</a></div>

          <div class="box-common slider-left-first-box-one">
            <div class="images-picture"><img src="https://images-cn.ssl-images-amazon.com/images/I/517ql3d6pWL.jpg"
                                             alt=""></div>

            <span class="span-block span-price">￥73.36 - ￥296.76</span>
            <span class="span-block span-title">Tassimo等品牌咖啡</span>
            <span>距结束</span>
            <span>19:14:33</span>
          </div>
          <div class="box-common slider-left-first-box-two">
            <div class="images-picture"><img
              src="https://images-cn.ssl-images-amazon.com/images/I/414YrTs%2B1jL.jpg" alt=""></div>

            <span class="span-block span-price">￥296.76</span>
            <span class="span-block span-title">碧然德滤水壶</span>
            <span>距结束</span>
            <span>19:14:33</span>
          </div>
          <div class="box-common slider-left-first-box-three">
            <div class="images-picture"><img src="https://images-cn.ssl-images-amazon.com/images/I/410YdL8XKSL.jpg"
                                             alt=""></div>
            <span class="span-block span-price">￥73.36</span>
            <span class="span-block span-title">Nescafé雀巢咖啡</span>
            <span>距结束</span>
            <span>19:14:33</span>
          </div>
          <div class="box-common slider-left-first-box-four">
            <div class="images-picture"><img src="https://images-cn.ssl-images-amazon.com/images/I/311Vknw9IKL.jpg"
                                             alt=""></div>

            <span class="span-block span-price">￥150</span>
            <span class="span-block span-title">Speedo泳衣/护目镜</span>
            <span>距结束</span>
            <span>19:14:33</span>
          </div>
        </div>
        <div class="slider-left-common slider-left-second ">
          <div class="slider-left-second-title">
            <span>进口好物</span>
            <div class="slider-left-second-box clearfix">
              <a href="https://www.amazon.cn/dp/B075JHRMPH?smid=A2EDK7H33M5FFG&ref_=Oct_CBBBCard_dsk_asin1&pf_rd_r=3NVD5SGX3X6WD4GDVY3W&pf_rd_p=3f974805-ea47-43ca-9f36-30f77be0fad9&pf_rd_m=A1AJ19PSB66TGU&pf_rd_s=desktop-3"
                 target="_blank">
                <div class="box-common slider-left-second-box-one">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/51N1l2pveLL._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥495.34</span>
                  <i class="prime"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-two">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/61ntE-efolL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4225.34</span>
                  <i class="prime"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-three">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/71SsWF7GeLL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4195.34</span>
                  <i class="prime"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-four">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/819naDPrf-L._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥195.34</span>
                  <i class="prime"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-five">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/61MHVNEMq3L._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥412.32</span>
                  <i class="prime"></i>
                </div>
              </a>

            </div>

          </div>
        </div>
        <div class="slider-left-common slider-left-second ">
          <div class="slider-left-second-title">
            <span>为您推荐</span>
            <div class="slider-left-second-box clearfix">
              <a href="https://www.amazon.cn/dp/B075JHRMPH?smid=A2EDK7H33M5FFG&ref_=Oct_CBBBCard_dsk_asin1&pf_rd_r=3NVD5SGX3X6WD4GDVY3W&pf_rd_p=3f974805-ea47-43ca-9f36-30f77be0fad9&pf_rd_m=A1AJ19PSB66TGU&pf_rd_s=desktop-3"
                 target="_blank">
                <div class="box-common slider-left-second-box-one">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/61KKQ6AImSL._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥495.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-two">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/51sLfXnRimL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4225.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-three">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/81qjsx1GggL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4195.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-four">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/61+H0C4+TuL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥195.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-five">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/91vzZWWSLFL._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥412.32</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>

            </div>

          </div>
        </div>
        <div class="adviertisement">
          <img src="https://images-cn.ssl-images-amazon.com/images/G/28/shazam/C5-630x90-LXWwI._V449183434_.jpg"
               alt="">
        </div>
        <div class="slider-left-common slider-left-second ">
          <div class="slider-left-second-title">
            <span>男鞋畅销榜</span>
            <div class="slider-left-second-box clearfix">
              <a href="https://www.amazon.cn/dp/B075JHRMPH?smid=A2EDK7H33M5FFG&ref_=Oct_CBBBCard_dsk_asin1&pf_rd_r=3NVD5SGX3X6WD4GDVY3W&pf_rd_p=3f974805-ea47-43ca-9f36-30f77be0fad9&pf_rd_m=A1AJ19PSB66TGU&pf_rd_s=desktop-3"
                 target="_blank">
                <div class="box-common slider-left-second-box-one">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/51lMYlw49qL._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥495.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-two">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/51Ry5ng0zAL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4225.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-three">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/41AaPVHkQLL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4195.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-four">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/51N1l2pveLL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥195.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-five">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/51kDLJ063yL._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥412.32</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>

            </div>

          </div>
        </div>
        <div class="slider-left-common slider-left-second ">
          <div class="slider-left-second-title">
            <span>男装畅销榜</span>
            <div class="slider-left-second-box clearfix">
              <a href="https://www.amazon.cn/dp/B075JHRMPH?smid=A2EDK7H33M5FFG&ref_=Oct_CBBBCard_dsk_asin1&pf_rd_r=3NVD5SGX3X6WD4GDVY3W&pf_rd_p=3f974805-ea47-43ca-9f36-30f77be0fad9&pf_rd_m=A1AJ19PSB66TGU&pf_rd_s=desktop-3"
                 target="_blank">
                <div class="box-common slider-left-second-box-one">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/71r+wvdOgmL._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥495.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-two">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/813zvOZPnnL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4225.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-three">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/61fF1I1cfHL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4195.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-four">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/71wGC6Tp+nL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥195.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-five">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/81xu0oyomEL._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥412.32</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>

            </div>

          </div>
        </div>
        <div class="slider-left-common slider-left-second ">
          <div class="slider-left-second-title">
            <span>男士钟表畅销榜</span>
            <div class="slider-left-second-box clearfix">
              <a href="https://www.amazon.cn/dp/B075JHRMPH?smid=A2EDK7H33M5FFG&ref_=Oct_CBBBCard_dsk_asin1&pf_rd_r=3NVD5SGX3X6WD4GDVY3W&pf_rd_p=3f974805-ea47-43ca-9f36-30f77be0fad9&pf_rd_m=A1AJ19PSB66TGU&pf_rd_s=desktop-3"
                 target="_blank">
                <div class="box-common slider-left-second-box-one">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/51N1l2pveLL._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥495.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-two">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/61ntE-efolL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4225.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-three">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/71SsWF7GeLL._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥4195.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-four">
                  <div class="images-picture-second"><img
                    src="https://images-cn.ssl-images-amazon.com/images/I/819naDPrf-L._AC._SR360,460.jpg"
                    alt="">
                    <button class="browse">快速浏览</button>
                  </div>

                  <span>￥195.34</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>
              <a href="#">
                <div class="box-common slider-left-second-box-five">
                  <div class="images-picture-second">
                    <img src="https://images-cn.ssl-images-amazon.com/images/I/61MHVNEMq3L._AC._SR360,460.jpg"
                         alt="">
                    <button class="browse">快速浏览</button>
                  </div>
                  <span>￥412.32</span>
                  <i class="glyphicon glyphicon-usd"></i>
                </div>
              </a>

            </div>

          </div>
        </div>
        <div class="adviertisement">
          <img src="https://images-cn.ssl-images-amazon.com/images/G/28/shazam/C5-630x90-LXWwI._V449183434_.jpg"
               alt="">
        </div>
        <div class="slider-left-cate">
          <div class="slider-left-cate-title">
            <span>热门分类</span>
          </div>
          <ul>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
            <li><img src="https://images-cn.ssl-images-amazon.com/images/I/71KLiHiOT-L._AC._SR240,240.jpg" alt="" width="200px"><span>男装</span></li>
          </ul>

        </div>

      </div>
      <div class="slider-right">
        <div class="slider-right-one">
          <img src="https://images-cn.ssl-images-amazon.com/images/G/28/shazam/R2-300x250-1-Sva7X._V449183242_.jpg"
               alt="" width="295px">
          <a href="#">广告<span class="slider-right-one-logo"></span></a>
          <div class="slider-line"></div>
        </div>
        <div class="slider-right-two slider-right-common">
          <span class="slider-right-two-title">Kindle电子书热销</span>
          <ol>
            <li><span>1</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
            <li><span>2</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
            <li><span>3</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
            <li><span>4</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
            <li><span>5</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
          </ol>
          <span>　　</span><a href="#">查看更多</a>
          <div class="slider-line"></div>
        </div>
        <div class="slider-right-three slider-right-common">
          <span class="slider-right-two-title">Kindle电子书阅读器热销</span>
          <ol>
            <li><span>1</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
            <li><span>2</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
            <li><span>3</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
            <li><span>4</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
            <li><span>5</span><img
              src="https://images-cn.ssl-images-amazon.com/images/I/51%2BIt7ifvbL._AC_SX75_.jpg"
              alt="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)"
              title="作家榜经典：人间失格(2019Kindle销量第1名！我曾经以为自己很孤独，幸好看了《人间失格》！日本芥川奖直木奖得主推荐，译者获日本H氏大奖) (大星文化出品)">
            </li>
          </ol>
          <span>　　</span><a href="#">查看更多</a>
          <div class="slider-line"></div>
        </div>
        <div class="slider-right-four"><img
          src="https://images-cn.ssl-images-amazon.com/images/G/28/AS/AGS/images/website/1115_264_253_2._CB446718247_.jpg"
          alt=""><div class="slider-line"></div></div>
        <div class="slider-right-five"><img
          src="https://images-cn.ssl-images-amazon.com/images/G/28/mobile/lqj_161108_pr264-88_Safety-Alert._CB525760992_.png"
          alt=""><div class="slider-line"></div></div>
        <div class="slider-right-six"><img
          src="https://images-cn.ssl-images-amazon.com/images/G/28/shazam/Abbott2019-11-29-300250-8KSmK._V447662032_.jpg"
          alt="" width="295px"><div class="slider-line"></div></div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        select: ''
      }

    }
  }
</script>

<style scoped lang="less">
  .header {
    background-color: #c02c20;
    height: 44px;

    h1 {
      display: none;
    }

    img {
      padding-left: 330px;
      //width: 533px;
      height: 35px;
    }

    p {
      float: right;
      color: #EEEEEE;
      font-size: 14px;
      padding-top: 20px;
    }
  }
  .nav {
    height: 60px;
    min-width: 1280px;
    padding-top: 6px;
    position: relative;

    .login {

      width: 90px;
      height: 40px;
      background: url(../../assets/images/global-sprite-32-v1._CB476259932_.png) -10px -120px no-repeat;
      display: inline-block;

    }

    a {
      color: #72b8d3;
      font-size: 12px;
      font-weight: 900;
      text-decoration: underline;
      position: absolute;
      top: 33px;
      left: 40px;
    }

    .search {
      //background-color: red;
      /*width: 760px;*/
      height: 40px;
      position: absolute;
      top: 13px;
      left: 160px;
      .el-select{
        width: 130px;
      }
      .el-select .el-input {
        width: 130px;
      }
      .input-with-select{
        width: 720px;
      }
      .input-with-select .el-input-group__prepend {
        background-color: #fff;
      }
      /*.el-button {*/
      /*  !*position: absolute;*!*/
      /*  !*!*top: -2px;*!*!*/
      /*  !*left: 47px;*!*/

      /*  text-decoration: none;*/
      /*  font-weight: normal;*/
      /*  height: 40px;*/
      /*  width: 95px;*/
      /*  border-radius: 5px 0 0 5px;*/
      /*  border-right: none;*/
      /*  float: left;*/

      /*}*/
      /*<!--.el-button:hover{-->*/
      /*<!--  background: url(../../assets/images/global-sprite-32-v1._CB476259932_.png) -1px -282px no-repeat;-->*/

      /*<!--}-->*/

      /*.form-control {*/
      /*  width: 680px;*/
      /*  height: 38px;*/
      /*  border-radius: 0 5px 5px 0;*/
      /*  float: left;*/
      /*  border-left: none;*/
      /*  !*position: absolute;*!*/
      /*  !*top: -1px;*!*/
      /*  !*left: 45px;*!*/

      /*}*/
      /*!*.form-control:hover .el-button{*!*/
      /*!*  border: 1px solid blue;*!*/
      /*!*}*!*/

      /*<!--.searchLogo {-->*/
      /*<!--  height: 38px;-->*/
      /*<!--  width: 40px;-->*/


      /*<!--  //background-color: #72787f;-->*/
      /*<!--  //width: 25px;-->*/
      /*<!--  //height: 25px;-->*/
      /*<!--  background: url(../../assets/images/global-sprite-32-v1._CB476259932_.png) -1px -282px no-repeat;-->*/
      /*<!--  position: absolute;-->*/
      /*<!--  top: -1px;-->*/
      /*<!--  left: 710px;-->*/
      /*<!--  !*float: left;*!-->*/
      /*<!--  //z-index: 3;-->*/

      /*<!--}-->*/
    }

    .advertisement {
      float: right;
      padding-top: 8px;

      img {
        //height: 38px;
        width: 300px;
      }
    }
  }
  .main {
    min-width: 1280px;
    height: 42px;
    //background-color: red;
    background: url(../../assets/images/global-sprite-32-v1._CB476259932_.png) 0px -579px repeat;

    .main-left {
      height: 40px;
      width: 190px;
      //background-color: red;
      float: left;
      position: relative;

      button {
        width: 120px;
        height: 40px;
        background-color: transparent;
        border: 1px solid transparent;
        position: absolute;
        left: 45px;
        box-sizing: border-box;
        cursor: pointer;
        .arrow-bottom {
          /*font-family: "SimSun", "宋体";*/
          font-size: 18px;
        }
      }

      button > p:first-child {
        font-size: 10px;
        //line-height: 1px;
        //text-indent: -17px;
        margin: 0;
        float: left;
      }

      button:hover {
        border: 1px solid darkgray;

      }

      button > p:last-child {
        font-weight: bolder;
        //text-indent: 25px;
        line-height: normal;
        //white-space: nowrap;
        float: left;
      }
    }

    .main-center {
      height: 40px;
      min-width: 680px;
      //background-color: lawngreen;
      float: left;

      .main-center-keywords li {
        float: left;
        padding: 16px 8px;
        font-size: 11px;

        a {
          color: dodgerblue;
        }

        a:hover {
          color: orange;
        }

      }
    }

    .main-right {
      height: 40px;
      min-width: 350px;
      //background-color: blue;
      float: right;
      .arrow-bottom {
        /*font-family: "SimSun", "宋体";*/
        font-size: 14px;
        /*transform: translate(90);*/
      }
      button {
        background-color: transparent;
        border: 1px solid transparent;

      }

      .button1,.button2 {
        float: left;
        cursor: pointer;
      }

      button > p:nth-child(odd) {
        margin: 0;
        font-size: 10px;
        text-indent: -10px;
        font-family: 微软雅黑;
      }

      button > p:nth-child(even) {
        font-weight: bolder;
        font-size: 12px;
        font-family: 微软雅黑;
        //text-indent: 25px;
        line-height: normal;
        //white-space: nowrap;
        float: left;
        margin: 0;

      }

      button:hover {
        border: 1px solid darkgray;

      }

      .glyphicon-triangle-bottom {
        font-size: 4px;
        padding: 0 4px;

      }

      .cart {
        width: 52px;
        height: 40px;
        display: inline-block;
        background: url(../../assets/images/global-sprite-32-v1._CB476259932_.png) 0 -335px no-repeat;

        float: left;
      }

      .cart2 {
        padding-top: 16px;
        padding-left: 8px;
        font-weight: bolder;
        font-size: 18px;
        float: left;
      }

      .button3 {
        position: relative;
        padding-left: 1px;
        cursor: pointer;
      }

      .zero {
        position: absolute;
        top: 2px;
        left: 30px;
        color: orange;
        font-weight: bolder;
      }

      .button4 {
        position: relative;
        top: -12px;
        left: 20px;
        cursor: pointer;
      }


    }
  }
  .article {
    min-width: 1280px;
    position: relative;


    .border-up {
      width: 0;
      height: 0;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 30px solid transparent;
      position: relative;
      margin: 50px auto;
    }

    .border-up span {
      display: block;
      width: 0;
      height: 0;
      border-left: 28px solid transparent;
      border-right: 28px solid transparent;
      border-bottom: 28px solid transparent;
      position: absolute;
      left: -28px;
      top: 1px;
    }


  }
  .article-left {
    width: 170px;
    //background-color: red;
    border: 1px solid #666666;
    float: left;
    margin: 0 0;
    padding-left: 0;
    padding-top: 5px;

    .article-content {
      display: block;
      padding: 3px 15px;

      a {
        color: black;
        font-size: 13px;
      }
    }

    .article-bottom {
      padding: 12px 15px;

      a {
        color: #666666;
      }

    }


    .jiao{
      position: relative;
      height: 0px;
      width: 0px;
      border-left: 19px solid transparent;
      border-right: 19px solid transparent;
      border-bottom: 19px solid black;
    }
    .jiao:after{
      content: '';
      position: absolute;
      top: 3px;
      left: -18px;//定位空白小角形的位置
      border-left: 18px solid transparent;
      border-right: 18px solid transparent;
      border-bottom: 18px solid #FFFFFF;
    }
    //制作空心三角形（箭头）


    .article-line {
      height: 1px;
      width: 140px;
      //background-color: #fff;
      border: 1px solid #f5f5f5;
      position: absolute;
      left: 10px;
      //margin: 0 auto;
    }

    .character {
      color: #f2ede6;
      float: right;
    }

    .article-content:hover a {
      font-weight: bolder;
    }

    .article-content:hover span {
      color: black;
    }
  }
  .article-center{
    width: 550px;
    height: 434px;
    border: 1px solid #000;
    position: absolute;
    left: 170px;
    border-left: 1px solid transparent;
    background-color: #fff;
    z-index: 2;
    //display: none;

    h4{
      font-weight:400;
    }

    h4,h5{
      color: orange;
    }

    .article-center-content{
      //width: 300px;
      background-color: #fff;
      padding-left: 40px;
      h5{
        float: left;
        padding: 0;
        margin-top: 0;
        margin-bottom: 0;
      }
      span{
        //float: left;
        padding-left: 20px;
        padding-bottom: 5px;
      }
      p{
        //padding-left: 90px;
        padding: 5px 90px;
        margin: 0;
      }
      a{
        color: #666666;
      }


    }
  }
  .article-right {
    width: 1105px;
    height: 313px;
    //background-color: red;
    float: right;
    position: relative;
    //.slider {
    //  //height: 340px;
    //  //width: 790px;
    //  //margin: 100px auto;
    //  position: relative;
    //}
    .pc-img {
      width: 1110px;
      height: 300px;
      //border: 1px solid #000;
      background-position: top center;
    }

    .article-right-slider{
      .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }

      a {
        display: inline-block;
        width: 1110px;
        height: 313px;
      }
    }

    //对大图片进行居中定位，然后用a标签转换成块级


  }
  .slider-bottom{
    float: left;
    position: relative;
    /*top: 310px;*/
    //left: 50px;
    /*background-color: blue;*/
    width: 1108px;
    /*height: 240px;*/
    padding-bottom: 30px;
    .bottom-first,.bottom-second,.bottom-third{
      width: 290px;
      /*height: 280px;*/
      //background-color: orange;
      float: left;
    }
    .slider-bottom-border{
      padding-left: 10px;
      a{
        font-size: 20px;
        font-family: 微软雅黑;
        font-weight: bolder;
        color: black;
        text-decoration: none;
      }
      a:hover{
        color: orange;
      }
      span{
        //display: inline-block;
        font-family: 微软雅黑;
        font-weight: bolder;
        color: #cd4d00;
        font-size: 20px;
      }
    }
    .bottom-line-one{
      height: 140px;
      //width: 1px;
      //background-color: #fff;
      border: 0.5px solid #dddddd;
      position: absolute;
      left: 290px;
      top: 10px;
      //margin: 0 auto;
    }
    .bottom-line-two{
      height: 140px;
      //width: 1px;
      //background-color: #fff;
      border: 0.5px solid #dddddd;
      position: absolute;
      left: 580px;
      top: 10px;
      //margin: 0 auto;
    }
  }
  .bottom-second{
    position: relative;
    .bottom-second-center{
      width: 290px;
      .bottom-second-center-left{
        padding-top: 10px;
        padding-left: 15px;
        float: left;
        span{
          display: block;
          color: #cd4d00;
          font-weight: bolder;
        }
      }
      a{
        font-size: 24px;
        color: #cd4d00;
        text-decoration: none;
        font-weight: bolder;
      }
      a:hover{
        color: orange;
      }
    }
    .bottom-second-center-right{
      float: right;
    }
    .bottom-second-check{
      position: absolute;
      top: 140px;
      left: 20px;
      text-decoration: none;
      color: #282828;
    }
    a:hover{
      color: orange;
    }

  }
  .slider{
    //width: 1280px;
    position: relative;
    .slider-left{
      width: 1000px;
      height: 1000px;
      //background-color: red;
      float: left;
      .prime{
        width: 132px;
        height: 45px;
        background:url(../../assets/images/prime.gif) 79px -20px no-repeat;
      }
      .slider-left-first{
        float: left;
        /*padding-top: 70px;*/
        padding-bottom: 200px;
        .slider-left-first-title{
          //padding-top: 70px;

          width: 1000px;
          //height: 40px;
          //background-color: blue;
          span{
            font-size: 30px;
            font-weight: bolder;
          }
          a{
            text-decoration: none;
            padding-left: 10px;
          }

        }
        img{
          width: 195px;
        }
        .span-block {
          display: block;
          font-size: 18px;
        }
        .span-price{
          color: #c02c20;
          padding: 20px;

        }
        .span-title{
          font-family: 微软雅黑;
          font-weight: bolder;
          color: black;
          padding: 10px;
        }
        span{
          padding-left: 10px;
        }
        .images-picture{
          width: 200px;
          height: 250px;
          background-color: #f2f2f2;
          padding-top: 30px;
        }
      }
      .slider-left-common{
        width: 1000px;
        //height: 300px;
        //background-color: orange;
      }
      .box-common{
        //width: 200px;
        height: 200px;
        background-color: #fafafa;
        float: left;

      }

      .slider-left-second{
        float: left;
        .slider-left-second-title{
          width: 1000px;
          //height: 40px;
          //background-color:red;
          float: left;
          padding-top: 20px;
          span{
            font-size: 24px;
            font-weight: bolder;
            font-family: 微软雅黑;
          }



        }
        .slider-left-second-box{
          border: 1px solid #f2f2f2;
          box-sizing: border-box;
          width: 1000px;
          height: 300px;
          //position: relative;
          a{
            color: black;
          }
          a:hover .browse{
            display: block;

          }
          .browse:hover{
            background: url(../../assets/images/global-sprite-32-v1._CB476259932_.png) 0px -630px no-repeat;
          }
          img{
            height: 250px;

          }
          span{
            //font-family: 微软雅黑;
            font-size: 18px;
            //font-weight: bolder;
            color: black;
            font-weight: 400;
            padding-left: 10px;

          }
          .images-picture-second{
            width: 197px;
            height: 250px;
            background-color: #f2f2f2;
            margin-bottom: 10px;
            position: relative;
            //padding-top: 30px;
          }

          .browse{
            width: 158px;
            height: 33px;
            border: 1px solid #666666;
            box-sizing: border-box;
            background: url(../../assets/images/global-sprite-32-v1._CB476259932_.png) 0px -579px no-repeat;
            //background-color: #f2f2f2;
            position: absolute;
            top: 210px;
            left: 20px;
            display: none;

          }
        }




      }
      .slider-left-cate{
        text-align: center;
        padding-top: 30px;
        .slider-left-cate-title{
          font-size:24px;
          font-weight: bolder;
          color: black;
          text-align: left;

        }
        ul>li{
          float: left;
          background-color: #f5f5f5;
          width: 200px;
          padding: 15px 0;
          span{
            font-size: 18px;
            font-weight: bolder;
            color: black;

          }
        }
      }
    }
    .slider-right{
      //width: 200px;
      //height: 1000px;
      background-color: #f9f9f9;
      //float: right;
      position: absolute;
      top: 310px;
      right: 0;

      .slider-right-one{
        position: relative;
        img{
          display: block;
        }
        a{
          float: right;
          .slider-right-one-logo{
            display: inline-block;
            width: 14px;
            height: 11px;
            background: url(../../assets/images/ad_feedback_icon_1Xsprite._CB323875250_.png) 0 0 no-repeat;
          }
        }
        a:hover{
          color:orange;
        }
        a:hover .slider-right-one-logo{
          width: 14px;
          height: 11px;
          background: url(../../assets/images/ad_feedback_icon_1Xsprite._CB323875250_.png) 0 -13px no-repeat;
        }
        .slider-line {
          height: 1px;
          width: 260px;
          //background-color: #fff;
          border: 0.5px solid #666666;
          position: absolute;
          left: 15px;
          top: 265px;
          //margin: 0 auto;
        }

      }
      .slider-right-common{
        text-align: center;
        position: relative;
        .slider-right-two-title{
          text-align: center;
          font-size: 24px;
          padding-left:44px;
          line-height: 110px;
        }
        ol>li{
          text-align: center;

          span{
            font-size: 38px;
            color: #c4c4c4;
            padding-right: 10px;
          }
        }
        a{
          height: 30px;
          line-height: 30px;
        }
        .slider-line {
          height: 1px;
          width: 260px;
          //background-color: #fff;
          border: 0.5px solid #666666;
          position: absolute;
          left: 15px;
          bottom: 0px;
          //margin: 0 auto;
        }

      }
      .slider-right-three{
        .slider-right-two-title{
          text-align: center;
          font-size: 24px;
          padding-left:14px;
          line-height: 110px;
        }
      }
      .slider-right-four,.slider-right-five,.slider-right-six{
        position: relative;
        img{
          padding: 15px;
        }
        .slider-line {
          height: 1px;
          width: 260px;
          //background-color: #fff;
          border: 0.5px solid #666666;
          position: absolute;
          left: 15px;
          bottom: 0px;
          //margin: 0 auto;
        }

      }
      .slider-right-six{
        img{
          padding: 20px 3px;
          padding-bottom: 40px;
        }
      }
    }

  }

</style>
