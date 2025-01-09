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
                    ReStr = "宜蘭縣";
                    break;
                case "Hualien":
                    ReStr = "花蓮縣";
                    break;
                case "Taitung":
                    ReStr = "台東縣";
                    break;
                case "Penghu":
                    ReStr = "澎湖縣";
                    break;
                case "Kinmen":
                    ReStr = "金門縣";
                    break;
                case "Matsu":
                    ReStr = "馬祖/連江縣";
                    break;
            }
            return ReStr

         }

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
                const description = current.weatherDesc[0].value; // 天氣描述
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