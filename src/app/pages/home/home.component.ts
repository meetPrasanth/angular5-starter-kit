import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private readonly url = 'https://httpbin.org/uuid';

    httpResponse: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  mGetUUID() {
    this.httpService._get(this.url).subscribe( response => {
        this.httpResponse = response;
    })
  }

}
