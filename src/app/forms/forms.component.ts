import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  userForm:   FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      userName : ['shivam'],
      email : ['test@test.com'],
      gender : [],
      phoneNo : [],
      address : this._fb.group({
        city: [],
        state: [],
        zipCode : []
      })
    });


  }
  onSubmit = function () {
    console.log('userForm', this.userForm.value);
let data = `\r User Name: ${this.userForm.value.userName} \r\n Email: ${this.userForm.value.email} \r\n  Gender: ${this.userForm.value.gender} \r\n  Phone: ${this.userForm.value.phoneNo} \r\n  Adress:  \r \n City : ${this.userForm.value.address.city} \r \n State : ${this.userForm.value.address.state} \r \n PostalCode : ${this.userForm.value.address.zipCode}`;
const textToBLOB = new Blob([data], { type: 'text/plain' });
const sFileName = 'formData.txt';
let newLink = document.createElement("a");
        newLink.download = sFileName;
        newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
            newLink.click();
  }

}
