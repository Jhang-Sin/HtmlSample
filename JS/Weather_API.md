Weather API 使用說明
1. API 基本資訊
本專案目前使用的天氣 API 為：wttr.in
API 基本 URL：https://wttr.in/

本專案使用 JSON 格式：
?format=j1

因此完整 API URL 格式為：
https://wttr.in/{城市名稱}?format=j1

例如：
https://wttr.in/台北市?format=j1

如果城市名稱包含中文或特殊字元，程式應使用：

encodeURIComponent(cityName)
進行 URL 編碼。

2. API 查詢方式
目前程式使用 HTTP GET。

$.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
    success: function (data) {
        // 處理資料
    },
    error: function (xhr, status, error) {
        // 處理錯誤
    }
});


3. API URL 組成方式

目前程式：

const baseUrl = "https://wttr.in/";
const format = "?format=j1";

const apiCity = ChangeCityName(city);

const apiUrl =
    baseUrl +
    encodeURIComponent(apiCity) +
    format;

    例如下拉選單選擇：
    Panchiao

    經過自行建立的城市對應表：

    Panchiao
    ↓
台北市-板橋
最後 API 查詢：
https://wttr.in/%E5%8F%B0%E5%8C%97%E5%B8%82-%E6%9D%BF%E6%A9%8B?format=j1


4. 城市名稱對應機制
4.1 為什麼需要自行建立對應表？
wttr.in 的城市/地區判斷並不是本專案可以控制的。
即使傳送相同的城市名稱或座標，API 回傳的：
nearest_area.areaName

仍可能不是網站原本使用的城市名稱。

查詢：
台北市-板橋
API 回傳：
Chiupokou

因此本專案不完全依賴 API 的城市名稱，而是自行建立城市名稱對應表。

5. ChangeCityName()

目前使用：

function ChangeCityName(cityName) {

    var ReStr = "";

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

        // 其他城市...

        default:
            ReStr = cityName;
            break;
    }

    return ReStr;
}



6. ChangeCityName() 的兩種用途

目前 ChangeCityName() 有兩個用途。

6.1 下拉選單名稱 → API 查詢名稱
例如：
Panchiao
    ↓
ChangeCityName()
    ↓
台北市-板橋
    ↓
wttr.in

程式：
const city = $(this).val();
const apiCity = ChangeCityName(city);

6.2 API 回傳名稱 → 網站顯示名稱

API 回傳：

{
    "nearest_area": [
        {
            "areaName": [
                {
                    "value": "Chiupokou"
                }
            ]
        }
    ]
}

程式：

var CityName = "NoneCity";

CityName =
    data.nearest_area[0]
        .areaName[0]
        .value;


例如：

Chiupokou
    ↓
ChangeCityName()
    ↓
台北市

7. 維護城市對應表的重要注意事項

如果 API 回傳新的城市名稱:

nearest_area.areaName[0].value

例如：
Chiupokou
而程式尚未建立對應：
case "Chiupokou":

就會進入：

default:
    ReStr = cityName;

此時會保留：
Chiupokou

不會因為對應不存在而產生錯誤查詢字串。

8. 建議新增城市對應的方式

當發現 API 回傳新的城市名稱時：
API 回傳：
SomeNewPlace

確認實際應該顯示：

某地區

即可加入：

case "SomeNewPlace":
    ReStr = "台北市-某地區";
    break;

9. API 回傳資料基本結構
使用：
?format=j1 後，API 回傳 JSON。

主要結構：

data
├── current_condition
├── nearest_area
├── request
└── weather

其中目前程式主要使用：

current_condition
nearest_area

而：
weather
則包含未來數天的預報資料。


10. current_condition

目前天氣資料位於：

data.current_condition[0]

例如：

{
    "temp_C": "26",
    "humidity": "63",
    "weatherDesc": [
        {
            "value": "Sunny"
        }
    ],
    "windspeedKmph": "12"
}


