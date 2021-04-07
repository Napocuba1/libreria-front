import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../../services/globaldata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public globaldata: GlobaldataService) { }

  ngOnInit(): void {
  }
  

}
