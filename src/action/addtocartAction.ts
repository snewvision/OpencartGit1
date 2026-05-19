import { expect } from "playwright/test";
import { Addtocart } from "../page/addtocartPage";
export class CartAction{
    constructor(private  readonly addtocartpage:Addtocart){}

    async searchProduct(product:string){
        await this.addtocartpage.searchbox.fill(product)
        await this.addtocartpage.searchicon.click()
        expect(this.addtocartpage.Mobiletext).toBeVisible()
        await this.addtocartpage.Mobileimage.click()
        await this.addtocartpage.Addtocart.click();
         expect(this.addtocartpage.succesmsg).toBeVisible()
        
       // await this.addtocartpage.checkoutlink.click()


    }
}