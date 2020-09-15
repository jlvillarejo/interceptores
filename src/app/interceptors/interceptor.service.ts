import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
        'token-usuario': 'KEIS88DO8SD832398HK7EKJH726263883SIE'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone ).pipe(
      catchError( this.manejaError )
    );
  }


  manejaError( error: HttpErrorResponse) {

    console.log('Se ha producido un error en la llamada');
    console.log('Registrado en el AppLog');
    console.warn(error);

    return throwError('Error personalizado');
  }

}
