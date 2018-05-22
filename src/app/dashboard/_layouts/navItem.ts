export class Badge {
    variant: string;
    text: string;
}

export class NavItem {
    name: string;
    url: string;
    icon: string;
    badge: Badge;
    class: string;
    variant: string;
    children: NavItem[];
    constructor() {
    }
}