import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-params-sync',
  standalone: true,
  template: ``,
})
export class ParamsSyncComponent implements OnInit {
  private myParam: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.myParam = this.route.snapshot.paramMap.get('id');
  }
}
