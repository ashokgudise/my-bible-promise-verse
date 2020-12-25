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


  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild('stepper') stepper: MatStepper;

  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog, public snackBar: MatSnackBar) {
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
              lastName: null }
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
      this.loadUsers();
      this.dataSourceAddUser = new MatTableDataSource();

      // https://bitcom.systems/blog/reactive-forms-in-angular

      this.firstFormGroup = this._formBuilder.group({
        id: 0,
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [,{validators: [Validators.required, Validators.email]}],
        includeFamily:  false,
        friendsAndFamily: this._formBuilder.array([
          this.createMember()
        ])
        //friendsAndFamily: this._formBuilder.array([ this.createMember() ])
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
      this.isLoaded = true;
      /**
      this.serv.getUsers().subscribe((data: User[]) => {
          this.users = data;
          this.users.sort(function (obj1, obj2) {
              // Descending: first id less than the previous
              return obj2.id - obj1.id;
          });
          this.isLoaded = false;
          this.dataSourceUsers = new MatTableDataSource(this.users);
          this.dataSourceAddUser = new MatTableDataSource(this.addNewUser);
          this.dataSourceUsers.sort = this.sort;
          this.dataSourceUsers.paginator = this.paginator;
      },
          error => {
              alert("Error: " + error.name);
              this.isLoaded = false;
          }
      );
       */

      this.dataSourceUsers = new MatTableDataSource(this.users);
      this.dataSourceAddUser = new MatTableDataSource(this.addNewUser);
      this.dataSourceUsers.sort = this.sort;
      this.dataSourceUsers.paginator = this.paginator;
  }

  deleteUserForDialog(user: User) {
        /**
         this.serv.deleteUser(user.id).subscribe(data => {
        this.statusMessage = 'User ' + user.firstName+' '+user.lastName + ' is deleted',
        this.openSnackBar(this.statusMessage, "Success");
        **/
        this.loadUsers();
    //}
    //)
}

editUser(user: User) {
  /**
    this.serv.updateUser(user.id, user).subscribe(data => {
        this.statusMessage = 'User ' + user.firstName + ''+user.lastName +' is updated',
        this.openSnackBar(this.statusMessage, "Success");
        this.loadUsers();
    },
        error => {
            this.openSnackBar(error.statusText, "Error");
        }
    );
     */
    this.loadUsers();
}

saveUser(user: User) {
    if (user.firstName != null && user.firstName != "" && user.lastName != null && user.lastName != "") {
      /**
      this.serv.createUser(user).subscribe(data => {
            this.statusMessage = 'User ' + user.firstName + ' '+user.lastName+' is added',
            this.showTable = false;
            this.openSnackBar(this.statusMessage, "Success");
            this.loadUsers();
        },
            error => {
                this.showTable = false;
                this.openSnackBar(error.statusText, "Error");
            }
        );
         */
        this.loadUsers();
    }
    else {
        this.openSnackBar("Please enter correct data", "Error")
    }
}

show() {
    this.showTable = true;
    this.addNewUser = [{ id: 0, firstName: null,  email: null, lastName: null }];
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
    this.newUser = new User(0,"","","");
}

revealPromiseVerse(){
  console.log('inside revealPromiseVerse status:'+ +this.firstFormGroup.invalid);

  this.stepper.next();
}

}
