import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';


import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import {MatStepperModule} from '@angular/material/stepper';
import { RechargedialogComponent } from './rechargedialog/rechargedialog.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { B2cComponent } from './b2c/b2c.component';
import { ProfileComponent } from './profile/profile.component';
import { WebComponent } from './web/web.component';
import { SettingsComponent } from './settings/settings.component';
import { WeightrecoComponent } from './weightreco/weightreco.component';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';
import { ServicepincodesComponent } from './servicepincodes/servicepincodes.component';
import { DomesticComponent } from './domestic/domestic.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { B2cShipmentsComponent } from './b2c-shipments/b2c-shipments.component';
import { TrainingComponent } from './training/training.component';
import { CashComponent } from './cash/cash.component';
import { CardComponent } from './card/card.component';
import { ChannelWiseComponent } from './channel-wise/channel-wise.component';
import { CourierWiseComponent } from './courier-wise/courier-wise.component';
import { CustomReportsComponent } from './custom-reports/custom-reports.component';
import { DailySummaryComponent } from './daily-summary/daily-summary.component';
import { EscalationsComponent } from './escalations/escalations.component';
import { PickupQueriesComponent } from './pickup-queries/pickup-queries.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { PostingComponent } from './posting/posting.component';
import { ProductWiseComponent } from './product-wise/product-wise.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { ResigsterSlotComponent } from './resigster-slot/resigster-slot.component';
import { ShipmentQueriesComponent } from './shipment-queries/shipment-queries.component';
import { ShipmentSummaryComponent } from './shipment-summary/shipment-summary.component';
import { WeightReconciliationComponent } from './weight-reconciliation/weight-reconciliation.component';
import { ZoneWiseComponent } from './zone-wise/zone-wise.component';
import { StateSummaryComponent } from './state-summary/state-summary.component';
import { JoshComponent } from './josh/josh.component';
import { ReadComponent } from './read/read.component';
import { AbandComponent } from './aband/aband.component';
import { IVRComponent } from './ivr/ivr.component';
import { EDDComponent } from './edd/edd.component';
import { SecureComponent } from './secure/secure.component';
import { IVRSComponent } from './ivrs/ivrs.component';
import { UserComponent } from './user/user.component';
import { AfterShipComponent } from './after-ship/after-ship.component';
import { TrackingScriptComponent } from './tracking-script/tracking-script.component';
import { TrakingpageComponent } from './trakingpage/trakingpage.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { WebhooksComponent } from './webhooks/webhooks.component';
import { NewwebhookComponent } from './newwebhook/newwebhook.component';
import { ProductGstComponent } from './product-gst/product-gst.component';
import { KycComponent } from './kyc/kyc.component';
import { CompanyInfoComponent } from './kyc/company-info/company-info.component';
import { KycDetailsComponent } from './kyc/kyc-details/kyc-details.component';
import { ChannelComponent } from './channel/channel.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RuleComponent } from './rule/rule.component';
import { ShippedComponent } from './shipped/shipped.component';
import { FilterPipe } from './filter.pipe';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthService } from './auth.service';
import { B2bOrdersComponent } from './b2b-orders/b2b-orders.component';
import { B2cOrdersComponent } from './b2c-orders/b2c-orders.component';
import { DocumentsOrdersComponent } from './documents-orders/documents-orders.component';
import { B2bShipmentsComponent } from './b2b-shipments/b2b-shipments.component';
import { DocumentsShipmentsComponent } from './documents-shipments/documents-shipments.component';
import { ExceptionComponent } from './exception/exception.component';
import { AddonComponent } from './addon/addon.component';
import { AddonCardComponent } from './addon-card/addon-card.component';
import { SettingsCardComponent } from './settings-card/settings-card.component';
import { B2bCreateComponent } from './b2b-create/b2b-create.component';
import { ForwardCreateComponent } from './forward-create/forward-create.component';
import { ReverseQcOrderComponent } from './reverse-qc-order/reverse-qc-order.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { ReverseComponent } from './reverse/reverse.component';
import { InterceptorService } from './loader/interceptor.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    AddonComponent,
    AddonCardComponent,
    B2bOrdersComponent,
    B2cOrdersComponent,
    DocumentsOrdersComponent,
    B2bShipmentsComponent,
    B2cShipmentsComponent,
    DocumentsShipmentsComponent,
    ExceptionComponent,
    SettingsCardComponent,
    B2bCreateComponent,
    ForwardCreateComponent,
    ReverseComponent,
    ReverseQcOrderComponent,
    ChannelComponent,
    InvoiceComponent,
    RuleComponent,
    ShippedComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    DetailsComponent,
    RechargedialogComponent,
    ForgetpasswordComponent,
    B2cComponent,
    ProfileComponent,
    WebComponent,
    WarehouseComponent,
      DomesticComponent,
    SettingsComponent,
    WeightrecoComponent,
    BillingComponent,
    ReportsComponent,
    ServicepincodesComponent,
    AboutusComponent,
  
    B2cShipmentsComponent,
    TrainingComponent,
    CashComponent,
        CardComponent,
        ChannelWiseComponent,
        CourierWiseComponent,
        CustomReportsComponent,
        DailySummaryComponent,
        EscalationsComponent,
        PickupQueriesComponent,
        PostHomeComponent,
        PostingComponent,
        ProductWiseComponent,
        ReasonsComponent,
        ResigsterSlotComponent,
        ShipmentQueriesComponent,
        ShipmentSummaryComponent,
        StateSummaryComponent,
        JoshComponent,
        ReadComponent,
        AbandComponent,
        IVRComponent,EDDComponent,
        SecureComponent,
        IVRSComponent,
        UserComponent,
        TrakingpageComponent
,
TrainingComponent,
WeightReconciliationComponent,
ZoneWiseComponent,
AfterShipComponent,
TrackingScriptComponent,
WhatsappComponent,
NotificationsComponent,
AccountsettingsComponent,
WebhooksComponent,
NewwebhookComponent,
ProductGstComponent,
KycComponent,
CompanyInfoComponent,
KycDetailsComponent,

FilterPipe,
SnackbarComponent,
EmployeesComponent,
CreateDocumentComponent,
ResetpasswordComponent

  ],  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,    
   HttpClientModule,
    
    LayoutModule,
    MatToolbarModule,
    MatStepperModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    CdkListboxModule,
    FormsModule,
   
  ],
  providers: [
   {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
