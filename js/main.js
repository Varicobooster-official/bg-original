! function(t) {
    "use strict";
    var e = {
            ru: {
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthsRp: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
                monthsPp: ["январе", "феврале", "марте", "апреле", "мае", "июне", "июле", "августе", "сентябре", "октябре", "ноябре", "декабре"],
                maxPurchase: "Больше всего заказов (_COUNT_) было _DATE_ _MONTH_ 2015 года.",
                stockInfoTitle: "Более 100 000 продаж в ",
                stockInfoTime: "Сроки проведения акции с _STARTDATE_ _STARTMONTH_ по _ENDDATE_ _ENDMONTH_"
            },
            bg: {
                months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                monthsRp: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
                monthsPp: ["януари", "февруари", "март", "апреле", "мае", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
                maxPurchase: "Больше всего заказов (_COUNT_) было <br/> _DATE_ _MONTH_ 2015 года.",
                stockInfoTitle: "Повече от 100 000 продажби през ",
                stockInfoTime: "Дати на акции от _STARTDATE_ _STARTMONTH_ до _ENDDATE_ _ENDMONTH_"
            }
        },
        n = function() {
            this.nowDate = new Date, this.params = {
                lang: "bg",
                maxPurchase: 2419,
                maxPurchaseDate: 2,
                startStockDate: 29,
                endStockDate: 1,
                countDownDiff: Math.ceil(86400 - (60 * this.nowDate.getHours() * 60 + 60 * this.nowDate.getMinutes() + this.nowDate.getSeconds())),
                selectors: {
                    countDown: ".landing__countdown",
                    maxPurcahesDate: ".landing__maxpurcashe",
                    stockInfo: ".landing__stockinfo",
                    stockInfoTitle: ".landing__stockinfo_title"
                }
            }, this.initCountDown(), this.initMaxPurcasheDate(), this.initStockInfo(), this.initEvents()
        };
    n.prototype.initEvents = function() {
        this.removeStyleTag(), t(".scrollto").on("click", this.scrollToForm), t(".delivery li a").on("hover", this.showHeadInformation)
    }, n.prototype.initStockInfo = function() {
        var n = e[this.params.lang],
            o = n.stockInfoTitle + n.monthsPp[this.nowDate.getUTCMonth()],
            s = new Date(this.nowDate.getTime() + 24 * this.params.endStockDate * 60 * 60 * 1e3),
            a = new Date(this.nowDate.getTime() - 24 * this.params.startStockDate * 60 * 60 * 1e3),
            i = n.stockInfoTime;
        i = i.replace("_STARTDATE_", a.getUTCDate()), i = i.replace("_ENDDATE_", s.getUTCDate()), i = i.replace("_STARTMONTH_", n.monthsRp[a.getMonth()]), i = i.replace("_ENDMONTH_", n.monthsRp[s.getMonth()]), t(this.params.selectors.stockInfoTitle).html(o), t(this.params.selectors.stockInfo).html(i)
    }, n.prototype.initMaxPurcasheDate = function() {
        var n = new Date(this.nowDate.getTime() - 24 * this.params.maxPurchaseDate * 60 * 60 * 1e3),
            o = e[this.params.lang].maxPurchase;
        o = o.replace("_COUNT_", this.params.maxPurchase), o = o.replace("_DATE_", n.getUTCDate()), o = o.replace("_MONTH_", e[this.params.lang].monthsRp[n.getUTCMonth()]), t(this.params.selectors.maxPurcahesDate).html(o)
    }, n.prototype.initCountDown = function() {
        var e = this,
            n = new Date(this.nowDate.getTime() + 1e3 * this.params.countDownDiff);
        setInterval(function() {
            var o = new Date(n.getTime() - Date.now()),
                s = o.getHours() > 9 ? o.getHours() : "0" + o.getHours(),
                a = o.getMinutes() > 9 ? o.getMinutes() : "0" + o.getMinutes(),
                i = o.getSeconds() > 9 ? o.getSeconds() : "0" + o.getSeconds(),
                r = '<span class="hours">' + s + '</span><span class="minutes">' + a + '</span><span class="seconds">' + i + "</span>";
            t(e.params.selectors.countDown).html(r)
        }, 1e3)
    }, n.prototype.removeStyleTag = function(e) {
        t(document.head).find("style").remove()
    }, n.prototype.scrollToForm = function(e) {
        var n = t(e.currentTarget);
        t("body,html").animate({
            scrollTop: t(n.attr("href")).offset().top
        }, 1e3), e.preventDefault()
    }, n.prototype.showHeadInformation = function(e) {
        t(e.currentTarget).siblings("p").slideToggle("fast")
    }, t(function() {
        window.landing = new n
    })
}(jQuery);
