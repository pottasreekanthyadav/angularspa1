import {Injectable} from '@angular/core'
import {CanActivate,CanDeactivate,CanActivateChild} from '@angular/router'
import {PagetwoComponent} from './pagetwo/pagetwo.component'
@Injectable()
export class AuthService implements CanActivate,CanActivateChild,CanDeactivate<PagetwoComponent>{
    canActivate():boolean{
        return confirm("r u enter page two")
    }

canDeactivate():boolean{
    return confirm("do u want to leave pagetwo")
}
canActivateChild():boolean{
    return confirm("do u want to enter into PAGEONE")
}
}