import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DragDropModule} from 'primeng/dragdrop';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';

import { SetZindexItemService } from './services/set-zindex-item.service';
import { GetRandomItemService } from './services/get-random-item.service';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InputTextComponent } from './card/input-text/input-text.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ShowBlocksComponent } from './show-blocks/show-blocks.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { DirectiveComponent } from './directive/directive.component';
import { ChangeColorDirective } from './directive/change-color.directive';

const appRoutes: Routes =[
  { path: '', component: StartPageComponent},
  { path: 'Card-Component', component: CardComponent},
  { path: 'ShowBlocks-Component', component: ShowBlocksComponent},
  { path: 'TodoList-Component', component: TodoListComponent},
  { path: 'TodoList-Component', component: ModalWindowComponent},
  { path: 'ModalWindow-Component', component: ModalWindowComponent},
  { path: 'Directive-Component', component: DirectiveComponent},
  { path: '**', component: StartPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputTextComponent,
    StartPageComponent,
    ShowBlocksComponent,
    TodoListComponent,
    ModalWindowComponent,
    DirectiveComponent,
    ChangeColorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ButtonModule,
    MessagesModule,
    MessageModule,
    DragDropModule,
    ToggleButtonModule,
    CheckboxModule,
    TableModule,
    DialogModule
  ],
  providers: [SetZindexItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
