Object.defineProperty(exports, "__esModule", {
    value: true
});

const validate_1 = require("./../validate.js");

class Point {
    constructor(longitude, latitude) {
        validate_1.Validate.isGeopoint("latitude", latitude);
        validate_1.Validate.isGeopoint("longitude", longitude);
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

exports.Point = Point;