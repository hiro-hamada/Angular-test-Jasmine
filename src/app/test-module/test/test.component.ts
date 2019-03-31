import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public transition() {
    let rtObj = this.router.navigateByUrl('/test');
    // console.log(rtObj);
  }

}
