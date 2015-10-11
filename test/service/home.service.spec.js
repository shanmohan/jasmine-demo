/**
 * Created by Mohanachandran on 10/7/2015.
 */

describe('Home Service', function(){

    var service, http;

    beforeEach(module('demoJasmine'));

    beforeEach(inject(function(HomeService, $httpBackend){
        service = HomeService;
        http = $httpBackend
    }));

    it('Should have a home service', function(){
        expect(service).toBeDefined();
    })

    it('Should have an init() method', function(){
        expect(service.init).toBeDefined();
    });

    it('Should have zero records when listofAirports is initalized', function(){
        service.init();
        expect(service.listOfAirports.length).toBe(0);
    })

    it('Should have an getAirportts() method', function(){
        expect(service.getAirports).toBeDefined();
    })

    it('Should have an getAirportts() method', function(done){

        var mockedAirports = [{"name" : "Mocked Airport"}];

        http.whenGET('json/airports.json').respond(mockedAirports);

        var promise= service.getAirports();

        promise.then(function(response){
            expect(response.data.length).toBe(1);
            done();
        })


        http.flush();

    })



})