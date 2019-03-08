import {NgModule} from '@angular/core';
import {SelectedHeroComponent} from './components/selected-hero/selected-hero.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SelectedHeroComponent
    ],
})
export class HeroModule {}
