describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('#temperature', function() {

    it('default temperature 20', function() {
      expect(thermostat.currentTemperature()).toEqual(20);
    });

    it('temperature up increase temperature by 1', function(){
      thermostat.increaseTemperature()
      expect(thermostat.currentTemperature()).toEqual(21);
    })

    it('thermostat down decrease temperature by 1', function(){
      thermostat.decreaseTemperature()
      expect(thermostat.currentTemperature()).toEqual(19);
    })
});
});