import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';
import { endpoint } from 'src/environments/apis/apis';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any[] = [];

  private categoryListSubject = new BehaviorSubject<any[]>([]);
  categoryList$: Observable<any>

  constructor(private genericService: GenericService) {

    this.categoryList$ = this.categoryListSubject.asObservable();
  }

  ngOnInit(): void {
    this.genericService.httpPost(endpoint.CATEGORY_LIST, {}).subscribe(
      list => this.categoryListSubject.next(list)
    )
  }

}
