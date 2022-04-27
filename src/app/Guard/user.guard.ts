import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  status:boolean=false;
  constructor(private authservice: AuthService, private router:Router ){
    this.authservice.getMsg().subscribe((res:any)=>{
      this.status=res.status;
      
    })
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = localStorage.getItem('token');
      

      console.log(this.status+"from guard");
      if(token==null)
         {
           this.router.navigate(['home']);
           return false;
         }
      else
      {
        console.log('look after or before');
          return true;
      }


  }
  
}

// behaveourSubject
// finalInspectorDetails$ = new BehaviorSubject<any>(null);
// Saniuzzaman Robin11:05 AM
// this.casesService.finalInspectorDetails$.next(true);
// this.casesService.finalInspectorDetails$.subscribe()
// RUET Industrial Attachment - Morning Up