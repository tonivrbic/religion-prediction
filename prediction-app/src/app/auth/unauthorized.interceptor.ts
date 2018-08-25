import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, concat } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedInterceptor implements HttpInterceptor {
  unauthorizedRequests = 0;
  constructor(
    private authService: AngularFireAuth,
    private dialog: MatDialog
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return (
      this.authService.idToken // Get the latest token from the auth service.
        // Map the token to a request with the right header set.
        .pipe(
          map(token =>
            request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            })
          ),
          // Execute the request on the server.
          concatMap(authReq => next.handle(authReq)),
          // Catch the 401 and handle it by refreshing the token and restarting the chain
          // (where a new subscription to this.auth.token will get the latest token).
          catchError((err, restart) => {
            // If the request is unauthorized, try refreshing the token before restarting.
            if (
              err instanceof HttpErrorResponse &&
              err.status === 401 &&
              this.unauthorizedRequests < 2
            ) {
              this.unauthorizedRequests++;
              return concat(this.authService.idToken, restart);
            }

            this.unauthorizedRequests = 0;
            throw err;
          })
        )
    );
  }
}
