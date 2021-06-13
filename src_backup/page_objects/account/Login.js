import CredentialForm from "./CredentialForm"

const LOGIN_BTN='~button-LOGIN'

class Login extends CredentialForm {

    get login_btn(){
        $(LOGIN_BTN).waitForDisplayed({timeout:5000})
        return $(LOGIN_BTN)
    }
}

//Export an instance NOT a class
export default new Login()