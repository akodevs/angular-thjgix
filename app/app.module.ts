import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ PdfViewerModule, ToolbarModule, DialogModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
