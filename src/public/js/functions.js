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
    var editPre = document.getElementById('btnEditPre');
    var cancelPre = document.getElementById('btnCancelPre');
    var savePre = document.getElementById('btnSavePre');

function editPresen(){
    savePre.removeAttribute('hidden', 'hidden')
    cancelPre.removeAttribute('hidden', 'hidden')
    txtPres.removeAttribute('disabled', 'disabled')
}

function cancelPresen(){
    savePre.setAttribute('hidden', 'hidden')
    cancelPre.setAttribute('hidden', 'hidden')
    txtPres.setAttribute('disabled', 'disabled')
}

    var editInfo = document.getElementById('btnEditInfo');
    var cancelInfo = document.getElementById('btnCancelInfo');
    var saveInfo = document.getElementById('btnSaveInfo');
    var selectInfo = document.getElementById('selectInfo');
    var birthInfo = document.getElementById('birthInfo');
    var inputBirth = document.getElementById('inputBirth');
    var formInfo = document.getElementsByClassName('editInfo');
    var length = formInfo.length;

function editInform(){
    saveInfo.removeAttribute('hidden', 'hidden')
    cancelInfo.removeAttribute('hidden', 'hidden')
    selectInfo.removeAttribute('disabled', 'disabled')
    birthInfo.removeAttribute('hidden', 'hidden')
    inputBirth.setAttribute('hidden', 'hidden')
    for(let i = 0; i < length; i++){
        formInfo[i].removeAttribute('disabled', 'disabled')
    }
}

function cancelInform(){
    saveInfo.setAttribute('hidden', 'hidden')
    cancelInfo.setAttribute('hidden', 'hidden')
    selectInfo.setAttribute('disabled', 'disabled')
    birthInfo.setAttribute('hidden', 'hidden')
    inputBirth.removeAttribute('hidden', 'hidden')
    for(let j = 0; j < length; j++){
        formInfo[j].setAttribute('disabled', 'disabled')
    }
}