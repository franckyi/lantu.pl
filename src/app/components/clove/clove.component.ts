import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clove',
  templateUrl: './clove.component.html',
  styleUrls: ['./clove.component.scss']
})
export class CloveComponent implements OnInit {

  category = "cloves";

  products = [
    {
      name: "Cloves from Madagascar",
      desc: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands in Indonesia, and are commonly used as a spice, flavoring, or fragrance in consumer products, such as toothpaste, soaps, or cosmetics.",
      src: "/assets/img/products/clove/clove-prod.jpg",
      price: 3.5,
      weight: 50
    },
    {
      name: "Cloves from Madagascar",
      desc: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands in Indonesia, and are commonly used as a spice, flavoring, or fragrance in consumer products, such as toothpaste, soaps, or cosmetics.",
      src: "/assets/img/products/clove/clove-prod.jpg",
      price: 6,
      weight: 100
    },
    {
      name: "Cloves from Madagascar",
      desc: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. They are native to the Maluku Islands in Indonesia, and are commonly used as a spice, flavoring, or fragrance in consumer products, such as toothpaste, soaps, or cosmetics.",
      src: "/assets/img/products/clove/clove-prod.jpg",
      price: 14,
      weight: 250
    }
  ];

  details = [
    { desc: `Clove is a spice commonly used in foods. It's also available in mouthwashes, gels, creams, and oils. As medicine, there isn't enough reliable information to know what an appropriate dose of clove might be. Speak with a healthcare provider to find out what type of product and dose might be best for a specific condition.`,
      bgSrc: './assets/img/products/clove/clove-4.jpg' },
    { desc: `When taken by mouth: Clove is commonly consumed in foods. There isn't enough reliable information to know if taking clove in larger amounts is safe or what the side effects might be.`,
      bgSrc: './assets/img/products/clove/clove-6.jpg' },
    { desc: `Medications for diabetes (Antidiabetes drugs)
            Clove might lower blood sugar levels. Taking clove along with diabetes medications might cause blood sugar to drop too low. Monitor your blood sugar closely.`,
      bgSrc: './assets/img/products/clove/clove-2.jpg' },
    { desc: `Clove oils, dried flower buds, leaves, and stems are used to make medicine. Clove oil contains a chemical called eugenol that might help decrease pain and fight infections. Clove is also a popular ingredient in cigarettes.`,
      bgSrc: './assets/img/products/clove/clove-3.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
