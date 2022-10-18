import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  param: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.param = this.route.params.subscribe((params: Params) => {
      console.log(+params['id']);
    })
  }

}
