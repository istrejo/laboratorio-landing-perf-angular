import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { FeaturesComponent } from './components/features/features.component';
import { StatsComponent } from './components/stats/stats.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactComponent } from './components/contact/contact.component';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { HomeRoutingModule } from './home-routing.module';

const components = [
  NavbarComponent,
  HeroComponent,
  SummaryComponent,
  SnippetsComponent,
  FeaturesComponent,
  StatsComponent,
  IntegrationsComponent,
  CustomersComponent,
  ContactComponent,
];

@NgModule({
  declarations: [HomeComponent, ...components],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgChartsModule,
    FontAwesomeModule,
    SwiperModule,
  ],
})
export class HomeModule {}
