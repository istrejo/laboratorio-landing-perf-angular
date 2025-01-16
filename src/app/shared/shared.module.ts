import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './components/img/img.component';

const components = [ImgComponent];
const pipes = [TimeAgoPipe];

@NgModule({
  declarations: [...pipes, ...components],
  imports: [CommonModule],
  exports: [...pipes, ...components],
})
export class SharedModule {}
