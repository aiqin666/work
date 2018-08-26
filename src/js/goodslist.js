
  jQuery(function($){

       
      $('#nav h1').on('click',function(){
          $('#nav h1').next('ul').slideToggle('slow');

        });



        


          // (function(){

          //       let shenghuo = document.querySelector('.shenghuo');

          //       let shenghuoul = document.querySelector('.shenghuoul');
          //       shenghuo.onmouseover = function(){

          //           shenghuoul.style.display = 'block';
          //         }



          //       let bangzu = document.querySelector('.bangzu');

          //       let bangzuul = document.querySelector('.bangzuul');
          //       bangzu.onmouseover = function(){

          //           bangzuul.style.display = 'block';
          //         }


          //       let gengduo = document.querySelector('.gengduo');

          //       let gengduoul = document.querySelector('.gengduoul');
          //       gengduo.onmouseover = function(){

          //           gengduoul.style.display = 'block';
          //         }

          //   })();


        (function(){
            
          
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
              $('.add2cart').on('click',function(){

                 $('<img>').attr({
                     src:"../img"
                  }).css({width:200,height:200,position:'absolute',left:169,top:367}).appendTo($('body')).animate({
                    left:$('body').outerWidth(),
                    height:20,
                    width:20
                },1000,function(){
                $(this).remove();

                })


            });


            $('.goodslist li').on('mouseover',function(){

              


            });

      
        })();


          var jiagedown = document.querySelector('.jiagedown');
          var jiageup = document.querySelector('.jiageup');
          var xiaoliangdown = document.querySelector('.xiaoliangdown');
          var xiaoliangup = document.querySelector('.xiaoliangup');
          var xiaoliangdown = document.querySelector('.xiaoliangdown');
          var xiaoliangup = document.querySelector('.xiaoliangup');
          var renqidown = document.querySelector('.renqidown');
          var renqiup = document.querySelector('.renqiup');
          var datedown = document.querySelector('.datedown');
          var dateup = document.querySelector('.dateup');



                var _pageNo=1;
                var _qty=15;


                $.ajax({

                    type:"post",
                    url:'../api/goodslist.php',
                    data:{
                       
                        qty:_qty,
                        pageNo:_pageNo
                    },

                    success:function(res){
                        res = JSON.parse(res);
                        console.log(res[0]);
                    
                        jiegou();

                        //生成结构
                        function jiegou(){
                            abc = res[0].row.map(function(item,idx){
                            return `

                                
                                    <li data-guid=${item.id}>
                                    <a href="#"><img src= "../img/${item.imgurl}"/>
                                    <p class="name">${item.name}</p></a>
                                    <p class="title">${item.title}</p>
                                    <p class="price"><span>${item.price}</span><del>${item.sale}</del></p>
                                    <p class="store">${item.store}</p>
                                    <span class="span1 add2cart"><i class="glyphicon glyphicon-shopping-cart"></i>加入购物车</span>
                                    <span class="span2"><i class="glyphicon glyphicon-star-empty"></i>关注商品</span>

                              </li>`
                          }).join('');
                          $('.goodslist').html(abc);
                          $('.bestgoods').html(abc);
                        }

                        // $('goodslist ul').on('click','li',function(){
                        //   var obj = {
                        //     id:$(this).index(),
                        //     imgurl:$(this).find('img').attr('src'),
                        //     title:$(this).find('.name').text(),
                        //     price:$(this).find('.price').children('sapn').text(),
                        //     store:$(this).find('.store').text()
                        //   }
                        //   console.log(obj);
                        // })

                       jiageup.onclick =function(){
                            jiagesheng();
                            jiegou();
                            chuancan();
                            this.classList.add('active');

                         }

                         jiagedown.onclick =function(){
                            jiagexia();
                            jiegou();
                            chuancan();
                            this.classList.add('active');
                         }

                         xiaoliangup.onclick =function(){
                            xiaoliangsheng();
                            jiegou();
                            chuancan();
                            this.classList.add('active');
                         }


                         xiaoliangdown.onclick =function(){
                            xiaoliangxia();
                            jiegou();
                            chuancan();
                            this.classList.add('active');
                         }


                         renqiup.onclick =function(){
                            renqisheng();
                            jiegou();
                            chuancan();
                            this.classList.add('active');
                         }


                         renqidown.onclick =function(){
                            renqixia();
                            jiegou();
                            chuancan();
                            this.classList.add('active');
                         }


                         dateup.onclick =function(){
                            datesheng();
                            jiegou();
                            chuancan();
                            this.classList.add('active');
                         }


                         datedown.onclick =function(){
                            datexia();
                            jiegou();
                            chuancan();
                            this.classList.add('active');
                         }


                         // 价格升序
                        function jiagesheng(){
                          res[0].row.sort(function(a,b){
                            return a.price-b.price;
                          })
                        }

                        // 价格降序
                        function jiagexia(){
                          res[0].row.sort(function(a,b){
                            return b.price-a.price;
                          })
                        }
                        

                        // 销量升序
                        function xiaoliangsheng(){
                          res[0].row.sort(function(a,b){
                            return a.num-b.num;
                          })
                        }
                        
                        // 销量降序
                        function xiaoliangxia(){
                          res[0].row.sort(function(a,b){
                            return b.num-a.num;
                          })
                        }

                        // 人气升序
                        function renqisheng(){
                          res[0].row.sort(function(a,b){
                            return a.ren-b.ren;
                          })
                        }

                        // 人气降序
                        function renqixia(){
                          res[0].row.sort(function(a,b){
                            return b.ren-a.ren;
                          })
                        }

                        // 上架时间升序
                        function datesheng(){
                          res[0].row.sort(function(a,b){
                            return a.time-b.time;
                          })
                        }


                        // 上架时间降序
                        function datexia(){
                          res[0].row.sort(function(a,b){
                            return b.time-a.time;
                          })
                        }



                        // url传参
                        function chuancan(){

                          var goodslist = document.querySelector('.goodslist');
                         
                         // 获取a标签
                          var links = goodslist.getElementsByTagName('a');

                          for(var i=0;i<links.length;i++){
                            links[i].idx = i;
                            links[i].onclick = function(){
                              // 通过索引值获取商品信息
                              var item = res[0].row[this.idx];

                              // Object->String（id=001&name=ip7&price=...）
                              var params = '';
                              for(var key in item){
                                params += key + '=' + item[key] + '&'
                              }

                              // 去除多余的&
                              params = params.slice(0,-1);

                              // 修改href属性
                              // this.href = '06goods.html?'+params

                              // 在js中跳到06goods.html
                              location.href = 'details.html?' + params;

                              console.log(params);
                            }
                          }

                        }

                        chuancan();



                    

                    // 创建分页
                    // 计算分页数量
                    let pageLen = Math.ceil(res[0].total/res[0].qty);
                    let goodslist = document.querySelector('.goodslist');

                    console.log(pageLen);
                    
                    let page = document.createElement('div');
                    page.className = 'page';
                    for(var i=0;i<pageLen;i++){
                      var span = document.createElement('span');
                      span.innerText = i+1;

                      // 高亮当前分页
                      if(i===res[0].pageNo-1){
                        span.className = 'active';
                      }
                      page.appendChild(span);
                    }

                    goodslist.appendChild(page);

                  }
                  
              });

        

});

     
            



        