type ClientErrorArgs = {
  message: string;
  statusCode: number;
  options?: ErrorOptions;
};

export class ClientError extends Error {
  public name: string;
  public statusCode: number;

  constructor({ message, statusCode, options }: ClientErrorArgs) {
    super(message, options);
    this.name = 'ClientError';
    this.statusCode = statusCode;
  }
}
