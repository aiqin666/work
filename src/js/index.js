// jQuery(function($){
//     $span = $('.header_t .header_tr span');
//     $ul = $('.header_t .header_tr ul');


//     $span.on('click',function(){
//         $ul.style.display = 'block';

//     });


// });

        jQuery(function($){

           

            
            $('h1').on('click',function(){
                $('h1').next('ul').slideToggle('slow');




            // $('.shenghuo').click(function(){
            //     $('.shenghuoul').toggle();
            // }),function(){
            //     $('.shenghuoul').toggle();
            // }
           

            });

        

            // (function(){

            //     let shenghuo = document.querySelector('.shenghuo');

            //     let shenghuoul = document.querySelector('.shenghuoul');
            //     shenghuo.onclick = function(){

            //         shenghuoul.style.display = 'block';
            //       }



            //     let bangzu = document.querySelector('.bangzu');

            //     let bangzuul = document.querySelector('.bangzuul');
            //     bangzu.onclick = function(){

            //         bangzuul.style.display = 'block';
            //       }


            //     let gengduo = document.querySelector('.gengduo');

            //     let gengduoul = document.querySelector('.gengduoul');
            //     gengduo.onclick = function(){

            //         gengduoul.style.display = 'block';
            //       }

            // })();



             (function(){
            let banner = document.querySelector('#banner');
            let ul = banner.children[0];

            // console.log(ul);


            // 初始化
            let index = 0;

            ul.appendChild(ul.children[0].cloneNode(true));

            let len = ul.children.length;

            ul.style.width = banner.clientWidth*len +'px';

            // 添加分页
            let page = document.createElement('div');
            page.className = 'page';

            for(var i=0;i<len-1;i++){

                let span = document.createElement('span');
                if(i===index){
                    span.className = 'active';
                }
                page.appendChild(span);
            }

            banner.appendChild(page);


            let timer = setInterval(autoPlay,4000);


            banner.onmouseover = function(){
                clearInterval(timer);

            }


            banner.onmouseout = function(){
                timer = setInterval(autoPlay,4000);
            }


            function autoPlay(){
                index++;
                if(index >= len){
                    ul.style.left = 0;
                    index=1;
                }

                animate(ul,{left:-index*banner.clientWidth});

                for(let i=0;i<len-1;i++){
                    page.children[i].className = '';
                }

                if(index === len-1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active';
                }
            }

        })();




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


        })();




        });





           

    