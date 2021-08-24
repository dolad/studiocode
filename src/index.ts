var express = require('express');
import {FareServices} from './services/FareServices';
var app = express();
app.get('/get-trip-result', function (req:any, res:any) {
    const initialBalance = 3000;
    const trip1 = new FareServices(3000);
    const {balance} = trip1.takeTrip("Abuja", "Moon", "Falcon9");
    const trip2 = new FareServices(balance);
    const {balance : bal} = trip2.takeTrip("Moon","Spock","Falcon1")
    const trip3 = new FareServices(bal);
    const {balance: bal2} = trip3.takeTrip("Spock", "International Space Station", "Falcon9")
  res.send({
      initialBalance:`${initialBalance}BTC`,
      balanceAfterFirstTrip:`${balance}BTC`,
      balanceAfterSecondTrip:`${bal}BTC`,
      balanceAfterThreeTrip:`${bal2}BTC`
  });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});