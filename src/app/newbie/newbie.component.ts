import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-newbie',
  templateUrl: './newbie.component.html',
  styleUrls: ['./newbie.component.css']
})
export class NewbieComponent implements OnInit {

  chapter1: boolean = true;
  chapter2: boolean = false;
  chapter3: boolean = false;
  chapter4: boolean = false;
  chapter5: boolean = false;
  chapter6: boolean = false;

  isMMLanguage: boolean = true;
  isENLanguage: boolean = false;
  
  constructor() { }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ block: 'start',  behavior: 'smooth', inline: 'start' });
  }
  
  ngOnInit(): void {
    this.openChapter1();
    this.openNewbieMM();
  }

  openChapter1() {
    this.chapter1 = true;
    this.chapter2 = false;
    this.chapter3 = false;
    this.chapter4 = false;
    this.chapter5 = false;
    this.chapter6 = false;
  }

  openChapter2() {
    this.chapter1 = false;
    this.chapter2 = true;
    this.chapter3 = false;
    this.chapter4 = false;
    this.chapter5 = false;
    this.chapter6 = false;
  }
  openChapter3() {
    this.chapter1 = false;
    this.chapter2 = false;
    this.chapter3 = true;
    this.chapter4 = false;
    this.chapter5 = false;
    this.chapter6 = false;
  }
  openChapter4() {
    this.chapter1 = false;
    this.chapter2 = false;
    this.chapter3 = false;
    this.chapter4 = true;
    this.chapter5 = false;
    this.chapter6 = false;
  }
  openChapter5() {
    this.chapter1 = false;
    this.chapter2 = false;
    this.chapter3 = false;
    this.chapter4 = false;
    this.chapter5 = true;
    this.chapter6 = false;
  }
  openChapter6() {
    this.chapter1 = false;
    this.chapter2 = false;
    this.chapter3 = false;
    this.chapter4 = false;
    this.chapter5 = false;
    this.chapter6 = true;
  }
  openNewbieMM() {
    this.isMMLanguage = true;
    this.isENLanguage = false;
  }
  openNewbieGB() {
    this.isMMLanguage = false;
    this.isENLanguage = true;
  }
}

declare var $: any;