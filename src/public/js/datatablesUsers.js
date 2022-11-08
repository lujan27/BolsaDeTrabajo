$(document).ready( function () {
    $('#users').DataTable({
        dom: '<"top"f>rt<"bottom"p>',
        responsive: true,
        order: [[0, 'desc']],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
        }
    });
} );