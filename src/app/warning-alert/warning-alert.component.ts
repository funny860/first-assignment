import { Component } from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: `<p>This is a warning alert</p>`,
  styles: [
    `
      p {
        padding: 20px;
        color: white;
        background: red;
      }
    `,
  ],
})
export class warningAlert {}
