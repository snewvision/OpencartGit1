import { test, expect } from "../../src/fixture/fixture"
import loginData from  "../../src/testdata/addtocart.json"

test("Add to cart", async ({ page ,appAction}) => 
{
  await page.goto(loginData.baseURL)
  await appAction.addtocart.searchProduct(loginData.SearchProduct)
});

test("Search product2 and apply filters", async ({ page ,appAction}) =>{
  await page.goto(loginData.baseURL)
  await appAction.addtocart.searchProduct2(loginData.SearchProduct2);
});

