var LANGUAGE_ZH = "zh_CN";
var LANGUAGE_EN = "en_US";
var LANGUAGE_DE = "de-DE";
var LANGUAGE_KEY = "language";

function loadProperties(type) {
    jQuery.i18n.properties({
        name: 'strings', 
        path: 'i18n/', 
        mode: 'map',  
        language: type,
        cache: false,
        encoding: 'UTF-8',
        callback: function () {   
            $('#li-Index').html($.i18n.prop('Home'));
            $('#li-About').html($.i18n.prop('About'));
            // $('#li-Team').html($.i18n.prop('Team'));
            $('#li-Contact').html($.i18n.prop('Contact'));
            $('#li-Joinus').html($.i18n.prop('Joinus'));
            $('#li-Language-zh').html($.i18n.prop('Language-zh'));
            $('#li-Language-en').html($.i18n.prop('Language-en'));
            $('#li-Language-de').html($.i18n.prop('Language-de'));
            $('#joinus_main').html($.i18n.prop('joinus_main'));
            $('#index_intro1').html($.i18n.prop('index_intro1'));
            $('#index_intro2').html($.i18n.prop('index_intro2'));
            $('#index_intro3').html($.i18n.prop('index_intro3'));
            $('#index_whoweare').html($.i18n.prop('index_whoweare'));
            $('#index_news').html($.i18n.prop('index_news'));
            $('#index_joinus').html($.i18n.prop('index_joinus'));
            $('#index_discover').html($.i18n.prop('index_discover'));
            $('#index_know').html($.i18n.prop('index_know'));
            $('#index_whatyouown').html($.i18n.prop('index_whatyouown'));
            $('#index_vc').html($.i18n.prop('index_vc'));
            $('#index_ma').html($.i18n.prop('index_ma'));
            $('#index_fintech').html($.i18n.prop('index_fintech'));
            $('#index_invest').html($.i18n.prop('index_invest'));
            $('#joinus_sendcv').html($.i18n.prop('joinus_sendcv'));
            $('#joinus_areyouthe').html($.i18n.prop('joinus_areyouthe'));
            $('#joinus_one').html($.i18n.prop('joinus_one'));
            $('#joinus_lookingfor').html($.i18n.prop('joinus_lookingfor'));
            $('#joinus_areyouthe_s').html($.i18n.prop('joinus_areyouthe'));
            $('#joinus_one_s').html($.i18n.prop('joinus_one'));
            $('#joinus_lookingfor_s').html($.i18n.prop('joinus_lookingfor'));
            $('#team_about').html($.i18n.prop('team_about'));
            $('#team_kevin').html($.i18n.prop('team_kevin'));
            $('#team_jeff').html($.i18n.prop('team_jeff'));
            $('#team_leo').html($.i18n.prop('team_leo'));
            $('#team_angela').html($.i18n.prop('team_angela'));
            $('#team_ceo').html($.i18n.prop('team_ceo'));
            $('#team_cio').html($.i18n.prop('team_cio'));
            $('#team_coo').html($.i18n.prop('team_coo'));
            $('#team_ed').html($.i18n.prop('team_ed'));
            $('#contact_contact').text($.i18n.prop('contact_contact'));
            $('#contact_us').html($.i18n.prop('contact_us'));
            $('#contact_intro').html($.i18n.prop('contact_intro'));
            $('#contact_form').html($.i18n.prop('contact_form'));
            $('#contact_name').text($.i18n.prop('contact_name'));
            $('#contact_email').text($.i18n.prop('contact_email'));
            $('#contact_sub').text($.i18n.prop('contact_sub'));
            $('#contact_mes').text($.i18n.prop('contact_mes'));
            $('#contact_send').html($.i18n.prop('contact_send'));
            $('#contact_loc').html($.i18n.prop('contact_loc'));
            $('#contact_detail').html($.i18n.prop('contact_detail'));
            $('#about_about').html($.i18n.prop('about_about'));
            $('#about_list_1').html($.i18n.prop('about_list_1'));
            $('#about_list_2').html($.i18n.prop('about_list_2'));
        }
    });
};

function selectZH() {
    loadProperties(LANGUAGE_ZH);
    $.cookie(LANGUAGE_KEY, LANGUAGE_ZH);
    console.log($.cookie(LANGUAGE_KEY));
    $('#li-Language').html($.i18n.prop('Language'));
}

function selectEN() {
    loadProperties(LANGUAGE_EN);
    $.cookie(LANGUAGE_KEY, LANGUAGE_EN);
    console.log($.cookie(LANGUAGE_KEY));
    $('#li-Language').html($.i18n.prop('Language'));
}

function selectDE() {
    loadProperties(LANGUAGE_DE);
    $.cookie(LANGUAGE_KEY, LANGUAGE_DE);
    console.log($.cookie(LANGUAGE_KEY));
    $('#li-Language').html($.i18n.prop('Language'));
}

$(document).ready(function () {
    console.log("document ready : " + $.cookie(LANGUAGE_KEY));
    if ($.cookie(LANGUAGE_KEY) == LANGUAGE_EN 
        || $.cookie(LANGUAGE_KEY) == LANGUAGE_ZH
        || $.cookie(LANGUAGE_KEY) == LANGUAGE_DE) {
        loadProperties($.cookie(LANGUAGE_KEY));
    } else {
        LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({}); 
        loadProperties(LANGUAGE_CODE);
    }
    $('#li-Language').html($.i18n.prop('Language'));
})

$('li.dropdown').mouseover(function () {
    $(this).addClass('open');
}).mouseout(function () { $(this).removeClass('open'); }); 