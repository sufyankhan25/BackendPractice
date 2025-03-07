class apiResponse {
  constructor(statusCode, message="success", data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.sucess = statusCode < 400;
  }
}


