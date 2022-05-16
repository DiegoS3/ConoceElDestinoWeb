import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, share } from 'rxjs';
import { endpoint } from 'src/environments/apis/apis';
import { GenericService } from './generic.service';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  private categorySubject = new BehaviorSubject<any>({});
  private categoryListSubject = new BehaviorSubject<any[]>([]);

  category$: Observable<any>;
  categoryList$: Observable<any>

  constructor(
    private genericService: GenericService
  ) {
    this.category$ = this.categorySubject.asObservable();
    this.categoryList$ = this.categoryListSubject.asObservable();
  }

  getCategories(): void {
    this.genericService.httpPost(endpoint.CATEGORY_LIST, {})
      .pipe(
        share()
      )
      .subscribe(
        list => this.categoryListSubject.next(list)
      )
  }

  getCategoryByName(name: string): void {
    const params: Record<string, string> = {
      name: name
    }
    this.genericService.httpGet(endpoint.CATEGORY_BY_NAME, params)
      .pipe(
        share()
      )
      .subscribe(
        category => this.categorySubject.next(category)
      )
  }

}
