import { test, expect } from "../../src/fixture/fixture"
import loginData from  "../../src/testdata/addtocart.json"
test("Add to cart", async ({ page ,appActions}) => {

  await page.goto(loginData.baseURL)
  await appActions.addtocart.searchProduct(loginData.SearchProduct)

 


});

