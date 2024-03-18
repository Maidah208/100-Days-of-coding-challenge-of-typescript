let current_users:string[] = ['Adrian','Lia','Jhon','henry','alex'];
let new_users:string[] = ['karen','adrian', 'Alexander','JHON','jerry'];
let lower_case_new_users = [''];
for (let new_user of new_users){
    new_user.toLowerCase();
    lower_case_new_users.push(new_user)
}
for (let current_user of current_users){
    let lower_case_current_user = current_user.toLowerCase();
    if (lower_case_new_users.indexOf(lower_case_current_user) !== -1){
        console.log('Username ' + current_user + ' is  not available');
    }else{
        console.log('Username ' + current_user + ' is  available');
    }
}