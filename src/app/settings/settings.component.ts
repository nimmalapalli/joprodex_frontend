import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  settings = [
    {
        imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/1.png',
        title: 'Channel',
        description: 'Imports orders from Your online store',
        route: '/user'
    },
    {
        imageUrl:'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/2.png',
        title: 'Warehouse',
        description: 'Manage Your pickup locations',
        route: '/warehouse'
    },
    {
        imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/3.png',
        title: 'Employees',
        description: 'Allow access to team members',
        route: '/employees'
    },
    // Add more addons following the same structure
    {
        imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/4.png',
        title: 'API',
        description: 'Programatically access Nimbuspost data',
        route: '/'
    },
    {
        imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/5.png',
        title: 'Webhooks',
        description: 'Recive shipments status notification on URL',
        route: '/webhooks'
    },
    {
        imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/6.png',
        title: 'Company Profile',
        description: 'Your Company Profile',
        route: '/'
    },
    {
        imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/7.png',
        title: 'Label Settings',
        description: 'Set your shipping label format',
        route: '/'
    },
    {
        imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/8.png',
        title: 'Account Settings',
        description: 'Update Your profile or password',
        route: '/accountsettings'
    },
    {
      imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/9.png',
      title: 'International KYC',
      description: 'Upadte Your international KYC',
      route: '/kyc'
  },
  {
    imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/10.png',
    title: 'Invoice Settings',
    description: 'Shipment invoice customization',
    route: '/invoice'
  },
  {
      imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/11.png',
      title: 'Product Weight Freeze',
      description: 'Set weight & dimension of your shipment',
       route: '/'
  },
{
   imageUrl: 'https://dqtccm62inm81.cloudfront.net/assets/img/settings/icons/12.png',
   title: 'Product HSN/GST Mapping',
   description: 'Set HSN/GST against your product<',
   route: '/product-gst'
}
];
}
