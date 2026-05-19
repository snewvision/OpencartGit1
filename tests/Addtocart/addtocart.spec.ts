import { test, expect } from "../../src/fixture/fixture"
import loginData from  "../../src/testdata/addtocart.json"
test("Add to cart", async ({ page ,appaction}) => {

  await page.goto(loginData.baseURL)
  await appaction.addtocart.searchProduct(loginData.SearchProduct)

 


});

