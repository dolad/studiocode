import {FareServices} from '../services/FareServices';

describe('FareServices', () => {
  it('should get load initial balance before trip', () => {
    const fareServices = new FareServices(3000);
    expect(fareServices.getBalance()).toEqual('3000BTC')
  });
  it('should get  balance after each trip', () => {
    const fareServices = new FareServices(3000);
    fareServices.takeTrip('Abuja', 'Moon', 'Falcon9')
    expect(fareServices.getBalance()).toEqual('2900BTC')
  });
  it('should ensure cost of falcon9 is twice that of falcon1', () => {
    const fareServices = new FareServices(3000);
    const price1 = fareServices.checkRocketType('falcon9', 200);
    const price2 = fareServices.checkRocketType('falcon1', 200)
    expect(price1).toEqual(price2 * 2);
  });
  it('should charges 250BTC for trip accros orbit on falcon9', () => {
    const fareServices = new FareServices(3000);
    const fare = fareServices.takeTrip('Moon', 'Spock', 'Falcon1');
    expect(fare.fare).toEqual(250);
  });
  it('should charges 200BTC royalty fee for landing on any manmade satelite with any rocket', () => {
    const fareServices = new FareServices(3000);
    const fare = fareServices.checkLandingType('International Space Station');
    expect(fare).toEqual(200);
  });
  it('should charges 50BTC  for journey between two point in an orbit on Falcon 1', () => {
    const fareServices = new FareServices(3000);
    const fare = fareServices.takeTrip('Abuja', 'Moon', 'Falcon1');
    expect(fare.fare).toEqual(50);
  });

})