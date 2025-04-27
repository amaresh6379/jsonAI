import { Routes } from '@angular/router';
import { JsonBotComponent } from './component/json-bot/json-bot.component';

export const routes: Routes = [
  { path: '', redirectTo: 'json', pathMatch: 'full' },
  { path: 'json', component: JsonBotComponent },
];
