import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menuitem.model';
import { Menu } from '../data/menu.data';

@Injectable()
export class FetchMenuService {
    fetchMenu():MenuItem[] {
        return Menu;
    }
}