import { dbContext } from "../db/DbContext.js"

class BurgerService {
    async createBurgers(newburger) {
        console.log(newburger);
        const burger = await dbContext.Burgers.create(newburger)
        return burger
    }

    async getBurgers() {
        const burgers = await dbContext.Burgers.find()
        return burgers
    }

}

export const burgerService = new BurgerService()