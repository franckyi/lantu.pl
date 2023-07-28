import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinnamon',
  templateUrl: './cinnamon.component.html',
  styleUrls: ['./cinnamon.component.scss']
})
export class CinnamonComponent implements OnInit {

  products = [
    {
      name: "Cinnamon Lorem Ipsum 400g",
      desc: "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snack foods, bagels, teas, hot chocolate and traditional foods.",
      src: "assets/img/products/cinnamon/cinnamon-prod.png",
      price: 95,
      weight: 55,
      cat: "cinnamon",
    },
    {
      name: "Cinnamon Lorem Ipsum 800g",
      desc: "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snack foods, bagels, teas, hot chocolate and traditional foods.",
      src: "assets/img/products/cinnamon/cinnamon-prod.png",
      price: 157,
      weight: 70,
      cat: "cinnamon",
    },
    {
      name: "Cinnamon Lorem Ipsum 1500g",
      desc: "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snack foods, bagels, teas, hot chocolate and traditional foods.",
      src: "assets/img/products/cinnamon/cinnamon-prod.png",
      price: 1135,
      weight: 2113,
      cat: "cinnamon",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
