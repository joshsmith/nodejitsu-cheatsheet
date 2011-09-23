$(function() {
    $.get("json/cheatsheet.json", null, function(cheatsheet) {
        cheatsheet.forEach(function(pair) {
            $('<tr>').append(
                $('<td>').html(pair[0])
            ).append(
                $('<td>').html(pair[1])
            ).appendTo($('#cheatsheet'));
        });
    }, "json");
});
