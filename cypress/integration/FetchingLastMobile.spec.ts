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

    it('login and checking deals',()=>{
        robotEyes.seesDomVisible('#twotabsearchtextbox')
       
        
     })

    it('search for mobiles',()=>{
        robotHands.CheckIdElementIsTyped('twotabsearchtextbox','Mobiles')
        robotHands.clickOnDomElement('#nav-search-submit-button');
        robotHands.clickOnDomElement('[data-index="22"] > :nth-child(1) > .celwidget > [data-component-type="s-impression-logger"] > div.rush-component > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > .sg-col-8-of-16 > :nth-child(1) > :nth-child(1) > .a-size-mini > .a-link-normal > .a-size-medium')
    })

   })
})