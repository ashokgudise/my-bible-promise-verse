import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'promise-verse';

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(private dialog: MatDialog,
          private notification: NotificationService) {}

  ngAfterViewInit(){
   // this.openDialog('primary');
  }

  openDialog(themeColor: 'primary' | 'accent' | 'warn'): void {

    var title = 'Greetings, in the name of our Precious Lord Jesus!';
    var header = 'Welcome';
    var content = 'Thank you for visiting us, please take a moment to pray to the lord, and get started.';
    
  }

  openNotification(): void {
    this.notification.default('Default Notification');
  }

}

