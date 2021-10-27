export class LoggingService{
    i: number = 0;

    logS(mStatus: string){
        console.log("new status: " + mStatus + "| log Id: " + this.i);
        this.i += 1;
    }
}