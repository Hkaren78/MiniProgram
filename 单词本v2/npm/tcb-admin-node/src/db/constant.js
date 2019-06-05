Object.defineProperty(exports, "__esModule", {
    value: true
});

var ErrorCode;

(function(ErrorCode) {
    ErrorCode["DocIDError"] = "文档ID不合法";
    ErrorCode["CollNameError"] = "集合名称不合法";
    ErrorCode["OpStrError"] = "操作符不合法";
    ErrorCode["DirectionError"] = "排序字符不合法";
    ErrorCode["IntergerError"] = "must be integer";
})(ErrorCode || (ErrorCode = {}));

exports.ErrorCode = ErrorCode;

const FieldType = {
    String: "String",
    Number: "Number",
    Object: "Object",
    Array: "Array",
    Boolean: "Boolean",
    Null: "Null",
    GeoPoint: "GeoPoint",
    Timestamp: "Date",
    Command: "Command",
    ServerDate: "ServerDate"
};

exports.FieldType = FieldType;

const OrderDirectionList = [ "desc", "asc" ];

exports.OrderDirectionList = OrderDirectionList;

const WhereFilterOpList = [ "<", "<=", "==", ">=", ">" ];

exports.WhereFilterOpList = WhereFilterOpList;

var Opeartor;

(function(Opeartor) {
    Opeartor["lt"] = "<";
    Opeartor["gt"] = ">";
    Opeartor["lte"] = "<=";
    Opeartor["gte"] = ">=";
    Opeartor["eq"] = "==";
})(Opeartor || (Opeartor = {}));

exports.Opeartor = Opeartor;

const OperatorMap = {
    [Opeartor.eq]: "$eq",
    [Opeartor.lt]: "$lt",
    [Opeartor.lte]: "$lte",
    [Opeartor.gt]: "$gt",
    [Opeartor.gte]: "$gte"
};

exports.OperatorMap = OperatorMap;

const UpdateOperatorList = [ "$set", "$inc", "$mul", "$unset", "$push", "$pop", "$unshift", "$shift", "$currentDate", "$each", "$position" ];

exports.UpdateOperatorList = UpdateOperatorList;