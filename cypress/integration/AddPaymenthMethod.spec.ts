import { Dependencies,RobotEyes,RobotHands} from '../robot/AmazonRobot/AmazonRobot'
//import { classicNameResolver } from 'typescript';

context("Checking functionalities",()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();


describe("Testing HappyPath",()=>{
    beforeEach(()=>{
        dependencies.accessUrl("https://www.amazon.in/")
        robotHands.clickOnDomElement('#nav-link-accountList-nav-line-1')
        dependencies.login();

    })

    it('Adding paymentMethod',()=>{
        robotHands.clickOnDomElement('#nav-link-accountList-nav-line-1')
        robotHands.clickOnDomElement(':nth-child(3) > :nth-child(2) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row > .a-span9 > .a-spacing-none')
       // robotHands.clickOnDomElement('#apx-add-credit-card-action-test-id')
        //cy.get("@popup").should("be.called")
        //robotHands.typeTextonDom('name','addCreditCardNumber','5103720491729032')
        //<span class="a-size-base pmts-instrument-display-name">HDFC Bank Debit Card</span>
        robotEyes.seesDomContainText('.a-expander-container > .a-expander-header > .a-expander-prompt > .a-fixed-left-grid > .a-fixed-left-grid-inner > .a-fixed-left-grid-col.a-col-right > .a-fixed-right-grid > .a-fixed-right-grid-inner > .a-col-left > .pmts-instrument-display-name','HDFC Bank Debit Card')
    })
  })
})