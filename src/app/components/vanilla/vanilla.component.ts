import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanilla',
  templateUrl: './vanilla.component.html',
  styleUrls: ['./vanilla.component.scss']
})
export class VanillaComponent implements OnInit {
  products = [
    {
      name: "10 x Gousses de Vanille Noire Gourmet 14-16 cm",
      desc: "12 High Quality Madagascar bourbon vanilla pods vacuum packed 15-20 cm.",
      src: "/lantu/assets/img/products/vanilla/bourbon-pods.webp",
      price: 95,
      weight: 55,
      cat: "vanille",
    },
    {
      name: "20 x Bourbon Vanille pods 14-16 cm",
      desc: "12 High Quality Madagascar bourbon vanilla pods vacuum packed 15-20 cm.",
      src: "/lantu/assets/img/products/vanilla/bourbon-pods.webp",
      price: 157,
      weight: 70,
      cat: "vanille",
    },
    {
      name: "50 x Bourbon Vanille pods 18 cm",
      desc: "50 High Quality Madagascar bourbon vanilla pods vacuum packed 15-20 cm.",
      src: "/lantu/assets/img/products/vanilla/bourbon-pods.webp",
      price: 1135,
      weight: 2113,
      cat: "vanille",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
