import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-params-async',
  standalone: true,
  template: ``,
})
export class ParamsAsyncComponent implements OnInit {
  private myParam: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.myParam = params.get('id');
    });
  }
}
