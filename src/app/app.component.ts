import { ServiceService } from './../services/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = '';
  constructor(private service: ServiceService) {
  }

  doSubmit(data) {
    console.log('data is ' + data);
    const serverData = {name: data};
    this.service.storeData(serverData)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
    )
  };

  getData() {
    this.service.getData()
    .subscribe(
      (res) => {
        console.log('res is ');
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
