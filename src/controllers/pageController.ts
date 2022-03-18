import { Request , Response } from 'express';
import {pet} from '../models/pet'
import {createMenuObject} from '../helpers/createMenuObject'



let list = pet.getall();

// rota home
export const home = (req:Request , res:Response) =>{
    res.render('pages/page',{
        menu:createMenuObject('all'),
        banner:{
            title: 'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    });
};


//rota de cahorros
export const dogs = (req:Request , res:Response) =>{
    let list = pet.getFromType('dog');
    res.render('pages/page',{
        menu:createMenuObject('dog'),
        banner:{
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    });
};

//rota de gatos
export const cats = (req:Request , res:Response) =>{
    let list = pet.getFromType('cat');
    res.render('pages/page',{
        menu:createMenuObject('cat'),
        banner:{
            title: 'Gatos',
            background:'banner_cat.jpg'
        },
        list
    });
};

//rota de peixes
export const fishes = (req:Request , res:Response) =>{
    let list = pet.getFromType('fish');
    res.render('pages/page',{
        menu:createMenuObject('fish'),
        banner:{
            title: 'Peixes',
            background:'banner_fish.jpg'
        },list
    });
};