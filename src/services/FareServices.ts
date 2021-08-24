
const OrbitData = [
    {
        station:"Abuja",
        type:"Natural",
        orbit:"Earth"
    },
    {
        station:"Spock",
        type:"Natural",
        orbit:"Mars"
    },
    {
        station:"International Space Station",
        type:"Manmade",
        orbit:"Earth"
    },
    {
        station:"Moon",
        type:"Natural",
        orbit:"Earth"
    },
];


export class FareServices {
    private initialBalance : number;
    constructor(initialBalance : number  ){
        this.initialBalance = initialBalance;
    }
    public getBalance(): string {
        return `${this.initialBalance}BTC`
    }

    public checkLandingType(to:string){
        const toDetails = OrbitData.filter(item => item.station === to);
        return toDetails[0].type.toLowerCase() === "manmade" ?  200 : 0;
    }

    private checkTripType(from : string , to:string){
        const fromDetails = OrbitData.filter(item => item.station === from);
        const toDetails = OrbitData.filter(item => item.station === to);
        return fromDetails[0].orbit !== toDetails[0].orbit ? 250 : 50;
    }

    public checkRocketType(rocketType: string, price: number){
       return rocketType.toLowerCase() === 'falcon9' ? price * 2 : price; 
    }

    public takeTrip(from:string, to:string, rocketType:string): any {
        const rocketTypePrice = this.checkRocketType(rocketType, this.checkTripType(from, to));
        const landingFee =  this.checkLandingType(to);
        const fare = rocketTypePrice + landingFee;
        this.initialBalance = this.initialBalance - fare;
        return {
            fare,
            balance:this.initialBalance
        };
    }
}