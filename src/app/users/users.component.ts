import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Table } from "primeng/table";
import { Intusers } from "../intusers";
import { ServiceService } from "../service.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  // dtOptions: DataTables.Settings = {};
  ttdc: "ttd";
  userlist1: Intusers[];
  userlist: any[];
  loading: boolean;
  value: number = 0;
  show = true;
  usr=true;
  getfavdata: [];
  totalRecords: number;
  fav=false;
  clonedProducts: { [s: string]: Intusers } = {};
  constructor(
    private service: ServiceService,
    private messageService: MessageService,
    private route: Router
  ) {}
  ngOnInit(): void {
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 100;
        this.service.getuser().then((res) => {
          this.userlist = res;
          sessionStorage.setItem("data", res);
          this.totalRecords = res.length;
        });
        this.messageService.add({
          severity: "info",
          summary: "Success",
          detail: "Process Completed",
        });
        clearInterval(interval);
      }
    }, 10);
    this.userlist = this.userlist.slice(1, 3);
  }
  // getfav(userlist1) {
  //   this.show = false;
  //   // sessionStorage.setItem("id", userlist1.id);
  //   console.log(userlist1);
  // }
  // getnotfav(userlist1) {
  //   this.show = true;
  //   // sessionStorage.removeItem("id");
  //   // sessionStorage.removeItem("data");
  //   console.log(userlist1);
  //   this.getfavdata != this.userlist1;
  // }

  onRowSelect(event) {
    this.messageService.add({
      severity: "info",
      summary: "Product Selected",
      detail: event.data.first_name,
    });
    console.log(event);
    localStorage.setItem("data", JSON.stringify(event.data));
    localStorage.setItem("id", JSON.stringify(event.data.id));
    this.show = false;
  }

  onRowUnselect(event) {
    // this.show = true;
    this.messageService.add({
      severity: "info",
      summary: "Product Unselected",
      detail: event.data.first_name,
    });
    console.log(event);
    localStorage.removeItem("id");
    localStorage.removeItem("data");
  }
  getfavcom() {
    this.fav = true;
    this.usr=false;

  }
  getusercom(){
    this.fav = false;

    this.usr=true;
  }
}
