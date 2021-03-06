document.addEventListener('DOMContentLoaded',function(){


        /*
            购物车页
                * 读取cookie -> 显示到页面
                * 删除cookie -> 显示到页面
                    * 清除所有商品
                    * 删除单个商品
         */
        var oCarList = document.getElementById('carList');
        var oSubPrice = oCarList.nextElementSibling;
        var btnClear = document.getElementById('btnClear');

        var goodslist = Cookie.get('goodslist');//'[{}]',''

        console.log(goodslist);
        if(goodslist.length<=0){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
        }


        render();

        // 清空购物车
        // 删除goodslist这个cookie
        btnClear.onclick = function(e){
            // 清空cookie
            Cookie.remove('goodslist');



            // 清空goodslist数组
            goodslist = [];

            render();


            e.preventDefault();

            // 手动刷新页面
            // location.reload()
        }

        // 删除单个商品
        // * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
        oCarList.onclick = function(e){
            e = e || window.event;

            var target = e.target || e.srcElement;

            // 判断是否点击了按钮
            if(target.className === 'btn-close'){
                // 获取当前li
                var currentLi = target.parentNode;

                // 获取当前商品的guid
                var guid = currentLi.getAttribute('data-guid');

                // 找出数组中对应商品并移除
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].guid === guid){
                        goodslist.splice(i,1);
                        break;
                    }
                }

                // 重写cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));

                // 重新渲染页面
                render();
            }
        }

        function render(){

            // 根据数据生成html结构
            var ul = document.createElement('ul');

            // 计算总价
            var total = 0;

            ul.innerHTML = goodslist.map(function(goods){
                // 计算总价
                total += goods.price * goods.qty;

                return '<li data-guid="'+goods.guid+'">' + 
                        '<img src="'+goods.imgurl+'"/>' + 
                        '<h4>'+goods.name+'</h4>' + 
                        '<p class="price">价格：<span>'+goods.price+'</span> &times; '+goods.qty+'</p>' + 
                        '<span class="btn-close">&times;</span>'
                '</li>';
            }).join('\n');

            // 把ul写入页面#carList
            oCarList.innerHTML = '';
            oCarList.appendChild(ul);

            // 写入总价
            oSubPrice.innerHTML = total.toFixed(2);
        }


        // (function(){

        //         let shenghuo = document.querySelector('.shenghuo');

        //         let shenghuoul = document.querySelector('.shenghuoul');
        //         shenghuo.onmouseover = function(){

        //             shenghuoul.style.display = 'block';
        //           }



        //         let bangzu = document.querySelector('.bangzu');

        //         let bangzuul = document.querySelector('.bangzuul');
        //         bangzu.onmouseover = function(){

        //             bangzuul.style.display = 'block';
        //           }


        //         let gengduo = document.querySelector('.gengduo');

        //         let gengduoul = document.querySelector('.gengduoul');
        //         gengduo.onmouseover = function(){

        //             gengduoul.style.display = 'block';
        //           }

        //     })();


    });


    
       


