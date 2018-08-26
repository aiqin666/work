


document.addEventListener('DOMContentLoaded',function(){
    var ul = document.querySelector('.main01>ul');

    window.onscroll = function(){
                // 获取滚动条滚动过的距离
                var scrollY = window.scrollY;

                if(scrollY>=800){
                    ul.className = 'fixed';

                 
                }else{
                    ul.className = '';
                   
                }
            }


});



    (function(){

            let toTop = document.querySelector('.toTop');



            window.onscroll = function(){
                if(window.scrollY >= 800){
                    toTop.style.display = 'block';
                }else{
                    toTop.style.display = 'none';
                }
            }



           toTop.onclick = function(){

                let timer = setInterval(()=>{

                    // 计算缓冲速度
                    let speed = Math.ceil(window.scrollY/5);

                    scrollBy(0,-speed);

                    if(window.scrollY <= 0){
                        clearInterval(timer);
                    }
                },100);
           }


        })();   




          // (function(){

          //       let shenghuo = document.querySelector('.shenghuo');

          //       let shenghuoul = document.querySelector('.shenghuoul');
          //       shenghuo.onclock = function(){

          //           shenghuoul.style.display = 'block';
          //         }


                 



          //       let bangzu = document.querySelector('.bangzu');

          //       let bangzuul = document.querySelector('.bangzuul');
          //       bangzu.onclick = function(){

          //           bangzuul.style.display = 'block';
          //         }


          //       let gengduo = document.querySelector('.gengduo');

          //       let gengduoul = document.querySelector('.gengduoul');
          //       gengduo.onclick = function(){

          //           gengduoul.style.display = 'block';
          //         }

          //   })();


        
            
    jQuery(function($){

           
          
            $('.weixin').on('click',function(){

                $('.overlay').show();
                $('.wx_erweima').show();
        
            });

             $('.close').on('click',function(){

                $('.overlay').hide();
                $('.wx_erweima').hide();
        
            });

              $('.guanbi').on('click',function(){

                $('.overlay').hide();
                $('.wx_erweima').hide();
        
            });


              $('.weibo').on('click',function(){

                $('.overlay').show();
                $('.wb_erweima').show();
        
            });

             $('.close').on('click',function(){

                $('.overlay').hide();
                $('.wb_erweima').hide();
        
            });

              $('.guanbi').on('click',function(){

                $('.overlay').hide();
                $('.wb_erweima').hide();
        
            });





              // 飞入购物车
              let aa = $('.goods img').attr('src');
              
              $('.jiaru').on('click',function(){

                 $('<img>').attr({
                     src:aa
                  }).css({width:400,height:400,position:'absolute',left:160,top:320}).appendTo($('body')).animate({
                    left:$('body').outerWidth(),
                    height:20,
                    width:20
                },1000,function(){
                $(this).remove();

                })

            

            });





        $('.goods').zoom({width:400,height:400}).addClass('box');


        $('.small').on('mouseover','img',function(){
                $('.goods img').attr({
                    'src':this.src,
                    'data-big':this.dataset.big
                });
            })



    });



    (function(){

       var params = location.search.slice(1);

            console.log(params)

            // url->array->object
            params = params.split('&');//['id=g01','name=iphoneX'...]

            var goods = {}


            // 遍历params
            params.forEach(function(item){
                // item='id=g01'
                // item='name=iphoneX'
                // ...

                // 拆分key/value
                var arr = item.split('=');
                var key = arr[0];
                var value = arr[1];

                // 把属性名/值写入对象
                goods[key] = decodeURI(value);
            });

            console.log(goods);
            // 获取页面元素
            var img = document.getElementById('img');
            var names = document.getElementById('names');
            var prices = document.getElementsByClassName('sales')[0];
            var xiao = document.getElementsByClassName('xiao')[0];
            

            // 写入内容
            img.src = goods.imgurl;
            names.innerHTML = goods.name;
            prices.innerHTML = goods.price;
            xiao.src = goods.imgurl;






            // cookie部分

             // 声明一个变量，用于存放所有添加的商品信息
          var goodslist = Cookie.get('goodslist');//'[{},{}..]' 或 ''

          if(goodslist === ''){
            goodslist = []
          }else{
            goodslist = JSON.parse(goodslist);//goodslist必须为json字符串
          }

          // goodslist = JSON.parse(goodslist);//

          // 事件委托
          // 利用事件委托实现添加到购物车的效果
          
          var jiaru = document.querySelector('.jiaru');
          jiaru.onclick = function(){
            // Event对象兼容
            // e = e || window.event;

            // 事件源对象兼容
            // var target = e.target || e.srcElement;


            // 判断是否点击了添加购物车按钮
            // if(target.parentNode.className === 'jiaru'){
              // 获取当前li
              // var currentLi = target.parentNode.parentNode;

              // console.log(currentLi);
              // var guid = currentLi.getAttribute('data-guid');

              // console.log(guid);
              // 判断当前商品是否已经添加过
              // * 已添加：找出这个商品，数量+1
              // * 未添加：创建对象，商量为1，写入数组

              // var currentGoods = goodslist.filter(function(g){
                // return g.guid === guid;
              // });//[{}]或[]

              // if(currentGoods.length>0){
                // 存在，数量+1
                // currentGoods[0].qty++;
              // }else{
                // 不存在，添加商品

                // 获取商品信息
                // 把goods保持外观，存入cookie(只能字符串)：json字符串
                var good = {
                  guid:goods.id,
                  imgurl:goods.imgurl,
                  name:goods.name,
                  price:goods.price,
                  qty:1

                }

                console.log(good.imgurl);
                // 当前商品添加到数组
                goodslist.push(good);
                console.log(good);
                Cookie.set('goodslist',JSON.stringify(goodslist));
              }


      

              // Object->json string
              // JSON.stringify()

              // 
              // document.cookie = 'goodslist=' + JSON.stringify(goodslist);
              
            
          
           

    })();



   
           

         

    
