import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from "../side-menu/side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "../side-menu/side-menu-options/side-menu-options.component";
import { SideMenuComponent } from "../side-menu/side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',

})
export default class DashboardPageComponent { }
