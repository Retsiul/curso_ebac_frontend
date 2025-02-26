$(document).ready(function () {

    $('#button').prop("disabled", true)
    // ------------------------------------------------------
    $('button').click(function (e) {
        e.preventDefault()

    })
    // ------------------------------------------------------
    $("button").click(function () {

        const novoItem = $('#dados').val() /*valor do input*/

        const novaTarefa = $(`<li class="li" style="list-style:inside;"><a href="">${novoItem}</a></li>`)

        $('.item-box').append(novaTarefa)

        $('#dados').val('')

        $('#button').prop("disabled", true)
        // -----------------------------------------------------------------------
        $("a").click(function (e) {

            e.preventDefault()

            $(document).on("click", ".li", function () {
                $(this).css("text-decoration", "line-through");

            });
        })
    })

})
// ---------------------------------------------------------------------------------
$("input").keyup(function () {
    const botao = $(this).val()
    if (botao === '') {
        $('#button').prop("disabled", true)
    }
    else {
        $('#button').prop("disabled", false)
    }

})


