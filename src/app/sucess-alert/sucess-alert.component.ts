import { Component } from '@angular/core';

@Component({
  selector: 'sucess-alert',
  template: `<p>This is a Sucess</p>`,
  styles: [
    `
      p {
        padding: 20px;
        color: white;
        background: green;
      }
    `,
  ],
})
export class sucessAlert {}
