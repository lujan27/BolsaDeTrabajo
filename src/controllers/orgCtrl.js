const orgCtrl = {}

orgCtrl.getOrgHome = async (req, res) => {
    res.render('organization/orgHome', {
        doc_title: 'Organizacion'
    });
}

module.exports = orgCtrl;