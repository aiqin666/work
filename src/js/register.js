jQuery(function($){

    // $('#footer').load('../html.list.html #footer');


    console.log(666)
    $('.tishi').empty();
    var lock = false;
    var res = randomNumber(1000,9999);
    console.log(res);
    // 得到随机验证码
    $('.huoqu').on('click',function(){
        $('.a1').html(res);
    });
    // 连接数据库验证手机号是否注册
    // var phone;
    // $('#phone').on('blur',function(){
    //     tel = $('#phone').val();
    //     var codes = res;
    //     $.ajax({
    //         url:'../api/login.php',
    //         data:{
    //             username:phone
    //         },
    //         success:function(res){
    //             console.log(res);
    //             if(res==='yes'){
    //                 $('.t1').html('请输入您的手机号');
    //                 lock = true;
    //             }else{
    //                 lock = false;
    //             }
    //         }
    //     });

    // });
    // 校验码是否正确
    $('#jiaoyan').on('blur',function(){
        var j1 = $('.j1').get(0).innerText;
        var txt = $('#jiaoyan').val();
        
        console.log(j1);
        if(txt!=j1){
            $('.t2').html('检验码不正确');
            lock = true;
        }else{
            lock = false;
        }
    });
    // 验证码是否正确
    $('#yanzheng').on('blur',function(){
        var yan = $('#yanzheng').val();
        if(yan!=res){
            $('.t3').html('验证码不正确');
            lock = true;
        }else{
            lock = false;
        }
    });

    // 密码格式
    var p1;
    var p2;
    $('#password').on('blur',function(){
        p1 = $('#password').val();
        var t1 = /^[a-z0-9_-]{6,18}$/;
        if(!t1.test(p1)){
            $('.t4').html('密码应为6-18位任意字符组成');
            lock = true;
        }else{
            lock = false;
        }
        var p = p1.split('');
        p2 = p.map(function(item){
            var rnumber = parseInt(Math.random()*10)+1;

            item = '' + (item.charCodeAt(0)*1+10-5)*rnumber;
            return item;
        }).join('a');
    });

    // 确认密码
    $('#confirm').on('blur',function(){
        var p3 = $('#confirm').val();
        if(p3!=p1){
            $('t5').html('两次密码不一致');
            lock = true;
        }else{
            lock = false;
        }
    });


});