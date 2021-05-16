import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../shared/components/form-controls/form-control-styles.scss',
  ],
})
export class HomeComponent implements OnInit {
  ecForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.ecForm = this.formBuilder.group({
      monthlyIncome: 200000,
      monthlyExpense: 200000,
      tenure: '',
      existingLoans: '',
      emiOfExisting: '',
    });
  }
  onSubmit() {
    console.log(this.ecForm.value);
  }
}
