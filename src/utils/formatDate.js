/**
 * 加0
 * @returns {number | string}   
 * @param num 数字
 */
export function addZero(num) {
    return num > 9 ? num : '0' + num
}
/**
 * 获取星期几
 * @returns {string}
 * @param date 日期对象
 * @param fig 返回格式，true为周，false为星期
 */
export function getWeek(date, fig) {
    var weekday = []
    if (fig) {
        weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    } else {
        weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }
    return weekday[date.getDay()]
}
/**
 * 创建固定格式日期
 * @returns {string}
 * @param split 分隔符，默认为'年月日'
 */
export function getDate(split) {
    let now = new Date()
    let y = now.getFullYear()
    let m = now.getMonth() + 1
    let d = now.getDate()
    if (split) {
        return y + split + addZero(m) + split + addZero(d)
    } else {
        return y + "年" + addZero(m) + "月" + addZero(d) + "日"
    }
}
/**
 * 格式化日期对象
 * @returns {string}
 * @param date
 * @param format 格式化字符串，如：yyyy-MM-dd hh:mm:ss
 */
export const dateFormat = (date, format) => {
    let o = {
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(),    //day
        "h+": date.getHours(),   //hour
        "m+": date.getMinutes(), //minute
        "s+": date.getSeconds(), //second
        "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
        "S": date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};