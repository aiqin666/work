<?php
    
    // // 配置参数
    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $dbname = '1804';




    // // 创建连接（实例化）
    // $conn = new mysqli($servername, $username, $password, $dbname);


    //  // 检测连接
    // if ($conn->connect_error) {
    //     // 输出信息并结束连接
    //     die("连接失败: " . $conn->connect_error);
    // }


    // 引入connect.php
    include 'connect.php';

    
    $pageNo = isset($_POST['pageNo']) ? $_POST['pageNo'] : null;
    $qty = isset($_POST['qty']) ? $_POST['qty'] : null;



     // 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    $sql = "select * from goodslist";


    // 执行sql语句
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);

    $res = array(
            "total" => count($row),
            "row" => array_slice($row,($pageNo-1)*$qty,$qty),
            "pageNo" => $pageNo,
            "qty" => $qty

        );

    $arr = array($res);
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>
