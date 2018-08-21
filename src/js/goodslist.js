
jQuery(function($){

            $('#top').load('../html/list.html #header',function(){

            });



            $('#footer').load('../html/list.html #footer',function(){

               });



                 $('#nav h1').on('click',function(){
                    $('#nav h1').next('ul').slideToggle('slow');

                });




                var _pageNo=1;
                var _qty=15;


                $.ajax({

                    type:"post",
                    url:'../api/connect.php',
                    data:{
                       
                        qty:_qty,
                        pageNo:_pageNo
                    },
                    success:function(res){
                        res = JSON.parse(res);
                        console.log(res);

                        res = res[0].row.map(function(item){
                            return `

                                <a href="#">
                                    <li data-guid=${item.id}>
                                    <img src= "../img/${item.imgurl}"/>
                                    <p class="name">${item.name}</p>
                                    <p class="title">${item.title}</p>
                                    <p class="price"><span>${item.price}</span><del>${item.sale}</del></p>
                                    <p class="store">${item.store}</p>
                                    <span class="span1"><i class="glyphicon glyphicon-shopping-cart"></i>加入购物车</span>
                                    <span class="span2"><i class="glyphicon glyphicon-star-empty"></i>关注商品</span>

                            </li></a>`
                        }).join('');

                        $('.goodslist').html(res);
                        $('.bestgoods').html(res);
                    }



                });

         
                 // 根据数据生成结构
          // var goodslist = document.querySelector('.goodslist');
          //   function jiegou(){
          //       goodslist.innerhtml = res.map(function(item){

          //           return`
          //               <li>

          //                   <img src= ${item.imgurl}/>
          //                   <p>${item.name}</p>
          //                   <p>${item.title}</p>
          //                   <p class="price"><span>${item.price}</span><del>${item.sale}</del></p>
          //                   <span class="span1">加入购物车</span>
          //                   <span class="span2">关注商品</span>

          //           </li>`
                    
          //       }).join('');
          //   }

    });


        