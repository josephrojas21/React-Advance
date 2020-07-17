import {Request, Response} from 'express'

class IndexController {

    public index (req: Request, res: Response){
        res.render('index',{ title: 'welcome to the jungle'});
    }

}

export  const indexController = new IndexController();


