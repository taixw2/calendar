/**
 * Created by User on 2016/10/25.
 */

var myDate = new Date();
var month = myDate.getMonth();
var year = myDate.getFullYear();
var day = myDate.getDate();

var dayOfMonth = [
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
];

var isLeapYear = (year)=> {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
        return 1
    else
        return 0
};

var get_day = (year, month)=> {
    return dayOfMonth[isLeapYear(year)][month - 1];
};


Page({
    data: {
        week: ["日", "一", "二", "三", "四", "五", "六"],
        monthStart: (new Date(year, month, 1)).getDay(),
        day: get_day(year, month),
        date: '2016年10月'
    },
    switchMonth (e) {
        switch (+e.target.dataset.type) {
            case 0 :    //左切
                if (month == 0) {
                    year--;
                    month = 11;
                } else {
                    month--;
                }
                break;
            case 1 :    //右切
                if (month == 11) {
                    year++;
                    month = 0;
                } else {
                    month++;
                }
                break;
        }


        this.setData({
            day : get_day(year, month),
            date : year + "年" + (month + 1) + "月",
            monthStart: (new Date(year, month, 1)).getDay()
        });
    },
    onLoad () {

    }
});