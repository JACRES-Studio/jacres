
let header_article = 1

let header_bg_color = "#ffffff00";
let header_text_color = "#ffffff";

function header_change() {
    if (header_article === 1) {
        header_article = 2;
        document.getElementById("header-image").style.backgroundImage = "url('media/header/pawns-vs-dawn.png')";

        document.getElementById('header-title').style.color = header_bg_color;
        document.getElementById('header-article-desc-1').style.color = header_bg_color;
        document.getElementById('header-article-desc-2').style.color = header_bg_color;

        setTimeout(function(){
            document.getElementById('header-title').innerHTML = "Pawns vs. Dawn";
            document.getElementById('header-article-desc-1').innerHTML = "This new JACRES webgame combines the genre of FPS and RTS, providing a new style of gameplay!";
            document.getElementById('header-article-desc-2').innerHTML = "It is only available on our website.";

            document.getElementById('header-title').style.color = header_text_color;
            document.getElementById('header-article-desc-1').style.color = header_text_color;
            document.getElementById('header-article-desc-2').style.color = header_text_color;
        }, 500);
    } else {
        header_article = 1;
        document.getElementById("header-image").style.backgroundImage = "url('media/header/button-war-anniversary.png')";
        
        document.getElementById('header-title').style.color = header_bg_color;
        document.getElementById('header-article-desc-1').style.color = header_bg_color;
        document.getElementById('header-article-desc-2').style.color = header_bg_color;

        setTimeout(function(){
            document.getElementById('header-title').innerHTML = "5 Years of Button War";
            document.getElementById('header-article-desc-1').innerHTML = "The game that built JACRES celebrates its 5th year anniversary!";
            document.getElementById('header-article-desc-2').innerHTML = "Sadly, a new version will not be released due to differing goals we have in the studio today.";

            document.getElementById('header-title').style.color = header_text_color;
            document.getElementById('header-article-desc-1').style.color = header_text_color;
            document.getElementById('header-article-desc-2').style.color = header_text_color;
        }, 500);
        
    }

    setTimeout(header_change, 10000)
}

header_change()