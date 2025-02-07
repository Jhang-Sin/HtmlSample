"use strict";

const translations = {
    en: {
        "title": "Language Switch Example",
        "name-label": "Name:",
        "email-label": "Email:",
        "table-header-name": "Name",
        "table-header-email": "Email",
        "table-data-name": "John ",
        "table-data-email": "john@example.com"
    },
    zh: {
        "title": "多語言切換範例",
        "name-label": "姓名：",
        "email-label": "電子郵件：",
        "table-header-name": "姓名",
        "table-header-email": "電子郵件",
        "table-data-name": "約翰",
        "table-data-email": "john@example.com"
    }
};

$(document).ready(function () {
    let currentLang = "en"; // 預設語言

    function loadLanguage(lang) {
        const translation = translations[lang] || translations["en"];
        $('[data-key]').each(function () {
            const key = $(this).data('key');
            $(this).text(translation[key] || key);
        });
    }

    // 初始化載入預設語言
    loadLanguage(currentLang);

    // 語言切換按鈕
    $('.lang-btn').click(function () {
        const selectedLang = $(this).data('lang');
        if (selectedLang !== currentLang) {
            currentLang = selectedLang;
            loadLanguage(currentLang);
        }
    });
});