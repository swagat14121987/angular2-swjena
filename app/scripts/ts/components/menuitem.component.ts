import { Component } from "@angular/core";
import { FetchMenuService } from '../services/fetchmenu.service';
import { MenuItem } from '../model/menuitem.model'

@Component({
    selector : "juice-menu-item",
    templateUrl : "app/partials/menu-item.htm"
})

export class MenuItemComponent {
    item : MenuItem;
}