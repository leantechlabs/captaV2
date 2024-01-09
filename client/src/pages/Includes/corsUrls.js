const flag= 'Dev'
var Api= 'http://localhost:3001' //testAPi
if (flag==='Dev'){
    //const Api= 'https://ap-south-1.console.aws.amazon.com/codesuite/codepipeline/pipeline/' //Production APi
     Api= 'http://api.coignite.in'
}
const ApiUrls= {
    'api':Api,
    //add all api urls her
    'login':Api+'/auth/login',
    'logout':Api+'/auth/logout',
    'register':Api+'/register',
    'addUser':Api+'/user/add',
    'deleteUser':Api+'/user/delete',
    'ManageUser':Api+'/user/manage',
    'EditUser':Api+'/user/edit',
    'UpdateUser':Api+'/user/update',
    'AddInstitution':Api+'/college/add',
    'ManageInstitution':Api+'/college/manage',
    'EditInstitution':Api+'/college/edit',
    'UpdateInstitution':Api+'/college/update',
    'MouCreate':Api+'/mou/create',
    'MouConfirm':Api+'/mou/confirm',
    'MouManage':Api+'/mou/manage',
    'ModuleCreate':Api+'/mou/create',
    'ModuleConfirmation':Api +'/module/confirmation/create',
    'ModuleManage': Api + '/module/confirmation/manage',
    'ModuleStatus' : Api + '/module/status',
    'createCurriculum' : Api + '/curriculum/create',
    'system' : Api + '/permision/settings/system',

    'ManageCurriculum' : Api + '/curriculum/manage',
    'fetchCurriculumNames' : Api + '/curriculum/names',
    'createModuleCurriculum' : Api + '/module/create',
    'ManageModuleCurriculum' : Api + '/module/manage',
    'createBatch' : Api + '/batch/create',
    'fetchModuleIDs' : Api  + '/module/ids',
    'manageBatch' : Api + '/batch/manage',
    'batchNames' : Api + '/batch/names',
    'moduleNames' : Api + '/module/names',
    'allocateBatch' : Api + '/batch/allocate',
    //Abc$ada
}

export default ApiUrls;