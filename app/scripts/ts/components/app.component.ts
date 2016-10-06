import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy  } from "@angular/core";
import { HelloWorldComponent } from "./helloworld.component";
import { MenuItemComponent } from './menuitem.component';
import { MenuItem } from '../model/menuitem.model'
import { FetchMenuService } from '../services/fetchmenu.service';

@Component({
    selector : "my-app",
    templateUrl : 'app/partials/main.htm',
    providers : [FetchMenuService]
})

export class AppComponent implements OnInit{ 
    menu : MenuItem[];
    localString : string;

    constructor(private _fetchMenuService: FetchMenuService) { 
        this.menu = this._fetchMenuService.fetchMenu();
    }  

    //click event handle
    customClickEvent(event, value) {
        console.log('Click event handled by cutom click event.');
        console.log('Event using $event : ' + event);
        console.log('Value using custom ref : ' + value);
    }

    //implement ngOnInit
    ngOnInit() {
        this.localString = 'Modified in ngOnInit() hook.';
    }
} 