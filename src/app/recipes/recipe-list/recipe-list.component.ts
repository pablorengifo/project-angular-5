import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simply test', 
    'https://images.food52.com/uskcNPt1UWi6IrxFVa66FC_IvgE=/753x502/71827747-aa62-4589-b238-2b9e76c29b5b--081709F_0449.JPG' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
