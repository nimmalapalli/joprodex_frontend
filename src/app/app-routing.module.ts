import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RechargedialogComponent } from './rechargedialog/rechargedialog.component';

import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { B2cComponent } from './b2c/b2c.component';
import { ProfileComponent } from './profile/profile.component';
import { WebComponent } from './web/web.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { DomesticComponent } from './domestic/domestic.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { SettingsComponent } from './settings/settings.component';
import { BillingComponent } from './billing/billing.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WeightrecoComponent } from './weightreco/weightreco.component';
import { ReportsComponent } from './reports/reports.component';
import { ShipmentSummaryComponent } from './shipment-summary/shipment-summary.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { DailySummaryComponent } from './daily-summary/daily-summary.component';
import { StateSummaryComponent } from './state-summary/state-summary.component';
import { ProductWiseComponent } from './product-wise/product-wise.component';
import { CourierWiseComponent } from './courier-wise/courier-wise.component';
import { ChannelWiseComponent } from './channel-wise/channel-wise.component';
import { ZoneWiseComponent } from './zone-wise/zone-wise.component';
import { EscalationsComponent } from './escalations/escalations.component';
import { TrainingComponent } from './training/training.component';
import { CardComponent } from './card/card.component';
import { PostingComponent } from './posting/posting.component';
import { ShipmentQueriesComponent } from './shipment-queries/shipment-queries.component';
import { PickupQueriesComponent } from './pickup-queries/pickup-queries.component';
import { WeightReconciliationComponent } from './weight-reconciliation/weight-reconciliation.component';
import { ResigsterSlotComponent } from './resigster-slot/resigster-slot.component';
import { ServicepincodesComponent } from './servicepincodes/servicepincodes.component';
import { B2cShipmentsComponent } from './b2c-shipments/b2c-shipments.component';
import { ReadComponent } from './read/read.component';
import { AbandComponent } from './aband/aband.component';
import { IVRComponent } from './ivr/ivr.component';
import { CashComponent } from './cash/cash.component';
import { EDDComponent } from './edd/edd.component';
import { SecureComponent } from './secure/secure.component';
import { UserComponent } from './user/user.component';
import { AfterShipComponent } from './after-ship/after-ship.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { WebhooksComponent } from './webhooks/webhooks.component';
import { NewwebhookComponent } from './newwebhook/newwebhook.component';
import { ProductGstComponent } from './product-gst/product-gst.component';
import { KycComponent } from './kyc/kyc.component';
import { ChannelComponent } from './channel/channel.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RuleComponent } from './rule/rule.component';
import { ShippedComponent } from './shipped/shipped.component';
import { EmployeesComponent } from './employees/employees.component';
import { B2bOrdersComponent } from './b2b-orders/b2b-orders.component';
import { B2cOrdersComponent } from './b2c-orders/b2c-orders.component';
import { DocumentsOrdersComponent } from './documents-orders/documents-orders.component';
import { B2bShipmentsComponent } from './b2b-shipments/b2b-shipments.component';
import { DocumentsShipmentsComponent } from './documents-shipments/documents-shipments.component';
import { ExceptionComponent } from './exception/exception.component';
import { AddonComponent } from './addon/addon.component';
import { CustomReportsComponent } from './custom-reports/custom-reports.component';
import { B2bCreateComponent } from './b2b-create/b2b-create.component';
import { ForwardCreateComponent } from './forward-create/forward-create.component';
import { ReverseQcOrderComponent } from './reverse-qc-order/reverse-qc-order.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { ReverseComponent } from './reverse/reverse.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

