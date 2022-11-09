jQuery(function() {
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