export class LoginPage{

    //Adding the elements separately
    login_uname_tbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_pword_tbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    enterUserName(username){
        cy.get(this.login_uname_tbox).type(username);

    }

    enterPassword(password){
        cy.get(this.login_pword_tbox).type(password);
    
    }

    clickLogin(){
        cy.get(this.login_button).click()

    }
    

}