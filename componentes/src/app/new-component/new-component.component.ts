import { Component } from "@angular/core";

@Component({
    selector: 'new-component',
    standalone: true,
    template: `
        <h1>{{ title }}</h1>
    `,
    styles: `
        h1 {
            background-color: red;
            color: white;
        }
    `
})
export class NewComponent {

    public title = "I am the new component of this application, created by Gabriel";
}
