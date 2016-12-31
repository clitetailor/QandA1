import { Component, OnInit } from '@angular/core';
import { AskPageService } from '../../services/askpage.service';
import { NgForm } from '@angular/forms';
import { Question } from '../../static_type/question';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
@Component({

    selector: 'askpage',
    templateUrl: 'app/forms/askquestion/askpage.component.html'
})

export class AskPageComponent {
    constructor(private _askpageService: AskPageService, public http: Http) {

    }
    //questions: topic[];
    questions = [];
    question;
    onSubmit(form: NgForm) {

        const question = new Question(0, 0, '24/12/2016', false, false, 'HungBM',
            { title: form.value.title, content: form.value.content }, ['test']);
        //console.log(question);
        this._askpageService.submitQuestion(question)
            .subscribe(
            data => {
                console.log(data);
                window.location.href = "/#/post/" + data.obj._id;
            }, //Success
            error => console.error(error) //Failure
            );

    }
}