import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanilla',
  templateUrl: './vanilla.component.html',
  styleUrls: ['./vanilla.component.scss']
})
export class VanillaComponent implements OnInit {

  category = "vanilla";

  products = [
    {
      name: "10 x Gousses de Vanille Noire Gourmet 14-16 cm",
      desc: "50 High Quality Madagascar bourbon vanilla pods vacuum packed 15-20 cm.",
      src: "/lantu/assets/img/products/vanilla/bourbon-pods.webp",
      price: 80,
      weight: 500,
    }
  ];

  details = [
    { desc: 'High quality Bourbon vanilla pods, grown in Madagascar, recognized for their rich, delicate and authentic aroma, ideal for pastries, desserts and vanilla ice creams',
      bgSrc: './assets/img/products/vanilla/pods.jpg' },
    { desc: 'Culinary versatility - perfect for making vanilla ice creams, sweets, creams, jams, chocolates, yoghurts, fine pastries, homemade pastries and many other vanilla delicacies',
      bgSrc: './assets/img/products/vanilla/ice3.jpg' },
    { desc: 'Together with local producers, we support an eco-responsible culture. The vanilla pods are prepared and selected in our premises to ensure a quality product',
      bgSrc: './assets/img/products/vanilla/bourbon-pods.webp' },
    { desc: 'Our Madagascar vanilla pods offer a richness of flavors and a deep aroma, enhancing your culinary preparations, enhancing the authenticity and quality of natural vanilla',
      bgSrc: './assets/img/products/vanilla/cream.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
