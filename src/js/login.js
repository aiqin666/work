document.addEventListener('DOMContentLoaded',function(){


        /*
            7天免登录
                * expires
                * location.href

         */
        var login = document.getElementsByClassName('.login')[0];
        var checkbox = document.getElementsByClassName('checkbox')[0];
        var username = document.getElementById('username');
        var password = document.getElementById('password');

        var accessUser = ['laoxie','lemon','yy'];

        // 提交跳转
        login.onclick = function(e){
            // 获取用户名和密码
            var _username = username.value;
            var _psw = password.value;

            // 用户名或密码不正确
            if(accessUser.indexOf(_username)===-1 || _psw != '123456'){
                alert('用户名或密码不正确');

                // e.preventDefault();
                // return;

                // 等效于
                return false;// e.returnValue = false
            }


            // 登录成功
            // * 跳转
            // * 保存cookie（前提：勾选7天免登陆）
            // 判断复选框是否勾选
            if(checkbox.checked){
                // cookie保留7天

                // 得到当前时间
                var date = new Date();

                // 在当前的基础上+7天
                date.setDate(date.getDate()+7);

                document.cookie = 'username=' + _username + ';expires=' + date.toUTCString();
                document.cookie = 'password=' + _psw + ';expires=' + date.toUTCString();;
            }
        }


        var currentUser;
        var currentPassword

        // 自动登录
        // * 获取cookie
        // * 判断有效性
        var cookies = document.cookie;
        cookies = cookies.split('; ');

        // 循环找出想要的cookie
        cookies.forEach(function(item){
            // 拆分name,value
            var arr = item.split('=');

            if(arr[0] === 'username'){
                currentUser = arr[1];
            }else if(arr[0] === 'password'){
                currentPassword = arr[1];
            }
        });

        // console.log(currentUser,currentPassword)

        // 判断有效性
        if(accessUser.indexOf(currentUser)>=0 && currentPassword === '123456'){
            location.href = '../index.html';
        }   
    }

});