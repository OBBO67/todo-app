import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor() {}

  ngOnInit(): void {}

  logout(): void {}
}
