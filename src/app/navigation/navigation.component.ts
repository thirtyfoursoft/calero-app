import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  const $ = window["$"];
  $('#btn-toggle').click(function(){
    $('#container-toggle').toggleClass('block-toggle')
    $('#menu-toggle').toggleClass('block-toggle')
  });
  }

}