$(document).ready(function() {
    $('.js-example-basic-multiple').select2({
        placeholder: 'Seleccione una o varias opciones'
    });
});

$(document).ready(function() {
    $('.combo-login').select2({
        width: "resolve"
    })
})

$(document).ready(function() {
    $('.js-example-basic-single').select2({
        placeholder: 'Seleccione una opción'
    });
});

$(document).ready(function() {
    $('.js-example-basic-multiple-user').select2({
        placeholder: 'Seleccione una o varias opciones'
    });
});

    var txtPres = document.getElementById('userResume');
    var edit = document.getElementById('btnEdit');
    var cancel = document.getElementById('btnCancel');
    var save = document.getElementById('btnSave')

function editPre(){
    save.removeAttribute('hidden', 'hidden')
    cancel.removeAttribute('hidden', 'hidden')
    txtPres.removeAttribute('disabled', 'disabled')
}

function cancelPre(){
    save.setAttribute('hidden', 'hidden')
    cancel.setAttribute('hidden', 'hidden')
    txtPres.setAttribute('disabled', 'disabled')
}