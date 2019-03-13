import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.scss']
})
export class CourseCategoryComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
