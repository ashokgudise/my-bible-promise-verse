import { stringify } from '@angular/compiler/src/util';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatStepper } from '@angular/material/stepper';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';
import { DilogConfirmationComponent } from '../shared/components/dilog-confirmation/dilog-confirmation.component';
import { UserProfileService } from '../shared/services/user-profile.service';

@Component({
  selector: 'app-lets-pray',
  templateUrl: './lets-pray.component.html',
  styleUrls: ['./lets-pray.component.scss'],
})
export class LetsPrayComponent {

  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  title = 'newMat';
  isLinear = true;
  isOptional = false;
  languageKeys = [];

  images = [];
  gridColumns = 1;


  languages: any[] = [
    {value: 'english', viewValue: 'English'},
    {value: 'telugu', viewValue: 'Telugu'},
  ];

  selectedLanguage = this.languages[0].value;

  selectLanguage(event: Event) {
    //console.log('Selected Language'+ (event.target as HTMLSelectElement).value );
    this.selectedLanguage = (event.target as HTMLSelectElement).value;
  }

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild('stepper') stepper: MatStepper;

  firstFormGroup: FormGroup;

  constructor(private userProfileService: UserProfileService,private _formBuilder: FormBuilder, public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.users = new Array<User>();
  }

  submit(){
      console.log(this.firstFormGroup.value);
  }

  @ViewChild(MatPaginator,  {static: true}) paginator: MatPaginator;
  addNewUser: User[] = [
      { id: 0,
          firstName: null,
            email: null,
              lastName: null ,
                promiseVerse: '',
                  imgSrc: ''},

  ];

    users: Array<User>;
    showTable: boolean;
    statusMessage: string;
    isLoaded: boolean = true;

    displayedColumnsUsers: string[] = [ 'Delete' , 'FirstName', 'LastName',  ]; //['id', 'name', 'surname',  'email', 'Change', 'Delete'];
    displayedColumnsAddUser: string[] = ['Action','FirstName', 'LastName']; //['Name', 'Surname', 'Age', 'Email', 'Save', 'Cancel'];

    dataSourceUsers: any;
    dataSourceAddUser: any;
    newUser : User;

    @ViewChild(MatSort,  {static: true}) sort: MatSort;

    ngOnInit() {
      this.dataSourceAddUser = new MatTableDataSource();
      this.dataSourceUsers = new MatTableDataSource();

      // https://bitcom.systems/blog/reactive-forms-in-angular

      this.firstFormGroup = this._formBuilder.group({
        id: 0,
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [],
//        email: [,{validators: [Validators.required, Validators.email]}],
        includeFamily:  false,
        language: this.selectLanguage
      });
  }

  createMember(): FormGroup{
    return this._formBuilder.group({
      id: 0,
      firstName: [''],
      lastName: [''],
    });
  }

  addItem(): void {
    const control = this.firstFormGroup.get('friendsAndFamily') as FormArray;
    control.push(this.createMember());
  }

  private removeMember(i: number) {
    const control = this.firstFormGroup.get('friendsAndFamily') as FormArray;;
    control.removeAt(i);
  }

  applyFilter(filterValue: string) {
    this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceUsers.paginator) {
            this.dataSourceUsers.paginator.firstPage();
        }
    }

    private loadUsers() {
      this.dataSourceUsers = new MatTableDataSource(this.users);
      this.dataSourceAddUser = new MatTableDataSource(this.addNewUser);
      this.dataSourceUsers.paginator = this.paginator;
  }

  deleteUserForDialog(user: User) {
    this.users = this.users.filter((value,key)=>{
      return value.id != user.id;
    });
    this.loadUsers();
}

editUser(user: User) {

   var usr =   this.getUserById(user.id);

    if (user.firstName != null && user.firstName != "" && user.lastName != null && user.lastName != "") {
      this.users = this.users.filter((value,key)=>{
        if(value.id == user.id){
          value.firstName = user.firstName;
          value.lastName = user.lastName;
        }
        return true;
      });
      this.loadUsers();
      this.openSnackBar('Update Successful!','Update');
    }else{
      this.openSnackBar('Invalid Input!','Update');
    }

}

getUserById(id: number){
  var user =  this.users.filter(x => x.id === id);
  return user;
}

