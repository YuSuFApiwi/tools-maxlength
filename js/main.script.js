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
    $(".cls-clear").on("click", function(){
        window.localStorage.clear();
        $(title).val("");
        $(short).val("");
        $(description).val("");
    });
    $('[maxlength]').maxlength({
        alwaysShow: true,
        threshold: 10,
        warningClass: "badge rounded-pill bg-success",
        limitReachedClass: "badge rounded-pill bg-danger",
        placement: 'bottom',
        message: 'Used %charsTyped% of %charsTotal% Chars.'
    });

    $(".download").on("click", function(){
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
        var a = document.createElement("a");
        var data = `##Title##\n${$(title).val()}\n\n##Short##\n${$(short).val()}\n\n##Description##\n${$(description).val()}`;
        var fileName = `{$(title).val()}`;
        var json = JSON.stringify(data),
            blob = new Blob([data], {type: "text/plain;charset=utf-8"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
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
