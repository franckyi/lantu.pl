import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clove',
  templateUrl: './clove.component.html',
  styleUrls: ['./clove.component.scss']
})
export class CloveComponent implements OnInit {

  products = [
    {
      name: "Clove Lorem ipsum 200g",
      desc: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands in Indonesia, and are commonly used as a spice, flavoring, or fragrance in consumer products, such as toothpaste, soaps, or cosmetics.",
      src: "assets/img/products/clove/clove-prod.png",
      price: 95,
      weight: 55,
      cat: "clove",
    },
    {
      name: "Clove Lorem ipsum 400g",
      desc: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands in Indonesia, and are commonly used as a spice, flavoring, or fragrance in consumer products, such as toothpaste, soaps, or cosmetics.",
      src: "assets/img/products/clove/clove-prod.png",
      price: 157,
      weight: 70,
      cat: "clove",
    },
    {
      name: "Clove Lorem ipsum 800g",
      desc: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands in Indonesia, and are commonly used as a spice, flavoring, or fragrance in consumer products, such as toothpaste, soaps, or cosmetics.",
      src: "assets/img/products/clove/clove-prod.png",
      price: 1135,
      weight: 2113,
      cat: "clove",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
