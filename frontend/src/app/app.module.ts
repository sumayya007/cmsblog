import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserCreatePostComponent } from './user-create-post/user-create-post.component';



import { AdminCreateCategoryComponent } from './admin-create-category/admin-create-category.component';
import { AdminViewPostsComponent } from './admin-view-posts/admin-view-posts.component';
import { AdminViewCategoriesComponent } from './admin-view-categories/admin-view-categories.component';
import { AdminEditCategoryComponent } from './admin-edit-category/admin-edit-category.component';
import { SuperadminViewAdminsComponent } from './superadmin-view-admins/superadmin-view-admins.component';
import { SuperadminViewPostsComponent } from './superadmin-view-posts/superadmin-view-posts.component';
import { SuperadminViewCategoriesComponent } from './superadmin-view-categories/superadmin-view-categories.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { UserHomeComponent } from './user-home/user-home.component';


import { SidebarComponent } from './sidebar/sidebar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthServiceService } from './auth-service.service';
import { UserEditSettingsComponent } from './user-edit-settings/user-edit-settings.component';

import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { SuperadminLoginComponent } from './superadmin-login/superadmin-login.component';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { SuperadminViewUsersComponent } from './superadmin-view-users/superadmin-view-users.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminEditSettingsComponent } from './admin-edit-settings/admin-edit-settings.component';
import { SuperadminpanelComponent } from './superadminpanel/superadminpanel.component';
import { SuperadminheaderComponent } from './superadminheader/superadminheader.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

import { SuperadminAddAdminComponent } from './superadmin-add-admin/superadmin-add-admin.component';
import { AdminCreatePostComponent } from './admin-create-post/admin-create-post.component';
import { AdminEditPostComponent } from './admin-edit-post/admin-edit-post.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MaincontactComponent } from './maincontact/maincontact.component';
import { MainaboutComponent } from './mainabout/mainabout.component';


@NgModule({
  declarations: [
    AppComponent,
  
    UserLoginComponent,
    UserCreatePostComponent,
    
    
    AdminCreateCategoryComponent,
    AdminViewPostsComponent,
    AdminViewCategoriesComponent,
    AdminEditCategoryComponent,
    SuperadminViewAdminsComponent,
    SuperadminViewPostsComponent,
    SuperadminViewCategoriesComponent,
    AdminLoginComponent,
    HeaderComponent,
    FooterComponent,
    UserHomeComponent,
   
 
        SidebarComponent,
        UserSettingsComponent,
        UserRegisterComponent,
        SinglepageComponent,
        MainheaderComponent,
   LandingpageComponent,
   UserEditSettingsComponent,
  
   UserEditPageComponent,
      AdminHomeComponent,
      AdminViewUsersComponent,
      SuperadminLoginComponent,
      SuperadminHomeComponent,
      SuperadminViewUsersComponent,
      AdminpanelComponent,
      AdminHeaderComponent,
      AdminSettingsComponent,
      AdminEditSettingsComponent,
      SuperadminpanelComponent,
      SuperadminheaderComponent,
      FileuploadComponent,
    
      SuperadminAddAdminComponent,
           AdminCreatePostComponent,
           AdminEditPostComponent,
           AdminSidebarComponent,
           AboutComponent,
           ContactComponent,
           MaincontactComponent,
           MainaboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [UserServiceService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
