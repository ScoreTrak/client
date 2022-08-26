// source: scoretrak/report/v1/report.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require("google-protobuf");
var goog = jspb;
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return Function("return this")();
}.call(null);

var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb.js");
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol("proto.scoretrak.report.v1.GetRequest", null, global);
goog.exportSymbol("proto.scoretrak.report.v1.GetResponse", null, global);
goog.exportSymbol("proto.scoretrak.report.v1.Report", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.scoretrak.report.v1.Report = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.scoretrak.report.v1.Report, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.scoretrak.report.v1.Report.displayName =
    "proto.scoretrak.report.v1.Report";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.scoretrak.report.v1.GetRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.scoretrak.report.v1.GetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.scoretrak.report.v1.GetRequest.displayName =
    "proto.scoretrak.report.v1.GetRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.scoretrak.report.v1.GetResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.scoretrak.report.v1.GetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.scoretrak.report.v1.GetResponse.displayName =
    "proto.scoretrak.report.v1.GetResponse";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.scoretrak.report.v1.Report.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.scoretrak.report.v1.Report.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.scoretrak.report.v1.Report} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.scoretrak.report.v1.Report.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        cache: jspb.Message.getFieldWithDefault(msg, 2, ""),
        updatedAt:
          (f = msg.getUpdatedAt()) &&
          google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.scoretrak.report.v1.Report}
 */
proto.scoretrak.report.v1.Report.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.scoretrak.report.v1.Report();
  return proto.scoretrak.report.v1.Report.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.scoretrak.report.v1.Report} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.scoretrak.report.v1.Report}
 */
proto.scoretrak.report.v1.Report.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setCache(value);
        break;
      case 3:
        var value = new google_protobuf_timestamp_pb.Timestamp();
        reader.readMessage(
          value,
          google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader
        );
        msg.setUpdatedAt(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.scoretrak.report.v1.Report.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.scoretrak.report.v1.Report.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.scoretrak.report.v1.Report} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.scoretrak.report.v1.Report.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getCache();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};

/**
 * optional string cache = 2;
 * @return {string}
 */
proto.scoretrak.report.v1.Report.prototype.getCache = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.scoretrak.report.v1.Report} returns this
 */
proto.scoretrak.report.v1.Report.prototype.setCache = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.scoretrak.report.v1.Report.prototype.getUpdatedAt = function () {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(
      this,
      google_protobuf_timestamp_pb.Timestamp,
      3
    )
  );
};

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.scoretrak.report.v1.Report} returns this
 */
proto.scoretrak.report.v1.Report.prototype.setUpdatedAt = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.scoretrak.report.v1.Report} returns this
 */
proto.scoretrak.report.v1.Report.prototype.clearUpdatedAt = function () {
  return this.setUpdatedAt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.scoretrak.report.v1.Report.prototype.hasUpdatedAt = function () {
  return jspb.Message.getField(this, 3) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.scoretrak.report.v1.GetRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.scoretrak.report.v1.GetRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.scoretrak.report.v1.GetRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.scoretrak.report.v1.GetRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.scoretrak.report.v1.GetRequest}
 */
proto.scoretrak.report.v1.GetRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.scoretrak.report.v1.GetRequest();
  return proto.scoretrak.report.v1.GetRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.scoretrak.report.v1.GetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.scoretrak.report.v1.GetRequest}
 */
proto.scoretrak.report.v1.GetRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.scoretrak.report.v1.GetRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.scoretrak.report.v1.GetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.scoretrak.report.v1.GetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.scoretrak.report.v1.GetRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.scoretrak.report.v1.GetResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.scoretrak.report.v1.GetResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.scoretrak.report.v1.GetResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.scoretrak.report.v1.GetResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        report:
          (f = msg.getReport()) &&
          proto.scoretrak.report.v1.Report.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.scoretrak.report.v1.GetResponse}
 */
proto.scoretrak.report.v1.GetResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.scoretrak.report.v1.GetResponse();
  return proto.scoretrak.report.v1.GetResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.scoretrak.report.v1.GetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.scoretrak.report.v1.GetResponse}
 */
proto.scoretrak.report.v1.GetResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.scoretrak.report.v1.Report();
        reader.readMessage(
          value,
          proto.scoretrak.report.v1.Report.deserializeBinaryFromReader
        );
        msg.setReport(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.scoretrak.report.v1.GetResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.scoretrak.report.v1.GetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.scoretrak.report.v1.GetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.scoretrak.report.v1.GetResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.scoretrak.report.v1.Report.serializeBinaryToWriter
    );
  }
};

/**
 * optional Report report = 1;
 * @return {?proto.scoretrak.report.v1.Report}
 */
proto.scoretrak.report.v1.GetResponse.prototype.getReport = function () {
  return /** @type{?proto.scoretrak.report.v1.Report} */ (
    jspb.Message.getWrapperField(this, proto.scoretrak.report.v1.Report, 1)
  );
};

/**
 * @param {?proto.scoretrak.report.v1.Report|undefined} value
 * @return {!proto.scoretrak.report.v1.GetResponse} returns this
 */
proto.scoretrak.report.v1.GetResponse.prototype.setReport = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.scoretrak.report.v1.GetResponse} returns this
 */
proto.scoretrak.report.v1.GetResponse.prototype.clearReport = function () {
  return this.setReport(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.scoretrak.report.v1.GetResponse.prototype.hasReport = function () {
  return jspb.Message.getField(this, 1) != null;
};

goog.object.extend(exports, proto.scoretrak.report.v1);
