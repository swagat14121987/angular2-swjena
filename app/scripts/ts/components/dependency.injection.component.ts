import { Component, Inject } from '@angular/core';

@Component ({
    selector : 'dependency-injection',
    template : '<h4>Injected from dependency.injection Component<br />{{mail.mail}} || {{mailApi}}'
})

export class DependencyInjectionComponent {

    constructor(@Inject('mail') private mail, 
                @Inject('mailApi') private mailApi){
        console.log(mail);
    }
}