11. 目前溫度
資料路徑：
data.current_condition[0].temp_C

例如：26

程式：
const temperature =
    current.temp_C;

 顯示：溫度：26°

 注意：
 API 回傳的數值通常是字串："26"
 而不是：26

 如果未來需要進行數學計算，建議：

 const temperature =
    Number(current.temp_C);

12. 濕度
資料路徑：
data.current_condition[0].humidity

例如： 63

程式：
const humidity =
    current.humidity;

顯示：濕度：63%


13. 風速
資料路徑：
data.current_condition[0].windspeedKmph

例如：12
程式：const windSpeed =
    current.windspeedKmph;
顯示：風速：12 公里/小時

14. 天氣狀態
資料路徑：
 data.current_condition[0]
    .weatherDesc[0]
    .value

例如：Sunny
程式：
const weatherText =
    current.weatherDesc[0].value;
接著交給：ChangeWeathStatus(weatherText);進行中文轉換。

15. 天氣狀態中文轉換

目前程式使用：
function ChangeWeathStatus(EnGStatu) {

    var New_EnGStatu = String(EnGStatu)
        .replace(/[\s,]+/g, "")
        .trim()
        .toLowerCase();

    return weatherMapping[New_EnGStatu]
        || `${EnGStatu}-No_Data-`;
}

例如：Sunny
會轉成：sunny
然後：
weatherMapping["sunny"]
得到：晴天


16. 為什麼要去除空白？
API 有時會回傳：
Partly Cloudy
也可能：
Partly Cloudy 
因此程式會先處理：
.replace(/[\s,]+/g, "")
最後變成：
partlycloudy
因此對應表使用：
partlycloudy: "局部多雲"
即可。



17. 天氣對應表
目前主要對應如下：

API 英文	網站顯示
Sunny	晴天
Clear	晴朗
Partly Cloudy	局部多雲
Cloudy	多雲
Overcast	陰天
Mist	薄霧
Fog	霧
Rain	雨
Light rain	小雨
Moderate rain	中雨
Heavy rain	大雨
Torrential rain	暴雨
Patchy rain nearby	附近有局部降雨
Patchy rain possible	可能有局部小雨
Light rain shower	小陣雨
Light drizzle	小毛毛雨
Heavy drizzle	大毛毛雨
Thunderstorm	雷陣雨
Hail	冰雹
Sleet	雨夾雪
Snow showers	陣雪
Light snow	小雪
Moderate snow	中雪
Heavy snow	大雪
Blizzard	暴風雪
Ice pellets	冰粒
18. 如果遇到新的天氣描述
如果 API 回傳：

Some New Weather
目前程式會轉成：

Some New Weather-No_Data-
這是故意保留的。

目的：

可以知道 API 出現新的天氣描述。

不會靜默變成錯誤的中文。

可以依照實際 API 回傳值自行新增對應。

例如：

weatherMapping = {

    // 原本資料

    sunny: "晴天",

    // 新增 API 狀態

    somenewweather: "新的天氣狀態"
};
19. nearest_area
API 回傳的地區資訊：

data.nearest_area[0]
例如：

{
    "areaName": [
        {
            "value": "Chiupokou"
        }
    ],
    "country": [
        {
            "value": "Taiwan"
        }
    ],
    "latitude": "25.033",
    "longitude": "121.567",
    "region": [
        {
            "value": "T'ai-pei"
        }
    ]
}
20. API 回傳城市名稱
資料路徑：

data.nearest_area[0]
    .areaName[0]
    .value
例如：

Chiupokou
程式：

var CityName = "NoneCity";

CityName =
    data.nearest_area[0]
        .areaName[0]
        .value;

CityName =
    ChangeCityName(CityName);
21. nearest_area 的其他資料
國家
data.nearest_area[0]
    .country[0]
    .value
例如：

Taiwan
緯度
data.nearest_area[0]
    .latitude
例如：

25.033
經度
data.nearest_area[0]
    .longitude
例如：