const routes: Routes = [
  {path:'web',component:WebComponent},
  {path:'domestic',component:DomesticComponent},
  {path:'warehouse',component:WarehouseComponent},
  {path:'b2c',component:B2cComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'rechargedialog',component:RechargedialogComponent},
  {path:'',component:LoginComponent},

  {path:'nav',component:NavComponent},
  {path:'register',component:RegisterComponent},
  {path:'home/:_id',component:HomeComponent},
  {path:'details',component:DetailsComponent},
  {
    path: 'reports',
    component: ReportsComponent,
    children: [
      { path: '', redirectTo: 'custom-reports', pathMatch: 'full' }, 
      { path: 'custom-reports', component: CustomReportsComponent },
      { path: 'daily-summary', component: DailySummaryComponent },
      { path: 'product-summary', component: ProductWiseComponent },
      { path: 'state-summary', component: StateSummaryComponent },
      { path: 'ndr-reasons', component: ReasonsComponent }, 
      { path: 'shipment-summary', component: ShipmentSummaryComponent },
      { path: 'zone-wise', component: ZoneWiseComponent }, 
      { path: 'courier-wise', component: CourierWiseComponent }, 
      { path: 'channel-wise', component: ChannelWiseComponent },
    ]
  },
  {path:'b2b-create',component:B2bCreateComponent},
  {path:'forward-create',component:ForwardCreateComponent},
  {path:'reverse-qc-order',component:ReverseQcOrderComponent},
  {path:'create-document',component:CreateDocumentComponent},
  {path:'reverse',component:ReverseComponent},
  {path:'profile',component:ProfileComponent},
  {path:'settings',component:SettingsComponent},
  {path:'web',component:WebComponent},
  {path:'billing',component:BillingComponent},
  {path:'about-us',component:AboutusComponent},
  {path:'weightreco',component:WeightrecoComponent},
  {path:'reports',component:ReportsComponent},
  {path:'b2b-orders/:_id',component:B2bOrdersComponent},
  {path:'b2c-orders/:_id',component:B2cOrdersComponent},
  {path:'documents-orders/:_id',component:DocumentsOrdersComponent},
  {path:'b2b-shipments/:_id',component:B2bShipmentsComponent},
  {path:'b2c-shipments/:_id',component:B2cShipmentsComponent},
  {path:'documents-shipments/:_id',component:DocumentsShipmentsComponent},
  {path:'exception/:_id',component:ExceptionComponent},
  {path:'addon/:_id',component:AddonComponent},
  {path:'escalation/:_id',component:EscalationsComponent},
  {path:'card/:_id',component:CardComponent},
  {path:'training/:_id',component:TrainingComponent},
  {path:'posting/:_id',component:PostingComponent},
  {path:'shipment-queries/:_id',component:ShipmentQueriesComponent},
  {path:'pickup-queries/:_id',component:PickupQueriesComponent},
  {path:'weight-reconcillation/:_id',component:WeightReconciliationComponent},
  {path:'resigster-slot/:_id',component:ResigsterSlotComponent},
  {path:'servicepincodes/:_id',component:ServicepincodesComponent},

  {path:'b2c-shipments/:_id',component:B2cShipmentsComponent},
  {path:'read',component:ReadComponent},
  {path:'aband',component:AbandComponent},
  {path:'ivr',component:IVRComponent},
  {path:'cash',component:CashComponent},
  {path:'edd',component:EDDComponent},
  {path:'secure',component:SecureComponent},
  {path:'user',component:UserComponent},
  {path:'after-ship',component:AfterShipComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'accountsettings',component:AccountsettingsComponent},
  {path:'webhooks',component:WebhooksComponent},
  {path:'newwebhook',component:NewwebhookComponent},
  {path:'product-gst',component:ProductGstComponent},
  {path:'kyc',component:KycComponent},
  {path:'channel',component:ChannelComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'rule',component:RuleComponent},
  {path:'shipped',component:ShippedComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'warehouse',component:WarehouseComponent},


  

  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)}
  
  ]},
  {path:'',component:FrontLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)}
  
  ]}
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 ,    horizontalPosition: 'end',
    verticalPosition: 'top',} },
  ]
})
export class AppRoutingModule { }
