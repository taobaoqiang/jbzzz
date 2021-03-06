/**
 * Created by admin on 2017/4/18.
 * update by wang on 2018/08/02.
 */

function dateformat() {
};


/**
 * 格式化时间
 * @param date
 * @param fmt
 * @returns {*}
 */
dateformat.format = function (date, fmt) {
	if(!date || typeof(Number(date))=='number'&&date<=0){
		return date;
	}
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    'S': date.getMilliseconds() //毫秒
  };
  if (!this.isNotEmpty(fmt)) {
    fmt = 'yyyy-MM-dd hh:mm:ss';
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};


dateformat.formatToDate = function (dateStr) {
  if (this.isNotEmpty(dateStr)) {
    return new Date(Date.parse(dateStr.replace(/-/g, '/')));
  }
  return '';
};

dateformat.getDateStart = function (date) {
  var fmt = 'yyyy-MM-dd';
  var dateStartStr = this.getDateStartStr(date, fmt);
  var startTime = new Date(Date.parse(dateStartStr));
  return startTime;
};

dateformat.getDateStartStr = function (date, fmt) {
  if (typeof fmt == 'undefined') {
    fmt = 'yyyy-MM-dd';
  }
  var dateStr = this.format(date, fmt);
  dateStr += ' 00:00:00';
  return dateStr;
};

dateformat.getDateEnd = function (date) {
  var fmt = 'yyyy-MM-dd';
  var dateEndStr = this.getDateEndStr(date, fmt);
  var endTime = new Date(Date.parse(dateEndStr));
  return endTime;
};

dateformat.getDateEndStr = function (date, fmt) {
  if (typeof fmt == 'undefined') {
    fmt = 'yyyy-MM-dd';
  }
  var endStr = this.format(date, fmt);
  endStr += ' 23:59:59';
  return endStr;
};

dateformat.compareDate = function (d1, d2) {
  if (d1 && d2) {
    if (d1.getTime() > d2.getTime()) {
      return 1;
    } else if (d1.getTime() == d2.getTime()) {
      return 0;
    } else if (d1.getTime() < d2.getTime()) {
      return -1;
    }
  }
};

dateformat.isLeapYear = function (date) {
  if (date instanceof Date) {
    return (0 == date.getYear() % 4 && ((date.getYear() % 100 != 0) || (date.getYear() % 400 == 0)));
  }
  console.warn('argument format is wrong');
  return false;
};

dateformat.isValidDate = function (dateStr) {
  if (this.isNotEmpty(dateStr)) {
    var r = dateStr.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) {
      return false;
    }
    var d = new Date(r[1], r[3] - 1, r[4]);
    var num = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
    return (num != 0);
  }
};

dateformat.addDay = function (date, dayNum) {
  if (this.isNotEmpty(date) && this.isNotEmpty(dayNum) && date instanceof Date && typeof dayNum == 'number') {
    date.setDate(date.getDate() + dayNum);
  } else {
    console.warn('date or dayNum format wrong');
  }
  return date;
};

dateformat.addDayStr = function (dateStr, dayNum) {
  var date = '';
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(dayNum) && typeof dayNum == 'number') {
    date = this.formatToDate(dateStr);
    date.setDate(date.getDate() + dayNum);
  } else {
    console.warn('dateStr or dayNum format wrong');
  }
  return date;
};

dateformat.addMonth = function (date, monthNum) {
  if (this.isNotEmpty(date) && this.isNotEmpty(monthNum) && date instanceof Date && typeof monthNum == 'number') {
    date.setMonth(date.getMonth() + monthNum);
  } else {
    console.warn('date or monthNum format wrong');
  }
  return date;
};

dateformat.addMonthStr = function (dateStr, monthNum) {
  var date = '';
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(monthNum) && typeof monthNum == 'number') {
    date = this.formatToDate(dateStr);
    date.setMonth(date.getMonth() + monthNum);
  } else {
    console.warn('date or monthNum format wrong');
  }
  return date;
};

dateformat.addYear = function (date, yearNum) {
  if (this.isNotEmpty(date) && this.isNotEmpty(yearNum) && date instanceof Date && typeof yearNum == 'number') {
    date.setYear(date.getFullYear() + yearNum);
  } else {
    console.warn('date or yearNum format wrong');
  }
  return date;
};

dateformat.addYearStr = function (dateStr, yearNum) {
  var date = '';
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(yearNum) && typeof yearNum == 'number') {
    date = this.formatToDate(dateStr);
    date.setYear(date.getFullYear() + yearNum);
  } else {
    console.warn('date or yearNum format wrong');
  }
  return date;
};

dateformat.isNotEmpty = function (str) {
  if (str != '' && str != null && typeof str != 'undefined') {
    return true;
  }
  console.warn('argument format is wrong');
  return false;
};

dateformat.getWeek = function (date, type) {
  if (date) {
    if (!this.isNotEmpty(type)) {
      type = 0;
    }
    var index = date.getDay();
    var dateStr = '';
    switch (type) {
      case this.WEEKTYPE.ZH_DAYNAME:
        dateStr = this._options.ZH.dayNames[index];
        break;
      case this.WEEKTYPE.ZH_SDAYNAME:
        dateStr = this._options.ZH.shortDayNames[index];
        break;
      case this.WEEKTYPE.US_DAYNAME:
        dateStr = this._options.US.dayNames[index];
        break;
      case this.WEEKTYPE.US_SDAYNAME:
        dateStr = this._options.US.shortDayNames[index];
        break;
    }
    return dateStr;
  }
};

dateformat.WEEKTYPE = {
  ZH_DAYNAME: 0,
  ZH_SDAYNAME: 1,
  US_DAYNAME: 2,
  US_SDAYNAME: 3,
};

dateformat._options = {
  ZH: {
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    shortDayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    shortMonthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  US: {
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
};


/**
 * 格式化后的时间转时间戳、支持时间戳10位和13位互转
 * @param time(String) 如：1980-08-08 08:08:08
 * @param length(10 / 13)
 * @returns 时间戳
 */
dateformat.timeStamp = function (time, length) {
	if(!time || typeof(Number(time))=='number'&&time<=0){
		return time;
	}
  var dat = '', len = 0, status = '请传入正确的时间, 如：1980-08-08 08:08:08';
  length = length && typeof(length) == 'number' ? length : 13;
  if (typeof(time) == 'number') {
    dat = time;
  } else if (typeof(time) == 'string') {
    if (/^\d+$/.test(time)) {
      dat = Number(time);
    } else {
      time = time.trim();
      if (!/^\d{4}(-|\/)\d{1,2}(-|\/)\d{1,2}(\s{1,8}\d{1,2}:\d{1,2}:\d{1,2})?$/.test(time)) {
        dat = time;
        console.log(status);
      } else {
        time = time.replace(/\-/g, '/');
        dat = new Date(time).getTime();
      }
      if(isNaN(Number(time.substr(0,4))) || Number(time.substr(0,4))<=1970){
      	return time;
      }
    }
  } else if (typeof(time) == 'object') {
    dat = new Date(time).getTime();
  }
  len = String(dat).length;
  if (len == 10) {
    dat = length == 10 ? dat : dat * 1000;
  } else if (len == 13) {
    dat = length == 10 ? dat / 1000 : dat;
  }
  return dat;
};
// module.exports = {
//   dateformat
// };
export default dateformat;
