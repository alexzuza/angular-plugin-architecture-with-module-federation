import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface PluginsConfig {
  [key: string]: {
    mfEntry: string;
    name: string;
    exposedModule: string;
    ngModuleName: string;
  };
}

@Injectable()
export class PluginsConfigProvider {
  config: PluginsConfig;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<PluginsConfig> {
    return this.http.get<PluginsConfig>(`/assets/plugins-config.json`).pipe(
      tap(config => this.config = config)
    ).toPromise();
  }
}
