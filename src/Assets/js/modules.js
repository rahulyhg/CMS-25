/*
 * --------------------------------------------------------------------------
 * Links
 * --------------------------------------------------------------------------
*/

if ($('#External').is(':checked')) {
    $('#External_url').parent().show();
    $('#Page_id').parent().hide();
} else {
    $('#External_url').parent().hide();
    $('#Page_id').parent().show();
}

$(window).ready(function(){
    $('#External').bind('click', function() {
        if ($(this).is(':checked')) {
            $('#External_url').parent().show();
            $('#Page_id').parent().hide();
        } else {
            $('#External_url').parent().hide();
            $('#Page_id').parent().show();
        }
    });
});

/*
 * --------------------------------------------------------------------------
 * Files
 * --------------------------------------------------------------------------
*/

$(function(){

    $('#saveFilesBtn').click(function(e){
        e.preventDefault();
        Dropzone.forElement('.dropzone').processQueue();
    });

});

function confirmDelete (url) {
    $('#deleteBtn').attr('href', url);
    $('#deleteModal').modal('toggle');
}

/*
 * --------------------------------------------------------------------------
 * Images
 * --------------------------------------------------------------------------
*/

$(function(){

    $('#saveImagesBtn').click(function(e){
        e.preventDefault();
        Dropzone.forElement('.dropzone').processQueue();
    });

});

/*
 * --------------------------------------------------------------------------
 * Previews
 * --------------------------------------------------------------------------
*/

$('.preview-toggle').bind('click', function () {
    if ($(this).attr('data-platform') == 'desktop') {
        $('#frame').css({
            width: '150%'
        });
    }
    if ($(this).attr('data-platform') == 'mobile') {
        $('#frame').css({
            width: '320px'
        });
    }
});

$('#frame').load(function () {
    var frameBody = $('#frame').contents().find('body');
    $('a', frameBody).click(function(e){
        e.preventDefault();
    });
});
