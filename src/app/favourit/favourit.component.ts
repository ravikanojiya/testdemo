import { Component, Input, OnInit } from "@angular/core";
import { Intusers } from "../intusers";
import { ServiceService } from "../service.service";

@Component({
  selector: "app-favourit",
  templateUrl: "./favourit.component.html",
  styleUrls: ["./favourit.component.css"],
})
export class FavouritComponent implements OnInit {
  @Input() item: any[];
  userby: any;

  id: number;
  constructor(private service: ServiceService) {}

  ngOnInit() {
    // this.userby = localStorage.getItem("data");

    // this.service.getuser().then((res) => {
    //   this.userby = res;
    //   console.log(this.userby);
    // });
  }
}
