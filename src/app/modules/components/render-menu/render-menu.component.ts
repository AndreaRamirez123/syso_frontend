import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-menu',
  templateUrl: './render-menu.component.html',
  styleUrls: ['./render-menu.component.css']
})
export class RenderMenuComponent implements OnInit {

  @Input() navigationMenu: any[] = []; 

  constructor() { }

  ngOnInit(): void {
    
  }

}
