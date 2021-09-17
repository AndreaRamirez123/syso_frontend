import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {img: "assets/img/acoset.png"},
    {img: "assets/img/apr.png"},
    {img: "assets/img/arl-sura.png"},
    {img: "assets/img/axa.png"},
    {img: "assets/img/bolivar.png"},
    {img: "assets/img/cmym.png"},
    {img: "assets/img/colmena.png"},
    {img: "assets/img/liberty.png"},
    {img: "assets/img/mapfre.png"},
  ];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};

  ngOnInit() {

  }
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