saveUser(user: User){

  var flag = this.checkForDuplicates(user.firstName, user.lastName);

  if(flag){
    this.openSnackBar('User Already Exists!','Add');
  }
  //if(openSnackBar)
  if (!flag && user.firstName != null && user.firstName != "" && user.lastName != null && user.lastName != "") {
    var d = new Date();
    this.users.push({
      //id: Math.floor(Math.random() * 100),
      id: (this.users.length+1),
      firstName: user.firstName,
      lastName: user.lastName,
      email: '',
      promiseVerse: null,
      imgSrc: ''
      //promiseVerse: this.userProfileService.revealPromiseVerse(this.selectedLanguage)
    });
  }
  this.loadUsers();
  this.clearForm();
}

checkForDuplicates(fName: string, lName: string): boolean{

  return this.users.some(item => (
    (item.firstName.toUpperCase() === fName.toUpperCase())
                && ( item.lastName.toUpperCase() === lName.toUpperCase())
                ));  // returns true
}

show() {
    this.showTable = true;
    this.addNewUser = [{ id: 0, firstName: null,  email: null, lastName: null , promiseVerse: '', imgSrc: ''}];
    this.dataSourceAddUser = new MatTableDataSource(this.addNewUser);
}
cancel() {
    this.clearForm();
    this.showTable = false;
}

clearForm(){

    this.firstNameFormControl.setValue(null);
    this.lastNameFormControl.setValue(null);

    this.firstNameFormControl.setErrors(null);
    this.lastNameFormControl.setErrors(null);

}

//snackBar
openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
        duration: 3000,
    });
}

//material dialog
openDialog(element): void {
    const dialogRef = this.dialog.open(DilogConfirmationComponent, {
        width: '250px',
        data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result == "Confirm") {
            this.deleteUserForDialog(element);
        }
    });
}

//   Form field with error messages
firstNameFormControl = new FormControl('', [Validators.required]);
lastNameFormControl= new FormControl('', [Validators.required]);

getFirstNameErrorMessage() {
    return this.firstNameFormControl.hasError('required') ? 'You must enter a value' :
        this.firstNameFormControl.hasError('firstName') ? 'Not a valid name' : '';
}

getLastNameErrorMessage() {
  return this.lastNameFormControl.hasError('required') ? 'You must enter a value' :
      this.lastNameFormControl.hasError('lastName') ? 'Not a valid name' : '';
}
/**
//email = new FormControl('', [Validators.required, Validators.email]);
emailGetErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
}
 */
onSubmit(newUser:User){
    this.newUser = new User(0,"","","","","");
}

resetForm(){
  //this.firstFormGroup.reset();
  this.stepper.next();
}

resetFormAndProceed(){
  //this.resetForm();
  this.users = new Array<User>();
  this.stepper.next();
}

addMainUserToPromiseVerseList(){

  var flag = this.checkForDuplicates(this.firstFormGroup.value.firstName,
                                          this.firstFormGroup.value.lastName);

  var firstName = this.firstFormGroup.value.firstName;
  var lastName = this.firstFormGroup.value.lastName;

  if (!flag && firstName != null && firstName != "" && lastName != null && lastName != "") {
    this.users.push({
      //id: Math.floor(Math.random() * 100),
      id: (this.users.length+1),
      firstName: this.firstFormGroup.value.firstName,
      lastName: this.firstFormGroup.value.lastName,
      email: this.firstFormGroup.value.email,
      promiseVerse: '',
      imgSrc: ''
      //promiseVerse: this.userProfileService.revealPromiseVerse(this.selectedLanguage)
    });
  }
  this.loadUsers();
  //console.log('inside revealPromiseVerse status:'+ +this.firstFormGroup.invalid);
  this.stepper.next();
}

revealPromiseVerse(){
      //console.log('inside revealPromiseVerse status:'+ +this.firstFormGroup.invalid);
      var verses = this.userProfileService.generateRandomVerses(this.users.length, this.selectedLanguage);
      var imgSrcs = this.userProfileService.generateRandomImages(this.users.length);
      JSON.stringify('Stringify version of Vers:'+verses);

      for (let i = 0; i < this.users.length; i++) {
          this.users[i].promiseVerse = verses[i].text;
          this.users[i].imgSrc = imgSrcs[i];
          console.log('Verse'+ imgSrcs[i]);
      }
      this.stepper.next();
  }


}
