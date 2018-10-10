import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
// import { appRotes } from '../../app.module';


@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  // profile = {
  //   "profileIconId": 1588,
  //   "name": "XGameGamePlay0X",
  //   "summonerLevel": 97,
  //   "accountId": 202220047,
  //   "id": 7643235,
  //   "revisionDate": 1538252312000
  // }

  constructor(private navbarComponent: NavbarComponent) {

   }

  ngOnInit() {
    // console.log(this.profile.name);
    console.log(this.navbarComponent);
  }

  profiles() {
    // console.log(this.profile);
    // debugger;
  }

}
