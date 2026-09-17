"use strict";

$(document).ready(function () {

    // ============================================================
    // 定義 API URL
    // ============================================================
    const baseUrl = "https://wttr.in/";
    const format = "?format=j1";


    // ============================================================
    // 城市名稱對應
    //
    // 這個對應表是自行建立的，不屬於 API 提供。
    //
    // 用途：
    // 1. 下拉選單的城市名稱 -> API 查詢名稱
    // 2. API 回傳的城市名稱 -> 自己網站的顯示名稱
    //
    // 因為 API 回傳的 nearest_area 可能不固定，
    // 所以這裡保留人工維護方式。
    // ============================================================
    function ChangeCityName(cityName) {

        var ReStr = "未知地名資訊-API對應失敗";

        switch (cityName) {

            case "Panchiao":
                ReStr = "台北市-板橋";
                break;
            case "Taipei":
                ReStr = "台北市";
                break;
            case "NewTaipei":
                ReStr = "新北市";
                break;
            case "Chungho":
                ReStr = "新北中和";
                break;
            case "Taoyuan":
                ReStr = "桃園市";
                break;
            case "Tachi":
                ReStr = "桃園-大溪";
                break;
            case "Hsinchu":
                ReStr = "新竹市";
                break;
            case "Chupei":
                ReStr = "新竹-竹北";
                break;
            case "HsinchuCounty":
                ReStr = "新竹縣";
                break;
            case "Miaoli":
                ReStr = "苗栗縣";
                break;
            case "Taichung":
                ReStr = "台中市";
                break;
            case "Changhua":
                ReStr = "彰化縣";
                break;
            case "Nantou":
                ReStr = "南投縣";
                break;
            case "Yunlin":
                ReStr = "雲林縣";
                break;
            case "Touliu":
                ReStr = "雲林-斗六";
                break;
            case "Chiayi":
            case "ChiayiCounty":
                ReStr = "嘉義";
                break;
            case "Tainan":
                ReStr = "台南市";
                break;

            case "Kaohsiung":
                ReStr = "高雄市";
                break;

            case "Pingtung":
                ReStr = "屏東縣";
                break;
            case "Yilan":
            case "Ilan":
                ReStr = "宜蘭縣";
                break;
            case "Hualien":
            case "HualienCity":
                ReStr = "花蓮縣";
                break;
            case "Taitung":
                ReStr = "台東縣";
                break;
            case "Penghu":
            case "Makung":
                ReStr = "澎湖-馬公";
                break;
            case "Kinmen":
                ReStr = "金門";
                break;
            case "Matsu":
                ReStr = "馬祖/連江縣";
                break;


            // ====================================================
            // 以下是 API 回傳的地名
            //
            // 如果 API 回傳的 nearest_area 名稱不符合你的預期，
            // 就在這裡增加對應。
            //
            // 例如：
            //
            // API 回傳：
            // Chiupokou
            //
            // 你希望網站顯示：
            // 台北市
            //
            // 就建立：
            //
            // case "Chiupokou":
            //     ReStr = "台北市";
            //     break;
            //
            // ====================================================      

            // ====================================================
            // 如果 API 回傳名稱沒有在對應表裡
            //
            // 不要回傳錯誤訊息！
            //
            // 因為這個函式有時候會被拿來組 API URL。
            // 如果回傳「網站目前無法...」反而會導致 API 查詢失敗。
            //
            // 因此直接保留原始名稱。
            // ====================================================
            default:
                ReStr = ReStr;
                break;
        }

        return ReStr;
    }


    // ============================================================
    // 天氣狀態英文 -> 中文
    // ============================================================
    function ChangeWeathStatus(EnGStatu) {

        // 防止 API 沒有回傳 weatherDesc
        if (!EnGStatu) {
            return "未知";
        }


        // ========================================================
        // 去除多餘空白、逗號
        // 並轉成小寫
        // ========================================================
        var New_EnGStatu = String(EnGStatu)
            .replace(/[\s,]+/g, "")
            .trim()
            .toLowerCase();


        /*
        [\s,]
            \s = 空白字符
            ,   = 逗號

        +
            一次或多次

        g
            全部取代

        例如：

        "Patchy rain nearby"

        會變成：

        "patchyrainnearby"
        */


        // ========================================================
        // 天氣對應表
        // ========================================================
        const weatherMapping = {

            // ----------------------------------------------------
            // 晴天 / 多雲
            // ----------------------------------------------------

            sunny: "晴天",
            clear: "晴朗",
            partlycloudy: "局部多雲",
            cloudy: "多雲",
            overcast: "陰天",


            // ----------------------------------------------------
            // 霧
            // ----------------------------------------------------

            mist: "薄霧",
            fog: "霧",
            freezingfog: "凍霧",


            // ----------------------------------------------------
            // 雨
            // ----------------------------------------------------

            rain: "雨",

            patchyrainpossible:
                "可能有局部小雨",

            patchyrainnearby:
                "附近有局部降雨",

            heavyrainshower:
                "大雨",

            rainshower:
                "零星細雨",

            lightrain:
                "小雨",

            lightrainmist:
                "小雨、霧",

            moderaterain:
                "中雨",

            heavyrain:
                "大雨",

            torrentialrain:
                "暴雨",


            // ----------------------------------------------------
            // 陣雨
            // ----------------------------------------------------

            lightrainshower:
                "小陣雨",

            showerinvicinity:
                "局部陣雨",


            // ----------------------------------------------------
            // 毛毛雨
            // ----------------------------------------------------

            lightdrizzle:
                "小毛毛雨",

            heavydrizzle:
                "大毛毛雨",

            lightdrizzlefog:
                "小雨/霧",

            lightrainshowermist:
                "小雨/陣雨/霧",

            rainmist:
                "雨霧",


            // ----------------------------------------------------
            // 雪
            // ----------------------------------------------------

            patchysnowpossible:
                "可能有局部小雪",

            lightsnow:
                "小雪",

            moderatesnow:
                "中雪",

            heavysnow:
                "大雪",

            blizzard:
                "暴風雪",

            snowshowers:
                "陣雪",


            // ----------------------------------------------------
            // 凍雨
            // ----------------------------------------------------

            patchyfreezingdrizzlepossible:
                "可能有局部凍雨",

            freezingdrizzle:
                "凍雨",

            lightfreezingrain:
                "小凍雨",

            moderateorheavyfreezingrain:
                "中度或重度凍雨",


            // ----------------------------------------------------
            // 雷雨
            // ----------------------------------------------------

            thunderstorm:
                "雷陣雨",

            thunderyoutbreakspossible:
                "可能有雷陣雨",

            thunderstorminvicinityrainshower:
                "局部性雷陣雨",

            patchylightraininareawiththunder:
                "局部雷陣雨",


            // ----------------------------------------------------
            // 其他
            // ----------------------------------------------------

            hail:
                "冰雹",

            sleet:
                "雨夾雪",

            icepellets:
                "冰粒"
        };


        // ========================================================
        // 如果找到對應
        // 就回傳中文
        //
        // 如果沒有找到
        // 就保留原始英文並標示 No_Data
        //
        // 這樣你未來看到：
        //
        // "Some New Weather-No_Data-"
        //
        // 就知道 API 又出現新的天氣描述，
        // 可以再自行增加 weatherMapping。
        // ========================================================
        return weatherMapping[New_EnGStatu]
            || `${EnGStatu}-No_Data-`;
    }


    // ============================================================
    // 當下拉選單變更時執行
    // ============================================================
    $("#city-select").on("change", function () {

        // ========================================================
        // 取得下拉選單選中的城市
        // ========================================================
        const city = $(this).val();


        // ========================================================
        // 使用你自己建立的城市對應表
        // ========================================================
        const apiCity = ChangeCityName(city);


        // ========================================================
        // 建立 API URL
        //
        // encodeURIComponent：
        // 避免中文、空白、特殊符號造成 URL 問題
        // ========================================================
        const apiUrl =
            baseUrl +
            encodeURIComponent(apiCity) +
            format;


        // Debug
        console.log("------------------------------------");
        console.log("選擇的城市 =", city);
        console.log("API 查詢名稱 =", apiCity);
        console.log("API URL =", apiUrl);


        // ========================================================
        // AJAX 請求取得天氣資訊
        // ========================================================
        $.ajax({

            url: apiUrl,

            method: "GET",

            // ====================================================
            // 非常重要
            //
            // 明確告訴 jQuery：
            // API 回傳的是 JSON
            //
            // 這樣 success 裡面的 data
            // 就會直接是 JavaScript Object。
            // ====================================================
            dataType: "json",


            // ====================================================
            // 成功
            // ====================================================
            success: function (data) {

                console.log("API 回傳資料 =", data);


                // ==================================================
                // 檢查 API 是否有 current_condition
                // ==================================================
                if (
                    !data ||
                    !data.current_condition ||
                    !data.current_condition[0]
                ) {

                    console.error(
                        "API 沒有 current_condition",
                        data
                    );


                    $("#weather").html(
                        "<p>查無目前天氣資料，請稍後再試。</p>"
                    );

                    return;
                }


                // ==================================================
                // 取得目前天氣
                // ==================================================
                const current =
                    data.current_condition[0];


                // ==================================================
                // 取得 API 回傳的城市名稱
                // ==================================================
                var CityName = "NoneCity";


                if (
                    data.nearest_area &&
                    data.nearest_area[0] &&
                    data.nearest_area[0].areaName &&
                    data.nearest_area[0].areaName[0]
                ) {

                    CityName =
                        data.nearest_area[0]
                            .areaName[0]
                            .value;
                }


                console.log(
                    "API 回傳的原始城市名稱 =",
                    CityName
                );


                // ==================================================
                // 使用你的人工對應表
                //
                // 例如：
                //
                // Chiupokou
                //      ↓
                // ChangeCityName()
                //      ↓
                // 台北市
                // ==================================================
                CityName =
                    ChangeCityName(CityName);


                const location = CityName;


                console.log(
                    "最後顯示城市名稱 =",
                    location
                );


                // ==================================================
                // 溫度
                // ==================================================
                const temperature =
                    current.temp_C ?? "N/A";


                // ==================================================
                // 濕度
                // ==================================================
                const humidity =
                    current.humidity ?? "N/A";


                // ==================================================
                // 天氣狀態
                // ==================================================
                var weatherText = "N/A";


                if (
                    current.weatherDesc &&
                    current.weatherDesc[0] &&
                    current.weatherDesc[0].value
                ) {

                    weatherText =
                        current.weatherDesc[0].value;
                }


                console.log(
                    "API 原始天氣 =",
                    weatherText
                );


                // ==================================================
                // 英文天氣 -> 中文
                // ==================================================
                const description =
                    ChangeWeathStatus(weatherText);


                console.log(
                    "中文天氣 =",
                    description
                );


                // ==================================================
                // 風速
                // ==================================================
                const windSpeed =
                    current.windspeedKmph ?? "N/A";


                // ==================================================
                // 更新頁面顯示
                // ==================================================
                $("#weather").html(`

                    <b>${location}</b>

                    <p>
                        溫度：${temperature}°C
                    </p>

                    <p>
                        天氣狀態：${description}
                    </p>

                    <p>
                        濕度：${humidity}%
                    </p>

                    <p>
                        風速：${windSpeed} 公里/小時
                    </p>

                `);

            },


            // ====================================================
            // AJAX 發生錯誤
            // ====================================================
            error: function (xhr, status, error) {

                console.error(
                    "天氣 API 請求失敗"
                );

                console.error(
                    "status =",
                    status
                );

                console.error(
                    "error =",
                    error
                );

                console.error(
                    "responseText =",
                    xhr.responseText
                );


                $("#weather").html(
                    "<p>無法載入天氣資料，請稍後再試。</p>"
                );
            }

        });

    });


    // ============================================================
    // 預設載入台北市天氣
    // ============================================================
    $("#city-select").trigger("change");

});
