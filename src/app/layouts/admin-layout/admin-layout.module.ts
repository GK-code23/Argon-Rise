import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MypageComponent } from 'src/app/pages/mypage/mypage.component';
import { QuestionsComponent } from 'src/app/pages/questions/questions.component';
import {UploaderComponent} from 'src/app/pages/uploader_Task/uploader/uploader.component'
import {UploadTaskComponent} from 'src/app/pages/uploader_Task/upload-task/upload-task.component'
import { FileListComponent } from 'src/app/pages/file-list/file-list.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    MypageComponent,
    QuestionsComponent,
    UploadTaskComponent,
    UploaderComponent,
    FileListComponent
  ]
})

export class AdminLayoutModule {}
