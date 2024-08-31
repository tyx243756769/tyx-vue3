// 去除首尾空格
export function trim(str) {
	return str.replace(/^\s+|\s+$/g, "")
}
// 严格-手机号
export function phone(str) {
	return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(str)
}

// 汉字
export function chineseCharacters(str) {
	return /[\u4e00-\u9fa5]/gm.test(str)
}

// 字母和数字8-20位
export function lettersAndNumbers(str) {
	return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(str)
}

// 只能是正整数
export function positiveInteger(str) {
	return /^\d+$/.test(str)
}

//宽松身份证号
export function easyId(str) {
	return /^\d{15,17}$/.test(str)
}

// 网址
export function website(str) {
	return /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(str)
}

// 域名（非网址，不包含协议）
export function domainName(str) {
	return /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/.test(str)
}

// 统一社会信用代码
export function unifiedSocialCreditCode(str) {
	return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(str)
}

// 数字货币，支持负数和千分位分隔符：12,345,678.90
export function currency(str) {
	return /^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/.test(str)
}

// 银行卡号
export function bankCardNumber(str) {
	return /^[1-9]\d{9,29}$/.test(str)
}

// 护照
export function passport(str) {
	return /^1[45][0-9]{7}$|(^[P|p|S|s]\d{7}$)|(^[S|s|G|g|E|e]\d{8}$)|(^[Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8}$)|(^[H|h|M|m]\d{8,10}$)/.test(str)
}

// 邮箱
export function email(str) {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)
}

/*
 *严格身份证校验方法 15 和18位
 * @param  身份证号 string
 * @return 
 * 
 * */
const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子   
const ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X 

export const IdCardValidate = idCard => {
	idCard = trim(idCard.replace(/ /g, "")); //去掉字符串头尾空格                     
	if(idCard.length == 15) {
		return isValidityBrithBy15IdCard(idCard); //进行15位身份证的验证    
	} else if(idCard.length == 18) {
		var a_idCard = idCard.split(""); // 得到身份证数组   
		if(isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) { //进行18位身份证的基本验证和第18位的验证
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};
/**  
 * 判断身份证号码为18位时最后的验证位是否正确  
 * @param a_idCard 身份证号码数组  
 * @return  
 */
const isTrueValidateCodeBy18IdCard = a_idCard => {
	var sum = 0; // 声明加权求和变量   
	if(a_idCard[17].toLowerCase() == 'x') {
		a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作   
	}
	for(var i = 0; i < 17; i++) {
		sum += Wi[i] * a_idCard[i]; // 加权求和   
	}
	var valCodePosition = sum % 11; // 得到验证码所位置   
	if(a_idCard[17] == ValideCode[valCodePosition]) {
		return true;
	} else {
		return false;
	}
};
/**  
 * 验证18位数身份证号码中的生日是否是有效生日  
 * @param idCard 18位书身份证字符串  
 * @return  
 */
const isValidityBrithBy18IdCard =idCard18 => {
	var year = idCard18.substring(6, 10);
	var month = idCard18.substring(10, 12);
	var day = idCard18.substring(12, 14);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	if(temp_date.getFullYear() != parseFloat(year) ||
		temp_date.getMonth() != parseFloat(month) - 1 ||
		temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
};
/**  
 * 验证15位数身份证号码中的生日是否是有效生日  
 * @param idCard15 15位书身份证字符串  
 * @return  
 */
const isValidityBrithBy15IdCard= idCard15=> {
	var year = idCard15.substring(6, 8);
	var month = idCard15.substring(8, 10);
	var day = idCard15.substring(10, 12);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	if(temp_date.getYear() != parseFloat(year) ||
		temp_date.getMonth() != parseFloat(month) - 1 ||
		temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
};

