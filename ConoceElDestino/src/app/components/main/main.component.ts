import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any[] = [];

  categoryList$: Observable<any>


  constructor(
    private categoryService: CategoryService
  ) {
    this.categoryList$ = this.categoryService.categoryList$;
  }

  ngOnInit(): void {
    this.categoryService.getCategories();
  }

}
