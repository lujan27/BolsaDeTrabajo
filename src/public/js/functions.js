$(document).ready(function() {
    $('.js-example-basic-multiple').select2({
        placeholder: 'Seleccione una o varias opciones'
    });
});

$(document).ready(function() {
    $('.combo-login').select2({
        width: "resolve"
    })
});

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

//Presentation Profile
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

//Information Profile
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

//Languages Profile

    var addLang = document.getElementById('btnAddLang');
    var saveLang = document.getElementById('btnSaveLang');
    var cancelLang = document.getElementById('btnCancelLang');
    var seleLang = document.getElementById('seleLang');
    var lblLevel = document.getElementById('lblLevel');
    var seleLevel = document.getElementById('seleLevel');
    var removeLang = document.getElementById('btnRemoveLang');
    var radioLang = document.getElementsByClassName('radioLang');
    var lengthRadio = radioLang.length;
    var lblLang = document.getElementById('lblLang');
    var lblRemoveLang = document.getElementById('lblRemoveLang');

    function languages(){
        addLang.setAttribute('hidden', 'hidden')
        seleLang.removeAttribute('disabled', 'disabled')
        seleLang.setAttribute('required', 'required')
        lblLevel.removeAttribute('hidden', 'hidden')
        seleLevel.removeAttribute('hidden', 'hidden')
        seleLevel.setAttribute('required', 'required')
        saveLang.removeAttribute('hidden', 'hidden')
        cancelLang.removeAttribute('hidden', 'hidden')
        removeLang.setAttribute('hidden', 'hidden')
        lblLang.removeAttribute('hidden', 'hidden')
    }

    function cancelLanguages(){
        seleLang.setAttribute('disabled', 'disabled')
        lblLevel.setAttribute('hidden', 'hidden')
        seleLevel.setAttribute('hidden', 'hidden')
        seleLang.removeAttribute('required', 'required')
        seleLevel.removeAttribute('required', 'required')
        saveLang.setAttribute('hidden', 'hidden')
        cancelLang.setAttribute('hidden', 'hidden')
        removeLang.removeAttribute('hidden', 'hidden')
        addLang.removeAttribute('hidden', 'hidden')
        lblLang.setAttribute('hidden', 'hidden')
        lblRemoveLang.setAttribute('hidden', 'hidden')
        for(let k = 0; k<lengthRadio; k++){
            radioLang[k].setAttribute('disabled', 'disabled')
            radioLang[k].setAttribute('hidden', 'hidden')
            radioLang[k].removeAttribute('required', 'required')
        }
    }

    function removeLanguages(){
        lblRemoveLang.removeAttribute('hidden', 'hidden')
        removeLang.setAttribute('hidden', 'hidden')
        addLang.setAttribute('hidden', 'hidden')
        cancelLang.removeAttribute('hidden', 'hidden')
        saveLang.removeAttribute('hidden', 'hidden')
        for(let l = 0; l<lengthRadio; l++){
            radioLang[l].removeAttribute('disabled', 'disabled')
            radioLang[l].removeAttribute('hidden', 'hidden')
            radioLang[l].setAttribute('required', 'required')
        }
    }