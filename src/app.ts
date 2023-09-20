import { PLATFORM } from 'aurelia-pal';
import {RouterConfiguration, Router} from 'aurelia-router';
  
  export class App {
    router: Router;
    startId=1;
    configureRouter(config: RouterConfiguration, router: Router): void {
      this.router = router;
      config.title = 'Aurelia';
      config.map([
        { route: '', name: 'index', redirect:"user/1" },
        { route: 'user/:id', name: 'user', moduleId: PLATFORM.moduleName('user/user') }
      ]);
    }
    navigate(){
      //this.router.navigate(`user/${++this.startId}`,{replace:false,trigger:false});
      this.router.navigateToRoute("user",{id:(++this.startId)},{replace:false,trigger:false})
    }
  }
