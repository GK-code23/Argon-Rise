import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { MypageComponent } from 'src/app/pages/mypage/mypage.component';
import { QuestionsComponent } from 'src/app/pages/questions/questions.component';
import {UploaderComponent} from 'src/app/pages/uploader_Task/uploader/uploader.component'
import {FileListComponent} from 'src/app/pages/file-list/file-list.component'
import { QuestionListComponent } from 'src/app/pages/question-list/question-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'question_list',           component: QuestionListComponent},
    { path: 'Files',           component: FileListComponent},
    { path: 'storage',         component: UploaderComponent},
    { path: 'questions',      component: QuestionsComponent },
];
