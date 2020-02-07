import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LottieComponent} from './lottie/lottie.component';
import {SumtecComponent} from './sumtec/sumtec.component';

const routes: Routes = [
  {
    path: '',
    component: LottieComponent
  },
  {
    path: 'sumtec',
    component: SumtecComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
