import { test, expect } from "../../src/fixture/fixture"
import loginData from  "../../src/testdata/addtocart.json"

test("Add to cart", async ({ page ,appActions}) => 
{
  await page.goto(loginData.baseURL)
  await appActions.addtocart.searchProduct(loginData.SearchProduct)
});

test.only("Search product2 and apply filters", async ({ page ,appActions}) =>{
  await page.goto(loginData.baseURL)
  await appActions.addtocart.searchProduct2(loginData.SearchProduct2);
});

