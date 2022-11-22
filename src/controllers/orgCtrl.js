const orgCtrl = {}
const vacantModel = require('../models/vacantModel');

orgCtrl.getOrgHome = async (req, res) => {
    const vacants = await vacantModel.aggregate([
        {
            '$match': {
                'createdby': req.user.username
            }
        }
    ])
    res.render('organization/orgHome', {
        doc_title: 'Organizacion',
        vacants
    });
}

module.exports = orgCtrl;