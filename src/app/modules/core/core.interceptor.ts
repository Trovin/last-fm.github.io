import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {

  key = '357c435e2af7122a237cd4afc830922f';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes('http://ws.audioscrobbler.com')) {

      const paramReq = request.clone({
        params: request.params.append('api_key', this.key)
      });

      return next.handle(paramReq);
    } else {
      return next.handle(request);
    }

  }
}
