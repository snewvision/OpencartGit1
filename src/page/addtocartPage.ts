import {Locator,Page} from "@playwright/test";
export class Addtocart{
    readonly page:Page
    readonly searchbox:Locator
    readonly searchicon:Locator
    readonly Mobiletext:Locator
    readonly Mobileimage:Locator
    readonly Addtocart:Locator
    readonly succesmsg:Locator
    readonly Addtocart1:Locator
    readonly checkoutlink:Locator

    //search product2
    readonly macbookText: Locator;
    readonly defaultDropDown: Locator;
    readonly showDropDown: Locator;
    readonly clickOnMacbook: Locator;
    readonly productCodeVisibility: Locator;
    readonly productAvailabilty: Locator;

    constructor(page:Page){
        this.page=page
        this.searchbox=page.getByPlaceholder("Search")
        this.searchicon=page.locator("//button[@class='btn btn-default btn-lg']")
        this.Mobiletext=page.locator("//a[text()='iPhone']")
        this.Mobileimage=page.getByTitle("iPhone")
        this.Addtocart=page.getByRole('button',{name:'Add to Cart'})
        this.succesmsg=page.locator('//div[@class="alert alert-success alert-dismissible"]')//Locator updated 
        this.Addtocart1=page.locator("//button[@id='button-cart']")
        this.checkoutlink=page.locator("//strong[text()=' Checkout']")

        //search product2
        this.macbookText = page.locator('//a[text() = "MacBook"]//ancestor::div[@class="product-thumb"]')
        this.defaultDropDown = page.locator('//select[@id="input-sort"]');
        this.showDropDown = page.locator('//select[@id="input-limit"]');
        this.clickOnMacbook = page.locator('//a[contains(text() , "MacBook Air")]');
        this.productCodeVisibility = page.locator('//ul[@class="list-unstyled"]/following::li[contains(text() , "Product Code:Product 17")]');
        this.productAvailabilty = page.locator('//ul[@class="list-unstyled"]/following::li[contains(text() , "Availability:Out Of Stock")]');

   
    }


}