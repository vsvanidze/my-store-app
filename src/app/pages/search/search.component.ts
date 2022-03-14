import { Component, forwardRef, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';

import { SearchService } from 'src/app/core/services/search.service';
import { SearchHelperService } from 'src/app/core/services/search-helper.service';
import { searchDataInterface } from 'src/app/core/interface/searchDataInterface';
import { buttonView, buttonType } from 'src/app/core/models/button.enum';

export const limits = [
  {
    amount: 8
  },
  {
    amount: 16
  },
  {
    amount: 24
  }
]
export const sortTypes = [
  {
    sortType: 'asc'
  },
  {
    sortType: 'desc'
  }
]
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true,
    },
  ]
})
export class SearchComponent implements ControlValueAccessor, OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  disabled: boolean = false;

  public type = buttonType;
  public view = buttonView;
  buttonLabel = 'See more';
  copyLabel = 'copy url';

  limits = limits;
  sortTypes = sortTypes;
  limit: number = 8;
  sort: string = 'asc';

  allData$: Array<searchDataInterface> = [];
  searchData$: Array<searchDataInterface> = [];
  moreItems: boolean = true;

  onChange = (value: any) => { };
  onTouched = () => { };
  
  constructor(private clipboard: Clipboard, public fb: FormBuilder, private route: ActivatedRoute, private router: Router, public readonly searchService: SearchService, public readonly searchHelperService: SearchHelperService) {
  }

  filterForm = this.fb.group({
    limit: [''],
    sort: ['']
  });

  ngOnInit() {

    this.filterForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.writeValue(value);
    });

    this.router.navigate([''], {
      queryParams: {
        limit: this.limit,
        sort: this.sort
      }
    })

    this.filterForm.patchValue({
      limit: this.limit,
      sort: this.sort
    })

    this.route.queryParams.pipe(
      tap((queryParams) => {

        if (Object.keys(queryParams).length > 0) {
          
          this.searchService.getSearchData(queryParams).subscribe(data => {
            this.allData$ = data;
          });

          /* this.updateValues(queryParams);  */         
        }
      })
    ).subscribe();
  }

  /* updateValues(dataObject: any) {
    this.filterForm.patchValue({
      sort: dataObject.sort,
      limit: dataObject.limit
    })
  } */

  showMore() {

   let numberValue = Number(this.filterForm.value.limit);
   this.limit +=numberValue;
   this.filterForm.value.limit = this.limit;

    this.router.navigate([''], {
      queryParams: {
        limit: this.filterForm.value.limit,
        sort: this.filterForm.value.sort
      }
    })
  }

  copyText() {
    this.clipboard.copy(window.location.href);
  }

  OnChange(event: any) {
    this.router.navigate([''], {
      queryParams: {
        sort: this.filterForm.value.sort,
        limit: this.filterForm.value.limit
      }
    })
  }

  writeValue(value: number): void {
    this.onChange(this.filterForm.value);
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.filterForm.disable();
    } else {
      this.filterForm.enable();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
