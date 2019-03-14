import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.scss']
})
export class CoursePreviewComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
