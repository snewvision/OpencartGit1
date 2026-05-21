import { test as base, expect } from "@playwright/test";
import { registerAction } from "../action/registerAction";
import testdata from "../testdata/register.json";
import { Addtocart } from "../page/addtocartPage";
import { CartAction } from "../action/addtocartAction";
import { faker } from "@faker-js/faker";
import { RegisterDetails } from '../action/registerAction';


import { loginAction } from "../action/loginAction";

type appActions = {
    register: registerAction;
    addtocart: CartAction;
    
    login: loginAction;
}

type Fixtures = {
    appActions : appActions;
    randomUser:RegisterDetails
}

export const test = base.extend<Fixtures>({
    appActions: async ({page}, use) => {
        const appActions: appActions = {
            register : new registerAction(page),
            addtocart: new CartAction(new Addtocart(page))
            
        }
        await use(appActions);
    },
    randomUser: async ({}, use) => {
         const password = faker.internet.password({ length: 10 });
    await use({
             FirstName: faker.person.firstName(),
    LastName: faker.person.lastName(),
    EMail: faker.internet.email(),
    TelePhone: faker.phone.number(),
    Password: password,
    ConfirmPassword: password

    });
  },


})

export{expect};