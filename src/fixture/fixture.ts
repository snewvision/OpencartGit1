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
    appAction : appActions;
    randomUser:RegisterDetails
}

export const test = base.extend<Fixtures>({
    appAction: async ({page}, use) => {
        const appAction: appActions = {
            register : new registerAction(page),
            login: new loginAction(page),
            addtocart: new CartAction(new Addtocart(page))
        }
        await use(appAction);
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