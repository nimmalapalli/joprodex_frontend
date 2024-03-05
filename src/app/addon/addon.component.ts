import { Component } from '@angular/core';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent {
    addons = [
        {
            imageUrl: 'https://ship.nimbuspost.com/assets/img/addon/alocation-engine.png',
            title: 'Order Allocation',
            description: 'Set Courier Priorities of Your Shipment',
            route: '/read'
        },
        {
            imageUrl: 'https://ship.nimbuspost.com/assets/img/addon/abondoned_checkouts.png',
            title: 'Abandon Checkouts',
            description: 'Manage abandoned Checkouts',
            route: '/aband'
        },
        {
            imageUrl: 'https://ship.nimbuspost.com/assets/img/addon/realtime-tracking.png',
            title: 'Aftership(tracking)',
            description: 'Re-engage with customers through personalised tracking pages',
            route: '/after-ship'
        },
        // Add more addons following the same structure
        {
            imageUrl: 'https://ship.nimbuspost.com/assets/img/addon/ivr.png',
            title: 'IVR',
            description: 'Automated call settings',
            route: '/ivr'
        },
        {
            imageUrl: 'https://ship.nimbuspost.com/assets/img/addon/codorder-confirmation.png',
            title: 'COD Order Confirmation',
            description: 'Confirm COD orders via automated IVR calls',
            route: '/cash'
        },
        {
            imageUrl: 'https://ship.nimbuspost.com/assets/img/addon/shipment-edd.png',
            title: 'Shipment EDD (Estimated Date of Delivery)',
            description: 'Show/Hide EDD of shipments',
            route: '/edd'
        },
        {
            imageUrl: 'https://ship.nimbuspost.com/assets/img/addon/secure-shipment.png',
            title: 'Secure Shipment',
            description: 'Insure shipments against in-transit damages',
            route: '/secure'
        },
        {
            imageUrl: 'https://ship.nimbuspost.com/assets/img/addon/notification.png',
            title: 'WhatsApp & SMS Notification',
            description: 'Send WhatsApp & SMS notifications',
            route: '/notifications'
        }
    ];
}
