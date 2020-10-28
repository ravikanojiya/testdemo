import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { data } from "jquery";
import { Intusers } from "../intusers";
import { ServiceService } from "../service.service";

@Component({
  selector: "app-favourit",
  templateUrl: "./favourit.component.html",
  styleUrls: ["./favourit.component.css"],
})
export class FavouritComponent implements OnInit {
  userby: any;

  id: number;
  constructor(private service: ServiceService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.userby = sessionStorage.getItem("data");
    // console.log(this.userby);

    this.id = parseInt(localStorage.getItem("id"));
    this.service.getuserbyid(this.id).then((res) => {
      this.userby = res;

      console.log(this.userby);
    });
    localStorage.setItem("data1", this.userby);

  }
}
