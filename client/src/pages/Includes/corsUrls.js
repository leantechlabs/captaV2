const flag= 'Test'
const Api= 'http://localhost:3001' //testAPi
if (flag=='Dev'){
    const Api= 'https://ap-south-1.console.aws.amazon.com/codesuite/codepipeline/pipeline/' //Production APi
}
const ApiUrls= {
    //add all api urls here
    'login':Api+'/login',
    'addUser':Api+'/user/add',
    'ManageUser':Api+'/user/manage',
    'AddInstitution':Api+'/college/add',
    'ManageInstitution':Api+'/college/manage',
    'MouCreate':Api+'/mou/create',
    'MouConfirm':Api+'/mou/confirm',
    'MouManage':Api+'/mou/manage',
    'ModuleCreate':Api+'/mou/create',
    'ModuleConfirmation':Api +'/module/confirmation/create',
    'ModuleManage': Api + '/module/confirmation/manage',
    'ModuleStatus' : Api + '/module/status',
    //session
    'SessionAttendance':Api+'session/attendance'
}

export default ApiUrls;