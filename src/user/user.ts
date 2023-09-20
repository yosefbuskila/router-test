import { ActivationStrategyType, activationStrategy } from "aurelia-router";

export class User {
  id: string;
  canDeactivate() {
    console.log("canDeactivate", this.id);
    //return this.id != "6" ||
      return new Promise(resolve => setTimeout(() => {
        resolve(false);
      }, 3000));
    // console.log("canDeactivate")
    // return false;
  }
  public determineActivationStrategy(): ActivationStrategyType {
    console.log("determineActivationStrategy")
    return activationStrategy.replace;
  }
  private async activate(params: { id: string }) {
    console.log("activate")
    this.id = params.id;
  }
  deactivate() {
    console.log("deactivate")
  }
  detached(): void {
    console.log("detached")
  }
}
