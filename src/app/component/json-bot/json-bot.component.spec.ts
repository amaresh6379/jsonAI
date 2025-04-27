import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonBotComponent } from './json-bot.component';

describe('JsonBotComponent', () => {
  let component: JsonBotComponent;
  let fixture: ComponentFixture<JsonBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