121.567
Region
data.nearest_area[0]
    .region[0]
    .value
例如：

T'ai-pei
22. request
API 查詢本身的資訊位於：

data.request[0]
例如：

{
    "query": "Lat 25.04 and Lon 121.56",
    "type": "LatLon"
}
如果使用城市名稱查詢，這裡也可能顯示 API 實際收到的查詢內容。

可以用來 Debug。

例如：

console.log(
    "API Request =",
    data.request[0]
);
23. weather
weather 是未來天氣預報資料。

資料：

data.weather
是一個陣列。

例如：

data.weather[0]
data.weather[1]
data.weather[2]
分別代表不同日期。

24. weather 日期
例如：

data.weather[0].date
可能得到：

2026-09-17
25. 每日最高 / 最低溫
最高溫：

data.weather[0].maxtempC
最低溫：

data.weather[0].mintempC
例如：

最高溫：30°C
最低溫：21°C
26. 每日平均溫度
data.weather[0].avgtempC
例如：

25
27. 每日天氣預報 hourly
每天的詳細預報位於：

data.weather[0].hourly
它也是陣列。

例如：

data.weather[0].hourly[0]
data.weather[0].hourly[1]
data.weather[0].hourly[2]
28. hourly 的時間
例如：

data.weather[0]
    .hourly[3]
    .time
可能得到：

900
通常代表：

09:00
其他可能：

0
300
600
900
1200
1500
1800
2100
對應：

00:00
03:00
06:00
09:00
12:00
15:00
18:00
21:00
29. hourly 溫度
資料：

data.weather[0]
    .hourly[3]
    .tempC
例如：

26
30. hourly 體感溫度
資料：

data.weather[0]
    .hourly[3]
    .FeelsLikeC
例如：

27
31. hourly 濕度
資料：

data.weather[0]
    .hourly[3]
    .humidity
例如：

63
32. hourly 降雨機率
資料：

data.weather[0]
    .hourly[3]
    .chanceofrain
例如：

4
代表：

降雨機率 4%
33. hourly 天氣狀態
資料：

data.weather[0]
    .hourly[3]
    .weatherDesc[0]
    .value
例如：

Sunny
同樣可以交給：

ChangeWeathStatus()
轉換成中文。

34. hourly 風速
資料：

data.weather[0]
    .hourly[3]
    .windspeedKmph
例如：12
單位：公里/小時
 
35. 目前程式實際使用哪些資料？
目前網頁顯示主要只使用：

current_condition
    ├── temp_C
    ├── humidity
    ├── weatherDesc[0].value
    └── windspeedKmph

nearest_area
    └── areaName[0].value

36. API 完整資料的主要架構

data
│
├── current_condition[]
│   │
│   └── [0]
│       ├── temp_C
│       ├── temp_F
│       ├── FeelsLikeC
│       ├── FeelsLikeF
│       ├── humidity
│       ├── pressure
│       ├── visibility
│       ├── uvIndex
│       ├── weatherCode
│       ├── weatherDesc[]
│       │   └── value
│       ├── weatherIconUrl[]
│       │   └── value
│       ├── winddir16Point
│       ├── winddirDegree
│       ├── windspeedKmph
│       └── windspeedMiles
│
├── nearest_area[]
│   │
│   └── [0]
│       ├── areaName[]
│       │   └── value
│       ├── country[]
│       │   └── value
│       ├── latitude
│       ├── longitude
│       ├── population
│       ├── region[]
│       │   └── value
│       └── weatherUrl[]
│           └── value
│
├── request[]
│   │
│   └── [0]
│       ├── query
│       └── type
│
└── weather[]
    │
    ├── [0]
    │   ├── date
    │   ├── maxtempC
    │   ├── mintempC
    │   ├── avgtempC
    │   ├── sunHour
    │   ├── uvIndex
    │   ├── astronomy[]
    │   └── hourly[]
    │
    ├── [1]
    │   └── ...
    │
    └── [2]
        └── ...


 JSON 資料型態注意事項
