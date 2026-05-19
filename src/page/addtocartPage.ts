import {Locator,Page} from "@playwright/test";
export class Addtocart{
    readonly page:Page
    readonly searchbox:Locator
    readonly searchicon:Locator
    readonly Mobiletext:Locator
    readonly Mobileimage:Locator
    readonly Addtocart:Locator
    readonly succesmsg:Locator
    readonly Addtocart:Locator
    readonly checkoutlink:Locator

    constructor(page:Page){
        this.page=page
        this.searchbox=page.getByPlaceholder("Search")
        this.searchicon=page.locator("//button[@class='btn btn-default btn-lg']")
        this.Mobiletext=page.locator("//a[text()='iPhone']")
        this.Mobileimage=page.getByTitle("iPhone")
        this.Addtocart=page.getByRole('button',{name:'Add to Cart'})
        this.succesmsg=page.locator("//div[text()='Success: You have added ']")
        this.Addtocart=page.locator("//button[@id='button-cart']")
        this.checkoutlink=page.locator("//strong[text()=' Checkout']")

    }


}