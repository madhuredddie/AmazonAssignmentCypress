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
    it("Adding address",()=>{
        robotHands.clickOnDomElement('#nav-link-accountList-nav-line-1')
        robotHands.clickOnDomElement(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row > .a-span9 > .a-spacing-none')
        robotHands.clickOnDomElement('#ya-myab-plus-address-icon')
        robotHands.typeTextonId('address-ui-widgets-enterAddressFullName','Madhu sudhan reddy Ganta')
        robotHands.typeTextonId("address-ui-widgets-enterAddressPhoneNumber","9618597870")
        robotHands.typeTextonId('address-ui-widgets-enterAddressPostalCode','509209')
        robotHands.typeTextonId('address-ui-widgets-enterAddressLine1','H.no 4-91')
        robotHands.typeTextonId('address-ui-widgets-enterAddressLine2','Teachers colony,chaitanyapuri')
        robotHands.typeTextonId('address-ui-widgets-landmark','near maxmall')
        robotHands.typeTextonId('address-ui-widgets-enterAddressCity','Hyderabad')
        robotHands.clickOnDomElement("#address-ui-widgets-enterAddressStateOrRegion > .a-button-inner > .a-button-text")
        robotHands.clickOnDomElement('#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId_31')
        robotHands.clickOnDomElement('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text')
        robotHands.clickOnDomElement('#dropdown1_1')
        robotHands.clickOnDomElement('.a-button-input')





    })
  })
})