API 回傳的許多數字實際上是「字串」。

例如：
{
    "temp_C": "26",
    "humidity": "63",
    "windspeedKmph": "12"
}

不是：
{
    "temp_C": 26,
    "humidity": 63,
    "windspeedKmph": 12
}

如果只是顯示：
const temperature = current.temp_C;
沒有問題。
但是如果需要計算：
temperature + 1
應該使用：
Number(current.temp_C) + 1

AJAX dataType 注意事項
建議保留：
dataType: "json"

完整：

$.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",

    success: function (data) {

        // data 已經是 JavaScript Object

    }
});

如此不需要自行：
JSON.parse(data);

39. 不建議直接假設資料一定存在
不要直接假設：
data.current_condition[0]
一定存在。


建議檢查：
if (
    !data ||
    !data.current_condition ||
    !data.current_condition[0]
) {

    console.error(
        "API 沒有 current_condition",
        data
    );

    return;
}

40. nearest_area 也需要防呆
不建議直接：
data.nearest_area[0]
    .areaName[0]
    .value

    
建議：

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


原因是 API 的地區辨識可能發生變化。


41. API 地名不穩定的處理原則
本專案採取：

使用者選擇的城市
        ↓
自行建立 API 查詢名稱
        ↓
送給 wttr.in
        ↓
API 回傳 nearest_area
        ↓
取得 API 實際回傳名稱
        ↓
再次使用自行建立的對應表
        ↓
網站顯示名稱


因此：
API 回傳的城市名稱不是本網站的最終標準名稱。
網站自己的城市名稱以自行維護的對應表為準。
42. 發現 API 回傳新城市名稱時的處理流程

如果 Console 顯示：
API 回傳的原始城市名稱 = NewCityName
但畫面沒有正確顯示。
處理步驟：

確認 API 實際回傳名稱。
確認該名稱對應到哪一個網站城市。
在 ChangeCityName() 新增 case。
重新測試。
確認相同城市再次查詢時是否仍然正常。

43. 發現新的天氣英文描述時的處理流程
如果 Console 出現：
Some Weather-No_Data-
代表 weatherMapping 沒有這個狀態。
處理：
查看 API 原始英文。
確認實際氣象意義。
將英文轉成小寫。
移除空白。
加入 weatherMapping。
例如 API：
Some New Weather
對應 key：

somenewweather
新增：
somenewweather: "新的天氣狀態",


44. Debug 建議
開發期間建議保留：
console.log("選擇的城市 =", city);
console.log("API 查詢名稱 =", apiCity);
console.log("API URL =", apiUrl);
console.log("API 回傳資料 =", data);
console.log(    "API 回傳的原始城市名稱 =", CityName);

console.log("API 原始天氣 =",weatherText);
console.log("中文天氣 =",description);
這樣如果 API 行為改變，可以快速找出問題。



45. API Error 處理

AJAX：
error: function (xhr, status, error) {
    console.error("天氣 API 請求失敗");
    console.error("status =",status);

    console.error("error =",error);

    console.error("responseText =",xhr.responseText);

    $("#weather").html("<p>無法載入天氣資料，請稍後再試。</p>");
}
如果 API 無法連線、回傳錯誤、JSON 格式異常或其他 HTTP 問題，可以透過 Console 查看。


 未來擴充
API 已經提供許多資料，目前尚未顯示。

例如可以增加：
體感溫度
current.FeelsLikeC
紫外線指數
current.uvIndex
氣壓
current.pressure
能見度
current.visibility
風向
current.winddir16Point
風向角度
current.winddirDegree
天氣圖示
current.weatherIconUrl[0].value

48. 未來增加每日預報
如果要增加未來天氣：
data.weather
例如：
data.weather[0]
代表第一天。

可以取得：
const forecast =
    data.weather[0];
const date =forecast.date;
const maxTemp =forecast.maxtempC;

