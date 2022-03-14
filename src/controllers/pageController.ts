import { Request , Response } from 'express';

// rota home
export const home = (req:Request , res:Response) =>{
    res.send('Home no controller');
    // send.render('pages/page');
};

//rota de cahorros
export const dogs = (req:Request , res:Response) =>{
    // send.render('pages/page');
};

//rota de gatos
export const cats = (req:Request , res:Response) =>{
    // send.render('pages/page');
};

//rota de peixes
export const fishes = (req:Request , res:Response) =>{
    // send.render('pages/page');
};