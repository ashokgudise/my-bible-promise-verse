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
  isOptional = true;

  languages: any[] = [
    {value: 'english', viewValue: 'English'},
    {value: 'telugu', viewValue: 'Telugu'},
  ];

  selectedLanguage = this.languages[0].value;
  selectLanguage(event: Event) {
    this.selectedLanguage = (event.target as HTMLSelectElement).value;
  }

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild('stepper') stepper: MatStepper;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private userProfileService: UserProfileService,private _formBuilder: FormBuilder, public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.users = new Array<User>();
  }

  submit(){
      console.log(this.firstFormGroup.value);
  }

  //
  @ViewChild(MatPaginator,  {static: true}) paginator: MatPaginator;

  addNewUser: User[] = [
      { id: 0,
          firstName: null,
            email: null,
              lastName: null ,
                promiseVerse: null}
  ];

    users: Array<User>;
    showTable: boolean;
    statusMessage: string;
    isLoaded: boolean = true;

    displayedColumnsUsers: string[] = ['id', 'FirstName', 'LastName',  'Change', 'Delete']; //['id', 'name', 'surname',  'email', 'Change', 'Delete'];
    displayedColumnsAddUser: string[] = ['FirstName', 'LastName',  'Save', 'Cancel']; //['Name', 'Surname', 'Age', 'Email', 'Save', 'Cancel'];

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
        email: [,{validators: [Validators.required, Validators.email]}],
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

    console.log('Update first name'+user.firstName);
    console.log('Update last name'+user.lastName);
    this.users = this.users.filter((value,key)=>{
      if(value.id == user.id){
        value.firstName = user.firstName;
        value.lastName = user.lastName;
      }
      return true;
    });
    this.loadUsers();
}

saveUser(user: User){
  if (user.firstName != null && user.firstName != "" && user.lastName != null && user.lastName != "") {
    var d = new Date();
    this.users.push({
      //id: Math.floor(Math.random() * 100),
      id: (this.users.length+1),
      firstName: user.firstName,
      lastName: user.lastName,
      email: '',
      promiseVerse: this.userProfileService.revealPromiseVerse()
    });
  }
  this.loadUsers();
}


show() {
    this.showTable = true;
    this.addNewUser = [{ id: 0, firstName: null,  email: null, lastName: null , promiseVerse: null}];
    this.dataSourceAddUser = new MatTableDataSource(this.addNewUser);
}
cancel() {
    this.showTable = false;
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
    this.newUser = new User(0,"","","","");
}

revealPromiseVerse(){
  this.users.push({
    //id: Math.floor(Math.random() * 100),
    id: (this.users.length+1),
    firstName: this.firstFormGroup.value.firstName,
    lastName: this.firstFormGroup.value.lastName,
    email: this.firstFormGroup.value.email,
    promiseVerse: this.userProfileService.revealPromiseVerse()
  });

  //console.log('inside revealPromiseVerse status:'+ +this.firstFormGroup.invalid);
  this.stepper.next();
}

}
