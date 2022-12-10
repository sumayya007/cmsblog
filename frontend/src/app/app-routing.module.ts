import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreateCategoryComponent } from './admin-create-category/admin-create-category.component';
import { AdminEditCategoryComponent } from './admin-edit-category/admin-edit-category.component';
import { AdminEditSettingsComponent } from './admin-edit-settings/admin-edit-settings.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminViewCategoriesComponent } from './admin-view-categories/admin-view-categories.component';
import { AdminViewPostsComponent } from './admin-view-posts/admin-view-posts.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { SuperadminAddAdminComponent } from './superadmin-add-admin/superadmin-add-admin.component';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { SuperadminLoginComponent } from './superadmin-login/superadmin-login.component';
import { SuperadminViewAdminsComponent } from './superadmin-view-admins/superadmin-view-admins.component';
import { SuperadminViewCategoriesComponent } from './superadmin-view-categories/superadmin-view-categories.component';
import { SuperadminViewPostsComponent } from './superadmin-view-posts/superadmin-view-posts.component';
import { SuperadminViewUsersComponent } from './superadmin-view-users/superadmin-view-users.component';
import { SuperadminheaderComponent } from './superadminheader/superadminheader.component';
import { SuperadminpanelComponent } from './superadminpanel/superadminpanel.component';
import { UserCreatePostComponent } from './user-create-post/user-create-post.component';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';

import { UserEditSettingsComponent } from './user-edit-settings/user-edit-settings.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';




const routes: Routes = [
  {
    path:'landingpage',
    component:LandingpageComponent
  },
  {
    path:'user-home',
    component:UserHomeComponent
  },
  {
    path:'user-register',
    component:UserRegisterComponent
  },
  {
    path:'user-login',
    component:UserLoginComponent
  },
  {
    path:'user-create-post',
    component:UserCreatePostComponent
  },
  {
    path:'user-edit-settings',
    component:UserEditSettingsComponent
  },
  {
    path:'user-edit-page',
    component:UserEditPageComponent
  },
   {
    path:'user-settings',
    component:UserSettingsComponent
  },
  {
    path:'admin-settings',
    component:AdminSettingsComponent
  },
  {
    path:'admin-edit-settings',
    component:AdminEditSettingsComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
  {
    path:'admin-login',
    component:AdminLoginComponent
  },
  {
    path:'admin-home',
    component:AdminHomeComponent
  },
  {
    path:'admin-view-users',
    component:AdminViewUsersComponent
  },
  {
    path:'admin-create-category',
    component:AdminCreateCategoryComponent
  },
  {
    path:'admin-edit-category',
    component:AdminEditCategoryComponent
  },
  {
    path:'admin-view-categories',
    component:AdminViewCategoriesComponent
  },
  {
    path:'admin-view-posts',
    component:AdminViewPostsComponent
  },
  {
    path:'adminpanel',
    component:AdminpanelComponent
  },
  {
    path:'superadmin-login',
    component:SuperadminLoginComponent
  },
  {
    path:'superadminpanel',
    component:SuperadminpanelComponent
  },
  {
    path:'superadmin-home',
    component:SuperadminHomeComponent
  },
  {
    path:'superadmin-view-admins',
    component:SuperadminViewAdminsComponent
  },
  {
    path:'superadmin-view-categories',
    component:SuperadminViewCategoriesComponent
  },
  {
    path:'superadmin-view-posts',
    component:SuperadminViewPostsComponent
  },
  {
    path:'superadmin-view-users',
    component:SuperadminViewUsersComponent
  },
  {
    path:'superadmin-add-admin',
    component:SuperadminAddAdminComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'mainheader',
    component:MainheaderComponent
  },
  {
    path:'superadminheader',
    component:SuperadminheaderComponent
  },
  {
    path:'singlepage',
    component:SinglepageComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'fileupload',
    component:FileuploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
