import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from './services/homepage.service';
import { topic } from './static_type/topic';

@Component({
    selector: 'app-root',
    template: `
    <logoheader></logoheader>

    <div class="jumbotron" style="width:60%; margin:0 auto; position: relative;">
        <router-outlet></router-outlet>
    </div>

    <footer></footer>
    `
})

export class AppComponent implements OnInit {
    topics: topic[];
    constructor(private router: Router){
        // this._homeService.getTopic()
        //     .subscribe(topics => {
        //         console.log(topics);
        //     });
    }
    
    ngOnInit() {
        //  this._homeService.getTopic()
        //         .subscribe(topics => {
        //             console.log(topics);
        //             this.topics = topics;
        //         });

        this.router.navigateByUrl('/home');
    }
}