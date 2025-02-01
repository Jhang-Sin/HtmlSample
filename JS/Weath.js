"use strict";
$(document).ready(function () {
    // 定義 API URL
    const baseUrl = "https://wttr.in/";
    const format = "?format=j1"; // API 格式為 JSON
    
    // 當下拉選單變更時執行
    $("#city-select").on("change", function () {
        const city = $(this).val(); // 獲取選中的城市名稱
        const apiUrl = baseUrl + ChangeCityName(city) + format; // 拼接 API URL
        
        function  ChangeCityName(cityName)
         {
            var  ReStr = "none";
            //console.log("["+cityName+"]");

            switch(cityName)
            {
                
                case"Panchiao":
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
                case "Ban Not":

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
                    ReStr= "雲林-斗六"
                    break;       
                case "Chiayi":
                    ReStr = "嘉義市";
                    break;
                case "Taipao":
                    ReStr = "嘉義-太保"

                case "ChiayiCounty":
                    ReStr = "嘉義-太保";
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
                case"Ilan":
                    ReStr = "宜蘭縣";
                    break;

                case "Hualien":
                case "Kuomin":                    
                case "HualienCity":
                    
                    ReStr = "花蓮縣";
                    break;
                case "Taitung":
                    ReStr = "台東縣";
                    break;
                case "Penghu":
                case"Makung":
                    ReStr = "澎湖-馬公";
                    break;
                case "Kinmen":
                case "Dadeng":
                    ReStr = "金門";
                    break;
                case "Matsu":
                    ReStr = "馬祖/連江縣";
                    break;
            }
            return ReStr

         }


         function ChangeWeathStatus(EnGStatu) 
         {
            // 去除多餘空白並轉為小寫，確保大小寫一致性
            var New_EnGStatu = EnGStatu.replace(/[\s,]+/g, "").trim().toLowerCase();;
            /*
            [\s,]: 方括號內表示匹配任意一個字符， \s 表示空白字符，, 表示逗號。
            +: 表示匹配一次或多次這些字符。
            g: 全域匹配，確保正則運算式應用於整個字串。
            */

            const weatherMapping = {
                sunny: "晴天",
                clear: "晴朗",
                partlycloudy: "局部多雲",
                cloudy: "多雲",
                overcast: "陰天",
                mist: "薄霧",
                fog: "霧",
                patchyrainpossible: "可能有局部小雨",
                patchyrainnearby: "附近有局部降雨",
                lightrain: "小雨",
                lightrainmist: "小雨、霧",
                moderaterain: "中雨",
                heavyrain: "大雨",
                torrentialrain: "暴雨",
                patchysnowpossible: "可能有局部小雪",
                lightsnow: "小雪",
                moderatesnow: "中雪",
                heavysnow: "大雪",
                blizzard: "暴風雪",
                patchyfreezingdrizzlepossible: "可能有局部凍雨",
                freezingdrizzle: "凍雨",
                lightdrizzle: "小毛毛雨",
                heavydrizzle: "大毛毛雨",
                thunderstorm: "雷陣雨",
                thunderyoutbreakspossible: "可能有雷暴",
                hail: "冰雹",
                sleet: "雨夾雪",
                snowshowers: "陣雪",
                icepellets: "冰粒",
                freezingfog: "凍霧",
                lightfreezingrain: "小凍雨",
                moderateorheavyfreezingrain: "中度或重度凍雨",
                showerinvicinity:"局部陣雨"
            };         
             // 如果找不到對應，返回預設值
             return weatherMapping[New_EnGStatu] || `${New_EnGStatu}-No_Data-`;


         
         }
         /*
         修改重點將輸入字串轉為小寫：
            -在處理 New_EnGStatu 時，使用 .toLowerCase() 確保大小寫一致。
            -EnGStatu.replace(/[\s,]+/g, "").trim().toLowerCase();
            -調整 weatherMapping 中的鍵為小寫：
            -將所有 weatherMapping 的鍵手動改成小寫，與輸入處理保持一致。
            -一致性對比：在比對 weatherMapping[New_EnGStatu] 時，大小寫已被忽略。
         */






        // AJAX 請求取得天氣資訊
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function (data) {
                // 提取需要的天氣資訊
                const current = data.current_condition[0];
                ///處理顯示名稱
                var CityName="NoneCity";
                CityName = data.nearest_area[0].areaName[0].value;
                //console.log('OldName='+CityName);
                CityName = ChangeCityName(CityName);
                const location = CityName; 

                ///const location = (data.nearest_area[0].areaName[0].value);  
                              
                const temperature = current.temp_C; // 攝氏溫度
                const humidity = current.humidity; // 濕度
                //console.log('oldName='+ current.weatherDesc[0].value);
                const description = ChangeWeathStatus((current.weatherDesc[0].value)); //改變顯示成中文意思
                //console.log('newname='+description);
                const windSpeed = current.windspeedKmph; // 風速

                // 更新頁面顯示
                $("#weather").html(`
                    <b>${location} 天氣資訊</b>
                    <p>溫度：${temperature}°C</p>
                    <p>天氣狀態：${description}</p>
                    <p>濕度：${humidity}%</p>
                    <p>風速：${windSpeed} 公里/小時</p>
                `);
            },
            error: function () {
                // 處理錯誤
                $("#weather").html("<p>無法載入天氣資料，請稍後再試。</p>");
            }
        });
    });

    // 預設載入台北市天氣
    $("#city-select").trigger("change");
});