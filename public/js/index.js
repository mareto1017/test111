const headerUserNameElemnet = document.querySelector('.user');
const userNameElement = document.querySelector('#name');

const userNumberElement = document.querySelector('#number');
const userEmailElement = document.querySelector('#email');

const localUserName = localStorage.getItem('userName');
const localUserNumber = localStorage.getItem('userNumber');
const localUserEmail = localStorage.getItem('userEmail');

const setUserNameInnerHtml = (name) => {

    headerUserNameElemnet.innerHTML = `${name} <span>님</span>`;
    userNameElement.textContent = name;
    //userNameElement.innerHTML = `<span id='name'>${name}</span> <span>님</span>`;

}

const setUserNumberInnerHtml = (number) => {

    userNumberElement.textContent = number;

}

const setUserEmailInnerHtml = (email) => {

    userEmailElement.textContent = email;

}


if(localUserName){
    setUserNameInnerHtml(localUserName);
}

if(localUserNumber){
    setUserNumberInnerHtml(localUserNumber);
}

if(localUserEmail){
    setUserEmailInnerHtml(localUserEmail);
}


userNameElement.onclick = () => {
    const userName =prompt('이름을 입력해주세요.');
    localStorage.setItem('userName', userName);
    setUserNameInnerHtml(userName);
    
}

userNumberElement.onclick = () => {
    
    userNumberChange();
}

userEmailElement.onclick = () => {
    
    userEmailChange();
    
}

function userNumberChange() {
    const userNumber =prompt('학번을 입력해주세요.');
    let check = 0;
    if(userNumber.length === 9){
       for(var i = 0; i < userNumber.length; i++){
            if(userNumber.charAt(i) < '0' || userNumber.charAt(i) > '9'){
                check = 1;
            }
        }
        if(check === 0){
            localStorage.setItem('userNumber', userNumber);
            setUserNumberInnerHtml(userNumber);
        }else{
            userNumberChange()
        }
    }else{
        userNumberChange();
    }
}

function userEmailChange() {
    const userEmail =prompt('이메일을 입력해주세요.');
    let check = 0;
    for(var i = 0; i < userEmail.length; i++){
        if(userEmail.charAt(i) == '@'){
            localStorage.setItem('userEmail', userEmail);
            setUserEmailInnerHtml(userEmail);
            check = 1;
        }
    }
    if(check === 0){
        userEmailChange();
    }
    
    
}


//유효성 검사, 학번은 9자리만 가능, 숫자만 가능
//이메일은 @필수