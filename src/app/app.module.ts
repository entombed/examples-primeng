import { BrowserModule } from '@angular/platform-browser';
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

import { SetZindexItemService } from './services/set-zindex-item.service';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InputTextComponent } from './card/input-text/input-text.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ShowBlocksComponent } from './show-blocks/show-blocks.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const appRoutes: Routes =[
  { path: '', component: StartPageComponent},
  { path: 'Card-Component', component: CardComponent},
  { path: 'ShowBlocks-Component', component: ShowBlocksComponent},
  { path: 'TodoList-Component', component: TodoListComponent},
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
  ],
  imports: [
    BrowserModule,
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
    TableModule
  ],
  providers: [SetZindexItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
