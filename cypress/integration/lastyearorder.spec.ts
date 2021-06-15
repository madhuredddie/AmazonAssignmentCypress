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


    it('tracking past years orders',()=>{
        robotHands.clickOnDomElement('#nav-orders > .nav-line-2')
        robotHands.clickOnDomElement('#a-autoid-1-announce')
        //robotHands.typeTextonId('orderFilter_0','{downarrow}{downarrow}{downarrow}{enter}')
        //robotHands.typeTextonClass('.a-icon a-icon-dropdown','{downarrow}{downarrow}{downarrow}{enter}')
        robotHands.clickOnDomElement('#orderFilter_3')
    })

  })
})
