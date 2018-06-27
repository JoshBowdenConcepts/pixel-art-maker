// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Your code goes here!
    $('table').children().remove();
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();

    for (let i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr class="row"></tr>');
    }

    for (let q = 0; q < width; q++) {
        $('.row').append('<td></td>');
    }

    $(document).mousedown(function () {
            const color = $('#colorPicker').val();
            $("td").bind('mouseover', function () {
                $(this).css('background-color', color);
            });
        })
        .mouseup(function () {
            $("td").unbind('mouseover');
        });

    $("td").mousedown(function () {
        const color = $('#colorPicker').val();
        $(this).css('background-color', color);
    });

    $('tr:odd').each(function () {
        const oddTd = $(this).children().filter(':odd').css('background-color', 'rgba(0,0,0,0.2)');
    });
    $('tr:even').each(function () {
        const oddTd = $(this).children().filter(':even').css('background-color', 'rgba(0,0,0,0.2)');
    });
}

function readURL() {
    //const getImagePath = URL.createObjectURL(event.target.files[0]);
    //$('#pixelCanvas').css('background-image', 'url(' + getImagePath + ')');
  	makeGrid();
}

$("input[type='number']").change(function () {
    makeGrid();
});


$(document).ready(function () {
    $('#inputHeight').val(20);
    $('#inputWidth').val(20);
    makeGrid();
    setHexValue();
});

$('.collapse').click(function () {
    $('.tool-bar').slideToggle();
    //    $('#collapse-icon').toggleClass('fa-angle-up fa-angle-down');
});

function setHexValue() {
    $('#hex').val($('#colorPicker').val());
}

function setColorValue() {
    $('#colorPicker').val($('#hex').val());
}

$("input[type='color']").change(function () {
    setHexValue();
});

$("#hex").change(function () {
    setColorValue();
});
