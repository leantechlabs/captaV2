const flag= 'Test'
const Api= 'http://localhost:3001' //testAPi
if (flag=='Dev'){
    const Api= 'https://ap-south-1.console.aws.amazon.com/codesuite/codepipeline/pipeline/' //Production APi
}
const ApiUrls= {
    //add all api urls here
    'login':Api+'/login',
    'addUser':Api+'/User/addUser',
}

export default ApiUrls;