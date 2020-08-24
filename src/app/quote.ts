export class Quote {
// author: string;
// quote: string;
// description: string;

showDescription: boolean;
  constructor(public author: string,public quote: string,public description: string, public completeDate: Date){
    this.showDescription=false;

}
}