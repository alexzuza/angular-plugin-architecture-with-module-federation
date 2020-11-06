import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { SharedModule } from 'shared';
import { AppComponent } from './app.component';
import { PluginsConfigProvider } from './core/plugins-config.provider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule],
  providers: [
    PluginsConfigProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: (provider: PluginsConfigProvider) => () =>
        provider.loadConfig(),
      multi: true,
      deps: [PluginsConfigProvider]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
