const assert= require('assert');


describe("should return new event title", function() {
    describe("individual test", function () {
        it('shouldReturnNewEventTitle', function() {
                var eventTest = new Event("Meeting", "HNA", "March", "1", "9:00am", "10:00am");

                eventTest.setEventTitle("Play");
                var actual = eventTest.getEventTitle();
                var expected = "Play";

                expect(actual).is(expected);
            });
    });
});
