import { Component } from '@angular/core'

// component decorator tells JS this class is a component
@Component({
    // add a selector - the tag name to access this component
    selector: 'app-server',
    // external file to be rendered
    templateUrl: './server.component.html'
})

export class ServerComponent {

}