export class Quotes {
    public showDescription:boolean;
    constructor(public id:number,
                public name:string,
                public description:string,
                public submittedby:String,
                public upvote:number,
                public downvote:number,
                public completeDate:Date){
    this.showDescription=false
}
}