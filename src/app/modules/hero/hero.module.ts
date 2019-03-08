import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectedHeroComponent} from './components/selected-hero/selected-hero.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SelectedHeroComponent
    ],
    exports: [
        SelectedHeroComponent,
    ]
})
export class HeroModule {}
