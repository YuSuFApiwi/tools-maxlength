var title = $("#title");
var short = $("#short");
var description = $("#description");
addEventListener("load", function () {
    var val_title = window.localStorage.getItem("title");
    var val_short = window.localStorage.getItem("short");
    var val_description = window.localStorage.getItem("description");
    $(title).val(val_title);
    $(short).val(val_short);
    $(description).val(val_description);
});
jQuery(function() {
    "use strict";
    $(title).on("keyup", function(){
        window.localStorage.setItem("title", $(this).val());
    });
    $(short).on("keyup", function(){
        window.localStorage.setItem("short", $(this).val());
    });
    $(description).on("keyup", function(){
        window.localStorage.setItem("description", $(this).val());
    });
    $('[maxlength]').maxlength({
        alwaysShow: true,
        threshold: 10,
        warningClass: "badge rounded-pill bg-success",
        limitReachedClass: "badge rounded-pill bg-danger",
        placement: 'bottom',
        message: 'Used %charsTyped% of %charsTotal% Chars.'
    });
    
    $(".cls-copy").on("click", function(){
        var copy = $(this).parent("label").attr("for");
        $(`#${copy}`).focus();
        $(`#${copy}`).select();
        try {
            let successful = document.execCommand('copy');
        } catch(err) {
            alert('Unable to copy');
        }
    });
});