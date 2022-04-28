import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { InvestorsComponent } from './services/investors/investors.component';
import { TenantsComponent } from './services/tenants/tenants.component';
import { LandlordsComponent } from './services/landlords/landlords.component';
import { SourcingComponent } from './services/sourcing/sourcing.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{
		path: 'services',
		component: ServicesComponent,
		children: [
			// { path: '', redirectTo: '/services/investors', pathMatch: 'full' },
			{ path: 'investors', component: InvestorsComponent },
			{ path: 'tenants', component: TenantsComponent },
			{ path: 'landlords', component: LandlordsComponent },
			{ path: 'sourcing', component: SourcingComponent }
		]
	},
	{ path: 'not-found', component: NotFoundComponent },
	{ path: '**', redirectTo: '/not-found' }
];

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HomeComponent,
		FooterComponent,
		AboutComponent,
		ContactComponent,
		ServicesComponent,
		InvestorsComponent,
		TenantsComponent,
		LandlordsComponent,
		SourcingComponent,
		NotFoundComponent
	],
	imports: [ BrowserModule, RouterModule.forRoot(routes) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
