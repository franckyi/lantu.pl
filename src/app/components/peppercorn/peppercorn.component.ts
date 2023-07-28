import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peppercorn',
  templateUrl: './peppercorn.component.html',
  styleUrls: ['./peppercorn.component.scss']
})
export class PeppercornComponent implements OnInit {

  products = [
    {
      name: "Pink Peppercorn Lorem ipsum",
      desc: "What we do know is that pink peppercorns contain antioxidants and antibacterial essential oils. There is also some evidence to suggest that pink pepper can lower blood sugar and the risk of developing cancers.",
      src: "./assets/img/products/pink-peppercorn/pp-3.png",
      price: 95,
      weight: 55,
      cat: "peppercorn",
    },
    {
      name: "Pink Peppercorn Lorem ipsum",
      desc: "What we do know is that pink peppercorns contain antioxidants and antibacterial essential oils. There is also some evidence to suggest that pink pepper can lower blood sugar and the risk of developing cancers.",
      src: "./assets/img/products/pink-peppercorn/pp-3.png",
      price: 157,
      weight: 70,
      cat: "peppercorn",
    },
    {
      name: "Pink Peppercorn Lorem ipsum",
      desc: "What we do know is that pink peppercorns contain antioxidants and antibacterial essential oils. There is also some evidence to suggest that pink pepper can lower blood sugar and the risk of developing cancers.",
      src: "./assets/img/products/pink-peppercorn/pp-3.png",
      price: 1135,
      weight: 2113,
      cat: "peppercorn",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
