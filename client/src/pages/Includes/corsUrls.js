const flag= 'Test'
var Api= 'http://localhost:3001' //testAPi
if (flag==='Dev'){
    //const Api= 'https://ap-south-1.console.aws.amazon.com/codesuite/codepipeline/pipeline/' //Production APi
     Api= 'https://capta-server.vercel.app'
}
const ApiUrls= {
    //add all api urls her
    'login':Api+'/auth/login',
    'logout':Api+'/auth/logout',
    'register':Api+'/register',
    'addUser':Api+'/user/add',
    'ManageUser':Api+'/user/manage',
    'EditUser':Api+'/user/edit',
    'AddInstitution':Api+'/college/add',
    'ManageInstitution':Api+'/college/manage',
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