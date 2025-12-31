import { InjectionToken } from "@angular/core";

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
