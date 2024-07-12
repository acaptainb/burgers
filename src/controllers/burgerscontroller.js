import { response } from "express";
import BaseController from "../utils/BaseController.js";
import { burgerService } from "../services/burgerService.js";


export class burgerscontroller extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)

    }


    async createBurger(req, res, next) {
        try {
            // console.log('dfs', req.body);
            const newburger = req.body
            const createburger = await burgerService.createBurgers(newburger)
            res.send(createburger)
        } catch (error) {
            next(error)
        }
    }


    async getBurgers(rep, res, next) {
        try {
            // res.send('burgers')
            const burgers = await burgerService.getBurgers()
            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

}