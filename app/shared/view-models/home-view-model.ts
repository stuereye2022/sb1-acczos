import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export class HomeViewModel extends Observable {
    private _menuItems: Array<any>;

    constructor() {
        super();
        this._menuItems = [
            {
                title: "New Products",
                description: "Discover the latest hair care products",
                route: "pages/products/products-page"
            },
            {
                title: "Special Events",
                description: "Upcoming events and occasions",
                route: "pages/events/events-page"
            },
            {
                title: "Marketplace",
                description: "Community demands and offerings",
                route: "pages/marketplace/marketplace-page"
            },
            {
                title: "FAQ",
                description: "Frequently asked questions",
                route: "pages/faq/faq-page"
            }
        ];
    }

    get menuItems() {
        return this._menuItems;
    }

    onItemTap(args) {
        const item = this._menuItems[args.index];
        Frame.topmost().navigate(item.route);
    }
}