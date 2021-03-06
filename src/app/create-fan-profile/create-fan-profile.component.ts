import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { Router } from "@angular/router";
import { FanProfileService } from '../shared/services/fan-profile.service';


@Component({
  selector: 'app-create-fan-profile',
  templateUrl: './create-fan-profile.component.html',
  styleUrls: ['./create-fan-profile.component.scss']
})
export class CreateFanProfileComponent implements OnInit {

  fanProfileForm: FormGroup;

  constructor(
    //private firestore: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    public fanProfileService: FanProfileService
  ) { }

  ngOnInit() {
    //this.profileService.getProfilesList();
    this.createForm()
  }

  createForm() {
    this.fanProfileForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      town: ['', Validators.required],
      country: ['', Validators.required],
      postCode: ['', Validators.required],
      contactNumber: ['', Validators.required]
    }
  )
}

resetFields(){
  this.fanProfileForm = this.fb.group({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    addressOne: new FormControl('', Validators.required),
    addressTwo: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    postCode: new FormControl('', Validators.required),
    contactNumber: new FormControl('', Validators.required),
  });
}

onSubmit(value) {
  this.fanProfileService.createFanProfile(value)
  .then(
    res => {
      this.resetFields();
      this.router.navigate(['/fan-profile']);
    }
  )
}

}
