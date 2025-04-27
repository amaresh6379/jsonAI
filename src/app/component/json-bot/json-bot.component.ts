import { Component, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonService } from '../../service/json.service';

@Component({
  selector: 'app-json-bot',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './json-bot.component.html',
  styleUrl: './json-bot.component.css'
})
export class JsonBotComponent {
  inputText: string = '';
  outputText: any;
  constructor(private jsonService: JsonService) { }
  sendAnswer() {
    console.log("inputText", this.inputText);
    const data = {
      "querySentence": this.inputText
    };
    this.inputText = '';
    this.jsonService.generateJson(data).subscribe((res: any) => {
      console.log("res", res);
      this.outputText = JSON.stringify(res.data, null, 2);
      console.log("this.outputText", this.outputText);
    }, (err) => {
      console.log("err", err);
    })
  }

}
