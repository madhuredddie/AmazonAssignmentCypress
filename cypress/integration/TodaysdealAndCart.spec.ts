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
        dependencies.login()

    })

    // geting todyas delas and selecting 3rd deal from it
    it("today'sdeal",()=>{
        robotHands.clickonDomElementWithLocator('data-csa-c-slot-id','nav_cs_8')
        robotHands.clickOnDomElement(':nth-child(3) > .DealItem-module__dealItemContent_SGFPcLDYb5e-vSMK5SDH > [data-testid=deal-card] > :nth-child(1) > .a-link-normal > .a-image-container')
        //electing item and adding it to to the cart
        robotHands.clickOnDomElement('[data-asin="B08YRNPTM2"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > .rush-component > .a-link-normal > .a-section > .s-image') 
        dependencies.accessUrl('https://www.amazon.in/Essential-NE14A2INC43A-MB-Celeron-N4020-Integrated-Graphics/dp/B08YRNPTM2/ref=sr_1_1?dchild=1&m=A14CZOWI0VEHLG&qid=1623752798&refinements=p_6%3AA14CZOWI0VEHLG&sr=8-1')  
        robotHands.clickOnDomElement('#add-to-cart-button')

        //checking whether product is added to cart
    
        
        robotHands.clickOnDomElement('#hlb-view-cart-announce')
        robotEyes.seesDomContainText('.a-dropdown-prompt','1')


    })
})
})