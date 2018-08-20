// jQuery(function($){
//     $span = $('.header_t .header_tr span');
//     $ul = $('.header_t .header_tr ul');


//     $span.on('click',function(){
//         $ul.style.display = 'block';

//     });


// });

        jQuery(function($){

            $('#top').load('../src/html/list.html #header',function(){

            });

            $('#nav').load('../src/html/list.html #nav',function(){

            });


            $('#footer').load('../src/html/list.html #footer',function(){


            });




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




        });





           

        // (function(){

        //     var goods = [{
        //             id:001,
        //             name:"DW女士石英表",
        //             imgurl:"../img/xx.png"
        //         },{
        //             id:002,
        //             name:"创悦 足浴盆",
        //             imgurl:"../img/xx.png"
        //         },{
        //             id:003,
        //             name:"祛斑美白丸",
        //             imgurl:"../img/xx.png"
        //         },{
        //             id:004,
        //             name:"水素生活",
        //             imgurl:"../img/xx.png"
        //         },{
        //             id:005,
        //             name:"麦饭石多用厨具",
        //             imgurl:"../img/xx.png"
        //         }]



        // });

    