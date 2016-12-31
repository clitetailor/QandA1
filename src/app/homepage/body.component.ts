import { topic } from '../static_type/topic';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/homepage.service';

@Component({
    selector: 'main-body',
    template: `
        <table width="60%">
            <div *ngFor="let topic of topics">
                 <post [topic]="topic">1</post> 
            </div>
        </table>
         <!--<blog></blog>-->
    `
})
export class MainBodyComponent {
    topics: topic[];
    constructor(private _homeService: HomeService) {

    }

    ngOnInit() {
        // this._homeService.getTopic()
        //     .subscribe(topics => {
        //         console.log(topics);
        //         this.topics = topics;
        //     });
    }
}