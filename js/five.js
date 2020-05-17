
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function () {
//     $('.navbar-toggle:visible').click();
// });

// function selectLanguageList() {
//     $(".dropdown-toggle").dropdown('toggle');
// }



$(".headerpage").load("publicpage/navtitle.html");
$(".footerpage").load("publicpage/footer.html");

// var post = document.querySelector("link[rel = 'import']").import;
// var con = post.querySelector("div");
// document.querySelector("#nav1").appendChild(con.cloneNode(true));

// var con = post.querySelector("div");
// document.querySelector("#content1").appendChild(con.cloneNode(true));

// var clone = document.importNode(con,true)
// document.querySelector("#content1").appendChild(clone)
