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

    it('left Navigation',()=>{
        robotHands.clickOnDomElement('.hm-icon-label')
        robotHands.clickOnDomElement('.hmenu-visible > :nth-child(15) > .hmenu-item')
        robotHands.ClickByContains('All Mobile Phones')
        robotHands.clickOnDomElement('#nav-logo-sprites')
       
    })

    it('prime delivery',()=>{
        robotHands.clickOnDomElement('.hm-icon-label')
        robotHands.clickOnDomElement('.hmenu-visible > :nth-child(15) > .hmenu-item')
        robotHands.ClickByContains('All Mobile Phones')
        robotHands.clickOnDomElement(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon')
        //<div class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"><label><input type="checkbox" name="" value=""><i class="a-icon a-icon-checkbox"></i><span class="a-label a-checkbox-label"></span></label></div>
        //robotHands.clickOnDomElement('#p_90\/6741118031 > .a-list-item > .a-link-normal > .a-size-base')
        //robotHands.clickOnDomElement('a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left')
        robotHands.ClickByContains('Get It by Tomorrow')

    })
})
})