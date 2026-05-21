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

    async searchProduct2(SearchProduct2: string)
    {
        // search a new product and apply filters (product name: mac book)
        await this.addtocartpage.searchbox.fill(SearchProduct2)
        await this.addtocartpage.searchicon.click()
        await expect(this.addtocartpage.macbookText).toBeVisible();
        await this.addtocartpage.defaultDropDown.selectOption('Price (Low > High)');
        await this.addtocartpage.showDropDown.selectOption('50');

        await expect(this.addtocartpage.defaultDropDown).toBeVisible();
        await expect(this.addtocartpage.showDropDown).toBeVisible();

        // Product details and verify product code and availability of the product
        await this.addtocartpage.clickOnMacbook.click();
        await expect(this.addtocartpage.productCodeVisibility).toBeVisible();
        await expect(this.addtocartpage.productAvailabilty).toBeVisible();


    }
}