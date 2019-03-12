import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = ["Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana", "Azkar Moulana","Azkar Moulana", "Azkar Moulana","Azkar Moulana", "Azkar Moulana",]

  constructor() { }

  ngOnInit() {
  }

}
