// import {
//   Compiler,
//   CompilerFactory,
//   COMPILER_OPTIONS,
//   NgModule,
// } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
// import { ProductCategoryComponent } from './product-category.component';
// import { CartComponent } from './cart.component';
// import { AppComponent } from './app.component'; // Import standalone component

// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ProductCategoryComponent,
//     AppComponent, // Import AppComponent as well
//   ],
//   declarations: [CartComponent], // AppComponent is no longer declared here
//   bootstrap: [AppComponent], // Bootstrapping AppComponent
//   providers: [
//     { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
//     {
//       provide: CompilerFactory,
//       useClass: JitCompilerFactory,
//       deps: [COMPILER_OPTIONS],
//     },
//     { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
//   ],
// })
// export class AppModule {}

// export function createCompiler(compilerFactory: CompilerFactory) {
//   return compilerFactory.createCompiler();
// }


import { Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component'; // Import AppComponent here
import { ProductCategoryComponent } from './product-category.component'; // Import standalone components
import { CartComponent } from './cart.component'; // Import standalone components

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent, // Import AppComponent here
    ProductCategoryComponent, // Import ProductCategoryComponent here
    CartComponent,
    FormsModule,  // Import CartComponent here
  ],
  bootstrap: [AppComponent], // Bootstrapping AppComponent
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS],
    },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
  ],
})
export class AppModule {}

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
