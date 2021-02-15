import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Story} from '../model/story.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {
  @Input() item: Story;
}
