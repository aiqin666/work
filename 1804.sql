/*
Navicat MySQL Data Transfer

Source Server         : loc
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 1804

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 20:02:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `sale` int(10) NOT NULL,
  `store` varchar(255) NOT NULL,
  `num` int(255) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ren` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '../img/liebiao_1.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '100', '2018-08-21 23:57:08', '654');
INSERT INTO `goodslist` VALUES ('2', '../img/liebiao_2.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '14800', '17400', 'JJ Moda', '76', '2018-08-21 23:57:12', '324');
INSERT INTO `goodslist` VALUES ('3', '../img/liebiao_13.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '98', '2018-08-21 23:57:16', '64');
INSERT INTO `goodslist` VALUES ('4', '../img/liebiao_14.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '14768', '17400', 'JJ Moda', '4', '2018-08-21 23:57:21', '424');
INSERT INTO `goodslist` VALUES ('5', '../img/liebiao_15.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '35', '2018-08-21 23:57:24', '876');
INSERT INTO `goodslist` VALUES ('6', '../img/liebiao_16.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '1498', '17400', 'JJ Moda', '23', '2018-08-21 23:57:28', '6');
INSERT INTO `goodslist` VALUES ('7', '../img/liebiao_17.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '3', '2018-08-21 23:57:32', '987');
INSERT INTO `goodslist` VALUES ('8', '../img/liebiao_18.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '5437', '17400', 'JJ Moda', '23', '2018-08-21 23:57:36', '43');
INSERT INTO `goodslist` VALUES ('9', '../img/liebiao_16.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '65', '2018-08-21 23:57:39', '223');
INSERT INTO `goodslist` VALUES ('10', '../img/liebiao_15.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '9823', '17400', 'JJ Moda', '67', '2018-08-21 23:57:42', '1');
INSERT INTO `goodslist` VALUES ('11', '../img/liebiao_22.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '86', '2018-08-21 23:57:44', '37');
INSERT INTO `goodslist` VALUES ('12', '../img/liebiao_21.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '87456', '17400', 'JJ Moda', '35', '2018-08-21 23:57:47', '85');
INSERT INTO `goodslist` VALUES ('13', '../img/liebiao_3.jpg', 'MONtoSUN 新款女士时尚单肩小方包潮流复古金属扣夹子斜挎包', 'MONtoSUN新款女士时尚单肩小方包', '468', '469', 'MON to SUN旗舰店', '6', '2018-08-21 23:57:50', '98');
INSERT INTO `goodslist` VALUES ('14', '../img/liebiao_4.jpg', '意大利 Louis Vuitton路易威登', '意大利 Louis Vitton路易威登 2018新款夏季 老花手提单肩包', '10450', '11000', '保税全球购旗舰店', '21', '2018-08-21 23:57:53', '332');
INSERT INTO `goodslist` VALUES ('15', '../img/liebiao_5.jpg', 'MONtoSUN韩版包包女2018新款单肩包', 'MONtoSUN韩版包包女2018新款潮斜跨时尚链条手提单肩小方包夏女', '439', '439', 'MONto SUN旗舰店', '45', '2018-08-21 23:57:56', '65');
INSERT INTO `goodslist` VALUES ('16', '../img/liebiao_6.jpg', 'GIANFRANCO LOTTI红色牛皮单肩包', 'GIANFRANCO LOTTI红色牛皮女士气质单肩包', '11050', '14370', 'JJ Moda', '65', '2018-08-21 23:57:59', '34');
INSERT INTO `goodslist` VALUES ('17', '../img/liebiao_7.jpg', 'Prada普拉达 Galleria Saffiano杀手包', 'Prada普拉达 Galleria Saffiano失车菊蓝牛皮手提单肩斜跨包小号杀手包', '12900', '15800', 'JJ Moda', '32', '2018-08-21 23:58:03', '60');
INSERT INTO `goodslist` VALUES ('18', '../img/liebiao_8.jpg', 'Pinko燕子包女士白色Coca Cola包', 'Pinko燕子包女士Coca Cola链条单肩包', '2443', '2800', '买得值海外专卖店', '54', '2018-08-21 23:58:06', '97');
INSERT INTO `goodslist` VALUES ('19', '../img/liebiao_9.jpg', 'Longchamp隆翔 尼龙手提折叠饺子包', 'Longchamp 隆翔 尼龙手提折叠长柄饺子包', '415', '640', '买得值海外专卖店', '65', '2018-08-21 23:58:08', '38');
INSERT INTO `goodslist` VALUES ('20', '../img/liebiao_10.jpg', 'MONtoSUN简约凯莉包女2018新款大容量包', 'MONtoSUN简约凯莉包女2018新款手提斜跨单肩信封包春季款大容量包', '498', '499', 'MON to SUN旗舰店', '34', '2018-08-21 23:58:11', '96');
INSERT INTO `goodslist` VALUES ('21', '../img/liebiao_21.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '5694', '17400', 'JJ Moda', '54', '2018-08-21 23:58:13', '3093');
INSERT INTO `goodslist` VALUES ('22', '../img/liebiao_22.jpg', '希尔弗兰 自然豹纹小牛皮笑脸小包', '希尔福兰 自然豹纹小牛皮笑脸链条小包', '3894', '4190', '华港进口商品专营店', '54', '2018-08-21 23:58:20', '72');
INSERT INTO `goodslist` VALUES ('23', '../img/liebiao_23.jpg', '希尔弗兰 自然豹纹小牛皮笑脸小包', '希尔福兰 自然豹纹小牛皮笑脸链条小包', '3680', '4190', '华港进口商品专营店', '32', '2018-08-21 23:58:22', '29');
INSERT INTO `goodslist` VALUES ('24', '../img/liebiao_24.jpg', 'GIANFRANCO LOTTI红色牛皮单肩包', 'GIANFRANCO LOTTI红色牛皮女士气质单肩包', '11050', '14370', 'JJ Moda', '2', '2018-08-21 23:58:25', '9');
INSERT INTO `goodslist` VALUES ('25', '../img/liebiao_25.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '14800', '17400', 'JJ Moda', '43', '2018-08-21 23:58:30', '92');
INSERT INTO `goodslist` VALUES ('26', '../img/liebiao_26.jpg', 'GIANFRANCO LOTTI红色牛皮单肩包', 'GIANFRANCO LOTTI红色牛皮女士气质单肩包', '11050', '14370', 'JJ Moda', '55', '2018-08-21 23:58:33', '72');
INSERT INTO `goodslist` VALUES ('27', '../img/liebiao_27.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '3', '2018-08-21 23:58:36', '88');
INSERT INTO `goodslist` VALUES ('28', '../img/liebiao_28.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '43', '2018-08-21 23:58:38', '3');
INSERT INTO `goodslist` VALUES ('29', '../img/liebiao_29.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '14800', '17400', 'JJ Moda', '55', '2018-08-21 23:58:45', '83');
INSERT INTO `goodslist` VALUES ('30', '../img/liebiao_30.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '6', '2018-08-21 23:58:48', '63');
INSERT INTO `goodslist` VALUES ('31', '../img/liebiao_31.jpg', 'MONtoSUN简约凯莉包女2018新款大容量包', 'MONtoSUN简约凯莉包女2018新款手提斜跨单肩信封包春季款大容量包', '498', '499', 'MON to SUN旗舰店', '22', '2018-08-21 23:58:51', '76');
INSERT INTO `goodslist` VALUES ('32', '../img/liebiao_32.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '14890', '17400', 'JJ Moda', '32', '2018-08-21 23:58:53', '4');
INSERT INTO `goodslist` VALUES ('33', '../img/liebiao_33.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '14806', '17400', 'JJ Moda', '34', '2018-08-21 23:58:57', '99');
INSERT INTO `goodslist` VALUES ('34', '../img/liebiao_34.jpg', 'Pinko燕子包女士白色Coca Cola包', 'Pinko燕子包女士Coca Cola链条单肩包', '2443', '2800', '买得值海外专卖店', '54', '2018-08-21 23:59:01', '65');
INSERT INTO `goodslist` VALUES ('35', '../img/liebiao_35.jpg', 'GIANFRANCO LOTTI红色牛皮单肩包', 'GIANFRANCO LOTTI红色牛皮女士气质单肩包', '11050', '14370', 'JJ Moda', '56', '2018-08-21 23:59:03', '4');
INSERT INTO `goodslist` VALUES ('36', '../img/liebiao_36.jpg', 'GIANFRANCO LOTTI红色牛皮单肩包', 'GIANFRANCO LOTTI红色牛皮女士气质单肩包', '11050', '14370', 'JJ Moda', '65', '2018-08-21 23:59:05', '2');
INSERT INTO `goodslist` VALUES ('37', '../img/liebiao_37.jpg', '意大利 GUCCI/古驰 GG帆布 单肩包', '意大利GUCCI/古驰CG帆布 单肩手斜跨女包', '6251', '6580', '包税全国购旗舰店', '54', '2018-08-21 23:59:08', '656');
INSERT INTO `goodslist` VALUES ('38', '../img/liebiao_38.jpg', 'GIANFRANCO LOTTI红色牛皮单肩包', 'GIANFRANCO LOTTI红色牛皮女士气质单肩包', '11050', '14370', 'JJ Moda', '87', '2018-08-21 23:59:10', '43');
INSERT INTO `goodslist` VALUES ('39', '../img/liebiao_39.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '1436', '17400', 'JJ Moda', '88', '2018-08-21 23:59:12', '32');
INSERT INTO `goodslist` VALUES ('40', '../img/liebiao_40.jpg', 'GIANFRANCO LOTTI红色牛皮单肩包', 'GIANFRANCO LOTTI红色牛皮女士气质单肩包', '11050', '14370', 'JJ Moda', '21', '2018-08-21 23:59:15', '65');
INSERT INTO `goodslist` VALUES ('41', '../img/liebiao_41.jpg', 'Fendi芬迪DOTCOM CLICK 火红手提包', 'Fendi芬迪DOMICOM CLICK 火红色牛皮女士手提单肩包', '1480', '17400', 'JJ Moda', '1', '2018-08-21 23:59:17', '4');
INSERT INTO `goodslist` VALUES ('42', '../img/liebiao_42.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '1400', '17400', 'JJ Moda', '32', '2018-08-21 23:59:19', '433');
INSERT INTO `goodslist` VALUES ('43', '../img/liebiao_43.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '14800', '17400', 'JJ Moda', '23', '2018-08-21 23:59:21', '656');
INSERT INTO `goodslist` VALUES ('44', '../img/liebiao_44.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '1800', '17400', 'JJ Moda', '43', '2018-08-21 23:59:23', '433');
INSERT INTO `goodslist` VALUES ('45', '../img/liebiao_45.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '140', '17400', 'JJ Moda', '58', '2018-08-21 23:59:25', '77');
INSERT INTO `goodslist` VALUES ('46', '../img/liebiao_46.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '800', '17400', 'JJ Moda', '32', '2018-08-21 23:59:28', '77');
INSERT INTO `goodslist` VALUES ('47', '../img/liebiao_47.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '100', '17400', 'JJ Moda', '46', '2018-08-21 23:59:31', '998');
INSERT INTO `goodslist` VALUES ('48', '../img/liebiao_48.jpg', 'Fend芬迪 DOTCOM CLICK火红色', 'Fend芬迪 DOTCOM CLICK火红色线缝牛皮女士手提单肩包88N', '14870', '17400', 'JJ Moda', '38', '2018-08-21 23:59:36', '9984');
INSERT INTO `goodslist` VALUES ('49', '../img/liebiao_49.jpg', 'Pinko燕子包女士白色Coca Cola包', 'Pinko燕子包女士Coca Cola链条单肩包', '2443', '2800', '买得值海外专卖店', '37', '2018-08-21 23:59:38', '9945');
INSERT INTO `goodslist` VALUES ('50', '../img/liebiao_50.jpg', 'GIANFRANCO LOTTI红色牛皮单肩包', 'GIANFRANCO LOTTI红色牛皮女士气质单肩包', '11050', '14370', 'JJ Moda', '85', '2018-08-21 23:59:44', '8');

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `username` varchar(255) NOT NULL,
  `password` int(10) unsigned NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('小王', '123456');
INSERT INTO `register` VALUES ('小刘', '123456');
INSERT INTO `register` VALUES ('小赵', '123');
INSERT INTO `register` VALUES ('小红', '123');
SET FOREIGN_KEY_CHECKS=1;
