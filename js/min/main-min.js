$(document).ready(function(){var a=function(a){var s=a.data("scroll"),e=$(".section."+s);$("html, body").animate({scrollTop:$(e).offset().top},500)};$("a.tab-down").click(function(){a($(this))}),$(".fixed-tabs a").click(function(){a($(this))}),$("section.section").bind("inview",function(a,s,e,i){var t=$(this);s&&("top"===i?(t.hasClass("design")&&$(".fixed-tabs a.design").removeClass("active"),t.hasClass("music")&&$(".fixed-tabs a.music").removeClass("active"),t.hasClass("create")&&$(".fixed-tabs a.create").removeClass("active")):"bottom"===i?(t.hasClass("design")&&$(".fixed-tabs a.design").addClass("active"),t.hasClass("music")&&$(".fixed-tabs a.music").addClass("active"),t.hasClass("create")&&$(".fixed-tabs a.create").addClass("active")):(t.hasClass("banner")&&($(".fixed-tabs a.design").removeClass("active"),$(".fixed-tabs a.music").removeClass("active"),$(".fixed-tabs a.create").removeClass("active")),t.hasClass("design")&&($(".fixed-tabs a.music").removeClass("active"),$(".fixed-tabs a.create").removeClass("active")),t.hasClass("music")&&$(".fixed-tabs a.create").removeClass("active")))})});