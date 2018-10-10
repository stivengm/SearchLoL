import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profileSearchig = '';
  nameProfile = '';
  profile = {
    "profileIconId": 1588,
    "name": "XGameGamePlay0X",
    "summonerLevel": 97,
    "accountId": 202220047,
    "id": 7643235,
    "revisionDate": 1538252312000
  }

  constructor() { }

  ngOnInit() {
  
  }

  searchProfile() {
    var select = document.getElementById('searchProfile');
    // value = select.value
  }


  profiles() {
    console.log(this.profile);
    this.nameProfile = this.profile.name 
  }
  
}
