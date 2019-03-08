import {Component, Input, ViewEncapsulation} from '@angular/core';
import {HeroModel} from 'microfront-common/model/hero.model';

@Component({
    selector: 'selected-hero',
    templateUrl: './selected-hero.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class SelectedHeroComponent {
    @Input() public hero: HeroModel;
}
